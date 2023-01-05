import React, {useState, useEffect} from "react";
import CreateIdeaForm from "./CreateIdeaForm";
import RenderIdeas from "./RenderIdeas";

function HomePage({loggedin, user, ideas, setIdeas, rerender, setRerender}) {
    

   

    const [formc, setFormc] = useState(false)
    function createIdeas(){
        if(!ideas){
            return <p>Loading</p>

        }
        else
        {
        return (ideas.map(idea => <RenderIdeas idea={idea} user={user} rerender={rerender} setRerender={setRerender} usename={idea.user.username} loggedin={loggedin} />))}
    }
    


    function handlePostIdeaClick() {
       setFormc(!formc)
    }

return(
<div>
    {loggedin ? <button className= 'button' onClick={handlePostIdeaClick}>Post Idea</button> : null}
    {formc ? <CreateIdeaForm user={user} ideas={ideas} setIdeas={setIdeas} rerender={rerender} setRerender={setRerender} /> : null}
    {createIdeas()}
</div>
)}

export default HomePage