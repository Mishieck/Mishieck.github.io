import { $create } from "odom";
import { specificSkill } from "./specific-skill/specific-skill";
import markup from "./specific-skills.xml";
import styles from "./specific-skills.scss";

type Props = {
  name: string;
  logo: string;
};

const createSkill = async (props: Props) => {
  const $Skill = await specificSkill(props);
  return $Skill.scope;
};

export const specificSkills = async () => {
  const res = await fetch("/src/assets/json/specific-skills.json");
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

  const options = { markup, styles: styles.toString(), attributes, utils };
  return $create(options);
};
