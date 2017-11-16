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
	
	subscriptionId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: "Subscription"
	},
		
	houseId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: "House"
	},
});

Users.attachSchema( UserSchema );