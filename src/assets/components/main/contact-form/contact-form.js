import { $riu } from "riu-component";


export const contactForm = async ({ link, name, icon }) => {
  const markup = `
    <section id="contact-form" class="section">
      <header class="heading">
        <h2>Send Me a Message</h2>
      </header>
      <section class="body">
        
      </section>
    </section>
  `;

  const styles = ``;
  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};

