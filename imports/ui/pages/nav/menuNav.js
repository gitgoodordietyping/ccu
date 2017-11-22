import './menuNav.html';

Template.menuNav.events({
	'click #toggle' (event, temp) {
		temp.$('#toggle').toggleClass('on');
		temp.$('#resize').toggleClass('active');
	},

	'click #resize' (event, temp) {
		temp.$('#toggle').toggleClass('on');
		temp.$('#resize').toggleClass('active');
	}
});

