import React, { useEffect, useState } from 'react';
import styled from "./index.module.scss";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Maps({width}) {

    const [widthWin, setWidthWin] = useState(window.innerWidth);
    const [widthWrp, setWidthWrp] = useState(0);

    useEffect(() => {
        const handleResize = (event) => {
            setWidthWin(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        console.log(widthWin);
        setWidthWrp(widthWin - 40);
        console.log(widthWrp, 'widthWrp');

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [widthWin]);

    return (
        <div className={styled.map} onClick={e => e.stopPropagation()}>
            <YMaps>

                <Map
                    defaultState={{
                        center: [55.782871, 37.729619],
                        zoom: 15,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    style={{
                        maxWidth: width || widthWrp,
                        height: '450px',
                    }}
                    options={{
                        autoFitToViewport: 'always',
                    }}
                >
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        defaultGeometry={[55.782871, 37.729619]}
                        properties={{
                            iconCaption:
                                "Нотариус",

                        }}
                    />
                </Map>

            </YMaps>
        </div>
    );
}

export default Maps;