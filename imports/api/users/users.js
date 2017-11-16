export const Users = new Mongo.Collection('_users');

UserSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	
	age: {
		type: Number,
		label: "Age"
	},
	
	energy_plan: {
		type: EnergyPlanSchema,
		label: "Energy Plan"
	},
		
	house: {
		type: HouseSchema,
		label: "House"
	},
	
	
	
});


Users.attachSchema( UserSchema );