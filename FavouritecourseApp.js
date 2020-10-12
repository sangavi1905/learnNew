<!--Custom Service
    <div ng-controller='favoAddController as courseAdder'>
      <input type="text" ng-model="courseAdder.courseName" placeholder="course name">
      <input type="text" ng-model="courseAdder.category" placeholder="Category">
      <button ng-click="courseAdder.addItem();">Add Item To Shopping List</button>
    </div>

    <div ng-controller='favoAddShowController as showList'>
      <ol>
        <li ng-repeat="item in showList.items">
          {{ item.Category }} of {{ item.course name }}
          <button ng-click="showList.removeItem($index);">Remove Item</button>
        </li>
      </ol>
    </div>
	-->
	
	!function(){
    "use strict";
    angular.module('FavouritecourseApp', [])
    .controller('favoAddController', favoAddController)
    .controller('favoAddShowController', favoAddShowController)
    .service('FavoCourseService', FavoCourseService);
    
    favoAddController.$inject = ['FavoCourseService'];
    function favoAddController(FavoCourseService) {
      var courseAdder = this;
    
      courseAdder.courseName = "";
      courseAdder.category = "";
    
      courseAdder.addItem = function () {
        FavoCourseService.addItem(courseAdder.courseName, courseAdder.category);
      }
    }
    
    favoAddShowController.$inject = ['FavoCourseService'];
    function favoAddShowController(FavoCourseService) {
      var showList = this;
    
      showList.items = FavoCourseService.getItems();
    
      showList.removeItem = function (itemIndex) {
        FavoCourseService.removeItem(itemIndex);
      };
    }
    
    function FavoCourseService() {
      var service = this;
      var items = [];
    
      service.addItem = function (courseName, category) {
        var item = {
          name: courseName,
          category: category
        };
        items.push(item);
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex,1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
}();