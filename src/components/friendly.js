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
            <Avatar img={props.img}/>
            <UserName name={props.name}/>
            <GetConnected deleteClick={props.deleteClick}/>
            
        </div>
    )
}

// function Friendly(props) {

//     var malePeopleItem = props.people.filter(function(person) {
//       return person.gender === 'male';
//     }).map(function(person) {
//       var friendlyStyle = {
//         display: 'inline-block',
//         margin: 20,
//         height: 300,
//         width: 200,
//         padding: 0,
//         backgroundColor: "#FFF",
//         WebkitFilter: "drop-shadow(0px 0px 5px #555)",
//         filter: "drop-shadow(0px 0px 5px #555)"
//       };
//         return <div key={person.id} style={friendlyStyle}>
//           <Avatar img={person.img}/>
//           <UserName name={person.name}/>
//           <GetConnected/>
//         </div>
//     });
//     var femalePeopleItem = props.people.filter(function(person) {
//       return person.gender === 'female';
//     }).map(function(person) {
//       var friendlyStyle = {
//         display: 'inline-block',
//         margin: 20,
//         height: 300,
//         width: 200,
//         padding: 0,
//         backgroundColor: "#FFF",
//         WebkitFilter: "drop-shadow(0px 0px 5px #555)",
//         filter: "drop-shadow(0px 0px 5px #555)"
//       };
//         // Return the exact same content but make sure JSX is rendering the right JavaScript object (person)
//         return <div key={person.id} style={friendlyStyle}>
//           <Avatar img={person.img}/>
//           <UserName name={person.name}/>
//           <GetConnected/>
//         </div>
//     });

//     return(
//       <div>
//         <h1>Males</h1>
//         <div>{malePeopleItem}</div>
//         <hr/>
//         <h1>Females</h1>
//         <div>{femalePeopleItem}</div>
//       </div>
//     );
//   }
//   const people = [{id: 0, name: "Rob", gender: "male", img: "https://pbs.twimg.com/profile_images/699422966556168193/zUm4vhAo.jpg"},
//   {id: 1, name: "Charles", gender: "male", img:"https://static.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg"},
//   {id: 2,  name: "Natalie", gender: "female", img: "https://static.pexels.com/photos/509195/pexels-photo-509195.jpeg"},
//   {id: 3, name: "Jenny", gender: "female", img: "https://static.pexels.com/photos/517061/pexels-photo-517061.jpeg"},
//   {id: 4, name: "Sarah", gender: "female", img: "https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg"},
//   {id: 5, name: "Josh", gender: "male", img: "https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg"},
//   {id: 6, name: "Kenny", gender: "male", img: "https://static.pexels.com/photos/325682/pexels-photo-325682.jpeg"},
//   {id: 7, name: "John", gender: "male", img: "https://static.pexels.com/photos/45882/man-crazy-funny-dude-45882.jpeg"},
//   {id: 8, name: "Alisha", gender: "female", img: "https://static.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg"}
//   ];
  

export default Friendly;