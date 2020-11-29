export const specificSkill = skill => {
  const item = document.createElement("li"),
      square = document.createElement("div"),
      content = document.createElement("div"),
      icon = document.createElement("img"),
      title = document.createElement("h1");

  item.className += "item";
  item.setAttribute("riu-neu", "sm");
  item.setAttribute("title", skill.name);
  square.className += "square";
  square.setAttribute("riu-neu", "sm radius(2rem) convex");
  content.className += "content";
  icon.src = skill.logo;
  icon.className += "icon";
  icon.setAttribute("alt", skill.name);
  title.className += "title";
  title.innerText = skill.name;

  item.appendChild(square);
  square.appendChild(content);
  content.appendChild(icon);
  content.appendChild(title);

  return item;
}