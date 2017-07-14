function ($scope, $log, $window, widgetNameFactory ) {

  'use strict';
  $scope.msgTel = null;
  $scope.regex = null;
  $scope.errorMsgPattern = { ipv4:'Formato de direccion IP incorrecta',
                             ipv4priv:'Direccion IP Privada incorrecta',
                             mac48:'Formato de MAC incorrecto',
                             maskipv4:'Formato de mascara incorrecta',
                             email:'Direccion de correo electronica incorrecta',
                             expreg:'Error en la validacion del campo (expreg)',
                             hostname:'Nombre de maquina incorrecto'
  };
  
  if ($scope.properties.name !== null && $scope.properties.name !== ""){
      this.name = $scope.properties.name;
  } else {
      this.name = widgetNameFactory.getName('apInput');
  }
  
  this.tooltipstyle = "float:right; text-decoration: none;";
  if ( $scope.properties.tooltipstyle !== null){
     this.tooltipstyle = $scope.properties.tooltipstyle;
  }
  
  if ( $scope.properties.nonerroricon === null ) $scope.properties.nonerroricon = "ok";
  if ( $scope.properties.erroricon === null ) $scope.properties.nonerroricon = "warning-sign";
  
  if ( $scope.properties.type == 'text' && $scope.properties.subtype != 'none' ){
     switch ($scope.properties.subtype){
        case 'ipv4':$scope.regex = /^(((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])))$/;
                    break;
        case 'ipv4priv':$scope.regex = /^((((192\.168\.)|(172\.1[6-9]\.)|(172\.2[0-9]\.)|(172\.3[0-1]\.))((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9]))|(((127\.)|(10\.))((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.)(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])))$/;
                    break;
        case 'maskipv4':$scope.regex = /^((0|128|192|224|240|248|252|254)\.0\.0\.0)|(255\.(((0|128|192|224|240|248|252|254)\.0\.0)|(255\.(((0|128|192|224|240|248|252|254)\.0)|255\.(0|128|192|224|240|248|252|254|255)))))$/;
                    break;
        case 'mac48':$scope.regex = /^(([0-9A-Fa-f]{2}([:-]?))([0-9A-Fa-f]{2}\3){4}([0-9A-Fa-f]{2}))$/;
                    break;
        case 'email':$scope.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    break;
        case 'hostname':$scope.regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;
                    break;
        default: $scope.regex = new RegExp($scope.properties.expreg);
                 break; 
     }    
  }
  
  this.getIconClass = function( form, d ){
        var cl = "";
        var cli = "";
        if ( $scope.properties.showvalidicon && $scope.properties.showinputicon != "none" ){
            if ($scope.properties.showinputicon=="left"){
                cl += "left-right-inner-addon";
                cli += "left-inner-addon";
            } else {
                cl += "right-right-inner-addon";
                cli += "right-right-inner-addon";
            }
        } else {
            if ($scope.properties.showinputicon != "none"){
                switch ($scope.properties.showinputicon){
                    case 'left': cl += "left-inner-addon";
                                 cli += "left-inner-addon";
                                 break;
                    case 'right': cl += "right-inner-addon";
                                  cli += "right-inner-addon";
                                 break;
                }
            } else {
                if ($scope.properties.showvalidicon){
                    cl += "right-inner-addon";
                }
            }
        }    
        if (d) return cl;
        else return cli;
  };
  
  this.change = function( $form ){
      if (typeof $window[$scope.properties.onChange] == "function"){
          $window[$scope.properties.onChange]($window,$form);
      }
  };
  
  if (!$scope.properties.isBound('value')) {
    $log.error('the apInput property named "value" need to be bound to a variable');
  }
}

