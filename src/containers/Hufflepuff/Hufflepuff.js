import "./Hufflepuff.css";
import Card from "../../components/Card/Card";

const Hufflepuff = () => {
  const HufflepuffClass = [
    {
      img: "https://ik.imagekit.io/hpapi/cedric.png",
      name: "Cedric Diggory",
      house: "Hufflepuff",
      secondName: "Dead Body",
    },
    {
      img: "https://static.posters.cz/image/750/affiches-et-posters/les-animaux-fantastiques-les-crimes-de-grindelwald-newt-scamander-i63896.jpg",
      name: "Newt Scamander",
      house: "Hufflepuff",
      secondName: "Le fou ",
    },
    {
      img: "https://www.encyclopedie-hp.org/wp-content/uploads/sites/4/2016/08/hannah-1.jpg",
      name: "Hannah Abbott",
      house: "Hufflepuff",
      secondName: "GNGNGN",
    },
  ];
  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://img.posterstore.com/zoom/wb0015-8harrypotter-hufflepuff50x70-52832-46042.jpg"
        alt=""
      />
      <div className="gryffindor-house-container">
        {HufflepuffClass.map((item) => {
          return (
            <Card
              img={item.img}
              name={item.name}
              house={item.house}
              secondName={item.secondName}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Hufflepuff;
