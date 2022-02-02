Bangle.loadWidgets();
Bangle.drawWidgets();

var kb = require("https://raw.githubusercontent.com/yobio/Puck.js-Azerty-HID/main/ble_hid_azerty.js");
NRF.setServices(undefined, { hid : kb.report });

function shutdown() {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'shutdown -p'
      kb.tap(kb.KEY.S, 0, function() {
        kb.tap(kb.KEY.H, 0, function() {
          kb.tap(kb.KEY.U, 0, function() {
            kb.tap(kb.KEY.T, 0, function() {
              kb.tap(kb.KEY.D, 0, function() {
                kb.tap(kb.KEY.O, 0, function() {
                  kb.tap(kb.KEY.W, 0, function() {
                    kb.tap(kb.KEY.N, 0, function() {
                      kb.tap(kb.KEY[" "], 0, function() {
                        kb.tap(kb.KEY[6], 0, function() {
                          kb.tap(kb.KEY.P, 0, function() {
                            kb.tap(kb.KEY.ENTER, 0, function() {

                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    },1000);

  });
}

function bios() {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'iexplore -k '
      kb.tap(kb.KEY.I, 0, function() {
        kb.tap(kb.KEY.E, 0, function() {
          kb.tap(kb.KEY.X, 0, function() {
            kb.tap(kb.KEY.P, 0, function() {
              kb.tap(kb.KEY.L, 0, function() {
                kb.tap(kb.KEY.O, 0, function() {
                  kb.tap(kb.KEY.R, 0, function() {
                    kb.tap(kb.KEY.E, 0, function() {
                      kb.tap(kb.KEY[" "], 0, function() {
                        kb.tap(kb.KEY[6], 0, function() {
                          kb.tap(kb.KEY.K, 0, function() {
                            kb.tap(kb.KEY[" "], 0, function() {
kb.tap(kb.KEY.P, 0, function() {
kb.tap(kb.KEY.R, 0, function() {
kb.tap(kb.KEY.A, 0, function() {
kb.tap(kb.KEY.N, 0, function() {
kb.tap(kb.KEY.X, 0, function() {
kb.tap(54, kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY.C, 0, function() {
kb.tap(kb.KEY.O, 0, function() {
kb.tap(kb.KEY.M, 0, function() {
kb.tap(55, kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY.B, 0, function() {
kb.tap(kb.KEY.I, 0, function() {
kb.tap(kb.KEY.O, 0, function() {
kb.tap(kb.KEY.S, 0, function() {

kb.tap(kb.KEY.ENTER, 0, function() {});

});
});
});
});
});
});
});
});
});
});
});
});
});
});
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    },1000);

  });
}

function update() {
  // Send 'WIN+r'
  kb.tap(kb.KEY.R, kb.MODIFY.LEFT_GUI, function() {

    setTimeout(function() {
      // Type 'iexplore -k '
      kb.tap(kb.KEY.I, 0, function() {
        kb.tap(kb.KEY.E, 0, function() {
          kb.tap(kb.KEY.X, 0, function() {
            kb.tap(kb.KEY.P, 0, function() {
              kb.tap(kb.KEY.L, 0, function() {
                kb.tap(kb.KEY.O, 0, function() {
                  kb.tap(kb.KEY.R, 0, function() {
                    kb.tap(kb.KEY.E, 0, function() {
                      kb.tap(kb.KEY[" "], 0, function() {
                        kb.tap(kb.KEY[6], 0, function() {
                          kb.tap(kb.KEY.K, 0, function() {
                            kb.tap(kb.KEY[" "], 0, function() {
kb.tap(kb.KEY.F, 0, function() {
kb.tap(kb.KEY.A, 0, function() {
kb.tap(kb.KEY.K, 0, function() {
kb.tap(kb.KEY.E, 0, function() {
kb.tap(kb.KEY.U, 0, function() {
kb.tap(kb.KEY.P, 0, function() {
kb.tap(kb.KEY.D, 0, function() {
kb.tap(kb.KEY.A, 0, function() {
kb.tap(kb.KEY.T, 0, function() {
kb.tap(kb.KEY.E, 0, function() {
kb.tap(54, kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY.N, 0, function() {
kb.tap(kb.KEY.E, 0, function() {
kb.tap(kb.KEY.T, 0, function() {
kb.tap(55, kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY.W, 0, function() {
kb.tap(kb.KEY.I, 0, function() {
kb.tap(kb.KEY.N, 0, function() {
kb.tap(kb.KEY[1], kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY[0], kb.MODIFY.SHIFT, function() {
kb.tap(kb.KEY.U, 0, function() {
kb.tap(kb.KEY.E, 0, function() {

kb.tap(kb.KEY.ENTER, 0, function() {});

});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
});
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    },1000);

  });
}

var mainmenu = {
  "" : {
    "title" : "HID Toolkit"
  },
  "< Back" : function() { load(); },
  "Fake update" : function() { update(); },
  "Fake BIOS" : function() { bios(); },
  "Shutdown" : function() { shutdown(); },
};
// Actually display the menu
E.showMenu(mainmenu);
