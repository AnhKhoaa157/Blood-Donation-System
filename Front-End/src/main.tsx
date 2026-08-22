import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import "@ant-design/v5-patch-for-react-19";
import "./index.css";
import { applyCssVariables } from "./styles/applyCssVariables";
import App from "./app/App";

applyCssVariables();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
