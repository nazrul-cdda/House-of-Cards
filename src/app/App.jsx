import { Link } from "react-router-dom"
import './App.css';

export const App = () => {
  const houses = [
    { id: "vorynthia", name: "Vorynthia" },
    { id: "seraphex", name: "Seraphex" },
    { id: "thalomire", name: "Thalomire" },
    { id: "zyventus", name: "Zyventus" },
    { id: "ecliphra", name: "Ecliphra" },
    { id: "morrindael", name: "Morrindael" },
    { id: "caelundra", name: "Caelundra" },
    { id: "dravethon", name: "Dravethon" },
    { id: "lucenthos", name: "Lucenthos" },
    { id: "vesperix", name: "Vesperix" },
    { id: "arunveil", name: "Arunveil" },
    { id: "nyxalor", name: "Nyxalor" },
    { id: "quelindra", name: "Quelindra" }
  ];

  return (
    <div>
      <div className="house">
        <img src="/pictures/Zenith.svg" alt="Zenith" />
        <h1>House of Cards</h1>
      </div>

      <div className="container">
        {houses.map((house) => (
          <div key={house.id} className={`${house.id} card`}>
            <div className="imgBox">
              <img
                src={`/pictures/${house.name}.svg`}
                alt={house.name}
              />
            </div>

            <Link to={`/${house.id}`}>
              {house.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
