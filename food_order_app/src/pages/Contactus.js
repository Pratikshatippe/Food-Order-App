import { useEffect } from "react";

const Contactus = () =>{

    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("react function based app up");
        }, 1000);
        return()=>{clearInterval(timer);}
    },[])
    return(        
        <div className="about">
            <h1>Here info of contact us</h1>
        </div>

    )
}

export default Contactus;