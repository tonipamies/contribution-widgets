function WidgetapAlertController($scope, $sce, $timeout, $interval, $element ) {
    
    $scope.sec = $scope.properties.timeForAutoClose/1000;
    $scope.Timer = null;
    $scope.Timeout = null;
    
    $scope.$on('$destroy', function() {
       $scope.cancel();
       $scope.StopTimer();
    });
        
    $scope.Timer = $interval(function(){ 
        if ( $scope.sec > 0){
            $scope.sec-=1;
    }}, 1000 );
    
    this.StopTimer = function(){
        $scope.sec = $scope.properties.timeForAutoClose/1000;
        if (angular.isDefined($scope.Timer)) {
            $interval.cancel($scope.Timer);
            $scope.Timer=null;
        }
        if (angular.isDefined($scope.Timeout)) {
            $timeout.cancel($scope.Timeout);
            $scope.Timeout=null;
        }
    };
    
    $scope.Timeout = $timeout(function () {
        if ($scope.properties.isAutoDismissible){
           $scope.properties.onDismiss;
           this.StopTimer();
           $element.remove();
        }
    }, $scope.properties.timeForAutoClose );
    
    this.showCountDown = function (){
        return $scope.properties.showcountdown;
    }
    
    this.getMessage = function () {
        return $sce.trustAsHtml($scope.properties.message);
    };
    
    this.getIconClass = function (){
        var iconclass = 'glyphicon';
        if ($scope.properties.buttonIcon === ""){
            switch ($scope.properties.style){
                case 'alert-success': iconclass += ' glyphicon-ok-sign';
                                      break;
                case 'alert-info':    iconclass += ' glyphicon-info-sign';
                                      break;
                case 'alert-warning': iconclass += ' glyphicon-warning-sign';
                                      break;
                case 'alert-danger':  iconclass += ' glyphicon-alert';
                                      break;                  
            }
        } else {
            iconclass += ' glyphicon-'+$scope.properties.buttonIcon;
        }
        if ($scope.properties.SizeIcon!="1"){
            iconclass += ' gi-' + $scope.properties.SizeIcon + 'x';
        }
        return iconclass;
    }
    
    this.getClasses = function () {
        var classes = 'alert '+ $scope.properties.style;
        if ($scope.properties.isDismissible)
            classes += ' alert-dismissible fade in';
        return classes;
    };
    
    this.dismiss = function() {
        this.StopTimer();
        $scope.properties.onDismiss;
    };
}