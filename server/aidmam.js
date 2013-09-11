Meteor.startup(function() {
	// code to run on server at startup
	console.log('Started');
	if (Activities.find().count() == 0) {
		Activities.insert({
			"title": "Networking",
			"desc": "with like minded organizations and individuals focusing on dalit women issues"
		});
		Activities.insert({
			"title": "Monitoring",
			"desc": "of atrocities, government development and welfare schemes/policies"
		});
		Activities.insert({
			"title": "Advocacy",
			"desc": "on issues related to dalit women"
		});
		Activities.insert({
			"title": "Capacity Building Programmes",
			"desc": "on Dalit human rights, women rights, Caste System, Gender & Patriarchy, Monitoring, Gender Budget"
		});
		Activities.insert({
			"title": "Leadership Building",
			"desc": "through Fellowship to dalit women activists"
		});
	}

	if (PressArticles.find().count() == 0) {
		PressArticles.insert({
			"title": "Is the Haryana government covering up what killed the young Dalit girl in Jind?",
			"url": "http://www.firstpost.com/india/is-the-haryana-government-covering-up-what-killed-the-young-dalit-girl-in-jind-1080731.html?utm_source=ref_article",
			"source": "Firstpost India",
			"img_url": "http://www.firstpost.com/wp-content/uploads/2013/09/rape-no-rape-sign-reuters.jpg"
		});
		PressArticles.insert({
			"title": "Jind case: Counsel to move court to get post-mortem report",
			"url": "http://www.thehindu.com/news/national/other-states/jind-case-counsel-to-move-court-to-get-postmortem-report/article5082619.ece",
			"source": "The Hindu",
			"img_url": "http://www.thehindu.com/multimedia/dynamic/01569/dalit_1569928f.jpg"
		});
		PressArticles.insert({
			"title": "Jind: Nine days, three autopsies later, dalit girl’s death remains a mystery",
			"url": "http://articles.timesofindia.indiatimes.com/2013-09-02/india/41687910_1_dalit-girl-jind-dalit-human-rights",
			"source": "The Times of India"
		});
		PressArticles.insert({
			"title": "Report of the fact finding investigation conducted by All India Dalit Mahila Adhikar Manch to ascertain facts in the case of alleged rape and murder of Dalit girl in Jind district of Haryana",
			"url": "http://www.humanrights.asia/news/forwarded-news/AHRC-FST-039-2013",
			"source": "Asian Human Rights Commission"
		});
	}

	if (SliderItems.find().count() == 0) {
		SliderItems.insert({
			"status_class": "active",
			"link_url": "/about",
			"img_url": "mashaal.jpg",
			"img_alt": "Mashal Rally",
			"caption_title": "All India Dalit Mahila Adhikar Manch",
			"caption_text": ".. a quest for accessing and ensuring Dalit Women’s right to life, security, development, dignity and equality in a violence-free society"
		});
		SliderItems.insert({
			"status_class": "inactive",
			"link_url": "/press",
			"img_url": "mashaal-poster.jpg",
			"img_alt": "Mashal Poster",
			"caption_title": "",
			"caption_text": "Is the Haryana government covering up what killed the young Dalit girl in Jind?"
		});
		SliderItems.insert({
			"status_class": "inactive",
			"img_url": "sammelan.jpg",
			"img_alt": "Sammelan Photo",
			"caption_title": "Enabling Dalit Women to Engage in Local Governance ...",
			"caption_text": ""
		});
		SliderItems.insert({
			"status_class": "inactive",
			"link_url": "/whatwedo",
			"img_url": "karwan.jpg",
			"img_alt": "",
			"caption_title": "Promoting Dalit Women's Access to Rights !!",
			"caption_text": ""
		});
	}
});

Meteor.publish('orgs', function() {
	return Orgs.find({});
});

// For whatwedo section
Meteor.publish('activities', function() {
	return Activities.find({});
});

// For press section
Meteor.publish('press_articles', function() {
	return PressArticles.find({});
});

// For slider section
Meteor.publish('slider_items', function() {
	return SliderItems.find({});
})