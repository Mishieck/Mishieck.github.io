import { $create } from "odom";
import { pyramid } from "./pyramid/pyramid";
import { brand } from "./brand/brand";
import { contactLink } from "./contact-link/contact-link";
import markup from "./header.xml";
import styles from "./header.scss";
import email from "/src/assets/images/contacts/email.svg";
import facebook from "/src/assets/images/contacts/facebook.svg";
import github from "/src/assets/images/contacts/github.svg";
import instagram from "/src/assets/images/contacts/instagram.svg";
import linkedin from "/src/assets/images/contacts/linkedin.svg";
import phone from "/src/assets/images/contacts/phone.svg";
import twitter from "/src/assets/images/contacts/twitter.svg";
import whatsapp from "/src/assets/images/contacts/whatsapp.svg";

type Props = {
  link: string;
  name: string;
  icon: string;
};

const primaryContacts = [
  {
    link: "tel:+260950434361",
    name: "Call",
    icon: phone
  },
  {
    link: "https://wa.me/+260950434361/?text=Hi.",
    name: "WhatsApp",
    icon: whatsapp
  },
  {
    link: "#",
    name: "Email",
    icon: email
  },
  {
    link: "https://www.linkedin.com/in/mishieck-mwale/",
    name: "Linkedin",
    icon: linkedin
  }
];

const secondaryContacts = [
  {
    link: "https://www.facebook.com/mishieckdev/",
    name: "Facebook",
    icon: facebook
  },
  {
    link: "https://twitter.com/mishieck_dev/",
    name: "Twitter",
    icon: twitter
  },
  {
    link: "https://www.instagram.com/mishieckmwale/",
    name: "Instagram",
    icon: instagram
  },
  {
    link: "https://github.com/Mishieck",
    name: "Github",
    icon: github
  }
];

export const header = async () => {
  const createLink = async (props: Props) => {
    const $ButtonContact = await contactLink(props);
    return $ButtonContact.scope;
  };

  const data = { primaryContacts, secondaryContacts };
  const methods = { createLink };
  const components = { brand, pyramid };
  const utils = { data, methods, components };

  const attributes = {
    '[xml="contacts"].primary': {
      "odom-map": /* json */ `{
        "data": "@data.primaryContacts",
        "createNode": "@methods.createLink"
      }`
    },
    '[xml="contacts"].secondary': {
      "odom-map": /* json */ `{
        "data": "@data.secondaryContacts",
        "createNode": "@methods.createLink"
      }`
    }
  };

  return $create({
    id: "mishieck-github-io-header",
    markup,
    styles: styles.toString(),
    attributes,
    utils
  });
};
