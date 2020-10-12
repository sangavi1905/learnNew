(function () {
    'use strict';
    
    angular.module('ControllerAsApp', [])
    .controller('courseListController1', courseListController1)
    .controller('courseListController2', courseListController2)
    .factory('CourseListFactory', CourseListFactory);
    
    // LIST #1 - controller
    courseListController1.$inject = ['CourseListFactory'];
    function courseListController1(CourseListFactory) {
      var list1 = this;
    
      // Use factory to create new shopping list service
      var courseList = CourseListFactory();
    
      list1.items = courseList.getItems();
    
      list1.courseName = "";
      list1.category = "";
    
      list1.addItem = function () {
        courseList.addItem(list1.courseName, list1.category);
      }
    
      list1.removeItem = function (itemIndex) {
        courseList.removeItem(itemIndex);
      };
    }
    
    
    // LIST #2 - controller
    courseListController2.$inject = ['CourseListFactory'];
    function courseListController2(CourseListFactory) {
      var list2 = this;
    
      // Use factory to create new shopping list service
      var courseList = CourseListFactory(3);
    
      list2.items = courseList.getItems();
    
      list2.courseName = "";
      list2.category = "";
    
      list2.addItem = function () {
        try {
          courseList.addItem(list2.courseName, list2.category);
        } catch (error) {
          list2.errorMessage = error.message;
        }
    
      }
    
      list2.removeItem = function (itemIndex) {
        courseList.removeItem(itemIndex);
      };
    }
    
    
    // If not specified, maxItems assumed unlimited
    function CourseListService(maxItems) {
      var service = this;
    
      // List of shopping items
      var items = [];
    
      service.addItem = function (courseName, category) {
        if ((maxItems === undefined) ||
            (maxItems !== undefined) && (items.length < maxItems)) {
          var item = {
            course name: courseName,
            category: category
          };
          items.push(item);
        }
        else {
          throw new Error("Max items (" + maxItems + ") reached.");
        }
      };
    
      service.removeItem = function (itemIndex) {
        items.splice(itemIndex, 1);
      };
    
      service.getItems = function () {
        return items;
      };
    }
    
    
    function CourseListFactory() {
      var factory = function (maxItems) {
        return new CourseListService(maxItems);
      };
    
      return factory;
    }
    
    })();