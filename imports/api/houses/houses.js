export const Houses = new Mongo.Collection('houses');

HouseSchema = new SimpleSchema({
	house_owner_ID: {
		type: String,
		label: "House Owner ID"
	},
	address: {
		type: String,
		label: "Address"
	},
	subscriptions_ID: {
		type: [String],
		label: "Subscriptions ID"
	}
});

Houses.attachSchema( HouseSchema );
