import { $create } from "odom";
import { specificSkill } from "./specific-skill/specific-skill";
import markup from "./specific-skills.xml";
import styles from "./specific-skills.scss";

type Props = {
  name: string;
  logo: string;
};

export const specificSkills = async () => {
  const mapper = async () => {
    const creator = async (props: Props) => {
      const $Skill = await specificSkill(props);
      return $Skill.scope;
    };

    const res = await fetch("/src/assets/json/specific-skills.json");
    const json = await res.json();

    return { data: json.specificSkills, creator };
  };

  const utils = {
    methods: { mapper }
  };

  const options = { markup, styles: styles.toString(), utils };
  return $create(options);
};
