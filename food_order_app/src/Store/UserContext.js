import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Default Name",
        email:"defaultname@gmail.com"
    }
});

export default UserContext;