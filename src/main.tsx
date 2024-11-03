import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { ThemeProviderComponent } from "./components/ThemeProviderComponent.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderComponent>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProviderComponent>
  </StrictMode>
);
