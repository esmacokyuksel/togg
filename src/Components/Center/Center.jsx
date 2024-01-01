import imagesr from "../../assets/home_join_to_presale_bg.webp";
import "./Center.css";

const Center = () => {
  return (
    <div className="image-wrapper">
      <div className="image-text">
        <h2 style={{ marginLeft: "180px" }}>Size Özel Tasarım</h2>
        <br></br> <br></br>
        <h4>Akıllı cihazınızı beğenilerinize göre şekillendirmeye başlayın.</h4>
        <br></br> <br></br>
        <button className="button-64" role="button">
          <span className="text">İNCELE</span>
        </button>
      </div>
      <img src={imagesr} alt="" />
    </div>
  );
};

export default Center;
