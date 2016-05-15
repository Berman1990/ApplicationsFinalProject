/**
 * Created by idan on 24/04/2016.
 */
function getGoecode() {
    $.get("maps.googleapis.com/maps/api/geocode/json?address=keren%20hayesod%2019%20raanana%20israel&key=AIzaSyAuW9c5XjRG4VPXzUQ5tF0Sjv6Vdgmz1Sc", function (data, status) {

        alert(JSON.parse(data));
        return (JSON.parse(data));
    });
}