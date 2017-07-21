import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//因為放在lib底下所以要告知是給client 若放在client底下可不用
if (Meteor.isClient) {
  BlazeLayout.setRoot('.root');
  FlowRouter.route('/', {
    action: () => {
      BlazeLayout.render('home');
    }
  });
  FlowRouter.route('/hello/:yourId', {
    action: (param) => {
      alert("Hello"+param.yourId);
      BlazeLayout.render('hello');
    }
  });
  FlowRouter.route('/info', {
    action: () => {
      BlazeLayout.render('info');
    }
  });

    FlowRouter.route('/joanna', {
    action: (param) => {
      BlazeLayout.render('joanna');
    }
  });
}