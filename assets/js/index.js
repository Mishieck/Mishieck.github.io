import { name } from "./components/name.js";
import { mainSkill } from "./components/main-skill.js";
import { specificSkill } from "./components/specific-skill.js";
import "../css/index.css";


window.addEventListener("load", e => {
  render();
  events();
});

const render = async () => {
  const nameWrapper = document.querySelector("#header .brand .name"),
        mainSkillsList = document.querySelector("#main-skills .list"),
        specificSkillsList = document.querySelector("#specific-skills .list");
  
  nameWrapper.innerText = "";
  nameWrapper.appendChild(name());

  const mainSkills = (await (await fetch("/assets/json/main-skills.json")).json()).mainSkills,
        specificSkills = (await (await fetch("/assets/json/specific-skills.json")).json()).specificSkills;
  
  for(const skill of mainSkills) mainSkillsList.appendChild(mainSkill(skill));
  for(const skill of specificSkills) specificSkillsList.appendChild(specificSkill(skill));
}

const events = async () => {
  document.querySelectorAll("#header .contacts .square").forEach(btn => {
    illuminate(btn);
  });

  illuminate(document.querySelector("#header .brand .logo"));
}

const illuminate = element => {
  element.addEventListener("mouseenter", function(e) {
    this.setAttribute("riu-neu", this.getAttribute("riu-neu")
        .concat(" colors(255 255 255, 64 255 64) opacities(1, 0.5)"));
  });
  
  element.addEventListener("mouseleave", function(e) {
    this.setAttribute("riu-neu", this.getAttribute("riu-neu")
        .replace(" colors(255 255 255, 64 255 64) opacities(1, 0.5)", ""));
  });
}