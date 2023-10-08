const currentYear = new Date().getUTCFullYear();
document.getElementById("current-year").innerHTML = currentYear;
const navBar = document.getElementById("nav");
window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		navBar.classList.add("scrolled-nav");
	} else {
		navBar.classList.remove("scrolled-nav");
	}
});
let light_theme = false;
const body = document.body;
const theme = document.getElementById("theme");
const creditOne = document.getElementById("credit-one");
const creditTwo = document.getElementById("credit-two");
theme.addEventListener("click", () => {
	body.classList.toggle("light-mode");
	if (light_theme === true) {
		light_theme = false;
		theme.innerHTML = "light_mode";
		creditOne.innerHTML = "Photo by <a href='https://unsplash.com/@wasdrew?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Andras Vas</a> on <a href='https://unsplash.com/photos/Bd7gNnWJBkU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";
		creditTwo.innerHTML = "Photo by <a href='https://unsplash.com/@lucabravo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Luca Bravo</a> on <a href='https://unsplash.com/photos/XJXWbfSo2f0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";
	} else {
		light_theme = true;
		theme.innerHTML = "dark_mode";
		creditOne.innerHTML = "Photo by <a href='https://unsplash.com/@sapegin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Artem Sapegin</a> on <a href='https://unsplash.com/photos/DErxVSSQNdM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";
		creditTwo.innerHTML = "Photo by <a href='https://unsplash.com/@markusspiske?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Markus Spiske</a> on <a href='https://unsplash.com/photos/fpTVkXjxL_Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'>Unsplash</a>";
	}
});