import { $create } from "odom";
import { cube } from "./cube/cube";

export const about = async () => {
  const utils = {
    components: { cube }
  };

  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
