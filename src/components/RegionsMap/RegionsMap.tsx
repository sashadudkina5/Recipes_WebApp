//@ts-nocheck
"use client";

import React, { useEffect, useRef } from 'react';
import { fetchRandomMeal, fetchRegionsList } from "@/utils/api";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "@/utils/hooks";
import { convertAreasToCountryCodes, initializeDataMap } from "@/utils/service";
import styles from "./styles.module.scss"

export default function RegionsMap() {
    const { data: regions, loading } = useFetch(fetchRegionsList);
    const mapContainer = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && regions && mapContainer.current) {
            const areasWithCountryCodes = convertAreasToCountryCodes(regions);
            initializeDataMap(mapContainer.current, areasWithCountryCodes);
        }
    }, [regions]);

    if (loading) {
        return <CircularProgress />;
    }

    return (
        <section>
            <div ref={mapContainer} style={{ position: 'relative', width: '100%', height: '1200px' }}></div>
        </section>
    );
}
