import "./Productc.css";
import img1 from "../../assets/be651c97f044067e38613d9fb4919f56.jpg";
import img2 from "../../assets/ec101a441868cb0efd419dac7706c002.jpg";
// import img3 from "../../assets/134b5d3fa09403c3b57e24c8bcdb047a.jpg";
import img4 from "../../assets/6a66ef1469f97592f44fc9e8070871e8.jpg";
const Productc = () => {
  return (
    <div>
      {" "}
      <section className="products">
        <div className="section-title">
          <h2>TOGG MODELLERİ</h2>
          <p>
            Mobilite deneyimini baştan sona değiştiren, oluşturduğu 3. yaşam
            alanı ile ihtiyaç duyduğunuz tek akıllı cihaz.
          </p>
        </div>
        <div className="product-wrapper">
          <ul className="product-list">
            <li className="product-item">
              <div className="product-image">
                <a href="#">
                  <img src={img1} alt="" />
                </a>
              </div>
              <div className="product-info">
                <a href="$" className="product-title">
                  TOGG SUV MODELİ LACİVERT
                </a>
                <ul className="product-star">
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-half"></i>
                  </li>
                </ul>
                <div className="product-prices">
                  <strong className="new-price">1.600.000</strong>
                </div>
                <button className="button" role="button">
                  <span className="text">SATIN AL</span>
                </button>

                <div className="product-links">
                  <button>
                    <i className="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <a href="#">
                    <i className="bi bi-eye-fill"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="product-item">
              <div className="product-image">
                <a href="#">
                  <img src={img2} alt="" />
                </a>
              </div>
              <div className="product-info">
                <a href="$" className="product-title">
                  TOGG SUV MODELİ KIRMIZI
                </a>
                <ul className="product-star">
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-half"></i>
                  </li>
                </ul>
                <div className="product-prices">
                  <strong className="new-price">1.700.000</strong>
                </div>
                <button className="button" role="button">
                  <span className="text">SATIN AL</span>
                </button>

                <div className="product-links">
                  <button>
                    <i className="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <a href="#">
                    <i className="bi bi-eye-fill"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
            </li>
            {/* <li className="product-item">
                <div className="product-image">
                  <a href="#">
                    <img
                      src={img3}
                      style={{ height: "200px", width: "360px" }}
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-info">
                  <a href="$" className="product-title">
                    TOGG SEDAN MODELİ
                  </a>
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <div className="product-prices">
                    <strong className="new-price">2.000.000</strong>
                  </div>

                  <div className="product-links">
                    <button>
                      <i className="bi bi-basket-fill"></i>
                    </button>
                    <button>
                      <i className="bi bi-heart-fill"></i>
                    </button>
                    <a href="#">
                      <i className="bi bi-eye-fill"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-share-fill"></i>
                    </a>
                  </div>
                </div>
              </li> */}
            <li className="product-item">
              <div className="product-image">
                <a href="#">
                  <img
                    src={img4}
                    alt=""
                    style={{ height: "278px", width: "480px" }}
                  />
                </a>
              </div>
              <div className="product-info">
                <a href="$" className="product-title">
                  TOGG SEDAN MODELİ
                </a>
                <ul className="product-star">
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-fill"></i>
                  </li>
                  <li>
                    <i className="bi bi-star-half"></i>
                  </li>
                </ul>
                <div className="product-prices">
                  <strong className="new-price">2.250.000</strong>
                </div>
                <button className="button" role="button">
                  <span className="text">SATIN AL</span>
                </button>
                <div className="product-links">
                  <button>
                    <i className="bi bi-basket-fill"></i>
                  </button>
                  <button>
                    <i className="bi bi-heart-fill"></i>
                  </button>
                  <a href="#">
                    <i className="bi bi-eye-fill"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-share-fill"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Productc;
