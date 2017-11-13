import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/home_layout/HomeLayout.js';
import '../../ui/layouts/main_layout/MainLayout.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/guest/guest_menu.js';
import '../../ui/pages/guest/guest_houses.js';
import '../../ui/pages/guest/guest_house_info.js';
import '../../ui/pages/guest/guest_add_house.js';
import '../../ui/pages/guest/guest_energy_plan.js';
import '../../ui/pages/support/user_settings.js';
import '../../ui/pages/support/contacts.js';
import '../../ui/pages/owner/owner_signup.js';
import '../../ui/pages/owner/owner_menu.js';
import '../../ui/pages/owner/owner_houses.js';


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

FlowRouter.route('/guest/', {
  name: 'guest_menu',
  action() {
    BlazeLayout.render('MainLayout', { main: 'guest_menu' });
  },
});

FlowRouter.route('/guest/guest_houses', {
  name: 'guest_houses',
  action() {
    BlazeLayout.render('MainLayout', { main: 'guest_houses' });
  },
});

FlowRouter.route('/guest/guest_houses/guest_house_info', {
  name: 'guest_house_info',
  action() {
    BlazeLayout.render('MainLayout', { main: 'guest_house_info' });
  },
});

FlowRouter.route('/guest/guest_add_house', {
  name: 'guest_add_house',
  action() {
    BlazeLayout.render('MainLayout', { main: 'guest_add_house' });
  },
});

FlowRouter.route('/guest/guest_energy_plan', {
  name: 'guest_energy_plan',
  action() {
    BlazeLayout.render('MainLayout', { main: 'guest_energy_plan' });
  },
});

FlowRouter.route('/user_settings', {
  name: 'user_settings',
  action() {
    BlazeLayout.render('HomeLayout', { main: 'user_settings' });
  },
});

FlowRouter.route('/contacts', {
  name: 'contacts',
  action() {
    BlazeLayout.render('HomeLayout', { main: 'contacts' });
  },
});

FlowRouter.route('/owner_signup', {
  name: 'owner_signup',
  action() {
    BlazeLayout.render('MainLayout', { main: 'owner_signup' });
  },
});

FlowRouter.route('/owner', {
  name: 'owner_menu',
  action() {
    BlazeLayout.render('MainLayout', { main: 'owner_menu' });
  },
});

FlowRouter.route('/owner/owner_houses', {
  name: 'owner_houses',
  action() {
    BlazeLayout.render('MainLayout', { main: 'owner_houses ' });
  },
});