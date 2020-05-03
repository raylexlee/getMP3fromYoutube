#!/usr/bin/env node
const {app, BrowserWindow, globalShortcut} = require('electron') 
const { exec } = require('child_process');
const get_mp3 = (_path, _link) => `cd ${_path}; ~/dd ${_link}`;


let win  


function createWindow() { 
  const url =  `https://www.youtube.com`
  win = new BrowserWindow({width: 1280, height: 700, title: url}) 
  win.loadURL(url) 
//  win.webContents.openDevTools()
}  

app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+X', () => {
  //  console.log('CommandOrControl+X is pressed')
    let currentURL = win.webContents.getURL();
    exec(get_mp3('/media/raylex/data/DownloadFromYoutube/selfchosen/steps', currentURL),
        (error, stdout, stderr) => {
            console.log(stdout);
            console.log(stderr);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
  })
})

app.on('ready', createWindow) 
