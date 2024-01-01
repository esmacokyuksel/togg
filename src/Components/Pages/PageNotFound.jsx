import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <h1>PageNotFound</h1>
      <Link to="/product" className="btn btn-info">
        ANA SAYFAYA GİTMEK İÇİN TIKLAYIN
      </Link>
    </div>
  );
};

export default PageNotFound;
