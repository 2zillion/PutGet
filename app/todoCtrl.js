'use strict';

angular.module('app').controller('todoCtrl', function ($scope, todoStorage) {

    $scope.todoStorage = todoStorage;

    $scope.$watch('todoStorage.data', function() {
        $scope.todoList = $scope.todoStorage.data;
    });
	
    $scope.add = function() {
        todoStorage.add($scope.newContent, $scope.newDescription);
        $scope.newContent = '';
		$scope.newDescription = '';
    }

	$scope.find = function() {
        todoStorage.find($scope.newContent, function(data){
			// alert(data);
        $scope.newDescription = data.description;
        $scope.$apply();
        });
    }

});