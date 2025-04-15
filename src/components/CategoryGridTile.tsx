import Category from '@/models/category'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native'

const CategoryGridTile = ({ id, imageUrl, title }: Category) => {
  return (
    <View style={styles.outerView}>
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        android_ripple={{ color: '#ccc' }}
        onPress={() => {
          router.navigate(`/meals-overview/${id}`)
        }}
      >
        <Image 
          source={{ uri: imageUrl }} 
          style={styles.image}
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  outerView: {
    flex: 1,
    margin: 8,
    height: 150,
    borderRadius: 12,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
})

export default CategoryGridTile