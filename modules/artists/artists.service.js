angular.module('loginrouting3818App')
    .factory('artists', function($firebaseArray, $firebaseObject) {
        var artistsRef = firebase.database().ref('artists');
        var connectedRef = firebase.database().ref('.info/connected');
        var artists = $firebaseArray(artistsRef);

        var Artists = {
            getArtistsdetail: function(uid) {
                return $firebaseObject(artistsRef.child(uid));
            },

            getArtistsprofilepic: function(uid) {
                return artists.$getRecord(uid).Artistsprofilepic;
            },

            all: artists
        };

        return Artists;
    });
