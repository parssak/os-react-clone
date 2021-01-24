import React, { useState } from 'react'
import Application from './apps/Application';
import Dock from './os/Dock';
import { Catalogue } from './data/Catalogue';
import StyleManager from './helper-functions/StyleManager';
import { useSelector, useDispatch } from 'react-redux';
import { openApplication } from './actions';
import './styles/App.scss';

export default function App() {
  const apps = useSelector(state => state.apps);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  function openAppWithRedux(appName) {
    dispatch(openApplication(appName));
  }

  function openApplicationFromShortcut(appName) {
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
    openAppWithRedux(newApp);
  }

  function Toggle() {
    setToggle(!toggle);
  }

  let renderApps = Array.isArray(apps) ? apps.map(app => (<Application
    name={app.name}
    key={app.key}
    body={app.body}
    toggle={Toggle}
  />)) : null;


  return (
    <div className="os">
      <StyleManager />
      {renderApps}
      <Dock addToView={openApplicationFromShortcut} catalogue={Catalogue} />
    </div>
  );
}

