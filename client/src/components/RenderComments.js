import React from "react";
function RenderComments({user, idea, comment, setRerender, rerender}){

    function deleteComment() {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE",
        })
        alert("You deleted a comment.")
        setRerender(!rerender)
    }
    
    return(
     
        <span>
            <p>{comment.content}</p>
            {user.id == comment.user_id ? <button className = "button" onClick = {deleteComment}>Remove</button> : null}
            
        </span>
      
    )
}
export default RenderComments