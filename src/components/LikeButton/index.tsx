
import { useState } from "react";

const LikeButton: React.FC = () => {
 const [like,setLike] = useState(0)
 const [on,setOn] = useState(false)
 return (
  <>
  <button onClick={() => {setLike((like)=>like + 1)}}>
    {like} 👍
  </button>
  <button>
    { on ? 'ON' : 'OFF'}
  </button>
  </>
 )
}