import React,  {useState, useEffect} from 'react';
function CreateCommentForm({user,rerender, setRerender, idea, loggedin}){
    const [comment, setComment] = useState('')
    console.log(comment)

    function handleSubmit(e) {
        e.preventDefault()
        const newComment = {
            user_id: user.id,
            content: comment,
            idea_id: idea.id
        }
        
        fetch("/comments",{
            method:"POST",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
        .then((r) => r.json())
        setRerender(!rerender)
        alert("You just Posted a new Comment!")
        setComment('')

    }
    
    return(
    <div>
        {loggedin ? <form onSubmit={handleSubmit}>
            <label>Add Comment:</label>
            <input type="text" value={comment} onChange={((e) => setComment(e.target.value))} />
            <input className= 'button' type="submit" />

        </form> : null }

    </div>
    )

}
export default CreateCommentForm     