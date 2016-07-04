app.controller('AttractionCTRL',function($scope, $http){
    
 
    
     $http.get('http://localhost:3000/json/attractions.json')
    .success(function(data){
        $scope.attractions = data;
         $scope.current = data[0];
})
     
     $scope.currentSelection = function(selected){
         $scope.current = $scope.attractions[selected];
     }
})