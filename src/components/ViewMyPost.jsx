import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ViewMyPost = () => {
  const [data, changeData] = useState([])
  const fetchData = () => {
    axios.post("http://127.0.0.1:8000/viewAll").then(
      (response) => {
        changeData(response.data)
      })
  }



  useEffect(() => { fetchData() }, [])
  return (
    <div><Navbar/><br></br><div className="container">
      <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            {data.map(
              (value, index) => {
                return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card">
                <h5 class="card-header">Blogs</h5>
                <div class="card-body">
                  <h5 class="card-title">{value.title}</h5>
                  <p class="card-text">{value.message}</p>
                  <footer class="blockquote-footer">Written By <cite title="Source Title">Source Title</cite></footer>
                  <Link to="#" class="btn btn-primary">View Profile</Link>
                </div>
              </div></div>
               })} </div>
        </div>
      </div>
    </div></div>
  )
}

export default ViewMyPost