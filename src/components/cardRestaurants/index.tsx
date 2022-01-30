import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { Wrapper, Promo, Img, Title, PromoText, BottomLetter } from './styles';


export const CardRestaurant = ({ item: { title, img, rate, time, dcto } }: any) => {
  return (
    <Wrapper>
        {
          dcto && (
            <Promo>
              <PromoText>{dcto}</PromoText>        
            </Promo>
          )
        }
      <Img source={{ uri: img }} />
      <Title  size='14'>{title}</Title>
      <BottomLetter>
        <Entypo name='star' size={12} color='orange' />
        <Title size='10' style={{paddingRight: 8}}>{rate}</Title>
        <Title size='10'>{time}</Title>
      </BottomLetter>
    </Wrapper>
  );
};
