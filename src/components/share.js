import { faShare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Share Component
function Share() {

    var iconStyle = {
        margin: 15,
        
        
    }
    return (
        <FontAwesomeIcon icon={faShare} style={iconStyle}/>
    )
}

export default Share