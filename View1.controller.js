sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idcaliculator.calculater.controller.View1", {
            onInit: function () {

            },


            add: function () {
                var key = parseInt(this.getView().byId("num").getValue());
                var key1 = parseInt(this.getView().byId("num1").getValue());
                var key2 = key + key1;
                console.log(key2);
            },
            sub: function () {
                var key = parseInt(this.getView().byId("num").getValue());
                var key1 = parseInt(this.getView().byId("num1").getValue());
                var key2 = key + key1;
                console.log(key2);
            },
            division: function () {
                var key = parseInt(this.getView().byId("num").getValue());
                var key1 = parseInt(this.getView().byId("num1").getValue());
                var key2 = key + key1;
                console.log(key2);
            },
            multiply: function () {
                var key = parseInt(this.getView().byId("num").getValue());
                console.log(key);

                let result = "";
                for (let i = 1; i <= 10; i++) {
                    result = result + key + "*" + i + "=" + key * i + "\n";
                }
                alert(result);
            },
             submit: function () {

            //     var key = this.getView().byId("num").getValue();
            //     //   console.log(key);
            //     // var storage = [];
            //     // var count = 0;
            //     // var count1;
            //     // var result = " ";
            //     // var indx = "";
            //     // for (var i = 0; i < key.length; i++) {

            //     //     for (var j = i + 1; j < key.length; j++) {
            //     //         if (key[i] === key[j]) {
            //     //             storage.push(key[i]);
            //     //             indx = storage.length - 1;
            //     //             count = count + 1;
            //     //             count1 = count;

            //     //             //   for(var k = 0; k < storage.length ; k++){
            //     //             result = result + storage[indx] + "=" + count1;

            //     //             count = 0;

            //     //         }
            //     //     }

            //     // }
            //     // var key1 = storage;
            //     // var storage2 = [];

            //     // var result1 = " ";

            //     // for (var k = 0; k < key1.length; k++) {

            //     //     for (var l = k + 1; l < key1.length; l++) {
            //     //         if (key1[k] === key1[l]) {
            //     //             storage2.push(key1[k]);
            //     //             indx = storage2.length - 1;
            //     //             count = count + 1;
            //     //             count1 = count;

            //     //             result1 = result1 + key1[indx] + "=" + count1;
            //     //             count = 0;
            //     //       }
            //     //    }
            //     // }
            //     // if (count1 > 0) {
            //     //     alert("Duplicate val and number =" + result1);
            //     // }
            //     // else {
            //     //     alert("No any duplicate values");
            //     // }


                var actualresult = "";
                var count = "";
                key = ["A","A","A"];
                for (i = 0; i < key.length; i++) {
                    for (j = i + 1; j < key.length; j++) {
                        if (key[i] === key[k]) {
                            actualresult = arr[i];
                            count = count + 1;
                        }
                    }
                }
                
            }

        });
    });
