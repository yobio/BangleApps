Bangle.loadWidgets();
Bangle.drawWidgets();

var kb = require("https://raw.githubusercontent.com/yobio/Puck.js-Azerty-HID/main/ble_hid_azerty.js");
NRF.setServices(undefined, { hid : kb.report });

var settings = require('Storage').readJSON("hidtoolkit.json", true) || {};
var typedelay = settings.typedelay || 0.5;


function shutdown() {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'shutdown -p\n'
      kb.type('shutdown -p\n');
    }, typedelay * 1000);

  });
}

function htmlpage(url) {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'msedge --kiosk ${url} --edge-kiosk-type=fullscreen\n'
      kb.type('msedge --kiosk ' + url + ' --edge-kiosk-type=fullscreen\n');
      //kb.type('iexplore -k ' + url + '\n');
    }, typedelay * 1000);

  });
}

function altf4() {
  kb.tap(kb.KEY.F4, kb.MODIFY.ALT);
}

var mainmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { load(); },
  "HTML Page" : function() { E.showMenu(htmlmenu); },
  "AltF4" : function() {
    altf4();
  },
  "Shutdown" : function() {
    shutdown();
  },
};
var htmlmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { E.showMenu(mainmenu); },
  "Fake Update" : function() {
    htmlpage('fakeupdate.com/win10ue');
  },
  "Fake BIOS" : function() {
    htmlpage('pranx.com/bios');
  },
};

// Actually display the menu
E.showMenu(mainmenu);
