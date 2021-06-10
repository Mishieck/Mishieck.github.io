import { $create } from "odom";
import { pyramid } from "./pyramid/pyramid";
import { brand } from "./brand/brand";
import { contactLink } from "./contact-link/contact-link";
import markup from "./header.xml";
import styles from "./header.scss";

const contactLinks = {
  primary: [
    {
      link: "tel:+260950434361",
      name: "Call",
      icon: "phone"
    },
    {
      link: "https://wa.me/+260950434361/?text=Hi.",
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
      link: "https://twitter.com/mishieck_dev/",
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

export const header = async (props) => {
  const linkCreator = async (props) => {
    const $ButtonContact = await contactLink(props);
    return $ButtonContact.scope;
  };

  const mapPrimaryContacts = async () => ({ data: contactLinks.primary, creator: linkCreator });
  const mapSecondaryContacts = async () => ({ data: contactLinks.secondary, creator: linkCreator });

  const methods = { mapPrimaryContacts, mapSecondaryContacts };
  const components = { brand, pyramid };
  const utils = { methods, components };
  const options = { markup, styles: PrefixFree.prefixCSS(styles), utils };
  return $create(options);
};
