function Footer(){
    return(
        <footer>
            <div className="contact">
                <span className="contact-header"><i className="fa-solid fa-envelope"></i> Email</span>
                <p>Reach out or just say hello with an email to aaronsoliz99@gmail.com</p>
                <a href="https://www.linkedin.com/in/aaron-soliz-b78841290/" target="_blank" rel="noopener noreferrer"><span className="contact-header"><i className="fa-brands fa-linkedin"></i> LinkedIn</span></a>
                <p>Check out my profile on LinkedIn</p>
                <a href="https://github.com/Aaron-Sol1z" target="_blank" rel="noopener noreferrer"><span className="contact-header"><i className="fa-brands fa-github"></i> GitHub</span></a>
                <p>Check out my other projects on GitHub</p>
            </div>
            <p>&copy; {new Date().getFullYear()} Aaron Soliz</p>
            <p>Made with 
                <i className="fa-brands fa-html5"></i> HTML5, 
                <i className="fa-brands fa-css3-alt"></i> CSS, 
                <i className="fa-brands fa-js"></i> JavaScript,
                <i className="fa-brands fa-react"></i> React
            </p>
            <span>Powered by <a href="https://www.themealdb.com/" target="_blank" rel="noopener noreferrer">themealdb</a></span>
        </footer>
    )
}
export default Footer;