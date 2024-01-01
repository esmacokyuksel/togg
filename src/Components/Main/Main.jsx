import videos from "../../assets/togg-video.mp4";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main">
      <div className="main-container">
        <div className="text-container-right">
          <h2>Bir otomobilden fazlası</h2>
          <h3>
            Birbirine bağlı akıllı cihaz ve servisler tasarlayarak
            kullanıcıların hayatlarını kolaylaştıran bir ekosistem inşa
            ediyoruz.
          </h3>
          <p>
            Sıfır emisyonla sürdürülebilir bir gelecek tasarlıyoruz.Görünenden
            fazlası, sınırsız hayallerin başlangıç noktası. Hem insan odaklı hem
            de çok akıllı. Hayatla bağlantılı, herkesle paylaşımlı.
          </p>
          Durmadan yenilik, gücü elektrik. Hem empatik, hem akıllı.
          <br></br>
          Mobilite deneyimini baştan sona değiştiren, oluşturduğu 3. yaşam alanı
          ile ihtiyaç duyduğunuz tek akıllı cihaz.
        </div>
        <div className="image-container-left">
          <video className="image" autoPlay loop muted>
            <source src={videos} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Main;
