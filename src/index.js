import { riuNeumorphism } from "riu-neumorphism";
import { createComponent } from "odom";
import "prefixfree";
import { page } from "./components/page.js";
import { app } from "./components/app.js";

const init = async () => {
  const Demo = await createComponent({ markup: `<div></div>` });
  if (Demo.scope.tagName.toLowerCase() === "div") console.info("Passed");
  window.$app = await app();
  const $Page = await page();
  await $Page.render("#page");
  riuNeumorphism();
};

window.addEventListener("DOMContentLoaded", init);
