document.addEventListener("DOMContentLoaded", () => {
  // disable all transitions
  document.body.classList.remove("preload");

  //init localstorage

  if (typeof Storage !== "undefined") {
    if (!sessionStorage.languages)
      sessionStorage.setItem("languages", JSON.stringify([]));
    if (!sessionStorage.total) sessionStorage.setItem("total", 0);
  }

  var languagesUsed = {
    CSS: 0,
    HTML: 0,
    Vue: 0,
    JavaScript: 0,
    Python: 0,
    C: 0,
    PHP: 0,
    Shell: 0,
  };

  var total = 0;
  //github api
  //get all the languages used by cheerypals github accounts
  const getLanguages = () => {
    let url = "https://api.github.com/users/cheerypal/repos";

    fetch(url, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        //fetch and store all repos in an array
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
              langaugeXP(jsonData);
              sessionStorage.setItem(
                "languages",
                JSON.stringify(languagesUsed)
              );
              total = totalBytes(languagesUsed);
              sessionStorage.setItem("total", total);
            })
            .catch((err) => {});
        }
      });
  };

  const langaugeXP = (langs) => {
    try {
      if (langs.hasOwnProperty("CSS")) {
        languagesUsed.CSS += langs.CSS;
      }
      if (langs.hasOwnProperty("HTML")) {
        languagesUsed.HTML += langs.HTML;
      }
      if (langs.hasOwnProperty("Python")) {
        languagesUsed.Python += langs.Python;
      }
      if (langs.hasOwnProperty("JavaScript")) {
        languagesUsed.JavaScript += langs.JavaScript;
      }
      if (langs.hasOwnProperty("Vue")) {
        languagesUsed.Vue += langs.Vue;
      }
      if (langs.hasOwnProperty("PHP")) {
        languagesUsed.PHP += langs.PHP;
      }
      if (langs.hasOwnProperty("C")) {
        languagesUsed.C += langs.C;
      }
      if (langs.hasOwnProperty("Shell")) {
        languagesUsed.Shell += langs.Shell;
      }
    } catch (e) {
      console.log("undefined encountered");
    }
  };

  const totalBytes = (json) => {
    let total = 0;
    for (let i in json) {
      if (json.hasOwnProperty(i)) {
        total += json[i];
      }
    }
    return total;
  };

  getLanguages();
});
