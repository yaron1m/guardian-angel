function GeoLocation(callback) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            callback(getLocation(position))
        },
        (error) => {
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
}

function getLocation(position) {
    return {
        timestamp: position.timestamp,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    }
}

export default GeoLocation;