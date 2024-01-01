import "./About.css";
import img from "../../assets/6a66ef1469f97592f44fc9e8070871e8.jpg";
const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h3>Yerli Otomobil TOGG Hakkında Her Şey</h3>
        <p>
          Türkiye’nin Otomobili Girişim Grubu Sanayi ve Ticaret A.Ş. (TOGG),
          Anadolu Grubu (%19), BMC (%19), Kök Grubu (%19), Turkcell (%19), Zorlu
          (%19) ve Türkiye Odalar ve Borsalar Birliği (%5)’nin ortaklığında 25
          Haziran 2018 de kuruldu
        </p>

        <p>
          İlk aşamada önce SUV, sonra SEDAN modeller ile üretim başlayacak olsa
          da 2030 yılına kadar 5 farklı modelin satışta olması bekleniyor:
          c-SUV, c-SEDAN, c-HATCHBACK, b-SUV, c-MPV
        </p>
        <p>
          CEO — Mehmet Gürcan Karakaş. 2004 yılında Bosch Türkiye’ye Genel Müdür
          olarak atandı. 2007 yılında Bosch’un Almanya’daki merkezine geçen
          Karakaş, TOGG yönetiminin başına gelmeden önce Bosch’ta Otomotiv Satış
          Sonrası Hizmetler’den sorumlu Kıdemli Başkan Yardımcısı (Senior Vice
          President, Automotive Aftermarket) olarak görev yapıyordu. COO —
          Sergio Rocha, General Motors’da üst düzey yöneticiydi. Artık TOGG’da
          operasyon ve üretimden sorumlu olacak. Baş Tasarımcı — Murat Günak,
          TOGG’un baş tasarımcısı daha önce Peugeot, Volkswagen ve Mercedes’in
          tasarım ekibinde önemli roller üstlenmişti.
        </p>
        <br></br>
        <img src={img} alt="" />
        <br></br>
        <h3>TOGG Açılımı Nedir?</h3>
        <p>
          TOGG isim olarak herkes tarafından merak edilmektedir. Akılda kalıcı
          bir isme sahip olan TOGG’un açılımı Türkiye’nin Otomobili Girişim
          Grubu ve Sanayi Ticaret A.Ş ‘nin kısaltılmış halidir. Türkiye’de yerli
          otomobil üretimi kararı alan kurum ve şirketlerin vermiş olduğu ortak
          bir isimdir. TOGG üzerinde çalışan ekibin kısaltmasından oluşmaktadır.
        </p>
        <p>
          TOGG üretim yeri Bursa’nın Gemlik ilçesidir. Bursa Gemlik’te TOGG
          fabrikası Cumhuriyetin 99. Yılı olan 29 Ekim 2022 tarihinde
          yapılmıştır. Otomobilin 2023 yılının ilk çeyreğinde yollara inmesi ve
          2030 yılına kadar bir milyon araç üretilmesi planlanmaktadır. Üretim
          fabrikasında yaklaşık olarak 4300 kişinin istihdam edilmesi
          düşünülüyor. Beş farklı modelde yılda 175 bin araç üretimi
          planlanmaktadır. TOGG’a yatırım için gümrük vergisi muafiyeti, Kdv de
          istisna, sigorta primi desteği ve farklı vergi indirimleri ile 31 bin
          araçlık alım için devlet desteği garantisi verilmiştir.
        </p>
      </div>
    </div>
  );
};

export default About;
