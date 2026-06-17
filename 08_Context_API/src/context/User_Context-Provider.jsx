import React, { Children } from "react";
import UserContext from "./User_Context";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null) // React.useState ko bhi use kr skte h ur       useState ko import krne ki jrurt nhi padti phir.
    
    return(
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider