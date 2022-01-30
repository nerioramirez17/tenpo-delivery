import React from 'react';
import { Wrapper, Img, BottomLetter, Container, Title, Logo, TextContainer } from './styles';
import { Entypo } from '@expo/vector-icons';
import { View } from 'react-native';


export const CardFavorites = ({ item: { restaurant, img, description, rate, time, img_restaurant } }: any) => {
  return (
    <Container>
      <Wrapper>
        <Img source={{uri: img}} imageStyle={{ borderTopLeftRadius: 8, borderTopRightRadius: 8}}/>
        <Logo source={{uri: img_restaurant}} />
      </Wrapper>
      <TextContainer>
        <Title size='10'>{description}</Title>
        <View style={{flexDirection: 'row'}}>
          <Entypo name='star'size={12} color='orange' />
          <Title size='12'>{rate}</Title>
        </View>
      </TextContainer>
      <BottomLetter>
        <Title size='12' bold color='#7cdbd0'>{restaurant}</Title>
        <Title size='12'>{time}</Title>
      </BottomLetter>
    </Container>
  );
};
