import React, { Component } from "react";
import News from "../component/News";
import styles from "../component/NewsFeed.module.css";
export default class NewsFeed extends Component {
  componentWillMount() {
    this.props.NewsData();
  }
  render() {
    return (
      <div className={styles.base}>
        {this.props.newsfeed &&
          this.props.newsfeed.newsData &&
          this.props.newsfeed.newsData &&
          this.props.newsfeed.newsData.articles.map(news => (
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
