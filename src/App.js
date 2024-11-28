import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "../src/components/header/Header";
import Home from "../src/components/home/Home";
import Footer from "../src/components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// export default App;
