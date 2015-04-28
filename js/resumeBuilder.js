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
	"welcomeMessage" : "Welcome to Haseeb's Profile",
	"skills" : ["Web Developer", "Programming", "HTML", "CSS", "Java Script", "J Query"],
	"bioPic" : "images/me.jpg"
};

//bio.city = "Reading";
//bio.postcode = "RG5 4LD";
	
var education = {
	"schools" : [
		{
			"name": "Bucks New University",
			"city": "High Wycombe",
			"degree": "BSC Hons",
			"major" : ["Computing"],
			"dates": "2010-2013",
			"url": "www.bucks.ac.uk/"
		},
		{
			"name": "zeons academy",
			"city": "Wokingham",
			"degree": "IT apprenticeship",
			"major" : ["desktop engineer, networking, support"],
			"dates": "2010",
			"url": "zenosacademy.co.uk"
		}
	],
	"onlineCourses": [
		{
			"title": "Front End Web Developer",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "Front Web Developer 1",
			"school": "Udacity",
			"dates": "2015",
			"url": "www.udacity.com"
		}
	]			
};

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
};

var projects = {
	"projects" : [
	{
		"title": "Project 1 - Intro to Html",
		"dates": "March 16, 2015",
		"description": "You will get acquainted with your text editor, creating and editing simple HTML and CSS files to create your very first webpage!",
		"images": ["images/Helloworld.jpg"]
	},
	{
		"title": "Project P1: Build a Portfolio Site",
		"dates": "April 13, 2015",
		"description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": ["images/project1.jpg", "images/project1.jpg"]
	}
	]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.fullname);
$("#header").prepend(formattedName);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var HTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(HTMLbioPic);
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
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}

//function displayWork
work.display = function() {
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
};

work.display();

//var displayProjects = function() {}
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);
		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

projects.display();

education.display = function() {
	for (var school in education.schools) {
    	$("#education").append(HTMLschoolStart);
	var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
	var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formattedEducationTitle = formattedName + formattedDegree + formattedCity;
	$(".education-entry:last").append(formattedEducationTitle);
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);    
	
}
$("#education").append(HTMLonlineClasses);

for (var course in education.onlineCourses) {
	$("#education").append(HTMLonlineStart);	
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	var formattedSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	var formattedOnlinecourseTitle = formattedTitle + formattedSchool;
	$(".education-entry:last").append(formattedOnlinecourseTitle);
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	$(".education-entry:last").append(formattedURL);
}
};

education.display();

function locationizer(work_obj) {
    var locationArray=[];
    for (var job in work_obj.jobs) {
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
$("#mapDiv").append(googleMap); //see a map
