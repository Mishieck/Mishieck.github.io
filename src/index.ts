import { riuNeumorphism } from "riu-neumorphism";
import "prefixfree";
import { app } from "./components/app.js";

const init = async () => {
  const $app = await app();
  await $app.render("#app");
  riuNeumorphism();
};

window.addEventListener("DOMContentLoaded", init);
