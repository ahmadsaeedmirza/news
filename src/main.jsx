import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Styling/index.css";
import { Provider } from "./Context/alldata";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// root.render(<App />);

root.render(
    <Provider>
        <App />
    </Provider>
);