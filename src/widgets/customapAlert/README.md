## Description
This is an Alert Widget.
Use it for show an alert message on your pages.

## Usage

**message**: the message to show on alert.

**style**: the style of the alert, Choice one from: alert-success, alert-info, alert-warning, alert-danger.

**isDismissible**: select true if the alert is dismissible or false if not.

**onDismiss**: if the alert is dismissible, the accion to execute when dismiss it.

**isAutoDismissible**: select true for auto-close the alert.

**timeForAutoClose**: the time in ms for auto-close the alert when isAutoDismissible is true.

**displayIcon**: select true for display an icon at left of the message.

**buttonIcon**: the name of the icon to show when displayIcon is true. (look at http://getbootstrap.com/components/ ) 
            Use the name of the Glyphicons without the prefix 'glyphicon-' for example 'ok-circle' or 'warning-sign'
			By default, if you don't put anything, an alert-success display 'ok-sign', alert-info 'info-sign', 
			alert-warning 'warning-sign' and alert-danger 'alert'

**SizeIcon**: the size of the icon, 1 to 5 being 1 normal size and 5 large size

**showcountdown**: select true to show a countdown when isAutoDismissible is true. It shows on the top-right corner. 

## Screenshot

Alert-danger sample:

![Exemple](/src/widgets/customapAlert/images/alert-danger.png?raw=true "Alert-danger Sample")

Alert-success sample:

![Exemple](/src/widgets/customapAlert/images/alert-success.png?raw=true "Alert-success Sample")
