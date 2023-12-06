import "./Hufflepuff.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

const Hufflepuff = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/hufflepuff"
      );

      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchData();
  }, []);
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
        {data.map((item) => {
          return (
            <Card
              img={item.image}
              name={item.name}
              house={item.house}
              secondName={item.alternate_names[0]}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Hufflepuff;
