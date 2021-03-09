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
            var newId = 0;
            angular.forEach(browsePage.objects, function(object) {
                if (object.id > newId) {
                    newId = object.id
                }
            })
            newId = newId + 1
                browsePage.objects.push({'id':newId, "ObjectName":browsePage.name, "PostedBy":"Coming Soon", "Price":"$"+browsePage.price+"/"+browsePage.timePeriod, "TotalPrice":browsePage.totalPrice, "Description":browsePage.description, "Age":browsePage.age, "Status": true})
                browsePage.age = "";
                browsePage.name = "";
                browsePage.price = "";
                browsePage.timePeriod = "";
                browsePage.totalPrice = "";
                browsePage.description = "";
        }

        browsePage.currentObject = function(object) {
            browsePage.openObject = object;
        }

    })