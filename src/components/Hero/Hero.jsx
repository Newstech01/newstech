import "./hero.css";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-box">
          <h3 className="hero-title"> Olá empreendedor</h3>
          <h1 className="hero-main_title">Vamos expandir seu negócio?</h1>
          <h2 className="hero-sub_title">Torne ele online!</h2>
          <div className="hero-btn_box">
            <button className="hero-btn">
              <a href="#contact">COMECE AGORA</a>
            </button>
          </div>
        </div>
        <div className="hero-box_image">
          <img className="hero-img" src={hero} alt="imagem mobile" />
        </div>
      </section>
    </>
  );
}
