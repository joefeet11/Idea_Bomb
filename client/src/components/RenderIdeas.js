import React,  {useState, useEffect} from 'react';
import CreateCommentForm from './CreateCommentForm';
import RenderComments from './RenderComments';

function RenderIdeas({idea, user, rerender, setRerender, usename, loggedin }) {
    const [cmtc, setCmtc] = useState(false)
   
    
    function handleCommentsClick(){
        setCmtc(!cmtc)
    }

    function deleteIdea() {
        fetch(`/ideas/${idea.id}`, {
            method: "DELETE",
        })
        alert("You deleted a post.")

        setRerender(!rerender)

    }

return(
<div className = 'idea'>
    <h3>{usename}</h3>
    <p>{idea.detail}</p>
    {user.id == idea.user_id ? <button className="button" onClick={deleteIdea}>Delete Post</button> : null}
    <p onClick={handleCommentsClick}>Comments</p>
    {cmtc ? <CreateCommentForm user={user} idea={idea} rerender={rerender} setRerender={setRerender} loggedin={loggedin}/> : null}
    {cmtc ? idea.comments.map( comment =>  <RenderComments comment={comment} idea={idea} user={user} rerender={rerender} setRerender={setRerender} />) : null}


</div>
)}
export default RenderIdeas