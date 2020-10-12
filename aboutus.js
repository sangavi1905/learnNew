(function () {
  'use strict';
    
    angular.module('filApp', [])
    .controller('filController', filController)
    .filter('likes',LikesFilter)
    .filter('likesall',LikesAllFilter);

    filController.$inject = ['$scope', 'likesFilter'];
    function filController($scope,likesFilter) {

      $scope.sayMessage = function () {
        var msg="october 2020";
        return msg;
      };
      $scope.sayLikesMessage = function () {
        var msg="LearnNew organisation";
        msg = likesFilter(msg);
        return msg;
      };
    }
    function LikesFilter(){
      return function (input) {
        input = input || "";
        input = input.replace("october","2020");
        return input;
      };
    }
    function LikesAllFilter(){
      return function (input,target,replace) {
        input = input || "";
        input = input.replace(target,replace);
        return input;
      };
    }
    })();
