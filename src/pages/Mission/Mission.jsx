import "./Mission.scss";
const Mission = () => {
  return (
    <section id="mission">
      <div class="mission-header">
        <h2>My Mission</h2>
        <h3>
          “All good things are <span>wild</span> and <span>free</span>.”
        </h3>
        <span className="author">
          — Henry David Thoreau, <span>Walden</span>
        </span>
      </div>
      <div class="mission-paragraph">
        <p>
          WILDBODIES was found after years of personal struggle and I wanted it
          to be my message to people. As a survivor of 12 years of war, I have
          been stifled in every aspect of life. So, WILDBODIES came to life as a
          means to express my hunger for freedom and to make people experience
          freedom in their physical abilities in a unique way like they never
          experienced before.
        </p>
        <button class="btn paypal-btn">
          <i class="fab fa-paypal fa-1x"></i> FUND MY MISSION!
        </button>
      </div>
    </section>
  );
};

export default Mission;
