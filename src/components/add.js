import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//Add component
function Add() {
    var iconStyle = {
        margin: 20,
    }
    return (
        
            <FontAwesomeIcon icon={faUserPlus} style={iconStyle}/>
        
    )
}

export default Add