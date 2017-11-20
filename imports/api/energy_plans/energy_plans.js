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

	energy: {
		type: Number,
		label: "Energy"
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
	},

	is_home: {
		type: Boolean,
		label: "isHomePack"
	}
});

EnergyPlans.attachSchema( EnergyPlanSchema );