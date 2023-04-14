import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
   
  return (
    <div>
        	{/* <!-- Start of Header section
		============================================= --> */}
		  <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" style={{ color: "#fff" }}>
                        <h3>EngineerHUB</h3>
                    </Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse" style={{ justifyContent: "end" }}>
                        <div className="navbar-nav" >
                            <Link to="/" className="nav-item nav-link active" style={{ color: "#fff" }}>Courses</Link>
                            <Link to="/" className="nav-item nav-link" style={{ color: "#fff" }}>Internship</Link>
                            <Link to="/" className="nav-item nav-link" style={{ color: "#fff" }}>Campus</Link>
                            <Link to="/" className="nav-item nav-link disabled" tabindex="-1" style={{ color: "#fff" }}>Hiring</Link>
                        </div>
                        <div className="navbar-nav ms-auto">
                            <Link to="/" className="nav-item nav-link" style={{ color: "#fff" }}>Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
	{/* <!-- End of Header section
		============================================= --> */}
    </div>
  )
}

export default Header