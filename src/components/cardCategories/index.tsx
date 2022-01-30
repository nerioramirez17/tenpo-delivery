import React from 'react';
import { Wrapper, Img, Text } from './styles';


export const CardCategories = ({ item: { title, img } }: any) => {
  return (
    <Wrapper>
      <Img 
        source={{uri: img}}
        imageStyle={{ borderRadius: 6}}
        >
        <Text>{title}</Text>
      </Img>
    </Wrapper>
      
  );
};
