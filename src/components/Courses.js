import React, {useState, useEffect} from 'react'
import { getCourse } from '../config/Myservice';

import { useNavigate } from 'react-router-dom';
export default function Courses() {
    const [coursesData, setCoursesData] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        getCourse()
        .then(res=>setCoursesData(res.data))
        .catch(err=> console.log(err))

    },[])
    const userInfo = (id) =>{
        navigate(`/userInfo/${id}`);
    }
  return (
    <div className="container">
        <h2 className="mt-3 mb-3">Courses</h2>
        <div className="row">
            {coursesData.map((course)=>(
                <div className="col-sm-4" key={course.id}>
                 <div class="card" style={{width: "18rem"}}>
                 <h4 class="card-title">{course.courses_name}</h4>
                   <img src={course.image} class="card-img-top" alt="course-image"/>
                    <div class="card-body">
                   
                   <b className="card-text">Price: {course.price}</b>
                   <div>
                   <button class="btn btn-primary" onClick={()=> userInfo(course.id)}>Enquiry</button>
                   </div>
                </div>
               </div>
                </div>
            ))}

        </div>
    </div>
  )
}
