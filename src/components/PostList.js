import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data });
      })
      .catch((err) => {
        this.setState({ errMsg: "Error in retriving the data" });
        console.log(`error in retriving the data: ${err}`);
      });
  }

  render() {
    const { posts, errMsg } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => {
              return <div key={post.id}>{post.title}</div>;
            })
          : null}
        {errMsg.length ? <div>{errMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
