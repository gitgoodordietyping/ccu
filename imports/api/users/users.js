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
	
	accountId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: "Account"
	},
		
	housesId: {
		type: [String],
		regEx: SimpleSchema.RegEx.Id,
		label: "Houses"
	},
});

Users.attachSchema( UserSchema );