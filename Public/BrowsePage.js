angular.module('BrowsePage', [])
    .controller('BrowsePageController', function($http) {
        var browsePage = this;
        
        $http.get('/sampleObjects').then(function(response) {
            browsePage.objects = response.data;
        })

        browsePage.availableOrNot = function(TrueOrFalse) {
            
            if (TrueOrFalse === true) {
                return "Available"
            }

            else {
                return "Not Available"
            }
        }

        browsePage.createNewObject = function() {
            if (browsePage.name !== "" && browsePage.price !== "" && browsePage.timePeriod !== "" && browsePage.totalPrice !== "" && browsePage.description !== "")
                browsePage.objects.push({"ObjectName":browsePage.name, "PostedBy":"Coming Soon", "Price":browsePage.price+"/"+browsePage.timePeriod, "TotalPrice":browsePage.totalPrice, "Description":browsePage.description, "Status": true})
                browsePage.name = "";
                browsePage.price = "";
                browsePage.timePeriod = "";
                browsePage.totalPrice = "";
                browsePage.description = "";
        }

    })