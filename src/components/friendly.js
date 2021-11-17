import Avatar from "./avatar";
import UserName from "./userName";
import GetConnected from "./getConnected";

function Friendly(props) {

    var friendlyStyle = {
        display: 'inline-block',
        height: 300,
        width: 200,
        padding: 0,
        margin: 20,
        backgroundColor: "#fff",
        WebkitFilter: "drop-shadow(1px 4px 5px #555)",
        filter: "drop-shadow(2px 4px 5px #555)"
    }
  

    return (
        <div style={friendlyStyle}>
            <Avatar img="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <UserName name={props.name}/>
            <GetConnected />
            
        </div>
    )
}

export default Friendly;