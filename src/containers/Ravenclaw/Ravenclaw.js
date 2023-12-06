import "./Ravenclaw.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

const Ravenclaw = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
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

  const newData = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://images.desenio.com/zoom/wb0016-8harrypotter-ravenclaw50x70-79738-77537.jpg"
        alt=""
      />
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          let str = e.target.value;
          setInputValue(str);
        }}
      />
      <div className="gryffindor-house-container">
        {newData.map((item) => {
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
