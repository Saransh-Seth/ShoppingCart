

app.service("itemListService", function ($http, $q){
  var deferred = $q.defer();
  $http.get('public/resources/json/payload.json').then(function (data){
    deferred.resolve(data);
  });

  this.getItems = function (){
    return deferred.promise;
  }
})

.controller("itemListCtrl", function($scope, itemListService){
  var promise = itemListService.getItems();
  promise.then(function (data){
    $scope.items = data;
    console.log($scope.items);
  });
});
