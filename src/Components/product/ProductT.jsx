import images5 from "../../assets/suv_elektrik_tasarimi.mp4";
import "./ProductT.css";

const ProductT = () => {
  return (
    <div className="product2">
      <div className="product2-container">
        <div className="product2-left">
          <h2>Togg SUV Modeli</h2>
          <p>
            Tamamen elektrikli yerli otomobilin ön ve arka aksında iki elektrik
            motoru bulunuyor. Bu sayede aracın dört tekerlekten çekişli bir
            model olacağını biliyoruz. Toplamda 400 beygir güç üretecek
            motorlar, yerli otomobilin 0-100 km/s hızlanmasını 4.8 saniyede
            tamamlamasına imkan verecek. 200 beygir güç üretecek arkadan itişli
            (RWD) versiyonda ise söz konusu süre 7.6 saniyeye çıkacak. Araç
            menziline %20 katkı sağladığı söylenen geri kazanımlı frenleme
            teknolojisiyle de donatılan yerli otomobilin maksimum hızı 180 km/s
            ile sınırlandırılmış.
          </p>
        </div>

        <div className="product2-right">
          <video className="image" autoPlay loop muted>
            <source src={images5} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default ProductT;
