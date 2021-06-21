import { $create } from "odom";
import { mainSkill } from "./main-skill/main-skill";
import markup from "./main-skills.xml";
import styles from "./main-skills.scss";

type Props = {
  link: string;
  name: string;
  icon: string;
};

export const mainSkills = async ({ link, name, icon }: Props) => {
  const mapper = async () => {
    const creator = async (name: string) => {
      const $Skill = await mainSkill({ name });
      return $Skill.scope;
    };

    const res = await fetch("/src/assets/json/main-skills.json");
    const json = await res.json();

    return { data: json.mainSkills, creator };
  };

  const utils = {
    methods: { mapper }
  };

  const options = { markup, styles: styles, utils };
  return $create(options);
};
