"use strict;";
(function() {
  function analogueSetInterval() {
    setTimeout (function() {
      alert("Hello...");
      analogueSetInterval();
    }, 1000);
  }
  analogueSetInterval();
})();