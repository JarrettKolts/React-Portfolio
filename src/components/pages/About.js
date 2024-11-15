import React from "react";
import pfp from "../../../Assets/IMG_3503.JPG"

const About = () => (
    <section>
        <div className="row">
            <img src={pfp} id="pfp" className="mx-auto" alt="Jarrett Kolts" />
        </div>

        <div className="about">
            <h1>Hello, my name is Jarrett</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </section>
)

export default About;