// Fill the DB with example data on startup
import { EnergyPlans } from '../../api/energy_plans/energy_plans.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // if the collection are empty
  if (EnergyPlans.find().count() === 0) {
    const data = [
      {
        name: 'Budget Pack',
        desc: 'For the Outside Traveller',
        price: 10.00,
        overprice: 1.00,
      },
      {
        name: 'Super Pack',
        desc: 'Premium Energy Experience',
        price: 50.00,
        overprice: 0.50,
      },
    ];

    data.forEach(energy_plan => EnergyPlans.insert(energy_plan));
  }
});
