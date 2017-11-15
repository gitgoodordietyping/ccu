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
	
	//Depois de HouseSchema estar completo, type deve coincidir com o nome dado
	
	//house: {
	//	type: HouseSchema,
	//	label: "House"
	//},
	
	
	invited: { //verificar se -this- funciona 
		type: this,
		label: "Friend"
	},
	
	
});


Users.attachSchema( UserSchema );