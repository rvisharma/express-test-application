/// <reference path="../references.ts" />
var testModule;
(function (testModule) {
    var TestController = (function () {
        function TestController() {
            console.log('testController initiated success');
        }
        return TestController;
    })();
    testModule.TestController = TestController;
    angular.module('testApp').controller('testController', TestController);
})(testModule || (testModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb250cm9sbGVycy90ZXN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJ0ZXN0TW9kdWxlIiwidGVzdE1vZHVsZS5UZXN0Q29udHJvbGxlciIsInRlc3RNb2R1bGUuVGVzdENvbnRyb2xsZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QyxJQUFPLFVBQVUsQ0FPaEI7QUFQRCxXQUFPLFVBQVUsRUFBQSxDQUFDO0lBQ2RBO1FBQ0lDO1lBQ0lDLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLGtDQUFrQ0EsQ0FBQ0EsQ0FBQ0E7UUFDcERBLENBQUNBO1FBQ0xELHFCQUFDQTtJQUFEQSxDQUFDQSxBQUpERCxJQUlDQTtJQUpZQSx5QkFBY0EsaUJBSTFCQSxDQUFBQTtJQUNEQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxVQUFVQSxDQUFDQSxnQkFBZ0JBLEVBQUVBLGNBQWNBLENBQUNBLENBQUNBO0FBQzNFQSxDQUFDQSxFQVBNLFVBQVUsS0FBVixVQUFVLFFBT2hCIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3JlZmVyZW5jZXMudHNcIiAvPlxyXG5tb2R1bGUgdGVzdE1vZHVsZXtcclxuICAgIGV4cG9ydCBjbGFzcyBUZXN0Q29udHJvbGxlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3RDb250cm9sbGVyIGluaXRpYXRlZCBzdWNjZXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ3Rlc3RBcHAnKS5jb250cm9sbGVyKCd0ZXN0Q29udHJvbGxlcicsIFRlc3RDb250cm9sbGVyKTtcclxufSJdfQ==