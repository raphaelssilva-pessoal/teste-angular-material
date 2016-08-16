angular.module("gaiaApp").controller('dashboardCtrl', ['$scope', function ($scope) {
			var vm = $scope
			$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
			  $scope.series = ['Series A', 'Series B'];
			  $scope.data = [
			    [65, 59, 80, 81, 56, 55, 40],
			    [28, 48, 40, 19, 86, 27, 90]
			  ];
			  $scope.onClick = function (points, evt) {
			    console.log(points, evt);
			  };
			  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
			  $scope.options = {
			    scales: {
			      yAxes: [
			        {
			          id: 'y-axis-1',
			          type: 'linear',
			          display: true,
			          position: 'left'
			        },
			        {
			          id: 'y-axis-2',
			          type: 'linear',
			          display: true,
			          position: 'right'
			        }
			      ]
			    }
			  };

			  $scope.etapas = [
				{
					label:"Etapa 1",
					completed:true,
					disabled:false
				},
				{
					label:"Etapa 2",
					completed:false,
					disabled:false
				},
				{
					label:"Etapa 3",
					completed:false,
					disabled:false
				},
				{
					label:"Etapa 4",
					completed:false,
					disabled:false
				},
				{
					label:"Etapa 5",
					completed:false,
					disabled:false
				}
			]
			$scope.reunioes = [
				{
					titulo:"Reuniao 1",
					data:new Date(),
					ata:"x"
				},
				{
					titulo:"Reuniao 2",
					data:new Date(),
					ata:"x"
				},
				{
					titulo:"Reuniao 3",
					data:new Date(),
					ata:"x"
				}
			]
			$scope.avisos = [
				{
					descricao:"Aviso muito urgente",
					data:new Date()
				},
				{
					descricao:"Aviso pouco urgente",
					data:new Date()
				},
				{
					descricao:"Aviso Urgentissimo",
					data:new Date()
				}
			]

			$scope.headers = [
				"titulo",
				"data",
				"ata"
			];

		}]);