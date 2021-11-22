import Like from "./like"
import Share from "./share"
import Add from "./add"
import Delete from "./delete"

function GetConnected({deleteClick}){
    
    return(
        <div>
            <Like/>
            <Share/>
            <Add/>
            <Delete deleteClick={deleteClick} />
        </div>
    )
}

export default GetConnected