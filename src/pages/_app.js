import "@/styles/globals.css";

import { ThemeProvider } from "theme-ui";
import theme from "@/theme";

// Font import
import "../theme/fonts/slussen-stencil/slussen-stencil-medium.css";
import "../theme/fonts/general-sans/general-sans-medium.css";
import { MainLayout } from "@/layout/MainLayout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
