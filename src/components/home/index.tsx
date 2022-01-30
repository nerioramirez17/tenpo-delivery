import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { CardRestaurant } from '../cardRestaurants';
import { CardCategories } from '../cardCategories';
import { CardFavorites } from '../cardFavorites';
import { restaurants } from '../../api/restaurants';
import { categories } from '../../api/categories';
import { favorites  } from '../../api/favorites';
import { Container, Title, RestaurantsContainer, CategoriesContainer, FavoritesContainer } from './styles';
import Header from '../header';
import Slides from '../slides'
import Adrees from '../address'

const Home = () => {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Header />
        <Slides />
        <Adrees />
        <RestaurantsContainer>
          <Title bold size='16'>
            RESTAURANTES
          </Title>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={restaurants}
            renderItem={({ item }) => <CardRestaurant item={item} />}
            keyExtractor={(item: any) => item.id}
            />
        </RestaurantsContainer>
        <CategoriesContainer>
          <Title bold size='16' style={{marginBottom: 8}}>
            CATEGORÍAS
          </Title>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={categories}
            renderItem={({ item }) => <CardCategories item={item} />}
            keyExtractor={(item: any) => item.id}
          />
        </CategoriesContainer>
        <FavoritesContainer>
          <Title bold size='16' style={{marginBottom: 10}}>
            TUS FAVORITOS
          </Title>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={favorites}
            renderItem={({ item }) => <CardFavorites item={item} />}
            keyExtractor={(item: any) => item.id}
          />
        </FavoritesContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
