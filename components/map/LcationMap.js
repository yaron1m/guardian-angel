import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import googleApi from '../../constants/GoogleApi';
// import { MapView } from "expo";
// import MapBeacon from './MapImage';
// import _ from 'lodash';
// import OrderBeacon from '../../../provider/pending-orders-page/OrderBeacon';

export default function LocationMap(props) {
    if (!props.isGeolocationAvailable) {
        return <div>Your browser does not support Geolocation</div>
    }

    if (!props.isGeolocationEnabled) {
        return <div>Geolocation is not enabled</div>
    }

    if (!props.coords) {
        return <div>Searching for location</div>
    }

    const style = {
        height: '300px',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        border: "1px solid black",
    };
    //
    // function renderOrder(order) {
    //     return (
    //         <OrderBeacon
    //             key={order.id}
    //             lat={order.latitude}
    //             lng={order.longitude}
    //         />
    //     )
    // }

    return (
        <div style={style}>
            {/*<MapView*/}
                {/*style={{*/}
                    {/*flex: 1*/}
                {/*}}*/}
                {/*initialRegion={{*/}
                    {/*latitude: 37.78825,*/}
                    {/*longitude: -122.4324,*/}
                    {/*latitudeDelta: 0.0922,*/}
                    {/*longitudeDelta: 0.0421*/}
                {/*}}*/}
            {/*/>*/}
        </div>
    )
}