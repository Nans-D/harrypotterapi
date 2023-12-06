import "./Ravenclaw.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

const Ravenclaw = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/ravenclaw"
      );

      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchData();
  }, []);
  const RavenclawClass = [
    {
      img: "https://ik.imagekit.io/hpapi/cho.jpg",
      name: "Cho Chang",
      house: "Ravenclaw",
      secondName: "Balance",
    },
    {
      img: "https://ik.imagekit.io/hpapi/luna.jpg",
      name: "Luna Lovegood",
      house: "Ravenclaw",
      secondName: "La folle",
    },
    {
      img: "https://resize-public.ladmedia.fr/img/var/public/storage/images/news/photos/padma-patil-harry-potter-sa-transformation-en-mini-kim-kardashian-783398/afshan-azad-en-padma-patil-783424/10599162-1-fre-FR/Afshan-Azad-en-Padma-Patil.jpg",
      name: "Padma Patil",
      house: "Ravenclaw",
      secondName: "Qu'est ce qu'elle fout la ?",
    },
  ];
  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://images.desenio.com/zoom/wb0016-8harrypotter-ravenclaw50x70-79738-77537.jpg"
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

export default Ravenclaw;
