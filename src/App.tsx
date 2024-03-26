import { useState } from "react";
import TicketCard from "./components/TicketCard";
import GlobalStyles from "./styles/global";
import { CellsContext } from "./context/CellsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const defaultState = {
    cells1: [],
    cells2: [],
  };
  const [cells, setCells] = useState(defaultState);
  const value = { cells, setCells };

  return (
    <>
      <CellsContext.Provider value={value}>
        <TicketCard />
      </CellsContext.Provider>
      <GlobalStyles />
      <ToastContainer />
    </>
  );
}

export default App;
