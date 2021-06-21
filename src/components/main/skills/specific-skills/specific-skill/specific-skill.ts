import { $create } from "odom";
import markup from "./specific-skill.xml";
import styles from "./specific-skill.scss";

type Props = {
  name: string;
  logo: string;
};

export const specificSkill = async ({ name, logo }: Props) => {
  const utils = {
    data: { name, logo },
    texts: { name }
  };

  const options = { markup, styles: styles, utils };
  return $create(options);
};
