import React, {useState, useEffect} from 'react'
import { getUserDetails } from '../config/Myservice';

export default function Userdetails() {
    const [user, setUser] = useState([]);
    const [noUser, users] = useState(true)

    useEffect(()=>{
        getUserDetails()
        .then(res=>{
            if(res){
                setUser(res.data)
            }
        })
        console.log(user)
        console.log(user.length)
        if(user.length>0){
            users(false)
        }
        else{
            users(true)
        }

    })

    

  return (
      <>
      <h2 className="mb-3 mt-3">User Details</h2>
    
      {noUser? <h3>There is no users</h3>:(
     <div className="container">
         <div className="row">
             {user.map(eachUser=>
                <div className="col-sm-4" key={eachUser.id}>
                <div class="card" style={{width: "18rem"}}>
                 <h4 class="card-title">Fullname: {eachUser.fname}</h4>
                    <div class="card-body">
                     <p className="card-text">Email: {eachUser.email}</p>
                     <p className="card-text">Course: {eachUser.course}</p>
                     <span className="card-text">Age: {eachUser.age}</span><br/>
                     <a className="card-text" href="card-text">Mobile No: {eachUser.mobile}</a>
                </div>
               </div>

                </div>
                )}
         </div>

    </div>
    )
       }
      </>
  )
}
