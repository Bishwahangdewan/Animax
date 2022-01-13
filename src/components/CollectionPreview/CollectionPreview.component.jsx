import React from 'react';

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

const CollectionPreview = ({ collection }) => {
    return (
        <div className="collection-preview-container">
            <h2 className="collection-preview-header">{collection.label}</h2>
            <Swiper className="swiper" modules={[Pagination]} spaceBetween={10} slidesPerView={5} pagination={{ clickable: true }} >
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