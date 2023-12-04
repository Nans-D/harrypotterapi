import "./Slytherin.css";
import Card from "../../components/Card/Card";

const Slytherin = () => {
  const SlytherinClass = [
    {
      img: "https://ik.imagekit.io/hpapi/draco.jpg",
      name: "Draco Malfoy",
      house: "Slytherin",
      secondName: "Fils à papa",
    },
    {
      img: "https://ik.imagekit.io/hpapi/snape.jpg",
      name: "Severus Snape",
      house: "Slytherin",
      secondName: "Goat",
    },
    {
      img: "https://ik.imagekit.io/hpapi/bellatrix.jpg",
      name: "Bellatrix Lestrange",
      house: "Slytherin",
      secondName: "Folle Furieuse",
    },
  ];
  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://images.desenio.com/zoom/wb0014-8harrypotter-slytherin50x70-64059-84203.jpg"
        alt=""
      />
      <div className="gryffindor-house-container">
        {SlytherinClass.map((item) => {
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

export default Slytherin;
