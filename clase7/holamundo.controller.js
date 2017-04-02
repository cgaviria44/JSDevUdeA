angular.module('app',[])
  .controller('holacontroller',function ($scope) {
    $scope.saludo="Hello World!"
    $scope.object={
      nombre:'Cgaviria',
      edad:'21'
    }
    $scope.saludeme=function(){
      alert("Hola chachos "+$scope.object.nombre)
    }
    $scope.arreglo=[{
      nombre:'Cgaviria',
      edad:'21'
    },{
      nombre:'daniel',
      edad:'21'
    },{
      nombre:'Martín',
      edad:'21'
    }]

  })
