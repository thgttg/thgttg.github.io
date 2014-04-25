tt.app.controller('navController', navController);
tt.app.controller('homeController', homeController);

function navController($scope, $route) {
    $scope.isActive = function(route) {
        return route && $route && $route.current && route === $route.current.activeRoute;
    };
}

function homeController($scope, $route, geolocation) {
    geolocation.getLocation().then(function(data){
        $scope.geolocation = data;
    });
}