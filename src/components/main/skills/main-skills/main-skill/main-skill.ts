import { $create } from "odom";
import markup from "./main-skill.xml";
import styles from "./main-skill.scss";

type Props = {
  name: string;
};

export const mainSkill = async ({ name }: Props) => {
  const utils = {
    texts: { name }
  };

  const options = { markup, styles: styles.toString(), utils };
  return $create(options);
};
