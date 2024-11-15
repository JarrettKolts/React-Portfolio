import React from "react";

function Footer() {
    return (
        <footer className="container">
            <div className="socials">
                <h3>Contact</h3>             
                <a href="https://github.com/JarrettKolts" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>

                <a href="mailto: Jarrettk51@gmail.com">
                    <i className="bi bi-envelope-fill" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <a href="https://www.linkedin.com/in/JarrettKolts" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin" style={{ fontSize: 1.75 + 'rem' }}></i>
                </a>
                <p>Jarrettk51@gmail.com</p>
            </div>

            
        </footer>
    )
}

export default Footer;