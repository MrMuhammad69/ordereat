import Category from '@/models/category'
import { router } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View, PressableProps } from 'react-native'


const CategoryGridTile = ({ id,color, title }: Category) => {
  return (
    <View style={[styles.outerView, { backgroundColor: color }]}>
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]} className='flex-1'

        android_ripple={{ color: '#ccc' }}
        onPress={()=> {
          router.navigate(`/meals-overview/${id}`)
        }}
      >
        <View style={styles.innerView}>
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
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerView: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
})

export default CategoryGridTile