var app=angular.module('Defense',[]);
app.controller('DefenseCtrl',function($scope,$window){
    $scope.state=1;
    $scope.highScores=[];
    for(var i=0;i<10;i++){
    	var highScore={highScore:((new Date()).getTime()),auth:'John'};
    	$scope.highScores.push(highScore);
    }
    $scope.play=function(){
    	$window.location.replace("play.html");
    }
}).controller('PlayCtrl',['$scope',function($scope){
	$scope.img=[
		{
			id:'map1',
			src:'img/logo.png'
		},
		{
			id:'map2',
			src:'img/logo.png'
		},
		{
			id:'map3',
			src:'img/logo.png'
		}
	];
	$scope.goToPlay=function(id){
		for(var i=0;i<$scope.img.length;i++){
			if(id==$scope.img[i].id){

			}
		}
		
	}
}]);