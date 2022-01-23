import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

//import styles
import './collectionpreview.styles.scss';

//import uniqid
import uniqid from 'uniqid';

//import components
import CollectionItem from '../CollectionItem/CollectionItem.component';

//import swiper js and its other necessary features
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'

//import swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

//custom Hook to check window's width
const useWindowWidth = () => {
    const [width, setWidth] = useState([window.innerWidth]);

    useLayoutEffect(() => {

        const updateSize = () => {
            setWidth([window.innerWidth])
        }

        window.addEventListener('resize', updateSize)

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return width;
}


const CollectionPreview = ({ collection }) => {

    const [responsive, setResponsive] = useState(false);
    const [browserWidth, setBrowserWidth] = useWindowWidth();

    useEffect(() => {
        if (browserWidth < 720) {
            setResponsive(true);
        } else {
            setResponsive(false);
        }
    }, [browserWidth])

    return (
        <div className="collection-preview-container">
            <h2 className="collection-preview-header">{collection.label}</h2>
            <Swiper className="swiper" modules={[Pagination]} spaceBetween={5} slidesPerView={responsive ? 1 : 5} pagination={{ clickable: true }} >
                {collection.anime_list.map(anime => (<SwiperSlide key={uniqid()}>
                    <div className="item">
                        <CollectionItem anime={anime} />
                    </div>
                </SwiperSlide>))}
            </Swiper>


        </div>
    )
}


export default CollectionPreview;