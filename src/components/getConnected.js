import Like from "./like"
import Share from "./share"
import Add from "./add"
import Delete from "./delete"

function GetConnected(){
    
    return(
        <div>
            <Like/>
            <Share/>
            <Add/>
            <Delete />
        </div>
    )
}

export default GetConnected