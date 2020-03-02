import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Book } from "./components/Book";

import { MainImage } from "./components/MainImage";

class Page extends React.Component {
  render() {
    return (
      <div>
        <MainImage className=".main-image" />
        <Book></Book>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Page />, document.getElementById("root"));
