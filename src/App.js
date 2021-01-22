import React, { useState } from 'react'
import Application from './apps/Application';
import Dock from './os/Dock';
import './styles/App.scss';
import { Catalogue } from './data/Catalogue';
import StyleManager from './helper-functions/StyleManager';

function App() {
  const [apps, setApps] = useState([]);
  const [toggler, setToggler] = useState(false);

  function openApp(appName) {
    let alreadyOpen = false;
    apps.forEach(e => {
      if (e.name === appName) {
        alreadyOpen = true;
        
      }
    })
    if (alreadyOpen) return;
    addAppToView(appName);
  }

  function addAppToView(appName) {
    let newApp = null;
    Catalogue.forEach(e => {
      if (e.name === appName) {
        newApp = e;
      }
    })

    if (newApp === null) return;
    newApp.key = 'app-window' + apps.length
    setApps([...apps, newApp]);
  }

  function closeApp(appName) {
    let index = 0;
    let appIndex = -1;
    apps.forEach(e => {
      if (e.name === appName) {
        appIndex = index;
      }
      index++;
    })
    if (index !== -1) {
      let allApps = apps;
      allApps.splice(appIndex, 1);
      setApps(allApps);
    }
    setToggler(!toggler);
  }

  let renderApps = apps.map(app => (<Application name={app.name} key={app.key} closeApp={closeApp} body={app.body} />));
  document.documentElement.style.setProperty('--$bg-dark', 'pink');
  return (
    <div className="os">
      
      <StyleManager/>
      {renderApps}
      <Dock addToView={openApp} catalogue={Catalogue} />
    </div>
  );
}

export default App;
