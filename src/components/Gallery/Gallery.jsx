import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Gallery() {
  return (
    <div className="container my-5 py-5">
      <div className='row'>
      <div className="col-md-3">
        <ul>
          <li>
            <Link className='text-info' to=''>web</Link>
          </li>
          <li>
            <Link className='text-info' to='mobile'>mobile</Link>
          </li>
        </ul>
      </div>
      <div className="col-md-9">
      <Outlet></Outlet>
      </div>
    </div>
    </div>
  )
}
