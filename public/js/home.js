var appVar = angular.module('app', [ "ngRoute","rzModule"]);

appVar.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller : 'WishesController',
		templateUrl : '/templates/wishes.ejs'
	}).otherwise({
		controller : 'WishesController',
		templateUrl : '/templates/wishes.ejs'
	});
	
	
} ]);

appVar.controller('WishesController', function($scope, $http,$rootScope,$window) {
//uncomment this code when you write backend code	
//	 $http({
//	 		method : "GET",
//	 		url : "/getWishes",
//	 		
//	 	}).success(function (res) {
//	 		console.log("The return value: "+JSON.stringify(res));
//	 		$scope.wishes = res.wishes;
//	 	});
	 
	$scope.items = [];
	$scope.status = "Add to Cart";
	$rootScope.wishesCount=0;
	$rootScope.cartProducts = [];
	
	$scope.slider = {
			  minValue: 1,
			  maxValue: 1000,
			  options: {
			   
			    draggableRange: true
			  }
			};


	 
	$scope.wishes = {
		"_id": {
			"$oid": "57217aedc80eb63ef26cdd8a"
		},
		"name": "wishes",
		"data": [{
			"wishid": "1",
			"Description": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/5934.jpg",
			"FirstName": "sona",
			"CardAge": 2,
			"Price" :"$26"
		}, {
			"wishid": "2",
			"desc": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/40.jpg",
			"FirstName": "kona",
			"CardAge": 5,
			"Price" :"$26"
		}, {
			"wishid": "3",
			"Description": "piyu",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/6407.jpg",
			"FirstName": "sona",
			"CardAge": 6,
			"Price" :"$26"
		}, {
			"wishid": "4",
			"Description": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/1792.jpg",
			"FirstName": "kita",
			"CardAge": 3,
			"Price" :"$26"
		}, {
			"wishid": "1",
			"Description": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/6233.jpg",
			"FirstName": "sona",
			"CardAge": 2,
			"Price" :"$26"
		}, {
			"wishid": "1",
			"Description": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/5934.jpg",
			"FirstName": "sona",
			"CardAge": 2,
			"Price" :"$26"
		}, {
			"wishid": "1",
			"Description": "toy",
			"ImageURL": "http://fgt.netqnet.com/GiftImages/5934.jpg",
			"FirstName": "sona",
			"CardAge": 2,
			"Price" :"$26"
		}]
};
	for (var i = 0; i < $scope.wishes.data.length; i++) {
		$scope.items.push($scope.wishes.data[i])
	}
	
	$scope.addToCart = function($index,status){
		
		if(status == false)
			{
			$rootScope.wishesCount = $rootScope.wishesCount+1;
			$rootScope.cartProducts.push({"name":$scope.items[$index].FirstName, "price":$scope.items[$index].Price,
				"age" : $scope.items[$index].CardAge, "url": $scope.items[$index].ImageURL});
			}
		else
			{
			$rootScope.wishesCount = $rootScope.wishesCount -1;
			$scope.removeItem($index);
			
			}
		
	}

	$scope.removeItem = function(index){
		$rootScope.cartProducts.splice(index, 1);
		  }
	
	$scope.saveInCache = function(){
		$window.localStorage.setItem('wishes', JSON.stringify($rootScope.cartProducts));
	}
	
});


