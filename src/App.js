import Card from "./component/Card";
import "./styles.css";
import Mdetails from "./Mdetails";
import Horizontal from "react-scroll-horizontal";
export default function App() {
  const ncard = (item) => {
    return (
      <Card
        src={item.src}
        name={item.name}
        designation={item.designation}
        exp={item.exp}
      />
    );
  };
  return (
    <div className="App">
      <Horizontal>{Mdetails.map(ncard)}</Horizontal>
    </div>
  );
  // <Card />
}
