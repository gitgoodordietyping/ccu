export const Subscriptions = new Mongo.Collection('subscriptions');

SubscriptionsSchema = new SimpleSchema({
	date_i: {
		type: Date,
		label: "Date Init"
	},
	date_e: {
		type: String,
		label: "Date End"
	},

	meter_i: {
		type: Number,
		label: "Meter Init"
	},

	meter_e: {
		type: Number,
		label: "Meter End"
	},

	consumption_c: {
		type: Number,
		label: "Current Consumption",
		autoValue: function() {
			return 0
		}
	},

	accountId: {
		type: String,
		label: "Account",
		regEx: SimpleSchema.RegEx.Id
	},

	houseId: {
		type: String,
		label: "House",
		regEx: SimpleSchema.RegEx.Id
	},

});

Subscriptions.attachSchema( SubscriptionsSchema );
