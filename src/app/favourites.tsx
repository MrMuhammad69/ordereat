import CategoryGridTile from '@/components/CategoryGridTile';
import MealGridTile from '@/components/MenuGridTile';
import { MEALS } from '@/data';
import { useFavoriteStore } from '@/store/favourites';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

type Props = {};

const Favourite = (props: Props) => {
  const { favorites } = useFavoriteStore();
  console.log(favorites)

  // Filter meals that are in the favorites
  const favoriteMeals = MEALS.filter((meal) => favorites.includes(meal.id));
  return (
    <View className='flex-1 bg-[#121212]'>
    <FlatList
  data={favoriteMeals}
  numColumns={2}
  renderItem={({ item }) => (
    <MealGridTile
      id={item.id}
      title={item.title}
      imageUrl={item.imageUrl}
      duration={item.duration}
      complexity={item.complexity}
      affordability={item.affordability}
      isGlutenFree={item.isGlutenFree}
      isVegan={item.isVegan}
      isVegetarian={item.isVegetarian}
      isLactoseFree={item.isLactoseFree}
      onPress={() => router.push(`/meals/${item.id}`)}
    />
  )}
/>
</View>
  );
};

export default Favourite;
