import React, {useState, useEffect} from "react";
import RenderFollowIdeas from "./RenderFollowIdeas";
function FollowingPage({user, rerender, setRerender, loggedin}){
    const [follows, setFollows] = useState([])

    useEffect(() => {
        fetch(`follows/${user.id}`)
        .then(r => r.json())
        .then(setFollows)
    },[rerender])
     

    function createFollowerIdeas(){
    

        if(!follows){
            return <p>Loading...</p>

        }
        else
        {
        return (follows.map(follow => <RenderFollowIdeas follow={follow} user={user} rerender={rerender} setRerender={setRerender} loggedin={loggedin} />))}
    }

    return(
        <div>
            {loggedin ? createFollowerIdeas() : <h1>You are not Logged in!</h1>}
        </div>
    )
}
export default FollowingPage