import React, { useState } from 'react'
import Application from './apps/Application';
import Dock from './os/Dock';
import './styles/App.scss';
import { Catalogue } from './data/Catalogue';
import StyleManager from './helper-functions/StyleManager';
import { useSelector, useDispatch } from 'react-redux';
import { openApp } from './actions';

export default function App() {
  const apps = useSelector(state => state.apps.apps);
  const dispatch = useDispatch();

  function openAppWithRedux(appName) {
    console.log("OPENING APPPPPPP", appName);
    dispatch(openApp(appName));
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
    console.log();
  }

  function closeApp(appName) {
    // let index = 0;
    // let appIndex = -1;
    // apps.forEach(e => {
    //   if (e.name === appName) {
    //     appIndex = index;
    //   }
    //   index++;
    // })
    // if (index !== -1) {
    //   let allApps = apps;
    //   allApps.splice(appIndex, 1);
    //   setApps(allApps);
    // }
    // setToggler(!toggler);
  }

  let renderApps = apps.map(app => (<Application
    name={app.name}
    key={app.key}
    body={app.body}
    openApp={openApp}
    closeApp={closeApp}
  />));

  return (
    <div className="os">
      <StyleManager />
      {renderApps}
      <Dock addToView={openApplicationFromShortcut} catalogue={Catalogue} />
    </div>
  );
}

