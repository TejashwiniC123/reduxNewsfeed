import React, { Component } from "react";
import NewsFeedContainer from "./container/NewsFeedContainer";
import "./App.css";
export default class App extends Component {
  render() {
    console.log("APP");
    return <NewsFeedContainer />;
  }
}
