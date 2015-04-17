var bio = {
	"fullname" : "Haseeb Mahmood",
	"age" : 24,
	"role" : "Web Developer",
	"contacts" : {
		"email" : "haseebmahmood00@gmail.com",
		"mobile" : "07897455203",
		"twitter" : "to be made",
		"github" : "haseebmahmood00",
		"blog" : "to be made",
		"location" : "Reading, England"
	},
	"welcomeMessage" : "Welcome to Haseebs Profile",
	"skills" : ["awesomeness", "programming", "webdeveloper", "student"],
	"bioPic" : "frontend-nanodegree-resume/images/me.jpg"
}

//bio.city = "Reading";
//bio.postcode = "RG5 4LD";
	
var education = {
	"schools" : [
		{
			"name": "Bucks New University",
			"city": "High Wycombe",
			"degree": "BSC Hons",
			"Major" : ["Computing"],
			"dates": "2010-2013",
			"url": "www.bucks.ac.uk/"
		},
		{
			"name": "zeons academy",
			"city": "wokingham",
			"degree": "IT apprenticeship",
			"Major" : ["desktop engineer, networking, support"],
			"dates": "2010",
			"url": "zenosacademy.co.uk"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "udacity",
			"dates": "2015",
			"url": "www.udacity.com"
		}
	]			
}

var work = {
	"jobs": [
		{
			"employer": "hmsolutionz",
			"title": "junior Developer",
			"dates": "2014 - Present",
			"location": "Reading",
			"description": "In my job role I worked as a junior Developer",
		},
		{
			"employer": "2020 claims",
			"title": "director",
			"dates": "2012 - 2014",
			"location": "Reading",
			"description": "I started up my own business along side doing my studies",
		}	
	]
}

var projects = {
	"projects" : [
	{
		"title": "project 1",
		"dates": "date",
		"description": "project description",
		"images": ["project image urls", "url 2"]
	},
	{
		"title": "project 2",
		"dates": "date",
		"description": "project description",
		"images": ["project image urls", "url 2"]
	}
	]
}

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.fullname);
$("#header").prepend(formattedName);


var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);

var HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(bio.bioPic);



var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
//$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
//$("#topContacts").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (var job in work.jobs) {

    	$("#workExperience").append(HTMLworkStart);

    	var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    	var formattedEmployerTitle = formattedEmployer + formattedTitle;
    	$(".work-entry:last").append(formattedEmployerTitle);

    	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    	$(".work-entry:last").append(formattedDates);
    	var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    	$(".work-entry:last").append(formattedworkLocation);
    	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();


//var displayProjects = function() {}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);


		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


function locationizer(work_obj) {
    var locationArray=[];
    for (job in work_obj.jobs) {
     var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    return locationArray;
}


console.log(locationizer(work));


function inName(name) {
	name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}

$('#main' ).append(internationalizeButton);
  





