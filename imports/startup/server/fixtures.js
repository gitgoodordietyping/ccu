// Fill the DB with example data on startup
import { EnergyPlans } from '../../api/energy_plans/energy_plans.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // if the collection are empty
  if (EnergyPlans.find().count() === 0) {
    const data = [
      {
        name: 'Tourist Pack',
        desc: 'For the Outside Traveller',
        price: 10.00,
        energy: 10,
        overprice: 1.00,
        is_home: false
      },
      {
        name: 'Shared House',
        desc: 'Sharing Energy Experience',
        price: 40.00,
        energy: 50,
        overprice: 0.50,
        is_home: true
      },
    ];

    data.forEach(energy_plan => EnergyPlans.insert(energy_plan));
  }
});
