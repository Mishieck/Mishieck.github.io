import { $create } from "odom";
import { mainSkill } from "./main-skill/main-skill";
import markup from "./main-skills.xml";
import styles from "./main-skills.scss";

const createSkill = async (name: string) => {
  const $skill = await mainSkill({ name });
  return $skill.scope;
};

export const mainSkills = async () => {
  const res = await fetch("/src/assets/json/main-skills.json");
  const skills = await res.json();

  const attributes = {
    '[xml="skills"]': {
      "odom-map": /* json */ `{
          "data": "@data.skills",
          "createNode": "@methods.createSkill"
        }
      `
    }
  };

  const utils = {
    data: { skills },
    methods: { createSkill }
  };

  return $create({
    id: "mishieck-github-io-main-skills",
    markup,
    styles: styles.toString(),
    attributes,
    utils
  });
};
