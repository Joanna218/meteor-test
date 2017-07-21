import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.joanna.helpers({
  param: () => {
    return FlowRouter.getParam('id');
  },
  name: 'joanna',
  user: true,
  task: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});

Template.home.events({
  'click button'(event, instance) {
    FlowRouter.go('/hello');
    // increment the counter when button is clicked
    // instance.counter.set(instance.counter.get() + 1);
  },
});