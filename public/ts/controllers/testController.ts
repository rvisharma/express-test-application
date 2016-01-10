/// <reference path="../references.ts" />
module testModule{
    export class TestController {
        constructor(){
            console.log('testController initiated');
            alert('test success');
        }
    }
    angular.module('testApp').controller('testController', TestController);
}