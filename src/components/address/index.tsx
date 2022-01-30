import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AdreesContainer, Title } from './styles';


const Adrees = () => {
  return (
    <AdreesContainer>
      <MaterialCommunityIcons name="map-marker-radius-outline" size={28} color="black" />
      <View style={{ marginLeft: 8, justifyContent: 'center' }}>
        <Title size='16'>Agregar direccion de entrega</Title>
      </View>
    </AdreesContainer>
  );
};

export default Adrees;
