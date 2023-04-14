import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
   
  return (
    <div>
        	{/* <!-- Start of Home section
		============================================= --> */}
		  <div style={{ backgroundColor: "#738CE0" }}>
                <figure style={{ padding: "30px" }}>
                    <blockquote class="blockquote">
                        <h2 style={{ color: "#000" }}> We are Hiring !!</h2>
                    </blockquote>
                    <figcaption class="blockquote-footer" style={{ color: "#000" }}>
                        EngineerHUB is hiring students to encourage their effort & help them excel in the following domain
                    </figcaption>
                </figure>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: " 40px"

                }}>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hiring for DevOps <br/> Mentor</h5>
                            <p class="card-text">Techstack: Docker, Kubernates and Python</p>
                            <p class="card-text">Experience: 0-1 years</p>

                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Eligibility: Min 6 CGPA</li>
                            <li class="list-group-item">Location: Ghaziabad</li>
                            <li class="list-group-item">Last Date: 05-01-2023</li>
                        </ul>
                        <div class="card-body">
                            <Link class="btn" to="/" target="_blank" style={{ color: "#fff" }}>Apply</Link>

                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hiring for Backend Devloper</h5>
                            <p class="card-text">Techstack: Node.js</p>
                            <p class="card-text">Experience: 0-2 years</p>

                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Eligibility: Min 60% in 10th and 12th class</li>
                            <li class="list-group-item">Location: Ghaziabad</li>
                            <li class="list-group-item">Last Date: 24-02-2023</li>
                        </ul>
                        <div class="card-body">
                            <Link class="btn" to="/" target="_blank" style={{ color: "#fff" }}>Apply</Link>

                        </div>
                    </div>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src="..." class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Hiring for Campus Ambassador</h5>
                            <p class="card-text">Techstack: Leadership, Team Work</p>
                            <p class="card-text">Experience: 0-1 years</p>

                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Eligibility: Min 5 CGPA</li>
                            <li class="list-group-item">Location: Ghaziabad</li>
                            <li class="list-group-item">Last Date: 10-01-2023</li>
                        </ul>
                        <div class="card-body">
                            <Link class="btn" to="/" target="_blank" style={{ color: "#fff" }}>Apply</Link>

                        </div>
                    </div>

                </div>
            </div>
	{/* <!-- End of Home section
		============================================= --> */}
    </div>
  )
}

export default Home