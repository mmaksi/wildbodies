import "./NavigationBar.scss"

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
        <a href="#home" className="nav-item nav-logo">wildbodies</a>
        <i className="fa-solid fa-bars"></i>
        <ul className="nav-items-list">
            <li className="nav-item"><a href="#mission">my mission</a></li>
            <li className="nav-item"><a href="#features">features</a></li>
            <li className="nav-item"><a href="#reviews">reviews</a></li>
            <li className="nav-item"><a href="#contact">contact</a></li>
        </ul>
    </div>
  )
}

export default NavigationBar