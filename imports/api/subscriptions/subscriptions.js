export const Subscriptions = new Mongo.Collection('subscriptions');

SubscriptionsSchema = new SimpleSchema({
	/*d_i: {
		type: Date,
		label: "Date Init"
	},
	d_e: {
		type: String,
		label: "Date End"
	},*/
	userId: {
		type: String,
		label: "User",
		regEx: SimpleSchema.RegEx.Id
	},
	houseId: {
		type: String,
		label: "House",
		regEx: SimpleSchema.RegEx.Id
	},
	energyPlanId: {
		type: String,
		label: "Energy Plan",
		regEx: SimpleSchema.RegEx.Id
	},
	lim: {
		type: Number,
		label: "Limit",
	}
});

Subscriptions.attachSchema( SubscriptionsSchema );
