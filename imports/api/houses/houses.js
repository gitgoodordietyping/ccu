export const Houses = new Mongo.Collection('houses');

HouseSchema = new SimpleSchema({
	
	houseOwnerId: {
		type: String,
		regEx: SimpleSchema.RegEx.Id,
		label: "House Owner",
		autoValue: function() {
			return this.userId
		}
	},

	address: {
		type: String,
		label: "Address"
	},

	meter: {
		type: Number,
		label: "House Meter"
	},

	subscriptionsId: {
		type: [String],
		regEx: SimpleSchema.RegEx.Id,
		label: "Subscriptions ID"
	},

	referral: {
		type: String,
		label: "Referral"
	}
});

Houses.attachSchema( HouseSchema );
