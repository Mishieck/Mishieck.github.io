import { riuNeumorphism } from "riu-neumorphism";
import { app } from "./components/app";

const init = async () => {
  const $app = await app();
  await $app.render("#app");
  riuNeumorphism();
};

window.addEventListener("DOMContentLoaded", init);
