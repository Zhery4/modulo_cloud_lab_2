import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core/themes/default.theme.tsx";
import { OrganizationProvider } from "./core/organization/Organization.context.tsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <OrganizationProvider>
          <App />
        </OrganizationProvider>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
