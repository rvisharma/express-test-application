/// <reference path="../references.ts" />
var testModule;
(function (testModule) {
    var TestController = (function () {
        function TestController() {
            console.log('testController initiated');
            alert('test success');
        }
        return TestController;
    })();
    testModule.TestController = TestController;
    angular.module('testApp').controller('testController', TestController);
})(testModule || (testModule = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9jb250cm9sbGVycy90ZXN0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6WyJ0ZXN0TW9kdWxlIiwidGVzdE1vZHVsZS5UZXN0Q29udHJvbGxlciIsInRlc3RNb2R1bGUuVGVzdENvbnRyb2xsZXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QyxJQUFPLFVBQVUsQ0FRaEI7QUFSRCxXQUFPLFVBQVUsRUFBQSxDQUFDO0lBQ2RBO1FBQ0lDO1lBQ0lDLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLDBCQUEwQkEsQ0FBQ0EsQ0FBQ0E7WUFDeENBLEtBQUtBLENBQUNBLGNBQWNBLENBQUNBLENBQUNBO1FBQzFCQSxDQUFDQTtRQUNMRCxxQkFBQ0E7SUFBREEsQ0FBQ0EsQUFMREQsSUFLQ0E7SUFMWUEseUJBQWNBLGlCQUsxQkEsQ0FBQUE7SUFDREEsT0FBT0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsZ0JBQWdCQSxFQUFFQSxjQUFjQSxDQUFDQSxDQUFDQTtBQUMzRUEsQ0FBQ0EsRUFSTSxVQUFVLEtBQVYsVUFBVSxRQVFoQiIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi9yZWZlcmVuY2VzLnRzXCIgLz5cclxubW9kdWxlIHRlc3RNb2R1bGV7XHJcbiAgICBleHBvcnQgY2xhc3MgVGVzdENvbnRyb2xsZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Q29udHJvbGxlciBpbml0aWF0ZWQnKTtcclxuICAgICAgICAgICAgYWxlcnQoJ3Rlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFuZ3VsYXIubW9kdWxlKCd0ZXN0QXBwJykuY29udHJvbGxlcigndGVzdENvbnRyb2xsZXInLCBUZXN0Q29udHJvbGxlcik7XHJcbn0iXX0=