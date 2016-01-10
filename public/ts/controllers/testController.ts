/// <reference path="../references.ts" />
module testModule{
    export class TestController {
        constructor(){
            console.log('testController initiated');
            alert('test success');
        }
    }
    angular.module('myModule').controller('testController', TestController);
}