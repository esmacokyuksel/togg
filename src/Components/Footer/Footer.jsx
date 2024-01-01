import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <a href="#">Ürünler</a>
              </li>
              <li>
                <a href="#">Güvenlik Politikası</a>
              </li>
              <li>
                <a href="#">Şart Ve Koşullar</a>
              </li>
            </ul>
          </div>

          <div className="row">
            28 Haziran 2018’de resmi kuruluşu gerçekleşen ve 18 ay sonra ilk ön
            gösterim aracını ve sedan görünümünü ortaya çıkaran TOGG, fabrikanın
            temellerini 18 Temmuz 2020 tarihinde başlattı. Üretimin ise 2022
            yılında başladı.Hala hizmete hızla devam etmekte.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
