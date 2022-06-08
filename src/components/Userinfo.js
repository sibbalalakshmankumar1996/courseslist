import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../config/Myservice'; 

export default function Userinfo() {
    const [userData, setUserData] = useState({fname:'', email:'', age:'', mobile:'', course:'', errorMsg:''});
    const navigate = useNavigate();
    
    const handler = (event)=>{
        const {name, value} = event.target;
        setUserData({...userData, [name]:value});
        
    }
    const getUserDetails = (event) =>{
        event.preventDefault();
        //console.log(userData);
        let nameRegex = /^[A-Za-z ]+$/;
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}([\.]?\w{2,3})*$/;
        let ageRegex = /^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
        let mobileRegex = /^[6-9][0-9]{9}$/;

        if (userData.fname!=='' && userData.email!=='' && userData.age!=='' && userData.mobile!==''){
            setUserData({...userData, errorMsg:''})

            //console.log(nameRegex.test(userData.fname));
            if(nameRegex.test(userData.fname)){
                //console.log(emailRegex.test(userData.email))
                if(emailRegex.test(userData.email)){
                    //console.log(ageRegex.test(userData.age));
                    if(ageRegex.test(userData.age)){
                            //console.log(mobileRegex.test(userData.mobile));
                            if(mobileRegex.test(userData.mobile)){
                                console.log(userData);
                                addUser(userData).then(res=>
                                    navigate("/userdetails"))
                            }
                            else{
                                setUserData({...userData, errorMsg:"Enter a valid 10 digit number"});
                            }
                    }
                    else{
                        setUserData({...userData, errorMsg:"Age should be greater than 17 and less than 121"});
                    }

                }
                else{
                    setUserData({...userData, errorMsg:"Enter a valid email address"});
                }

            }
            else{
                setUserData({...userData, errorMsg:"Only Alphabets allow in this field"});
            }

        }
        else{
            setUserData({...userData, errorMsg:"Please fiil the input field"});

        }
        

    }
    
    
  return (
    <>
    <h2>User Details</h2>
    {userData.errorMsg!=='' &&
    <p style={{color:'red'}}>{userData.errorMsg}</p>}
    <div className="container">
        <form onSubmit={getUserDetails}>
            <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" name="fname" onChange={handler} />
            </div>
            
            <div className="form-group">
                <label>E-mail</label>
                <input type="email" className="form-control" name="email" onChange={handler} />
            </div>
            <div className="form-group">
                <label>Age</label>
                <input type="number" className="form-control" name="age" onChange={handler}/>
            </div>
            <div className="form-group">
                <label>Mobile No</label>
                <input type="number" className="form-control" name="mobile" onChange={handler} />
            </div>
            <div className='form-group mt-2 mb-4'>
                <label htmlFor="courseId">Select Course</label>
                <select id='courseId' className='form-control' name='course' onChange={handler}>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="Java script">Java Script</option>
                <option value="React JS">React js</option>
                <option value="Angular JS">Angular js</option>
            </select>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-success" value="Submit"/>
            </div>
        </form>
    </div>
    </>
  )
}
