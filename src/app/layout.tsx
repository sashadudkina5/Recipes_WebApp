import AppHeader from "@/components/AppHeader/AppHeader";
import { Metadata } from "next";
import "../styles/global.scss";
import AppFooter from "@/components/AppFooter/AppFooter";
import Navigation from "@/components/Navigation/Navigation";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

export const metadata: Metadata = {
  title: {
    absolute: "", //ignores the rules below and sets absolute title to the page
    default: "", //if child page has no own title
    template: "%s | websiteName", // %s is replaced with page's title
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <AppHeader />
            <Navigation />
            <main>{children}</main>
            <AppFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}