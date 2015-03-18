
// Initialize app
var myapp = angular.module('myapp', []);

// Create button controller
myapp.controller('ButtonCtrl', function($scope) {
  // Global variables
  $scope.countdown_start = 10;
  $scope.countdown_step = 1;
  $scope.opacity_start = 0;
  $scope.opacity_values = [0.75, 0.50, 0.25, 0.0, 0.25, 0.50, 0.75, 1.0];
  $scope.opacity_time_step = 500;
  $scope.time_step = 1000;
  // Store initial state of all buttons
  $scope.buttons = [
    {id: 1, name: "Countdown", is_running: false, target: "#countdown-label", action: function(arg) { $scope.countdown(arg); } } ,
    {id: 2, name: "Fade", is_running: false, target: "#fading-image"   , action: function(arg) { $scope.opacity(arg); } }   ,
    {id: 3, name: "Trigger all", is_running: false, target: null              , action: function(arg) { $scope.triggerall(arg); } },
    {id: 4, name: "Reset All", is_running: true, target: null              , action: function(arg) { $scope.resetAll(arg); } }
  ];
  // This function gets called when a button is pressed and executes the 
  // function associated with each button.
  $scope.triggerAction = function(id) {
    angular.forEach($scope.buttons, function(button) {
      if (button.id === id) {
        $scope.setButtonAsRunning(button, true);
        button.action(button);
      }
    });
  };
  // Mark button as running and update state of button 3 and 4
  $scope.setButtonAsRunning = function(button, disable) {
    $scope.disableButton(button, disable);
    button.is_running = disable;
    $scope.updateButtonsState();
  }
  // Disable the given button
  $scope.disableButton = function(button, disable) {
    $('#button-' + button.id).prop("disabled", disable);
  }
  // Start countdown
  $scope.countdown = function(button, value) {
    if (!button.is_running) { return; }
    if (typeof value === "undefined") { value = $scope.countdown_start; }
    $(button.target).html(value === 0 ? "Ready" : value);
    if (value === 0) { $scope.setButtonAsRunning(button, false); }
    else {
      var new_value = value - $scope.countdown_step;
      setTimeout(
        function() { $scope.countdown(button, new_value); },
        $scope.time_step
      );
    }
  };
  // Start opacity animation
  $scope.opacity = function(button, value) {
    if (!button.is_running) { return; }
    if (typeof value === "undefined") { value = $scope.opacity_start; }
    $(button.target).fadeTo($scope.opacity_time_step, $scope.opacity_values[value]);
    if (value === 7) { $scope.setButtonAsRunning(button, false); }
    else {
      var new_value = value + 1;
      setTimeout(
        function() { $scope.opacity(button, new_value); },
        $scope.opacity_time_step
      );
    }
  };
  // Trigger countdown and opacity animation
  $scope.triggerall = function(button) {
    var b1 = $scope.buttons[0];
    $scope.setButtonAsRunning(b1, true);
    b1.action(b1);
    var b2 = $scope.buttons[1];
    $scope.setButtonAsRunning(b2, true);
    b2.action(b2);
  };
  // Stop countdown and opacity animation
  $scope.resetAll = function(button) {
    var b1 = $scope.buttons[0];
    $scope.setButtonAsRunning(b1, false);
    $(b1.target).html("Ready");
    var b2 = $scope.buttons[1];
    $scope.setButtonAsRunning(b2, false);
    $(b2.target).stop();
    $(b2.target).fadeTo(0, 1);
  };
  // Update the state of butotn 3 and 4 depending on the state of
  // buttons 1 and 2
  $scope.updateButtonsState = function() {
    var b1 = $scope.buttons[0];
    var b2 = $scope.buttons[1];
    var b3 = $scope.buttons[2];
    var b4 = $scope.buttons[3];
    if (b1.is_running || b2.is_running) {
      $scope.disableButton(b3, true);
      $scope.disableButton(b4, false);
    } else {
      $scope.disableButton(b3, false);
      $scope.disableButton(b4, true);
    }
  }
});
