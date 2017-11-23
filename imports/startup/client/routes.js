import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/home_layout/HomeLayout.js';
import '../../ui/layouts/main_layout/MainLayout.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/dashboard/dashboard.js';
import '../../ui/pages/energy_plan/energyPlanSelection.js';
import '../../ui/pages/energy_plan/goingAway.js';
import '../../ui/pages/payment/paymentSelection.js';
import '../../ui/pages/support/userSettings.js';
import '../../ui/pages/support/contacts.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout', { main: 'home' });
  },
});

FlowRouter.route('/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render('HomeLayout', { main: 'signup' });
  },
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render('MainLayout', { main: 'dashboard' });
  },
});

FlowRouter.route('/first_dashboard', {
  name: 'firstDashboard',
  action() {
    BlazeLayout.render('MainLayout', { main: 'firstDashboard' });
  },
});

FlowRouter.route('/energy_plan_selection', {
  name: 'energy_plan_selection',
  action() {
    BlazeLayout.render('MainLayout', { main: 'energyPlanSelection' });
  },
});

FlowRouter.route('/going_away', {
  name: 'going_away',
  action() {
    BlazeLayout.render('MainLayout', { main: 'goingAway' });
  },
});

FlowRouter.route('/payment_selection', {
  name: 'payment_selection',
  action() {
    BlazeLayout.render('MainLayout', { main: 'paymentSelection' });
  },
});

FlowRouter.route('/user_settings', {
  name: 'user_settings',
  action() {
    BlazeLayout.render('MainLayout', { main: 'userSettings' });
  },
});

FlowRouter.route('/contacts', {
  name: 'contacts',
  action() {
    BlazeLayout.render('MainLayout', { main: 'contacts' });
  },
});

