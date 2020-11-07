#!/usr/bin/env node
const {app, BrowserWindow, globalShortcut} = require('electron') 
const { exec } = require('child_process');
const get_mp3 = (_path, _link) => `cd ${_path}; ~/dd ${_link}`;


let wintube  


function createWintube() { 
  const url =  `https://www.youtube.com`
  wintube = new BrowserWindow({width: 1280, height: 700, title: url}) 
  wintube.loadURL(url) 
//  wintube.webContents.openDevTools()
}  

app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+X', () => {
  //  console.log('CommandOrControl+X is pressed')
    let currentURL = wintube.webContents.getURL();
    exec(get_mp3('~/NewMusic/Heart', currentURL),
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
  })
})

app.on('ready', createWintube) 
