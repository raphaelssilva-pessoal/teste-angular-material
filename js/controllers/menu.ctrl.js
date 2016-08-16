angular.module("gaiaApp").controller('menuCtrl', function ($scope, $mdSidenav) {
			$scope.openMenuMain = function(){
				/*if(!$scope.isPhone()){
					$scope.isOpen = true;
				}else{
					$scope.isOpen = false;
					$mdSidenav('left').toggle();
				}
				*/$mdSidenav('left').toggle();
			}
			$scope.closeMenuMain = function(){
				/*if(!$scope.isPhone()){
					$scope.isOpen = false;
				}else{
					$scope.isOpen = false;
					$mdSidenav('left').toggle();
				}
				*/$mdSidenav('left').toggle();
			}
			$scope.closeOrCloseMenuMain = function(){
				/*if(!$scope.isPhone()){
					$scope.isOpen = !$scope.isOpen;
				}else{
					$mdSidenav('left').toggle();
				}
				*/$mdSidenav('left').toggle();
			}
		});