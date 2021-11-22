import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Delete = ({ deleteClick }) => {

    var iconStyle = {
        margin: 15,
    }

    return (
        <FontAwesomeIcon icon={faTrash} style={iconStyle} onClick={deleteClick} />
    )
}

export default Delete
