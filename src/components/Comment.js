import { USER_LOGO } from "../utilities/constants";


const Comment = ({data}) => {
    console.log(data)
    const {name, text, replies} = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 mt-1 rounded-md">
        <img className="w-10 h-10" alt="user" src={USER_LOGO} />
        <div className="pl-3">
            <p className="font-semibold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Comment;