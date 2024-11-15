import React from "react";
import resume from "../../../Assets/Jarrett Kolts Resume.PDF";


//import coding from "../../assets/images/development.png"
//<img src={coding} alt="skills"/>

const Resume = () => (
    <section className="container" id="resume">

        <button className="btn btn-lg">
            <a href={resume} download="Jarrett Kolts Resume"><i class="bi bi-download"></i>  Download Resume</a>
        </button>


        <h1>Skills</h1>

        <div className="skills-wrapper">
            <div className="skills">
                <ul>
                    <br />
                    <li>Git</li>
                    <li>MERN</li>
                    <li>MySQL</li>
                    <li>Sequelize ORM/ Mongoose ODM</li>
                    <li>React</li>
                    <li>NoSQL (MongoDB)</li>
                    <li>GraphQL/ Apollo Server</li>
                    <li>Node.js</li>
                    <li>Progressive Web Applications</li>
                    <li>Object-oriented Programming</li>
                    <li>Express.js</li>
                    <li>HTML/ CSS/ JavaScript</li>

                </ul>
            </div>
        </div>

        <div className="row" style={{padding: 60}}>
            <img src={working} id="working" className="mx-auto" alt="Hard at work!" />
        </div>

    </section>
)

export default Resume;