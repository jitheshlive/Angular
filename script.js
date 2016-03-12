var mainApp = angular.module("mainApp", ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider) {
	 $routeProvider.
	 when('/link1', {
	 templateUrl: 'html1.html',
	 //controller: 'AddStudentController'
	 }).
	 when('/link2', {
	 templateUrl: 'html2.html',
	 //controller: 'ViewStudentsController'
	 }).
	 when('/student', {
	 templateUrl: 'student.html',
	 controller: 'studentController'
	 }).
	 otherwise({
	 redirectTo: '#'
	 });
 }]);

mainApp.controller("studentController", function($scope) {
	$scope.student = {
		firstName: "Mahesh",
		lastName: "Parashar",
		fees:500,
		subjects:[
			{name:'Physics',marks:70},
			{name:'Chemistry',marks:80},
			{name:'Math',marks:65},
			{name:'English',marks:75},
			{name:'Hindi',marks:67}
		],
		fullName: function() {
			var studentObject;
			studentObject = $scope.student;
			return studentObject.firstName + " " + studentObject.lastName;
		}
	};
});

var userApp = angular.module('userServiceApp', []);

userApp.service('UserService', function () {
    var users = [{
      'name': 'Jithesh',
      'email': 'jitheshlive@gmail.com',
      'phone': '9447321894'
    }];
    this.save = function (user) {
      users.push(user);
    }
    this.list = function () {
        return users;
    }
});

userApp.controller('UserController', function ($scope, UserService) {

    $scope.users = UserService.list();

    $scope.saveUsers = function () {
        UserService.save($scope.user);
        $scope.user = {};
    }

});

var CalcApp = angular.module('CalcServiceApp', []);

CalcApp.service('MathService', function() {
    this.add = function(a, b) { return a + b };
    this.subtract = function(a, b) { return a - b };
    this.multiply = function(a, b) { return a * b };
    this.divide = function(a, b) { return a / b };
});

CalcApp.service('CalculatorService', function(MathService){
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };

});

CalcApp.controller('CalculatorController', function($scope, CalculatorService) {
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});

