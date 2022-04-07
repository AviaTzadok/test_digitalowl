import Text from "./components/Text/Text";
import Selectd from "./components/Selected/Selected";
import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [list, setList] = useState([]);
  const [nameClick, setNameClick] = useState(false);
  const [vueList, setVueList] = useState("allList");

  function getList() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((_data) => {
        setList(_data);
      });
  }

  console.log(list);

  function name_selected(id) {
    console.log(id.id);
    let all_details = list.find((val) => val.id == id.id);
    console.log(all_details);
    setNameClick(all_details);
  }
  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (nameClick) {
      setVueList("allListToLeft");
    }
  }, [nameClick]);

  return (
    <div className="container">
      <div className={`${vueList}`}>
        {list?.map((v) => (
          <Text
            name={v.name}
            email={v.email}
            id={v.id}
            name_selected={name_selected}
            key={v.id}
          />
        ))}
      </div>
      <div className="containerDetails">
        {nameClick && <Selectd nameClick={nameClick} />}
      </div>
    </div>
  );
}

export default App;
