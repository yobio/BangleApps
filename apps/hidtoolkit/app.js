Bangle.loadWidgets();
Bangle.drawWidgets();

var kb = require("https://raw.githubusercontent.com/yobio/Puck.js-Azerty-HID/main/ble_hid_azerty.js");
//var kb = require('ble_hid_azerty');
NRF.setServices(undefined, { hid : kb.report });

var settings = require('Storage').readJSON("hidtoolkit.json", true) || {};
var typedelay = (settings.typedelay===undefined)?0.5:settings.typedelay;
var targetos = (settings.targetos===undefined)?true:settings.targetos;



function shutdown(callback) {
  if (targetos) {
    // Send 'WIN+r'
    kb.tap(kb.KEY.R, kb.MODIFY.GUI, function() {

      setTimeout(function() {
        // Type 'shutdown -p\n'
        kb.type('shutdown -p\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  } else {
    // Send 'ALT+F2'
    kb.tap(kb.KEY.F2, kb.MODIFY.ALT, function() {

      setTimeout(function() {
        // Type 'shutdown now\n'
        kb.type('shutdown now\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  }
}

function msgbox(text, callback) {
  if (targetos) {
    // Send 'WIN+r'
    kb.tap(kb.KEY.R, kb.MODIFY.GUI, function() {

      setTimeout(function() {
        // Type 'mshta vbscript:Execute("msgbox ""${text}"":close")\n'
        kb.type('mshta vbscript:Execute("msgbox ""' + text + '"":close")\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  } else {
    // Send 'ALT+F2'
    kb.tap(kb.KEY.F2, kb.MODIFY.ALT, function() {

      setTimeout(function() {
        // Type 'zenity --info --text="${text}"\n'
        kb.type('zenity --info --text="' + text + '"\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  }
}

function htmlpage(url, callback) {
  if (targetos) {
    // Send 'WIN+r'
    kb.tap(kb.KEY.R, kb.MODIFY.GUI, function() {

      setTimeout(function() {
        // Type 'msedge --kiosk ${url} --edge-kiosk-type=fullscreen\n'
        kb.type('msedge --kiosk ' + url + ' --edge-kiosk-type=fullscreen\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  } else {
    // Send 'ALT+F2'
    kb.tap(kb.KEY.F2, kb.MODIFY.ALT, function() {

      setTimeout(function() {
        // Type 'firefox --kiosk --new-window ${url}\n'
        kb.type('firefox --kiosk --new-window ' + url + '\n', function() {if (callback) callback();});
      }, typedelay * 1000);

    });
  }
}

function altf4(callback) {
  kb.tap(kb.KEY.F4, kb.MODIFY.ALT, function() {if (callback) callback();});
}

function desktop(callback) {
  kb.tap(kb.KEY.D, kb.MODIFY.GUI, function() {if (callback) callback();});
}


function executing(func, args) {
  E.showMessage('Executing payload...');
  Bangle.setLCDPower(1);
  var args = args || [];
  args.push(function() {
    E.showMenu(mainmenu);
  });
  func.apply(this, args);
}

var mainmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { load(); },
  "Message Box" : function() { E.showMenu(msgboxmenu); },
  "HTML Page" : function() { E.showMenu(htmlmenu); },
  "AltF4" : function() {
    executing(altf4);
  },
  "Switch Desktop" : function() {
    executing(desktop);
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
    executing(htmlpage, args=['fakeupdate.net/win10ue']);
  },
  "Fake BIOS" : function() {
    executing(htmlpage, args=['pranx.com/bios']);
  },
};
var msgboxmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { E.showMenu(mainmenu); },
  "Hello World!" : function() {
    executing(msgbox, args=['Hello World!']);
  },
  "Behind You" : function() {
    executing(msgbox, args=['Je suis derriere vous...']);
  },
};

// Actually display the menu
E.showMenu(mainmenu);
