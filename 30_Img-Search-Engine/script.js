const searchform = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const showMoreButton = document.getElementById("show-more-btn");
const searchResult = document.getElementById("search-result");

let keyword = "";
let page = 1;

async function searchImage() {
	keyword = searchBox.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${ACCESSKEY}&per_page=12`;

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Response status :  ${response.status}`);
		}

		const dataImg = await response.json();

		if (page === 1) {
			searchResult.innerHTML = "";
		}

		const results = dataImg.results;
		results.map((result) => {
			const Image = document.createElement("img");
			Image.src = result.urls.small;

			const imagelink = document.createElement("a");
			imagelink.href = result.links.html;

			imagelink.target = "_blank";

			imagelink.appendChild(Image);
			searchResult.appendChild(imagelink);
		});
	} catch (error) {
		console.log(error.message);
	}

	showMoreButton.style.display = "block";
}

searchform.addEventListener("submit", (e) => {
	e.preventDefault();
	page = 1;
	searchImage();
});

showMoreButton.addEventListener("click", () => {
	page++;
	searchImage();
	console.log(page);
});
