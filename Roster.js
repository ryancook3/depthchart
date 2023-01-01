import JerseyPNG from "../images/sweater.png";

const Roster = () => {
  return (
    <>
      <div>
        <section className="roster-list">
          <div className="left-wing">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
          <div className="center">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
          <div className="right-wing">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
          <div className="left-d">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
          <div className="right-d">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
          <div className="goalie">
            <img src={JerseyPNG} alt="" />
            <span className="player-label">sadg</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Roster;
