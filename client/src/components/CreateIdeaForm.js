import React, {useState, useEffect} from "react";

function CreateIdeaForm({user, ideas, setIdeas, rerender, setRerender}){
    const [idea, setIdea] = useState('')
    console.log(idea)

    function handleSubmit(e) {
        e.preventDefault()
        const newIdea = {
            user_id: user.id,
            detail: idea
        }
        
        fetch("/ideas",{
            method:"POST",
            headers:{
                "content-Type": "application/json",
            },
            body: JSON.stringify(newIdea),
        })
        .then((r) => r.json())
        setRerender(!rerender)
        alert("You just Posted a new Idea!")
        setIdea('')

    }
    
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>New Idea:</label>
            <input className='idea-input'type="text" value={idea} onChange={((e) => setIdea(e.target.value))} />
            <input className= 'button' type="submit" />

        </form>

    </div>
    )

}
export default CreateIdeaForm     