import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><nav class="navbar navbar-expand-lg " style={{ backgroundColor: '#B4CCDD' }}>
      <div class="container-fluid">
        <Link class="navbar-brand" to="#">Bloggers World</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/viewMy">Blog Feeds</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/viewAll">View My Blogs</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/add">Add Post</Link>
            </li>
          </ul>
          <span class="navbar-text" style={{ marginRight: '15px' }}>
            <button class="btn btn-info" type="submit">
              <Link class="nav-link active" aria-current="page" to="/">Login</Link></button>
          </span>
          <span class="navbar-text" style={{ marginRight: '20px' }}>
            <button class="btn btn-warning" type="submit">
              <Link class="nav-link active" aria-current="page" to="/signup">Register</Link></button>
          </span>
        </div>
      </div><hr />
    </nav></div>

  )
}

export default Navbar