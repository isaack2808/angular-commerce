angular.module('loginrouting3818App')
    .controller('AuthCtrl', function(Auth, $state) {
        var authCtrl = this;

        authCtrl.artists = {
            email: '',
            password: ''
        };

        authCtrl.login = function() {
            Auth.$signInWithEmailAndPassword(authCtrl.artists.email, authCtrl.artists.password).then(function(auth) {
                $state.go('artists');
            }, function(error) {
                authCtrl.error = error;
            });
        };

        authCtrl.register = function() {
            Auth.$createArtistsWithEmailAndPassword(authCtrl.artists.email, authCtrl.artists.password).then(function(user) {
                $state.go('artists');
            }, function(error) {
                authCtrl.error = error;
            });
        };
    });
