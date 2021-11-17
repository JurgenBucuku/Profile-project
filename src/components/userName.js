

// UserName Component
function UserName(props){

    var userNameStyle = {
        color: "blue",
        fontFamily: "Helvetica, sans-serif",
        fontSize: 24,
        textAlign: 'center',
        margin: 10
    }
    return(
        <h1 style={userNameStyle}>{props.name}</h1>
    )
}

export default UserName