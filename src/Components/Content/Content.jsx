import React from 'react'
import './Content.css'
import Card from '../Card/Card';
import playlist from '../Card/playlist';
import {Swiper, SwiperSlide } from 'swiper/react'
import BgCard from '../BigCard/BgCard';
import bigcard from '../BigCard/bigCard';
import SwiperCore, {EffectCoverflow, Pagination, Scrollbar, Navigation} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


SwiperCore.use([EffectCoverflow, Pagination, Scrollbar, Navigation]);
const Content = () => {
  return (
   <div className="container Content">

      <div className="slide">
        <span>Live Porformance </span>

        <Swiper
        spaceBetween={30}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable : true}}
        scrollbar={{draggable: true}}
        className="sliding-swiper"
        >
          { bigcard.map((item, index ) => (
            <SwiperSlide key={index}>
              <BgCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="play-sec">
        <p>Start radio from a song</p>
        <h1>Quick Picks</h1>
        <div className="playlist">
        
          {playlist.map((item, index ) => (
            <Card key={index} item={item} />
            ))}
        </div>
      </div>
      
   </div>
  )
}

export default Content  