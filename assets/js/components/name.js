export const name = () => {
  const fragment = document.createDocumentFragment();

  for(const char of "Mishieck Mwale") {
    const charWrapper = document.createElement("span");
    charWrapper.className += "wrapper";
    charWrapper.innerText = char;
    fragment.appendChild(charWrapper);
  }

  return fragment;
}