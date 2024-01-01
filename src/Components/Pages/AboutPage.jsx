import Background from "../Background/Background";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  let heroData = [
    { text1: "TOGG Hissini", text2: "keşfetmeye hazır mısın" },
    { text1: "Zevkini Yansıtan", text2: "tasarımı seç!" },
    { text1: "Eşsiz Tasarımını", text2: "ruhunda hisset..." },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <br></br>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
