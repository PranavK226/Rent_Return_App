angular.module('BrowsePage', [])
    .controller('BrowsePageController', function($http) {
        var browsePage = this;

        $http.get('/sampleObjects').then(function(response) {
            browsePage.objects = response.data;
            console.log(browsePage.objects)
        })

        browsePage.availableOrNot = function(TrueOrFalse) {
            
            if (TrueOrFalse === true) {
                return "Available"
            }

            else {
                return "Not Available"
            }
        }

    })