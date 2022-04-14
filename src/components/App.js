import React, { useState} from "react";
import CardListContextProvider from "../contexts/CardListContext";


import CardList from "./CardList";

import CardForm from "./CardForm";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import "../App.css";
import Header from "./Header";
import BackButton from "./BackButton";
import CreateButton from "./CreateButton";

const App = () => {
  
  const [isCreateBUttonVisible, setCreateBUttonVisible] = useState(true);
  const [isBackButtonVisible, setBackButtonVisible] = useState(false);

  function CreateButtonHandler() {
    setCreateBUttonVisible(false);
    setBackButtonVisible(true)
  }
  
  function backButtonHandler() {
    setCreateBUttonVisible(true);
    setBackButtonVisible(false)
  }

  function editHandler() { console.log("inside editHandler");
    setCreateBUttonVisible(false);
    setBackButtonVisible(true)
  }

  
  return (
    <Router>
      <CardListContextProvider>
          <div className="container">
            <div className="app-wrapper">
              <Header />
              <div className="">
               {isCreateBUttonVisible && <CreateButton onClick={CreateButtonHandler} /> }
               {isBackButtonVisible && <BackButton onClick={backButtonHandler}/>} 
               {isCreateBUttonVisible && <CardList OnTaskEdit={editHandler}/> }
                <Routes>
                  <Route path="/cardform" element={< CardForm />} />
                  <Route path="/cardlist" element={< CardList />} />
                </Routes>
              </div>
            </div>
          </div>
        </CardListContextProvider>
    </Router>   
  );
};

export default App;
