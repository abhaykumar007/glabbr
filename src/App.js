import "./App.css";
import { useEffect } from "react";
import TableComp from "./Component/Table/Table";
import CarouselCom from "./Component/Carousel/Carousel";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/Actions/action";
import NavBar from "./Component/NavBar/NavBar";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="app">
      <NavBar />
      <CarouselCom />
      <TableComp />
    </div>
  );
}

export default App;
