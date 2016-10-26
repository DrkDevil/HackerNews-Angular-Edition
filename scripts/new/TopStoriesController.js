// TopStoriesController.js
(function() {
'use strict';

  angular
    .module('baseApp')
    .controller('TopStoriesController', TopStoriesController);

  TopStoriesController.$inject = [];
  function TopStoriesController() {
    var vm = this;
    

    activate();

    ////////////////

    function activate() {
      vm.stories = ['1', '2']

    }
  }

})();