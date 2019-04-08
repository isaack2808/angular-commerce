angular.module('loginrouting3818App')
    .factory('Auth', function($firebaseAuth) {
        var auth = $firebaseAuth();

        return auth;

    });
