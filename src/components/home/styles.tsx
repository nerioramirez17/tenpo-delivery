
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';


export const Container = styled(SafeAreaView)`
  background-color: #f2f2f2;
  flex: 1;
`;

export const Title = styled.Text<{
color?: string;
size?: string;
bold?: boolean;
}>`
  font-size: ${({ size }) => (size ? size : '40')}px;
  ${({ bold }) => bold && ' font-weight: bold'};
  color: ${({ color }) => (color ? color : 'black')};
`;

export const RestaurantsContainer = styled.View`
  margin-top: -18px;
  background-color: #ffff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px 0 20px 15px;
`;

export const CategoriesContainer = styled.View`
  background-color: #ffff;
  padding: 8px 0 20px 15px;
`;

export const FavoritesContainer = styled.View`
  background-color: #ffff;
  padding: 10px 0 10px 15px;
`;
