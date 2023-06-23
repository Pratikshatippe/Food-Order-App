import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    
    render(){
        const {name, location, role} = this.props;

        return(
            <div className="user-card">
                <h1>count = {this.state.count}</h1>
                <button className="primary-btn" onClick={()=>
                    this.setState({
                        count: this.state.count + 1
                    })
                }>Increment</button>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>{role}</h3>
            </div>
        )
    }
}

export default UserClass;