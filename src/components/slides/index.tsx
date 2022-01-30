import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';
import { Slyde } from './slydes';
import { data } from '../../api/slides';


const Slides = () => {
  const { width: windowWidth } = Dimensions.get('window');
  const carousel = useRef<SnapCarousel<unknown> | null>(null);
  return (    
      <SnapCarousel
        ref={carousel}
        data={data}
        renderItem={(item) => <Slyde item={item} />}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
      />    
  );
};

export default Slides;
