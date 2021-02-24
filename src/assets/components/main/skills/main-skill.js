import { $riu } from "riu-component";


const styles = `
  :scope {
    padding: 3vw;
    width: 90vw;
    display: flex;
    align-items: center;
    gap: 3vw;
    color: var(--dark-color);
    transition: color 0.4s;
  }

  [xml="icon"] {
    object-fit: contain;
    width: 24px;
    transition: filter 0.4s;
    filter: invert(12%) sepia(51%) saturate(4446%) hue-rotate(101deg) brightness(95%) contrast(104%);
  }

  :scope:hover {
    color: #00ff00;
  }

  :scope:hover [xml="icon"] {
    filter: invert(52%) sepia(60%) saturate(523%) hue-rotate(70deg) brightness(98%) contrast(90%);
  }

  @media (min-width: 576px) {
    [xml="name"] {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    :scope {
      gap: 2vw;
    }

    [xml="icon"] {
      width: 32px;
    }

    [xml="name"] {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 992px) {
    :scope {
      padding: 1.5vw;
      width: 35vw;
    }
    
    [xml="icon"] {
      width: 28px;
    }
  }

  @media (min-width: 1200px) {
    :scope {
      width: 30vw;
    }
  }
`;

export const mainSkill = async ({ name }) => {
  const markup = `
    <main-skill riu-ml="xml" html="li" riu-neu="sm" title="${name}">
      <icon html="img" src="/src/assets/images/check.svg" class="icon" alt="check" />
      <name>${name}</name>
    </main-skill>
  `;

  const schema = { markup, styles: PrefixFree.prefixCSS(styles) };
  return $riu(schema);
};