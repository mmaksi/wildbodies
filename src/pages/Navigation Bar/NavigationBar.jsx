import "./NavigationBar.scss"

const NavigationBar = () => {
  return (
    <div class="navigation-bar">
        <a href="#home" class="nav-item nav-logo">wildbodies</a>
        <i class="fa-solid fa-bars" onclick="openNavigation()"></i>
        <ul class="nav-items-list">
            <li class="nav-item"><a href="#mission">my mission</a></li>
            <li class="nav-item"><a href="#features">features</a></li>
            <li class="nav-item"><a href="#reviews">reviews</a></li>
            <li class="nav-item"><a href="#contact">contact</a></li>
        </ul>
    </div>
  )
}

export default NavigationBar