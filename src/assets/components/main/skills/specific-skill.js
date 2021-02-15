import { $riu } from "riu-component";


const styles = `
  :scope {
    margin: 0;
    padding: 0;
    width: 42.5vw;
    height: 42.5vw;
    background-color: var(--secondary-color);
  }

  [xml="square"] {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  [xml="square"]:hover {
    color: var(--light-color);
  }

  [xml="square"]:hover [xml="logo"] {
    width: 70%;
  }

  [xml="content"] {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  [xml="logo"] {
    object-fit: contain;
    width: 60%;
    transition: width 0.4s;
  }

  [xml="name"] {
    margin: 0;
    padding: 0.25rem 0;
    transition: color 0.4s;
  }

  @media (min-width: 576px) {
    :scope {
      margin: 0;
      width: calc(80vw / 3);
      height: calc(80vw / 3);
      background-color: var(--secondary-color);
    }

    [xml="name"] {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 768px) {
    :scope {
      width: calc(75vw / 4);
      height: calc(75vw / 4);
    }
  }

  @media (min-width: 992px) {
    :scope {
      width: 14vw;
      height: 14vw;
    }
  }

  @media (min-width: 1200px) {
    :scope {
      width: calc(65vw / 6);
      height: calc(65vw / 6);
    }
  }
`;

export const specificSkill = async ({ name, logo }) => {
  const markup = `
    <skill riu-ml="xml" html="li" riu-neu="sm radius(2rem) convex" title="${name}">
      <square>
        <content>
          <logo html="img" src="${logo}" alt="${name}" />
          <name html="h1">${name}</name>
        </content>
      </square>
    </skill>
  `;

  const schema = { markup, styles };
  return $riu(schema);
};