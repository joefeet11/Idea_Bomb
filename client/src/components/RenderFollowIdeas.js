import React,  {useState, useEffect} from 'react';
import RenderIdeas from './RenderIdeas';
function RenderFollowIdeas({follow, user, rerender, setRerender, loggedin}) {
    
    return(
        <div>
            {follow.ideas.map( idea => <RenderIdeas idea={idea} user={user} rerender={rerender} setRerender={setRerender} usename={follow.username} loggedin={loggedin}/>)}
        </div>
    )
}
export default RenderFollowIdeas