const linkDefault = {
  cursor: "pointer",
};

const buttonDefault = {
  cursor: "pointer",
};

const hyperlinkDefault = {
  ...linkDefault,
};

const links = {
  hyperlink: {
    // small
    ...hyperlinkDefault,
  },
  footer: {
    ...linkDefault,
  },
  legal: {
    ...linkDefault,
  },
  contact: {
    ...linkDefault,
  },
};

const buttons = {
  primary: {
    ...buttonDefault,
    fontFamily: "body.normal",
    fontSize: "1.3rem",
    p: "1rem 2rem",
    border: "none",
    bg: "primary",
    color: "white",
    textTransform: "uppercase",
    borderRadius: "card",
    letterSpacing: "0.05em",
  },

  "primary-danger": {
    variant: "buttons.primary",
    bg: "red",
  },
  clear: {
    ...buttonDefault,
    p: 0,
    bg: "transparent",
  },
};

const cards = {};

export { links, buttons, cards };
