// vars & start
const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipcRenderer = require('electron').ipcRenderer;

let presqu11 = new Object;

// topbar & controls
let topbar = document.getElementsByTagName("w11-topbar")[0];
let icon = topbar.getAttribute('icon');
let title = topbar.getAttribute('title');

let max = false;

topbar.innerHTML = '<img src="'+icon+'"><img><p>'+title+'</p><controls><c1></c1><c2></c2><c3></c3></controls>';

if(process.versions.electron !== null) {
    topbar.innerHTML = '<img src="'+icon+'"><img><p>'+title+'</p><controls><c0></c0><c1></c1><c2></c2><c3></c3></controls>';
}

document.getElementsByTagName("c0")[0].addEventListener('click', function(){
    ipcRenderer.send('devtools');
});

document.getElementsByTagName("c3")[0].addEventListener('click', function(){
    ipcRenderer.send('close');
});

document.getElementsByTagName("c2")[0].addEventListener('click', function(){
    if(max) {
        ipcRenderer.send('unmaximize');
        max = false;
    }
    else {
        ipcRenderer.send('maximize');
        max = true;
    }
});

document.getElementsByTagName("c1")[0].addEventListener('click', function(){
    ipcRenderer.send('minimize');
});

// tabs
let currentTab;

let childDivs = document.getElementsByTagName('w11-tabs')[0].getElementsByTagName('w11-tab-select');
for( i=0; i< childDivs.length; i++ ) {
    var childDiv = childDivs[i];

    let icon = childDiv.getAttribute('icon');
    let title = childDiv.getAttribute('text');

    childDiv.innerHTML = '<sel></sel><img src="' + icon + '"><p>' + title + '</p>';
}

let childDivs2 = document.getElementsByTagName('body')[0].getElementsByTagName('w11-tab');
for( i=0; i< childDivs2.length; i++ )
{
    var childDiv2 = childDivs2[i];
    let nb = i;

    let cid = childDiv2.id;
    childDivs[i].addEventListener('click', function(){
        openTab(cid);
        document.getElementsByClassName("selected")[0].classList.remove("selected");
        childDivs[nb].classList.add("selected");
    });
}

let defaultName = document.getElementsByTagName("w11-tabs")[0].getAttribute("default");
let defaultElem = document.getElementById(defaultName);

currentTab = defaultElem;
defaultElem.classList.add("active");

function openTab(elemnt) {
    currentTab.classList.remove("active");
    currentTab = document.getElementById(elemnt);
    document.getElementById(elemnt).classList.add("active");
}
