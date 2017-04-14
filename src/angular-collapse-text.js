/**
* angular-collapse-text v0.0.1
* 2017 Armando Rocha https://github.com/ArmandoKenneth
* Simple Angular directive that adds the "Read more/less" action to a piece of text
* MIT License, http://www.opensource.org/licenses/MIT
*/
angular.module('ark.collapse-text', [])
.directive('collapseText', function ($compile) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			// Setting a default values for optional attributes
			var defaultMaxLength = 100;
			var defaultShowText = "Show more";
			var defaultHideText = "Show less";
			scope.isCollapsed = true;
			var defaultReadMoreClass = "btn btn-ghost";

			scope.toogleCollapse = function(){
				scope.isCollapsed = !scope.isCollapsed;
			}

			// Watches for the content to change
			attrs.$observe('collapseTextContent', function(content) {
				if (!content) return;

				// Check if a length was passed
				var maxLength = scope.$eval(attrs.collapseTextLength);
				if (!maxLength){
					maxLength = defaultMaxLength;
				}

				// Check for custom "Read more"/"Read less" text
				scope.showText = attrs.collapseTextShowText;
				if (!scope.showText){
					scope.showText = defaultShowText;
				}
				scope.hideText = attrs.collapseTextHideText;
				if (!scope.hideText){
					scope.hideText = defaultHideText;
				}

				// Check for user specific class in read more
				var cssClass = attrs.collapseTextButtonClass;
				if (!cssClass){
					cssClass = defaultReadMoreClass;
				}

				// The main idea is to to split the text into 2 separate variables
				// The first one is the visible part before the "Read more" style action
				// The second contains the rest of the content
				if (content.length > maxLength){
					var visibleText = content.substring(0, maxLength);
					var hiddenText = content.substring(maxLength, content.length);

					var visibleTag = $compile("<span>"+visibleText+"</span><span ng-if='isCollapsed'> ... </span>")(scope);
					var hiddenTag = $compile("<span ng-if='!isCollapsed'>"+hiddenText+"</span>")(scope);
					var toggleAction = $compile("<button type='button' class='"+cssClass+"' ng-click='toogleCollapse()'>{{isCollapsed ? showText : hideText }}</button>")(scope);

					element.empty();
					element.append(visibleTag);
					element.append(hiddenTag);
					element.append("<br>");
					element.append(toggleAction);
				}else{
					// If the element fits, don't display the "Read more", only the text
					element.empty();
					element.append(content);
				}
			});
		}
	};
});