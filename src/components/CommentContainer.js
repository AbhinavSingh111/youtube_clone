import React from 'react'
import { commentsList } from '../utilities/mockComments';
import CommentList from './CommentList';

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-xl font-bold'>Comments: </h1>
        {/* <Comment data={commentsList[0]} /> */}
        <CommentList data={commentsList} />
    </div>
  )
}

export default CommentContainer;