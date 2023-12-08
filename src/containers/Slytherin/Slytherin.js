import "./Slytherin.css";
import Card from "../../components/Card/Card";
import { useState, useEffect } from "react";

const Slytherin = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://hp-api.onrender.com/api/characters/house/slytherin"
      );

      const responseApi = await response.json();
      setData(responseApi);
    };
    fetchData();
  }, []);

  const newData = data.filter((item) => {
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="container-house">
      <img
        className="house-blason-img"
        src="https://images.desenio.com/zoom/wb0014-8harrypotter-slytherin50x70-64059-84203.jpg"
        alt=""
      />
      <input
        placeholder="Rechercher"
        className="input-filter"
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
              secondName={item.alternate_names[1]}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};

export default Slytherin;
