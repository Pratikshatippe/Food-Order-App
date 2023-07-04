import React from "react";
import UserContext from "../Store/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"PT",
                location:"Pune"
            },
            count:0
        }
    }

    componentDidMount=async()=>{
        this.timer = setInterval(() => {
            console.log("react class based app up");
        }, 1000);
        const data = await fetch("https://api.github.com/users/Pratikshatippe");
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo:json
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    
    render(){
        const {name, location,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h1>count = {this.state.count}</h1>
                <button className="primary-btn" onClick={()=>
                    this.setState({
                        count: this.state.count + 1
                    })
                }>Increment</button>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <UserContext.Consumer>
                    {({user})=><h4>{user.name}</h4>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default UserClass;