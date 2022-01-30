import React from 'react';
import { View } from 'react-native';
import { Row, WrapperFirst, Title, Img } from './styles';

export const Slyde = ({
  item: {
    item: { title, subTitle, img, text },
  },
}: any) => {
  return (
    <Row>
      <View>
        <WrapperFirst>
          <Title bold>{title}</Title>
          <Title bold color={subTitle.color}>
            {subTitle.text}
          </Title>
          <Title bold size='12' spacing>
            {text}
          </Title>
        </WrapperFirst>
      </View>
      <Img source={img} />
    </Row>
  );
};
