import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { setupWorker, rest } from "msw";

const worker = setupWorker(
  rest.get("/hello", (req, res, ctx) => {
    return res(ctx.json({ name: "test" }));
  })
);

const renderApp = () =>
  worker.start().then(() => {
    worker.printHandlers();
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  });

renderApp();
