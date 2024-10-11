import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/ui/ThemeProvider.tsx";
import { TileSelector } from "@/features/gametile/TileSelector.tsx";
import { GameBoard } from "@/features/gameboard/GameBoard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <GameBoard />
      <TileSelector />
    </ThemeProvider>
  </React.StrictMode>,
);
