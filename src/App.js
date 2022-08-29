
import { useEffect, useState } from "react";
import Contact from "./pages/Contact/Contact";
import Features from "./pages/Features/Features";
import Form from "./pages/Form/Form";
import Home from "./pages/Home/Home";
import Mission from "./pages/Mission/Mission";
import "./pages/style.scss";
import { ReactComponent as Arrow } from "./assets/arrow-up-2.svg";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  
  function scrollToTop() {
    // document.body.scrollTop = 0; // For Safari
    window.scrollTo({top: 0, behavior: 'smooth'});
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      scrollTop <= 600 ? setScrolling(false) : setScrolling(true);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, scrolling]);

  return (
    <div className="App">
      <Home />
      <Mission />
      <Features />
      <Form />
      <Contact />
      <button
        style={{ display: `${scrolling ? "block" : "none"}` }}
        id="topBtn"
        title="Go to top"
      >
        <Arrow className="arrow" onClick={scrollToTop}/>
      </button>
      <footer>All copyrights are reserved ⓒ 2022</footer>
    </div>
  );
}

export default App;
