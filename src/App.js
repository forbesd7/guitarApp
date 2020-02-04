import "./app.css";
import React from "react";
import Navbar from "./components/Navbar";
import PracticeChoices from "./components/PracticeChoices";
import { useSelector } from "react-redux";
import ListeningOptions from "./components/ListeningOptions";

const App = () => {
  const curView = useSelector(state => state.curView);

  const renderView = () => {
    switch (curView) {
      case "practiceChoices": {
        return <PracticeChoices />;
      }
      case "listeningOptions": {
        return <ListeningOptions />;
      }
      default:
        return <PracticeChoices />;
    }
  };
  return (
    <div className="main">
      <Navbar />
      {renderView()}
    </div>
  );
};
export default App;
