angular.module("gaiaApp").controller('mainCtrl', function ($scope, $mdSidenav, $mdMedia) {
			$scope.isComputer = function(){
				return !!$mdMedia('lg');
			};
			$scope.isTablet = function(){
				return !!$mdMedia('md');
			};
			$scope.isPhone = function(){
				return !!$mdMedia('sm') || !!$mdMedia('xs');
			};

			
		});