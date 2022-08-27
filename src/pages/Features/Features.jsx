import "./Features.scss";

const Features = () => {
  return (
    <section id="features">
      <div class="live-longer">
        <div className="title">
          <i class="fas fa-heartbeat"></i>
          <h5>Live Longer</h5>
        </div>
        <p>
          Improve your heart health, build bullet-proof joints, build a strong
          body that you can be proud of and lower the risk of chronic diseases
          like diabetes type 2 and high blood pressure.
        </p>
      </div>
      <div class="burn-fat">
        <div className="title">
          <i class="fas fa-fire-alt"></i>
          <h5>Burn fat</h5>
        </div>
        <p>
          Decrease your resting heart rate and increase your metabolism for
          <b> 24 hours</b> after our unique workouts to cut off excessive fat
          and sculpt your body like an artist.
        </p>
      </div>
      <div class="home-workout">
        <div className="title">
          <i class="fas fa-running"></i>
          <h5>In-Home Workouts</h5>
        </div>
        <p>
          All workouts can be done from the comfort of your home. No gym is
          required to build the strongest version of yourself. If you have a
          basic equipment like a pull up bar hung on your room's door you're
          good to go!
        </p>
      </div>
    </section>
  );
};

export default Features;
