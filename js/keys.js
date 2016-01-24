document.addEventListener("DOMContentLoaded", function() {
  // Load library
  var gui = require("nw.gui");

  // Reference to window
  var win = gui.Window.get();

  // Create menu container
  var Menu = new gui.Menu({
    type: "menubar"
  });

  //initialize default mac menu
  Menu.createMacBuiltin("WebDGap");

  // Get the root menu from the default mac menu
  var rootMenu = Menu.items[0].submenu;
  var windowMenu = Menu.items[2].submenu;

  windowMenu.insert(
    new gui.MenuItem({
      type: "normal",
      label: "Toggle Fullscreen",
      key: "F",
      modifiers: "cmd",
      click : function () {
        win.toggleFullscreen();
      }
    })
  );
  windowMenu.insert(
    new gui.MenuItem({
      type: "normal",
      label: "Reload App",
      key: "r",
      modifiers: "cmd",
      click : function () {
        win.reload();
      }
    })
  );

  // Append Menu to Window
  win.menu = Menu;
  rootMenu.removeAt(0);
  rootMenu.removeAt(0);

  // add the file menu to window/menu panel - menu
  win.menu.insert(new gui.MenuItem({
      label: "File",
      submenu: file
  }), 1);
  // Remove Menu Items
  // editMenu.removeAt(8);
});
