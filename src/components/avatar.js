// Avatar Component
function Avatar(props){

    var avatarStyle = {
        marginLeft: 0,
        marginTop: 20,
        height: 150,
        width: 150,
        borderRadius: "50%",
        backgroundColor: "#fff",
        WebkitFilter: "drop-shadow(1px 4px 4px #555)",
        filter: "drop-shadow(1px 4px 4px #555)"

       
    }

    return(
        <img src={props.img} alt="profile pic" style={avatarStyle}/>
    )
}

export default Avatar