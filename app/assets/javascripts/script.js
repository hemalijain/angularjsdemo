

var myApp=angular.module("myApp", ['ngResource']);

myApp.factory("Data",function()
{
	return {name:"shared_data",employee_id:"shared_id"}
})


myApp.filter("addsomedata",function()
{
return function(text1,surname){
return "employee name is "+text1+" "+surname;
		}
})
myApp.filter("expfilter",function()
{
return function(items,exp){
      var filtered = [];
          if (!exp) {
      return items;
    }
      angular.forEach(items, function(item) {
        if(  item.experience>= exp ) {
          filtered.push(item);
        }
      });
      return filtered;
		}
})



function FirstCtrl($scope,$resource,Data,$http)
{     $scope.lists=[{}]

$http({
    method : 'GET',
    url : '/employee/display'
}).success(function(data, status, headers, config) {

    $scope.lists = data;
}).error(function(data, status, headers, config) {
    $scope.lists = "error" + data;
});

 /*$scope.lists=[{name:"nikita",employee_id:"536192",exp:1},{name:"aaditi",employee_id:"112345",exp:1},{name:"hemali",employee_id:"567842",exp:2}];
	$scope.lists.push(Data);*/
$scope.addDetails=function()
	{
            
        $http({
            method : 'POST',

            url : '/employee/add?name='+$scope.name+"&emp_id="+$scope.employee_id+"&exp="+$scope.exp,
          
        }).success(function(data, status, headers, config) {

        alert("employee added")

            $http({
                method : 'GET',
                url : '/employee/display',dataType : 'script'
            }).success(function(data, status, headers, config) {

                $scope.lists = data;
            }).error(function(data, status, headers, config) {
                $scope.lists = "error" + data;
            });
        }).error(function(data, status, headers, config) {
          alert("failure"+status) 
          
        });
     
	}; 
}


