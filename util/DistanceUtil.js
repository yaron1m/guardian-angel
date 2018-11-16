//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
export function calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    lat1 = toRad(lat1);
    lat2 = toRad(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return Math.ceil(d * 100) / 100;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}

export default function getDistanceFromUsers(user1, user2) {
    const distance = calcDistance(user1.location.lat, user1.location.long, user2.location.lat, user2.location.long);
    return distance.toString().substr(0, 6) + ' km';
}
