Bangle.loadWidgets();
Bangle.drawWidgets();

var kb = require("https://raw.githubusercontent.com/yobio/Puck.js-Azerty-HID/main/ble_hid_azerty.js");
NRF.setServices(undefined, { hid : kb.report });

var settings = require('Storage').readJSON("hidtoolkit.json", true) || {};
var typedelay = settings.typedelay || 0.5;


function shutdown(callback) {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'shutdown -p\n'
      kb.type('shutdown -p\n', function() {if (callback) callback();});
    }, typedelay * 1000);

  });
}

function htmlpage(url, callback) {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'msedge --kiosk ${url} --edge-kiosk-type=fullscreen\n'
      kb.type('msedge --kiosk ' + url + ' --edge-kiosk-type=fullscreen\n', function() {if (callback) callback();});
    }, typedelay * 1000);

  });
}

function altf4(callback) {
  kb.tap(kb.KEY.F4, kb.MODIFY.ALT, function() {if (callback) callback();});
}


function executing(func, args) {
  E.showMessage('Executing payload...');
  Bangle.setLCDPower(1);
  var args = args || [];
  args.push(function() {
    E.showMenu(mainmenu);
    //Bangle.setLCDPower(0);
  });
  func.apply(this, args);
}

var mainmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { load(); },
  "HTML Page" : function() { E.showMenu(htmlmenu); },
  "AltF4" : function() {
    executing(altf4);
  },
  "Shutdown" : function() {
    executing(shutdown);
  },
};
var htmlmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { E.showMenu(mainmenu); },
  "Fake Update" : function() {
    executing(htmlpage, args=['fakeupdate.com/win10ue']);
  },
  "Fake BIOS" : function() {
    executing(htmlpage, args=['pranx.com/bios']);
  },
};

// Actually display the menu
E.showMenu(mainmenu);
