import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ViewAllPost = () => {
  const [input, changeInput] = useState(
    {       
      "blog_id": ""      
    }
  )
  const [result, changeResult] = useState(
    []
  )
  const inputHandler = (event) => {
    changeInput({ ...input, [event.target.name]: event.target.value })
  }
  const readValue = () => {
    console.log(input)
  
    axios.post("http://127.0.0.1:8000/viewMy", input).then(
      (response) => {
        changeResult(response.data);
      }
    )
  }
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Search Blog ID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="blog_id"
                  value={input.blog_id}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row g-3">
          {result.map((value, index) => (
            <div key={index} className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="card">
                <h5 className="card-header">Blogs</h5>
                <div className="card-body">
                  <h5 className="card-title">{value.title}</h5>
                  <p className="card-text">{value.message}</p>
                  <footer className="blockquote-footer">
                    Written By <cite title="Source Title">{value.author}</cite>
                  </footer>
                  <Link to="#" className="btn btn-primary">
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAllPost;
