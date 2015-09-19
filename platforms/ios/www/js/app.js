angular.module('cars', ['ionic','cars.controller','cars.services'])
.run(function($ionicPlatform){
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });	
})
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('index',{
        url:'/index',
        templateUrl:'templates/index.html',
        controller: 'IndexCtrl'
        // views:{
        // 	'index':{
        // 		templateUrl:'templates/index.html',
        // 		controller: 'IndexCtrl'
        // 	}
        // }
    })
    .state('customer',{
    	url:'/customer',
    	templateUrl:'templates/customer.html',
    	controller: 'CustomerCtrl'
    	// views:{
    	// 	'customer':{
    	// 		templateUrl:'templates/customer.html',
    	// 		controller: 'CustomerCtrl'
    	// 	}
    	// }
    })
    .state('customer_add',{
        url:'/customer_add',
        templateUrl:'templates/customer_add.html'
    })
    .state('employee',{
    	url:'/employee',
    	templateUrl:'templates/employee.html',
    	controller: 'EmployeeCtrl'
    	// views:{
    	// 	'employee':{
    	// 		templateUrl:'templates/employee.html',
    	// 		controller: 'EmployeeCtrl'
    	// 	}
    	// }
    })
    .state('grade',{
    	url:'/grade',
    	templateUrl:'templates/grade.html',
    	controller: 'GradeCtrl'
    	// views:{
    	// 	'grade':{
    	// 		templateUrl:'templates/grade.html',
    	// 		controller: 'GradeCtrl'
    	// 	}
    	// }
    })
    .state('messages',{
    	url:'/messages',
    	templateUrl:'templates/messages.html',
    	controller: 'MessagesCtrl'
    	// views:{
    	// 	'messages':{
    	// 		templateUrl:'templates/messages.html',
    	// 		controller: 'MessagesCtrl'
    	// 	}
    	// }
    })
    .state('databord',{
        url:'/databord',
        templateUrl:'templates/databord.html',
        controller: 'DatabordCtrl'
        // views:{
        // 	'databord':{
        // 		templateUrl:'templates/databord.html',
        // 		controller: 'DatabordCtrl'
        // 	}
        // }
    })
    .state('task',{
    	url:'/task',
    	templateUrl:'templates/task.html',
		controller: 'TaskCtrl'
		// views:{
		// 	'task':{
		// 		templateUrl:'templates/task.html',
		// 		controller: 'TaskCtrl'
		// 	}
		// }
    })
    .state('logout',{
    	url:'/logout',
    	templateUrl:'templates/logout.html',
		controller: 'LogoutCtrl'
		// views:{
		// 	'logout':{
		// 		templateUrl:'templates/logout.html',
		// 		controller: 'LogoutCtrl'
		// 	}
		// }
    })
    .state('test',{
        url:'/test',
        templateUrl:'templates/test.html'
    })

    $urlRouterProvider.otherwise('/index');
}).config(function($ionicConfigProvider) {
  // remove back button text completely
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
});