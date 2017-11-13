import { Mongo } from 'meteor/mongo'

EnergyPlans = new Mongo.Collection('energy_plans');

EnergyPlanSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: {
		type: String,
		label: "Description"
	},
	price: {
		type: Double,
		label: "Price"

	},
	overprice: {
		type: Double,
		label: "Overprice"
	}
});

EnergyPlans.attachSchema( EnergyPlanSchema );