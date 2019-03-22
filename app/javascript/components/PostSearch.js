import React from "react";

import {
  InstantSearch,
  SearchBox,
  Hits,
  SortBy,
  Panel,
  RefinementList
} from "react-instantsearch-dom";

class PostSearch extends React.Component {
  render() {
    return (
      <InstantSearch
        appId="0S51WQJHQ7"
        apiKey="dde8a3eb27c99e55dede6d2c8ab0c6dd"
        indexName="Post"
        // resultsState={JSON.parse(this.props.result)} // REF1 
      >
        <RefinementList attribute="category" />
        <SearchBox />
        <SortBy
          defaultRefinement="Post_updated_at_desc"
          items={[
            {
              value: "Post_updated_at_desc",
              label: "Last udpated"
            },
            {
              value: "Post_created_at_desc",
              label: "Last created"
            },
            {
              value: "Post_updated_at_asc",
              label: "First udpated"
            },
            {
              value: "Post_created_at_asc",
              label: "First created"
            }
          ]}
        />
        <Hits />
      </InstantSearch>
    );
  }
}

export default PostSearch;
