## Description
This is a new Input Widget.

## Usage

**name**: the 'name' of the widget, if you don't put anything, controller get's one automatically.

**required**: select true for a required field, false if not.

**minLength**: value min length.

**maxLength**: value max lengt

**readOnly**: select true for a read-only field, false if not.

**labelHidden**: select true for hidden the label, false if not.

**label**: the label.

**labelPosition**: label position (left or top).

**labelWidth**: label width when labelPosition is left

**placeholder**: text to show on placeholder

**value**: value of the field

**type**: type of the input field. One of these: text, number, email or password.

**subtype**: when type is text, you can choose one of these: IPv4 address, private IPv4 address, IPv4 Netmask, 
Hostname,48 bits MAC address, Email or Regular Expression.

**expreg**: when subtype is Regular Expression, a regular expression in order to validate the input.

**min**: min value.

**max**: max value.

**step**: specifies the legal number intervals between values.

**displayTooltip**: select true if you want to display a tooltip icon.

**tooltipMessage**: the tooltip message.

**tooltipDirection**: the tooltip direction: left, rigth, top or bottom.

**tooltipIcon**: the name of the icon to show when displayTooltip is true. (look at http://getbootstrap.com/components/ ) 
Use the name of the Glyphicons without the prefix 'glyphicon-' for example 'ok-circle' or 'warning-sign'

**tooltipstyle**: the style to use on tooltipIcon when displayTooltip is true. By default: float:initial; text-decoration: none;

**tooltipClass**: tooltip CSS Class for the tooltipMessage.

**onChange**: a javascript function to execute on field event: on-change.

**showvalidicon**: select true for show an icon inside the input field when the input is valid or another one when invalid.

**nonerroricon**: the name of the icon to show when showvalidicon is true and the input is valid. (look at http://getbootstrap.com/components/ ) 
Use the name of the Glyphicons without the prefix 'glyphicon-' for example 'ok-circle' or 'warning-sign'

**erroricon**: the name of the icon to show when showvalidicon is true and the input is invalid. (look at http://getbootstrap.com/components/ ) 
Use the name of the Glyphicons without the prefix 'glyphicon-' for example 'ok-circle' or 'warning-sign'

**showinputicon**: select 'left' or 'right' for show an icon at left or at right inside the input field. 
Select 'none' in any other case.  

**inputicon**: the name of the icon to show when showinputicon is 'left' or 'right'. (look at http://getbootstrap.com/components/ ) 
Use the name of the Glyphicons without the prefix 'glyphicon-' for example 'ok-circle' or 'warning-sign'

## Screenshot

Input tooltip icon, left input icon and valid icon sample (invalid input):

![Exemple](/src/widgets/customapInput/images/input1.png?raw=true "Input Sample")

Input tooltip icon, left input icon and valid icon sample (valid input):

![Exemple](/src/widgets/customapInput/images/input2.png?raw=true "Input Sample")

Input tooltip icon, left input icon, valid icon and showing tooltip sample (valid input):

![Exemple](/src/widgets/customapInput/images/input3.png?raw=true "Input Sample")

Input tooltip icon, right input icon, valid icon and showing tooltip sample (invalid input):

![Exemple](/src/widgets/customapInput/images/input4.png?raw=true "Input Sample")