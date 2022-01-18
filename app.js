const projects = [
	{
		title: "House Price Prediction",
		content:
			"Master the basics of data analysis in Python. Expand your skillset by learning scientific computing with numpy. Master the basics of data analysis in Python.",
		time: "16 Hours",
		level: "Beginner",
		price: "pro",
		guided: true,
		cost: "699 coins",
		author: {
			url: "https://linkedin.com/",
			name: "Akhil Sv",
		},
		prerequisites: ["Python", "Numpy"],
	},
];
const noProjects = Array(3).fill(null);
const project = projects[0];
const populars = document.querySelector(".popular-body .row");
noProjects.forEach((p) => {
	const Project = document.createElement("div");
	Project.className = "col-lg-33 col-md-50 col-sm-100";
	const card = document.createElement("div");
	card.className = "card";
	card.setAttribute("data-price", "pro");
	const cardHead = document.createElement("div");
	cardHead.className = "card-head";
	const cardBody = document.createElement("div");
	cardBody.className = "card-body";

	const cardTitle = document.createElement("div");
	cardTitle.className = "card-title";
	const cardTitleSpan1 = document.createElement("span");
	cardTitleSpan1.innerHTML = project.guided ? "guided" : "unguided";
	const cardTitleSpan2 = document.createElement("span");
	cardTitleSpan2.innerHTML = project.title;
	cardTitle.appendChild(cardTitleSpan1);
	cardTitle.appendChild(cardTitleSpan2);

	const cardContent = document.createElement("div");
	cardContent.className = "card-content";
	cardContent.innerHTML = project.content;

	const cardDetails = document.createElement("div");
	cardDetails.className = "card-details";

	const cardDetailsHour = document.createElement("div");
	cardDetailsHour.className = "card-details-hour";
	const cardDetailsHourIcon = document.createElement("span");
	cardDetailsHourIcon.className = "material-icons";
	cardDetailsHourIcon.innerHTML = "timer";
	const cardDetailsHourText = document.createElement("span");
	cardDetailsHourText.innerHTML = project.time;
	cardDetailsHour.appendChild(cardDetailsHourIcon);
	cardDetailsHour.appendChild(cardDetailsHourText);

	const cardDetailsLevel = document.createElement("div");
	cardDetailsLevel.className = "card-details-level";
	const cardDetailsLevelIcon = document.createElement("span");
	cardDetailsLevelIcon.className = "material-icons";
	cardDetailsLevelIcon.innerHTML = "leaderboard";
	const cardDetailsLevelText = document.createElement("span");
	cardDetailsLevelText.innerHTML = project.level;
	cardDetailsLevel.appendChild(cardDetailsLevelIcon);
	cardDetailsLevel.appendChild(cardDetailsLevelText);

	const cardDetailsCost = document.createElement("div");
	cardDetailsCost.className = "card-details-coins";
	const cardDetailsCostIcon = document.createElement("span");
	cardDetailsCostIcon.className = "material-icons";
	cardDetailsCostIcon.innerHTML = "monetization_on";
	const cardDetailsCostText = document.createElement("span");
	cardDetailsCostText.innerHTML = project.cost;
	cardDetailsCost.appendChild(cardDetailsCostIcon);
	cardDetailsCost.appendChild(cardDetailsCostText);

	cardDetails.appendChild(cardDetailsHour);
	cardDetails.appendChild(cardDetailsLevel);
	cardDetails.appendChild(cardDetailsCost);

	const cardAuthor = document.createElement("card-author");
	cardAuthor.className = "card-author";
	cardAuthor.innerHTML = "Author: ";
	const cardAuthorLink = document.createElement("a");
	cardAuthorLink.setAttribute("href", project.author.url);
	const cardAuthorImg = document.createElement("img");
	cardAuthorImg.setAttribute("src", "./icons/LinkedIn.svg");
	cardAuthorImg.setAttribute("alt", "linkedin");
	cardAuthorLink.appendChild(cardAuthorImg);
	const cardAuthorSpan = document.createElement("span");
	cardAuthorSpan.innerHTML = project.author.name;
	cardAuthorLink.appendChild(cardAuthorSpan);
	cardAuthor.appendChild(cardAuthorLink);

	const cardPrerequisites = document.createElement("div");
	cardPrerequisites.className = "card-prerequisites";
	const cardPrerequisitesSpan = document.createElement("span");
	cardPrerequisitesSpan.innerHTML = " Prerequistes : ";
	const cardPrerequisitesDiv = document.createElement("div");
	project.prerequisites.forEach((element) => {
		const cardPrerequisitesA = document.createElement("a");
		cardPrerequisitesA.setAttribute(
			"href",
			`/tags/${_.kebabCase(element)}`
		);
		cardPrerequisitesA.innerHTML = element;
		cardPrerequisitesDiv.appendChild(cardPrerequisitesA);
	});
	cardPrerequisites.appendChild(cardPrerequisitesSpan);
	cardPrerequisites.appendChild(cardPrerequisitesDiv);

	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardContent);
	cardBody.appendChild(cardDetails);
	cardBody.appendChild(cardAuthor);
	cardBody.appendChild(cardPrerequisites);

	const cardFoot = document.createElement("div");
	cardFoot.className = "card-foot";
	const cardFootLink = document.createElement("a");
	cardFootLink.className = "card-foot__link";
	cardFootLink.setAttribute("href", `/project/${_.kebabCase(project.title)}`);
	const cardFootButton = document.createElement("button");
	cardFootButton.className = "btn btn-primary";
	cardFootButton.innerHTML = "View in Detail";
	cardFootLink.appendChild(cardFootButton);
	cardFoot.appendChild(cardFootLink);

	card.appendChild(cardHead);
	card.appendChild(cardBody);
	card.appendChild(cardFoot);
	Project.appendChild(card);
	populars.appendChild(Project);
});

const footerLinks = document.querySelectorAll(".footer-body-right-group__link");
footerLinks.forEach((item) => {
	item.setAttribute("href", `/${_.kebabCase(item.innerHTML)}`);
});

const fab = document.querySelector(".scroll-to-top");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
	fab.style.display = window.scrollY > window.innerHeight ? "flex" : "none";
	header.style.position =
		window.scrollY > window.innerHeight ? "fixed" : "relative";
	header.style.boxShadow =
		window.scrollY > window.innerHeight ? "var(--shadow-3d)" : "none";
});
fab.addEventListener("click", () => {
	window.scrollTo(0, 0);
});
