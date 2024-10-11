// import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
// import { ThemeProvider } from "@/ui/ThemeProvider.tsx";
import SimpleForm from "./components/SimpleForm";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <ThemeProvider defaultTheme="light" storageKey="ui-theme"> */}
    <div>{"Hello World"}</div>
    <SimpleForm />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
