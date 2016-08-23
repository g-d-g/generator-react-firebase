<<<<<<< HEAD
import {Component} from 'react';

export default class RequireLogin extends Component {
  static onEnter(store) {
=======
import React, { Component, PropTypes } from 'react' //eslint-disable-line

export default class RequireLogin extends Component {
  static propTypes = {
    children: PropTypes.array
  }

  static onEnter (store) {
>>>>>>> master
    return (nextState, transition) => {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        transition.to('/');
      }
    };
  }

  render() {
    return this.props.children;
  }
}
