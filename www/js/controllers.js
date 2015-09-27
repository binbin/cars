angular.module('cars.controller', [])
.controller('IndexCtrl', function($scope) {
	
})
.controller('CustomerCtrl', function($scope) {
	var customers=[{
		name:'张三',
		level:'C',
                        tel:'13708357405',
                        trend_type:'长安汽车长安CS752014款 1.8T 自动精英型 国IV',
                        tel_times:10,
                        customer_type:1
	},{
		name:'李四',
		level:'A',
                        tel:'33708357405',
                        trend_type:'长安汽车长安CS752014款 1.8T 自动精英型 国IV',
                        tel_times:10,
                         customer_type:0
	},{
		name:'王二',
		level:'B',
                        tel:'443708357405',
                        trend_type:'长安汽车长安CS752014款 1.8T 自动精英型 国IV',
                        tel_times:10,
                        customer_type:0
	},{
		name:'赵五',
		level:'H',
                        tel:'43708357405',
                        trend_type:'长安汽车长安CS752014款 1.8T 自动精英型 国IV',
                        tel_times:10,
                        customer_type:2
	}]
	$scope.customers=customers

	$scope.type=0;

	$scope.setType=function(event,type){
		$scope.type=type;
		$scope.customers = customers.filter(function(item){
                              return item.customer_type === type
		})
	}
	
})
.controller('CustomerAddCtrl',function($scope){
	$scope.customer={
		name:'howard',
		tel:'13898989889'
	}
})
.controller('EmployeeCtrl', function($scope) {})
.controller('GradeCtrl', function($scope) {})
.controller('MessagesCtrl', function($scope) {})
.controller('DatabordCtrl', function($scope) {})
.controller('TaskCtrl', function($scope) {})
.controller('LogoutCtrl', function($scope) {})