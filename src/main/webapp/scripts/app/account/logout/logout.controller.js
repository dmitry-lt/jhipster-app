'use strict';

angular.module('lmsApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
