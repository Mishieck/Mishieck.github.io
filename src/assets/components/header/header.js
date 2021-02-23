import { $riu } from "riu-component";
import { pyramid } from "./pyramid.js";
import { brand } from "./brand.js";
import { contactLink } from "./contact-link.js";


const markup = `
  <header riu-ml="xml" html="header">
    <picture-area class="picture-area">
      <contacts class="primary" riu-map="@methods.mapPrimaryContacts"></contacts>
      <pyramid riu-src="pyramid"></pyramid>
      <contacts class="secondary" riu-map="@methods.mapSecondaryContacts"></contacts>
    </picture-area>

    <brand riu-src="brand"></brand>
  </header>
`;

const styles = `
  :root {
    --offset-dark: 4px;
    --offset-light: -4px;
    --blur: 8px;
    --color-light: rgba(255, 255, 255, 0.4);
    --color-dark: rgba(0, 0, 0, 0.15);
    --contact-displacement: 5vw;
    --circle-border-color: #e0f0e0;/*
    --contact-displacement-positive: 5vw;
    --contact-displacement-negative: -5vw;*/
  }

  :scope {
    margin: 0;
    padding: 5vw;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  > * {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  [name="picture-area"] {
    display: flex;
    flex-direction: column;
  }

  [xml="contacts"] {
    display: flex;
    flex-direction: row;
  }
  
  [xml="contacts"].primary [xml="contact-link"]:first-child,
  [xml="contacts"].primary [xml="contact-link"]:last-child,
  [xml="contacts"].secondary [xml="contact-link"]:nth-child(2),
  [xml="contacts"].secondary [xml="contact-link"]:nth-child(3) {
    margin-top: var(--contact-displacement);
  }

  [xml="contacts"].primary [xml="contact-link"]:nth-child(2),
  [xml="contacts"].primary [xml="contact-link"]:nth-child(3),
  [xml="contacts"].secondary [xml="contact-link"]:first-child,
  [xml="contacts"].secondary [xml="contact-link"]:last-child  {
    margin-bottom: var(--contact-displacement);
  }
  
  @media (min-width: 768px) {
    :root {
      --contact-displacement: 6vw;
    }

    [name="picture-area"] {
      flex-direction: row;
    }

    [xml="contacts"] {
      flex-direction: column;
    }
  
    [xml="contacts"].primary [xml="contact-link"]:first-child,
    [xml="contacts"].primary [xml="contact-link"]:last-child,
    [xml="contacts"].secondary [xml="contact-link"]:nth-child(2),
    [xml="contacts"].secondary [xml="contact-link"]:nth-child(3) {
      margin-top: 0;
      margin-left: var(--contact-displacement);
    }
  
    [xml="contacts"].primary [xml="contact-link"]:nth-child(2),
    [xml="contacts"].primary [xml="contact-link"]:nth-child(3),
    [xml="contacts"].secondary [xml="contact-link"]:first-child,
    [xml="contacts"].secondary [xml="contact-link"]:last-child  {
      margin-bottom: 0;
      margin-right: var(--contact-displacement);
    }

    [xml="contacts"] [xml="link"] {
      padding: 1.2vw;
    }
  }

  @media (min-width: 992px) {
    :root {
      --contact-displacement: 2.5vw;
    }

    :scope {
      flex-direction: row !important;
    }

    > [name="picture-area"] {
      width: 60%;
    }

    > [name="brand"] {
      width: 40%;
    }
  }
`;

const contactLinks = {
  primary: [
    {
      link: "tel:+260950434361",
      name: "Call",
      icon: "phone"
    },
    {
      link: "https://wa.me/whatsappphonenumber/?text=Hi.",
      name: "WhatsApp",
      icon: "whatsapp"
    },
    {
      link: "#",
      name: "Email",
      icon: "email"
    },
    {
      link: "https://www.linkedin.com/in/mishieck-mwale/",
      name: "Linkedin",
      icon: "linkedin"
    }
  ],
  secondary: [
    {
      link: "https://www.facebook.com/mishieckmwale/",
      name: "Facebook",
      icon: "facebook"
    },
    {
      link: "https://twitter.com/mishieck_mwale/",
      name: "Twitter",
      icon: "twitter"
    },
    {
      link: "https://www.instagram.com/mishieckmwale/",
      name: "Instagram",
      icon: "instagram"
    },
    {
      link: "https://github.com/Mishieck",
      name: "Github",
      icon: "github"
    }
  ]
};


export const header = async props => {
  const linkCreator = async props => {
    const $ButtonContact = await contactLink(props);
    return $ButtonContact.scope;
  };

  const mapPrimaryContacts = async () => ({ data: contactLinks.primary, creator: linkCreator });
  const mapSecondaryContacts = async () => ({ data: contactLinks.secondary, creator: linkCreator });
  
  const methods = { mapPrimaryContacts, mapSecondaryContacts };
  const components = { brand, pyramid };
  const utils = { methods, components };
  const schema = { markup, styles, utils };
  return $riu(schema);
};