import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GET_PRODUCT_PROGRESS } from "./Redux-saga/Admin/action/action";
import { Data } from "./Component/Data";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PROGRESS });
  }, []);

  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
