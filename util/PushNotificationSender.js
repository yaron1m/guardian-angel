const expoApi = 'https://exp.host/--/api/v2/push/send';

export default function sendPushNotification(expoToken, title, body) {
    return fetch(expoApi, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            'to': expoToken,
            'title': title,
            'body': body
        }),
    });
}