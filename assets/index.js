document.addEventListener("DOMContentLoaded", () => {
	// disable all transitions
	document.body.classList.remove("preload");

	//init localstorage

	if (typeof Storage !== "undefined") {
		if (!localStorage.languages)
			localStorage.setItem("languages", JSON.stringify([]));
	}

	//github api
	//get all the languages used by cheerypals github accounts
	const getLanguages = () => {
		let url = "https://api.github.com/users/cheerypal/repos";
		fetch(url, { method: "GET" })
			.then((response) => {
				return response.json();
			})
			.then((jsonData) => {
				console.log(jsonData);
				let repos = [];
				for (let i in jsonData) {
					repos.push(jsonData[i].name);
				}

				for (let i in repos) {
					let url =
						"https://api.github.com/repos/cheerypal/" + repos[i] + "/languages";
					fetch(url, { method: "GET" })
						.then((response) => {
							return response.json();
						})
						.then((jsonData) => {
							console.log(jsonData);
							let langs = JSON.parse(localStorage.getItem("languages"));
							if (langs.length >= repos.length) {
							} else {
								localStorage.setItem("languages", JSON.stringify([]));
								console.log(langs);
								langs.push(jsonData);
								localStorage.setItem("languages", JSON.stringify(langs));
							}
						});
				}
			});
	};

	getLanguages();
});
