export const mainSkill = skill => {
  let item = document.createElement("li"),
      icon = document.createElement("img"),
      text = document.createElement("span");

  item.className += "item";
  item.setAttribute("riu-neu", "sm");
  item.setAttribute("title", skill);
  icon.src = "/assets/img/check.svg";
  icon.className += "icon";
  icon.setAttribute("alt", skill);
  text.className += "text";
  text.innerText = skill;

  item.appendChild(icon);
  item.appendChild(text);

  return item;
}