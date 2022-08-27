import NavigationBar from "../Navigation Bar/NavigationBar";
import "./Home.scss"

const Home = () => {
  return (
    <section id="home">
      <NavigationBar />
      {/* Home Cover Image */}
      <div class="brand">
        <h1>
          BE <span>WILD</span>. BE <span>FREE</span>.
        </h1>
        <a href="#subscribe">
          <button class="btn subscribe-btn">
            GET STARTED!
          </button>
        </a>
      </div>
    </section>
  );
};

export default Home;
