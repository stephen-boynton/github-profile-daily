const main = document.body.querySelector("main");
const url = "https://api.github.com/users/stephen-boynton";
let profile = [];

//Store info from fetch as data in json=========================
function collect(data) {
	return data;
}

function convert(data) {
	return data.json();
}

function makeProfile(data) {
	profile = data;
	console.log(profile);
	return profile;
}

//Create top div class TITLE=====================================
//H1 text name
function createTitle(profile) {
	const div = document.createElement("div");
	div.className = "title";
	div.innerHTML = `<h1>${profile.name}</h1>`;
	main.appendChild(div);
	return profile;
}

//Create div class DETAILS=======================================
//H2 text The Basics
//List items of (Name, github URL, email, company, website)
function creaateDetails(profile) {
	const div = document.createElement("div");
	div.className = "details";
	div.innerHTML = `
  <h2>The Basics</h2>
  <ul>
  <li><span>Name:</span> ${profile.name}</li>
  <li><span>GitHub URL:</span> <a href=${profile.html_url}>${profile.login}</a></li>
  <li><span>Email:</span> ${profile.email}</li>
  <li><span>Company:</span> ${profile.company}</li>
  <li><span>Website:</span> <a href=${profile.blog}>stephen-boynton.wordpress.com</a></li>
  </ul>
  `;
	main.appendChild(div);
	return profile;
}

//Create div class STORY=======================================
//H2 text that reads The STORY
//Paragraph that contains bio

function createStory(profile) {
	const div = document.createElement("div");
	div.className = "story";
	div.innerHTML = `<h2>The Story </h2>
  <p>${profile.bio}</p>`;
	main.appendChild(div);
	return profile;
}

//Create div class PIC=======================================
//img using pic html

function createPic(profile) {
	const div = document.createElement("div");
	div.className = "pic";
	div.innerHTML = `<img src=${profile.avatar_url}>`;
	main.appendChild(div);
	return profile;
}

//Run fetch with the functions tied to the request.

fetch(url)
	.then(collect)
	.then(convert)
	.then(makeProfile)
	.then(createTitle)
	.then(creaateDetails)
	.then(createStory)
	.then(createPic);
