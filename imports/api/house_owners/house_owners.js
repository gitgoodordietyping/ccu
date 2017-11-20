export const House_Owners = new Mongo.Collection('_house_owners');

House_OwnersSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	
	age: {
		type: Number,
		label: "Age"
	},
	
	ownerId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: "owner"
	},
});

House_Owners.attachSchema( House_OwnersSchema );