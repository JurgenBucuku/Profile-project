import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


//Like Component
function Like() {

    var iconStyle = {
        margin: 20,
    }
    return (
            <FontAwesomeIcon icon={faThumbsUp} style={iconStyle}/>
    )
}

export default Like