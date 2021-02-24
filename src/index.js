import { riuNeumorphism } from "riu-neumorphism";
import "prefixfree";
import { page } from "./assets/components/page.js";
import { app } from "./assets/components/app.js";


const init = async () => {
  window.$app = await app();
  const $Page = await page();
  await $Page.render("#page");
  riuNeumorphism();
};

window.addEventListener("DOMContentLoaded", init);