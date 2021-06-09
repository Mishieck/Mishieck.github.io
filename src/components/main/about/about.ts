import { $create } from "odom";
import { cube } from "./cube/cube";

export const about = async () => {
  const utils = {
    components: { cube }
  };

  const schema = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(schema);
};
