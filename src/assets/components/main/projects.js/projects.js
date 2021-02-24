import { $riu } from "riu-component";


export const projects = async ({ link, name, icon }) => {
  const markup = `
    <section id="projects" class="section">
      <header class="heading">
        <h2>Projects</h2>
      </header>
      <section class="body">

      </section>
    </section>
  `;

  const styles = ``;
  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};

