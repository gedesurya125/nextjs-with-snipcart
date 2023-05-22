import { theme as piecesTheme } from "@thepuzzlers/pieces";
// client imports
import { fontFamilies } from "./fonts/fontFamilies";
import { colors } from "./colors";
import { buttons, links, cards } from "./elements";
import { shadows, radii } from "./styles";
import { forms } from "./forms";

const theme = {
  // pieces styles
  breakpoints: piecesTheme.breakpoints,
  measure: piecesTheme.measure,
  grids: piecesTheme.grids,
  // local styles
  fonts: fontFamilies,
  colors,
  buttons,
  links,
  cards,
  shadows,
  radii,
  forms,
  styles: {
    root: {
      fontFamily: "body.normal",
      color: "text",
      bg: "background",
    },
  },
};

export default theme;
