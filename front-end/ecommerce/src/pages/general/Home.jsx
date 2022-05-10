import "./Home.scss";
import Cards from "../../components/home/Cards";

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-top ">
        <div className="section1">
          <img
            className="main-img"
            src="https://res.cloudinary.com/vengui/image/upload/v1652030909/main_sc35xs.jpg"
            alt=""
          />
          <div className="section1-text">
            <h2>BGames</h2>
            <h1>Vamo a juga!!</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              omnis accusantium fuga commodi delectus quia ab minus,
            </p>
            <button className="btn btn-danger">Shop Now</button>
          </div>
        </div>
        <div className="section2 d-flex justify-content-around">
          <img
            className="main-img-2"
            src="https://res.cloudinary.com/vengui/image/upload/v1652031453/main_2_jaarts.jpg"
            alt=""
          />
          <div className="section2-text">
            <h4>Welcome to BGames</h4>
            <h1>WE ARE A BOARD GAME STORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              quia pariatur cum, blanditiis possimus aperiam commodi in qui
              adipisci harum, eligendi tempora sed! Ipsum vitae nisi iure modi
              iste sunt. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Assumenda vero sunt nobis reprehenderit laudantium quo
              distinctio laboriosam, eaque error porro nesciunt ad quae
              necessitatibus nam magnam architecto minima aspernatur quam? Lorem
            </p>
            <button className="btn btn-danger">Learn more</button>
          </div>
        </div>
        <div className="section3 container">
          <h1>POPULAR PRODUCTS</h1>
          <div class="divider div-transparent div-dot"></div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
