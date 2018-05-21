var todoApp = angular.module('MyApp', ['firebase']);

//CONTROLLERS

todoApp.controller('mainController', ['$scope', '$firebaseArray', '$firebaseAuth', '$log', function ($scope, $firebaseArray, $firebaseAuth, $log) {
$scope.thisIsMyController = "this is my controller"
    
}]);

//SERVICES
todoApp.service('listItemService', function () {
    this.doSomethingPlease = function () {
        alert('I did this...');
    };
});


//DIRECTIVES

todoApp.directive('mitdirektiv', [function () {

    //directive controller
    var controller = ['$scope', '$firebaseArray', '$log', function ($scope, $firebaseArray, $log) {

    }];

    return {
        templateUrl: 'directive.html',
        replace: true,
        scope: { //isolate scope 
            //Remove or rename bindings
            //OneWayBindingToParentScope: "&",
            //OneWayBindingFromParentScope: '@',
            //TwoWayBinding: "=",
        },
        controller: controller
    }
}]);
    /*
@ allows a value defined on the directive attribute to be passed to the directive's isolate scope. The value could be a simple string value (myattr="hello") or it could be an AngularJS interpolated string with embedded expressions (myattr="my_{{helloText}}"). You can think of it as "one-way" communication from the parent scope into the child directive. John Lindquist has a series of short screencasts explaining each of these. Screencast on @ is here: https://egghead.io/lessons/angularjs-isolate-scope-attribute-binding

& allows the directive's isolate scope to pass values into the parent scope for evaluation in the expression defined in the attribute. Note that the directive attribute is implicitly an expression and does not use double curly brace expression syntax. This one is tougher to explain in text. Screencast on & is here: https://egghead.io/lessons/angularjs-isolate-scope-expression-binding

= sets up a two-way binding expression between the directive's isolate scope and the parent scope. Changes in the child scope and propagated to the parent and vice-versa. Think of = as a combination of @ and &. Screencast on = is here: https://egghead.io/lessons/angularjs-isolate-scope-two-way-binding*/
    
