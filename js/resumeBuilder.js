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
	"bioPic" : "images/me.jpg"
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
			"description": "In my job role I worked as a junior Developer",
		},
		{
			"employer": "2020 claims",
			"title": "director",
			"dates": "2012 - 2014",
			"description": "Whilst studying I set up this business which I ran",
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

var formattedName = HTMLheaderName.replace("%data%", bio.fullname);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);



var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#header").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#header").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#header").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#header").append(formattedGithub);

var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
$("#header").append(formattedBlog);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#header").append(formattedLocation);

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


for (var job in work.jobs) {

    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);

    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
}




