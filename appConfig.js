﻿define([], function () {
	return {
		/*  appSetting contains application configuration */

		// Set application title
		ApplicationName: "Briefing Book Gallery",

		// Set application icon path
		ApplicationIcon: "",

		// Set application Favicon path
		ApplicationFavicon: "images/favicon.ico",

		// Set application mode. Set to false for Public interface. Set to true for Admin interface
		AuthoringMode: false, 	//false:      Public mode and true:      Editable mode

		//video url for YouTube
		YouTubeVideoUrl: "http://www.youtube.com/embed/",

		//video url for Esri
		EsriVideoUrl: "http://video.esri.com/iframe/",

		//video url for Vimeo
		VimeoVideoUrl: "http://player.vimeo.com/video/",


		PortalURL: "http://arcgis4localgov2.maps.arcgis.com",

		//tag for searching briefing book config
		ConfigSearchTag: 'BriefingBookConfigItem',

		//Sorting field
		SortField: 'created', //Values:title | owner | avgRating |numViews| created | modified

		//sorting order
		SortOrder: 'desc', //Values: asc | desc

		/* module Defaults contains default settings for each and every module */
		/* cover page layout contains layout for index page*/
		CoverPageLayout: {
			title: "Briefing Book Title",
			Name: "coverPageLayout1",
			columns: 2,
			columnWidth: [50, 50],
			content: [
								 ["title", "subtitle", "author", "date", "logo"], ["webmap"]
						],
			height: [[40, 100, 60, 50], [300]],
			type: "CoverPage"

		},
		/* content page layout contains layout for content page*/
		ContentPageLayouts: [
						 {
						 	Name: "ContentLayout1",
						 	columnWidth: [50, 50],
						 	columns: 2,
						 	templateIcon: "themes/images/contentLayout1.png",
						 	selectedTemplateIcon: "themes/images/contentLayout1-select.png",
						 	content: [
										["text", "TOC"], ["webmap"]
						 		],
						 	height: [[50, 200], [250]],
						 	type: "ContentPage"
						 }, {
						 	Name: "ContentLayout2",
						 	columns: 2,
						 	columnWidth: [50, 50],
						 	templateIcon: "themes/images/contentLayout2.png",
						 	selectedTemplateIcon: "themes/images/contentLayout2-select.png",
						 	content: [
										 ["webmap", "text"], ["TOC"]
						 		],
						 	height: [[300, 100], [400]]
						 }, {
						 	Name: "ContentLayout3",
						 	columns: 2,
						 	columnWidth: [50, 50],
						 	templateIcon: "themes/images/contentLayout3.png",
						 	selectedTemplateIcon: "themes/images/contentLayout3-select.png",
						 	content: [
										 ["TOC"],
										 ["text", "webmap"]
						 		],
						 	height: [[300], [50, 250]]
						 }
				],
		/* book page layout contains layout for different pages of books */
		BookPageLayouts: [
							{
								Name: "TwoColumnLayout",
								columnWidth: [40, 60],
								columns: 2,
								templateIcon: "themes/images/temp1.png",
								selectedTemplateIcon: "themes/images/temp1-select.png",
								content: [
										["text"],
										["webmap"]
									],
								height: [[250], [250]]
							}, {
								Name: "MostlyText",
								columns: 2,
								columnWidth: [50, 50],
								templateIcon: "themes/images/temp2.png",
								selectedTemplateIcon: "themes/images/temp2-select.png",
								content: [
										 ["webmap", "text"],
										 ["text"]
									],
								height: [[230, 30], [300]]

							}, {
								Name: "OneColumnLayout",
								columns: 1,
								columnWidth: [100],
								templateIcon: "themes/images/temp3.png",
								selectedTemplateIcon: "themes/images/temp3-select.png",
								content: [
										 ["webmap", "text"]
									],
								height: [[250, 50]]

							}, {
								Name: "DominantVisual",
								columns: 2,
								columnWidth: [30, 70],
								templateIcon: "themes/images/temp4.png",
								selectedTemplateIcon: "themes/images/temp4-select.png",
								content: [
										 ["webmap", "text"],
										 ["text"]
									],
								height: [[230, 60], [335]]
							}
				],
		ModuleDefaultsConfig: {
			"webmap": {
				type: "webmap",
				title: "Webmap title goes here",
				caption: "Webmap caption goes here",
				URL: '',
				height: 230								// in pixel
			},
			"title": {
				type: "text",
				text: "Untitled",
				height: 30,
				uid: "title"							// in pixel
			},
			"text": {
				type: "text",
				text: "Add text here",
				height: 40								// in pixel
			},
			"HTML": {
				type: "HTML",
				HTML: "<p>Add HTML here</p>",
				height: 100								// in pixel
			},
			"image": {
				type: "image",
				URL: "",
				height: 100,
				width: ''								// in pixel
			},
			"video": {
				type: "video",
				title: "Video title",
				caption: "The video caption",
				provider: '',
				URL: '',
				height: 250							// in pixel
			},
			"flickr": {
				type: "flickr",
				username: '',
				apiKey: '',
				title: '',
				caption: '',
				URL: '',
				rows: 5,
				columns: 5,
				height: 250							// in pixel
			},
			"page": {
				title: "Untitled Page",
				shortTitle: "Untitled",
				cols: 2,
				height: ''							// in pixel
			},
			"logo": {
				type: "logo",
				URL: "themes/images/logo-default.jpg",
				height: 50							// in pixel
			},
			"TOC": {
				type: "TOC",
				height: 200							 // in pixel
			},
			"author": {
				text: "Author",
				type: "text",
				uid: "Author",
				height: 50
			},
			"date": {
				text: "Date and/or other information here",
				type: "text",
				uid: "date",
				height: 20
			},
			"subtitle": {
				type: "text",
				text: "This is a subtitle or brief descriptive blurb about my map book. It's optional, but recommended. People will get a better sense of what the book is about if there's a descriptive subtitle here.",
				height: 40
			}
		},
		DefaultModuleIcons: {
			"webmap": {
				type: "webmap",
				URL: "themes/images/mapIcon.png"
			},
			"image": {
				type: "image",
				URL: "themes/images/imageIcon.png"
			},
			"logo": {
				type: "logo",
				URL: "themes/images/imageIcon.png"
			},
			"text": {
				type: "text",
				URL: "themes/images/textIcon.png"
			},
			"HTML": {
				type: "HTML",
				URL: "themes/images/htmlIcon.png"
			},
			"video": {
				type: "video",
				URL: "themes/images/videoIcon.png"
			},
			"flickr": {
				type: "flickr",
				URL: "themes/images/flickrIcon.png"
			}
		}
	};

});