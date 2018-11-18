// import React, { Component } from 'react'

//  class PostsItem extends Component {
//   render() {
//     return (
//       <div>
//         Item
//       </div>
//     )
//   }
// }


// export default PostsItem;

import React from 'react';

const PostsItem = ({match}) => {
    return <div>{match.params.id}</div>
}

export default PostsItem;