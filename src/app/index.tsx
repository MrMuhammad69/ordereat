import CategoryGridTile from '@/components/CategoryGridTile'
import { CATEGORIES } from '@/data'
import Category from '@/models/category'
import { router, useNavigation } from 'expo-router'
import React, { useCallback, useLayoutEffect } from 'react'
import { FlatList, View, ListRenderItemInfo, StyleSheet, Text } from 'react-native'

const CategoriesScreen = () => {
  const navigation = useNavigation()
  const renderCategoryItem = useCallback(({ item }: ListRenderItemInfo<Category>) => {
    const handlePress = () => {
      router.push({
        pathname: `/meals-overview/${item.id}`,
        params: { title: item.title }
      })
    }
   
    
    return (
      <CategoryGridTile 
        id={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        onPress={handlePress}
      />
    )
  }, [])
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2} 
        data={CATEGORIES} 
        renderItem={renderCategoryItem} 
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

CategoriesScreen.options = {
  title: 'Categories'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 20,
    marginBottom: 20,
  },
  list: {
    padding: 16,
    gap: 16,
  }
})

export default CategoriesScreen