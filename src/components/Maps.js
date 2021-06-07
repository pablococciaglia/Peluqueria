import React from 'react'
import {
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker
} from 'react-google-maps';

export const Maps = () => {
    
    const mapStyles = require('./mapsstyle.json');

    function Map(){
        return(
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{
                    lat: 36.520,
                    lng: -4.873966690217978
                }}
                defaultOptions={{ styles: mapStyles }}
            >
                <Marker 
                    position={{
                        lat: 36.52161975531055, 
                        lng:-4.873966690216868
                    }}
                    icon={{
                        url: "/logo192.png",
                        scaledSize: new window.google.maps.Size(25,25)
                    }}
                />
            </GoogleMap>
        );
    }

    function Map2(){
        return(
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{
                    lat: 36.540486,
                    lng: -4.622865
                }}
                defaultOptions={{ styles: mapStyles }}
            >
                <Marker 
                    position={{
                        lat: 36.54063683872045, 
                        lng:-4.620665573218658}}
                    icon={{
                        url: "/logo192.png",
                        scaledSize: new window.google.maps.Size(25,25)
                    }}
                />
            </GoogleMap>
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));
    const WrappedMap2 = withScriptjs(withGoogleMap(Map2));

    return (
        <>
            <div className="component__title"><span>Mapa&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
            <div className="maps__totalcontainer">
                <div className="row">
                    <div className="col s12 m6" style={{height: "400px"}}>

                        <div className="maps__titlem">
                            <span className="redsoc__title">Monisú</span>
                            <span className="redsoc__subtitle">Marbell</span>
                        </div>
                        
                        <WrappedMap
                            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= /*apikey de google map*/`}
                            loadingElement ={<div style={{height: "100%"}} />}
                            containerElement ={<div style={{height: "100%"}} />}
                            mapElement ={<div style={{height: "100%"}} className="maps__container" />}
                        />
                        
                    </div>

                    <div className="col s12 m6" style={{height: "400px"}}>

                        <div className="maps__titlef">
                            <span className="redsoc__title">Monisú</span>
                            <span className="redsoc__subtitle">Fuengirol</span>
                        </div>

                        <WrappedMap2
                            googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key= /*apikey de google map*/`}
                            loadingElement ={<div style={{height: "100%"}} />}
                            containerElement ={<div style={{height: "100%"}} />}
                            mapElement ={<div style={{height: "100%"}} className="maps__container" />}
                        />   
                        
                    </div>
                </div>
            </div>
        </>
    )
}
