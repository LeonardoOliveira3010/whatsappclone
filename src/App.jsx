import React from 'react';
import SideBar from './components/SideBar/SideBar';
import ContentArea from './components/ContentArea/ContentArea';
import './App.css';


function App() {
  return (
    <>
      <div className="app-window">
        
        <SideBar>
          
        </ SideBar>

        <ContentArea />
      </div>
    </>
  );
}

export default App;