'use strict';

angular.module('lmsApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


