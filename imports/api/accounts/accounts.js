export const Accounts = new Mongo.Collection('accounts');

AccountsSchema = new SimpleSchema({

	userId: {
		type: String,
		label: "User",
		regEx: SimpleSchema.RegEx.Id
	},

	subscriptionsId: {
		type: [String],
		label: "Subscriptions",
		regEx: SimpleSchema.RegEx.Id
	},

	balance_m: {
		type: Number,
		label: "Balance Money",
		decimal: true,
		autoValue: function() {
			return 0.00
		}
	},

	balance_e: {
		type: Number,
		label: "Balance Energy",
		autoValue: function() {
			return 0
		}
	},
	
	lim: {
		type: Number,
		label: "Limit",
		autoValue: function() {
			return 0
		}
	},

	energy_plan: {
		type: String,
		label: "Energy Plan",
		regEx: SimpleSchema.RegEx.Id
	}
});

Accounts.attachSchema( AccountsSchema );