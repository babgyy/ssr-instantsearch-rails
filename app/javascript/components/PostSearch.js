import React from "react";
// import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

// const searchClient = algoliasearch(
//   "latency",
//   "6be0576ff61c053d5f9a3225e2a90f76"
// );

class PostSearch extends React.Component {
  render() {
    return (
      <InstantSearch
        appId="0S51WQJHQ7"
        apiKey="dde8a3eb27c99e55dede6d2c8ab0c6dd"
        indexName="Post"
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
    );
  }
}

export default PostSearch;
