import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import FriendsData from "./Data.json"

//const listName = FriendsData

 const Delete =() => {

    var iconStyle = {
        margin: 15,
    }

    // const handleDelete = (id) => {
    //     const newList = listName.filter(item => item.id !== id);
    //     setListNames(newList)
    //   }

    return (
            <FontAwesomeIcon icon={faTrash} style={iconStyle} />
    )
}

export default Delete
