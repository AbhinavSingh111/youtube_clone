import Comment from "./Comment";

const CommentList = ({data}) => {
    console.log(data)
  return data.map((c)=>(
    <div>
        <Comment key={c.id} data={c} />
        <div className="pl-5 border-l-2 border-l-gray-200 ml-5" >
            <CommentList data={c.replies} />
        </div>
    </div>
    ));
}

export default CommentList;