import CategoryGridTile from '@/components/CategoryGridTile'
import { CATEGORIES } from '@/data'
import Category from '@/models/category'
import { router } from 'expo-router'
import React, { useCallback } from 'react'
import { FlatList, View, ListRenderItemInfo, StyleSheet, Text } from 'react-native'

const CategoriesScreen = () => {
  const renderCategoryItem = useCallback(({ item }: ListRenderItemInfo<Category>) => {
    const handlePress = () => {
      router.push(`/meals-overview/${item.id}`)
    }
    
    return (
      <CategoryGridTile 
        {...item} 
      />
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
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