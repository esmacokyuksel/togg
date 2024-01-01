import images4 from "../../assets/togg-sedan-konsept-21.jpg";
import "./ProductV.css";
const ProductV = () => {
  return (
    <div className="product1">
      <div className="product1-container">
        <div className="product1-right">
          <img className="image" src={images4} />
        </div>
        <div className="product1-left">
          <h2>Togg Sedan Modeli</h2>
          <p>
            Tamamen elektrikli yerli otomobilin ön ve arka aksında iki elektrik
            motoru bulunuyor. Bu sayede aracın dört tekerlekten çekişli bir
            model olacağını biliyoruz. Toplamda 400 beygir güç üretecek
            motorlar, yerli otomobilin 0-100 km/s hızlanmasını 4.8 saniyede
            tamamlamasına imkan verecek. 200 beygir güç üretecek arkadan itişli
            versiyonda ise söz konusu süre 7.6 saniyeye çıkacak. Araç menziline
            %20 katkı sağladığı söylenen geri kazanımlı frenleme teknolojisiyle
            de donatılan yerli otomobilin maksimum hızı 180 km/s ile
            sınırlandırılmış.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductV;
