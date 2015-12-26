/// <reference path="../references.ts" />
module testModule{
    export class TestController {
        constructor(){
            console.log('testController initiated');
        }
    }
    angular.module('testApp').controller('testController', TestController);
}