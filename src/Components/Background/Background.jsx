import video1 from "../../assets/film.mp4";
import image1 from "../../assets/togg1 (2).jpg";
import image2 from "../../assets/togg2-2.jpg";
import image3 from "../../assets/togg6.jpg";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in item" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background item" alt=""></img>;
  } else if (heroCount === 1) {
    return <img src={image2} className="background item" alt=""></img>;
  } else if (heroCount === 2) {
    return <img src={image3} className="background item" alt=""></img>;
  }
};

export default Background;
Background.propTypes = {
  heroCount: PropTypes.number.isRequired,
  playStatus: PropTypes.string,
};
