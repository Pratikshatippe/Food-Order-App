import { useState } from "react";

const Section = (props) =>{
    const [isVisible, setIsVisibleVal] = useState(true);
    return(
        <div className="m-2 p-2 border border-black">
            <div className="text-2xl font-bold">{props.name}</div>
            {isVisible ?
            <button className="cursor-pointer" onClick={()=>setIsVisibleVal(false)}>hide</button>:
            <button className="cursor-pointer" onClick={()=>setIsVisibleVal(true)}>show</button>}
            {isVisible && <div className="">{props.description}</div>}
        </div>
    )
}

const Grocery = () =>{
    //const [visibleStatus, setIsVisible] = useState("about");
    return(
        <>
            <Section name={"About"} description="The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions."/>
            {/**isVisible = {visibleStatus === "about"} setIsVisibleVal={setIsVisible("about")}/>**/}
            <Section name={"Contact"} description="The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions."/>
            {/**isVisible = {visibleStatus === "contact"} setIsVisibleVal={setIsVisible("contact")}/>**/}
            <Section name={"Career"} description="The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions."/>
            {/**isVisible = {visibleStatus === "career"} setIsVisibleVal={setIsVisible("career")}/>**/}
            <Section name={"Portal"} description="The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions."/>
            {/**isVisible = {visibleStatus === "portal"} setIsVisibleVal={setIsVisible("portal")}/>**/}
        </>
    )
}

export default Grocery;