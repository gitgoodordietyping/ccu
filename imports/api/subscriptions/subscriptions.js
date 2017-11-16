export const Subscriptions = new Mongo.Collection('subscriptions');

SubscriptionSchema = new SimpleSchema({
	d_i: {
		type: Date,
		label: "Date_init"
	},
	d_e: {
		type: String,
		label: "Date_end"
	},
	uid: {
		type: Number,
		label: "User_id",
		decimal: False
	},
	hid: {
		type: Number,
		label: "House_id",
		decimal: False
	}

	pid: {
		type: Number,
		label: "Plan_id",
		decimal: False
	}
	lim: {
		type: Number,
		label: "Limit",
		decimal: False
	}
});

EnergyPlans.attachSchema( EnergyPlanSchema );
