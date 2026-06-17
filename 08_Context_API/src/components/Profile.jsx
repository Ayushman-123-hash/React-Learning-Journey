import React, { useContext} from 'react'
import UserContext from '../context/User_Context'


function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <div className='justify-center text-center items-center m-2'>Please Login</div>

    return <div className='justify-center text-center items-center m-2'>Welcome {user.username}</div>

}

export default Profile
