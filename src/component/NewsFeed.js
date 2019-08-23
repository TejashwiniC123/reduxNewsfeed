import React, { Component } from "react";
import News from "../component/News";
import styles from "../component/NewsFeed.module.css";
export default class NewsFeed extends Component {
  componentWillMount() {
    this.props.getNewsData();
  }
  render() {
    console.log("data", this.props);
    return (
      <div className={styles.base}>
        {this.props.newsFeed &&
          this.props.newsFeed.newsFeedData &&
          this.props.newsFeed.newsFeedData.articles &&
          this.props.newsFeed.newsFeedData.articles.map(news => (
            <News
              image={news.urlToImage}
              title={news.title}
              desc={news.content}
              author={news.author}
            />
          ))}
      </div>
    );
  }
}
