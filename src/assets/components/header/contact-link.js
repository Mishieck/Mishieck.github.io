import { $riu } from "riu-component";


const styles = `
  :scope {
    border-radius: 50%;
    padding: 1vw 4vw;
    width: 20vw;
    background-color: var(--secondary-color);
  }

  [name="circle"] {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color, box-shadow 0.4s;
  }

  [name="circle"]:hover {
    background-color: var(--light-color);
  }

  [name="link"] {
    padding: 2vw;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  [name="icon"] {
    object-fit: contain;
    width: 100%;
    height: 100%;
    filter: invert(52%) sepia(60%) saturate(523%) hue-rotate(70deg) brightness(98%) contrast(90%);
    transition: filter 0.4s;
  }

  [name="circle"]:hover [name="icon"] {
    filter: invert(100%);
  }

  @media (min-width: 768px) {
    :scope {
      padding: 4vw 1vw;
      width: 10vw;
    }

    [name="link"] {
      padding: 1.2vw;
    }
  }

  @media (min-width: 992px) {
    :scope {
      padding: 2vw 0.5vw;
      width: 5vw;
    }

    [name="link"] {
      padding: 0.7vw;
    }
  }
`;

export const contactLink = async ({ link, name, icon } = {}) => {
  const markup = `
    <contact-link riu-ml="xml" name="${name}" title="${name}">
      <circle riu-neu="sm radius(50%)">
        <link html="a" href="${link}" target="_blank">
          <icon html="img" src="/src/assets/images/contacts/${icon}.svg" alt="${name}" title="${name}" />
        </link>
      </circle>
    </contact-link>
  `;

  const schema = { markup, styles };
  return $riu(schema);
};

