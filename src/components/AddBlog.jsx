import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const AddBlog = () => {
  const [input, changeInput]=useState(
    {
      "blog_id":"",
      "title":"",
      "message":""
    }
  )
  const inputHandler=(event)=>{
    changeInput({...input,[event.target.name]: event.target.value})
}
const readValue=()=>{
    console.log(input)
    axios.post("http://127.0.0.1:8000/addBlog",input).then(
        (response)=>{
            alert(response.data.status)
        }
    )
}
  return (
    <div><Navbar/><div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form-label">Blog ID: </label>
                  <input type="text" className="form-control" name='blog_id' value={input.user_id} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form-label">Title :</label>
                  <input type="text" className="form-control" name='title' value={input.title} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="" className="form-label">Message</label>
                 <textarea name="message" id="" cols="30" rows="5" className="form-control" value={input.message} onChange={inputHandler}></textarea>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={readValue} className="btn btn-primary">Post Your Blog</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default AddBlog