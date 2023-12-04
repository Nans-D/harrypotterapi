import "./Gryffindor.css";
import Card from "../../components/Card/Card";

const Gryffindor = () => {
  const GryffindorClass = [
    {
      img: "https://ik.imagekit.io/hpapi/harry.jpg",
      name: "Harry Potter",
      house: "Gryffindor",
      secondName: "Le Dieu",
    },
    {
      img: "https://ik.imagekit.io/hpapi/hermione.jpeg",
      name: "Hermione Granger",
      house: "Gryffindor",
      secondName: "GNGNGNGNNG",
    },
    {
      img: "https://ik.imagekit.io/hpapi/ron.jpg",
      name: "Ron Weasley",
      house: "Gryffindor",
      secondName: "Le roux",
    },
  ];
  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://images.desenio.com/zoom/wb0013-8harrypotter-gryffindor50x70-97281-41200.jpg"
        alt=""
      />
      <div className="gryffindor-house-container">
        {GryffindorClass.map((item) => {
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

export default Gryffindor;
