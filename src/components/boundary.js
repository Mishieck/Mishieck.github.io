import { $riu } from "riu-component";


export const boundary = async ({ link, name, icon }) => {
  const markup = `
    <boundary riu-ml="xml">
      <shadow class="shadow" riu-neu="top-center inner"></shadow>
    </boundary>
  `;

  const styles = `
    :scope {
      width: 100%;
      height: 16px;
      background-color: var(--secondary-color);
    }

    > [xml="shadow"] {
      width: 100%;
      height: 100%;
    }
  `;

  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};