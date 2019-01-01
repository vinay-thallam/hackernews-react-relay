import React, { Component } from 'react'
import {
    QueryRenderer,
    graphql
} from 'react-relay'
import environment from '../Environment'
import LinkList from './LinkList'

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    viewer {
      ...LinkList_viewer
    }
  }
`

class LinkListPage extends Component {

    render() {
        return (
            /*
            Now it starts to get interesting! What happens with these fragments? When are they used and what’s the query Relay actually sends to the server?

            Meet the QueryRenderer:

            QueryRenderer is the root of a Relay tree. It takes a query, fetches the data and calls the render callback with the data.

            So, here is where it all adds up. React components are wrapped with GraphQL fragments to become Relay containers. When doing so, they retain the same hierarchical structure as the pure React components and form a tree. At the root of that tree there’s the QueryRenderer, which also is a higher-order component that will take care of composing the actual query.
            
            */
            <QueryRenderer
                environment={environment}
                query={LinkListPageQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div>{error.message}</div>
                    } else if (props) {
                        return <LinkList viewer={props.viewer} />
                    }
                    return <div>Loading</div>
                }}
            />
        )
    }

}

export default LinkListPage