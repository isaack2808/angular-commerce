angular.module('loginrouting3818App')
    .controller('ArtistsCtrl', function($state, md5, auth, artists) {
        var artistsCtrl = this;

        artistsCtrl.artists = artists;

        artistsCtrl.updateArtists = function() {
            artistsCtrl.artists.emailHash = md5.createHash(auth.email);
            artistsCtrl.artists.$save().then(function() {
                $state.go('artistsdetail');
            });
        };
    });
