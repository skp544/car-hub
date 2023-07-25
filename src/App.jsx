import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Homepage } from "./components";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
