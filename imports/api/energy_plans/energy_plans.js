export const EnergyPlans = new Mongo.Collection('energy_plans');

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
		type: Number,
		label: "Price",
		decimal: true
	},
	overprice: {
		type: Number,
		label: "Overprice",
		decimal: true
	}
});

EnergyPlans.attachSchema( EnergyPlanSchema );