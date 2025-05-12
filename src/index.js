import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routerex from './Routerex';
import Card1 from './Card1';
import Card2 from './Card2';
import App from './App';
import Card3 from './Card3';
import Counter from './Counter';
import OnOff from './OnOff';
import NameChanger from './NameChanger';
import DelayedAlert from './DelayedAlert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/*div className='wrapper'>
   <Card1/>
   <Card2/>
   <Card3/>
  
    </div> */}
   {/* <Counter/> */}
    {/*<OnOff/> */}
    {/*<NameChanger/> */}
    <DelayedAlert/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
