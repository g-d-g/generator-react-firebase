import React, { Component, PropTypes } from 'react'
import { toArray } from 'lodash'

// Components
import ProjectTile from '../components/ProjectTile/ProjectTile'
import NewProjectTile from '../components/NewProjectTile/NewProjectTile'
import NewProjectDialog from '../components/NewProjectDialog/NewProjectDialog'
import CircularProgress from 'material-ui/CircularProgress'

import classes from './ProjectsContainer.scss'

<% if (answers.includeRedux) { %>// redux/firebase
import { connect } from 'react-redux'
import { firebase, helpers } from 'redux-firebasev3'
const { pathToJS, dataToJS, isLoaded, isEmpty } = helpers

// Decorators
@firebase(
  ({ params }) =>
    ([
      `projects/${params.username}`,
      // TODO: Use population instead of loading whole usernames list
      // `projects/${params.username}#populate=collaborators:users`,
    ])
)
@connect(
  ({ firebase }, { params }) => ({
    projects: toArray(dataToJS(firebase, `projects/${params.username}`)),
    account: pathToJS(firebase, 'profile'),
    auth: pathToJS(firebase, 'auth')
  })
)<% } %>
export class Projects extends Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  <% if (answers.includeRedux) { %>static propTypes = {
    account: PropTypes.object,
    projects: PropTypes.array,
    firebase: PropTypes.object,
    auth: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object
  }<% } %>

  toggleModal = (name, project) => {
    let newState = {}
    newState[`${name}Modal`] = !this.state[`${name}Modal`]
    if (project) {
      newState.currentProject = project
    }
    this.setState(newState)
  }

  newSubmit = name =>
    this.props.firebase
      .child('projects')
      .push({ name, owner: this.props.account.username })
      .catch(err => {
        // TODO: Show Snackbar
        console.error('error creating new project', err)
      })

  deleteProject = ({ name }) =>
    this.props.firebase
      .remove(`projects/${name}`)

  // TODO: Open based on project info instead of route param
  openProject = project =>
    this.context.router.push(`/projects/${project.name}`)

  render () {
    // console.log('projects container render:', this.props)
    // TODO: Look into moving this into its own layer
    if (this.props.children) return this.props.children

    const { projects, account, params: { username }, firebase } = this.props
    const { newProjectModal, addCollabModal, currentProject } = this.state

    if (!isLoaded(projects)) {
      return (
        <div className={classes['progress']}>
          <CircularProgress />
        </div>
      )
    }

    // User has no projects and doesn't match logged in user
    if (isEmpty(projects) && account && username !== account.username) {
      return (
        <div className={classes['container']}>
          <div>This user has no projects</div>
        </div>
      )
    }

    const projectsList = projects.map((project, i) =>
      (
      <ProjectTile
        key={`${project.name}-Collab-${i}`}
        project={project}
        onCollabClick={this.collabClick}
        onAddCollabClick={() => this.toggleModal('addCollab', project)}
        onSelect={this.openProject}
        onDelete={this.deleteProject}
      />
      )
    )

    // If username doesn't match route then hide add project tile
    if (account && account.username === username) {
      projectsList.unshift((
        <NewProjectTile
          key='Project-New'
          onClick={() => this.toggleModal('newProject')}
        />
      ))
    }

    return (
      <div className={classes['container']}>
        {
          newProjectModal
          ? (
            <NewProjectDialog
              open={newProjectModal}
              onCreateClick={this.newSubmit}
              onRequestClose={() => this.toggleModal('newProject')}
            />
          ) : null
        }
        <div className={classes['tiles']}>
          {projectsList}
        </div>
      </div>
    )
  }
}
export default Projects
