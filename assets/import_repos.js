document.addEventListener("DOMContentLoaded", () => {
  var viroll = "https://api.github.com/repos/cheerypal/viroll";
  var trustBLK = "https://api.github.com/repos/cheerypal/TrustBLK";
  var mySite = "https://api.github.com/repos/cheerypal/euangordon.me";

  var siteLangs =
    "https://api.github.com/repos/cheerypal/euangordon.me/languages";
  var virollLangs = "https://api.github.com/repos/cheerypal/viroll/languages";
  var trustBLKLangs =
    "https://api.github.com/repos/cheerypal/TrustBLK/languages";

  var github_projects = document.getElementById("github-projects");

  const card = (logo, name, description, codeLink, websiteLink) => {
    return `<div class="card">
    <img src="assets/images/${logo}.png" class="project-img" />
    <div class="flex-card">
      <div class="text-content">
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
      <div class="button-group">
        <a href="${websiteLink}" class="link link-right"
          >Website <i class="fa fa-chevron-right"> </i
        ></a>
        <a href="${codeLink}" class="link link-left"
          ><i class="fa fa-chevron-left"></i> Code
        </a>
      </div>
    </div>
  </div>`;
  };

  const getRepo = (repo, name) => {
    fetch(repo, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        github_projects.innerHTML += card(
          name,
          jsonData.name,
          jsonData.description,
          jsonData.html_url,
          jsonData.homepage
        );
      });
  };

  getRepo(viroll, "VIROLL");
  getRepo(trustBLK, "TrustBLK");
  getRepo(mySite, "logo");
});
