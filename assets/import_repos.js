document.addEventListener("DOMContentLoaded", () => {
  var viroll = "https://api.github.com/repos/cheerypal/viroll";
  var trustBLK = "https://api.github.com/repos/cheerypal/TrustBLK";
  var mySite = "https://api.github.com/repos/cheerypal/euangordon.me";

  var github_projects = document.getElementById("github-projects");

  const card = (logo, name, description, codeLink, websiteLink, lang) => {
    return `
    <div class="card projects-appear">
    <img src="assets/images/${logo}.png" class="project-img" />
    <a href="${websiteLink}" class="card-link">
    <div class="flex-card">
      <div class="text-content">
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
      <div class="sect">
        <h4>Skill Used</h4>
        <div id="language-group">
          <p class="lang">${lang}</p>
        </div>
      </div>
      <div class="button-group">
        <a href="${websiteLink}" class="link"
          >Website <i class="fa fa-chevron-right"></i>
        </a>
        <a href="${codeLink}"  class="link"
          > Code <i class="fa fa-chevron-right"></i>
        </a>
      </div>
    </div>
    </a>
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
          jsonData.homepage,
          jsonData.language
        );
      });
  };

  getRepo(viroll, "VIROLL");
  getRepo(trustBLK, "TrustBLK");
  getRepo(mySite, "logo");
});
