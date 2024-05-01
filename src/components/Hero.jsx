import PagesHeader from "../components/PagesHeader";
import "./hero.css";
function Hero() {
  return (
    <div className="HeroWrapper">
      <div className="hero_description">
        <h3>Biznesingizni keyingi bosqichga olib chiqing</h3>
        <p>
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <button className="btn">Xizmatlar bilan tanishish</button>
      </div>
      <div className="hero_img">
        {/* <img src="/hero img.png" alt="" width="458" height="258" /> */}
        <iframe width="458" height="258" src="https://www.youtube.com/embed/Hrqn-ONMrr0" title="Die Sache mit dem Homeoffice – Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Hero;
