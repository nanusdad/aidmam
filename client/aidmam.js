// Get Metrics collection
Meteor.subscribe("orgs");
Meteor.subscribe("activities");
Meteor.subscribe("press_articles");
Meteor.subscribe("slider_items");

// Send metrics on to HTML
Template.orgs_table.orgs = function() {
	return Orgs.find({}, {
		sort: {
			item: 1
		}
	});
};

Template.orgs_table.showTable = function() {
	return Session.get("currentPage") == 'orgs_table';
}

Template.gallery.rendered = function() {
	// TODO : Change this to jQuery 
	if (document.getElementById('links')) {
		document.getElementById('links').onclick = function(event) {
			event = event || window.event;
			var target = event.target || event.srcElement,
				link = target.src ? target.parentNode : target,
				options = {
					index: link,
					event: event
				},
				links = this.getElementsByTagName('a');
			blueimp.Gallery(links, options);
		}
	}
}


Template.about.showAbout = function() {
	return Session.get("currentPage") == 'about';
}

Template.main.showMain = function() {
	return Session.get("currentPage") == 'homePage';
}

Template.whatwedo.showWhatwedo = function() {
	return Session.get("currentPage") == 'whatwedo';
}

Template.whatwedo.activities = function() {
	return Activities.find({});	
}

Template.info.showInfo = function() {
	return Session.get("currentPage") == 'info';
}

Template.press.showPress = function() {
	return Session.get("currentPage") == 'press';
}

Template.press.press_articles = function() {
	return PressArticles.find({});	
}


Template.gallery.showGallery = function() {
	return Session.get("currentPage") == 'gallery';
}

Template.slider.slider_items = function() {
	return SliderItems.find({});	
}

Template.slider.rendered = function() {
	$(document).ready(function() {
		$(".carousel").carousel();
	});
}