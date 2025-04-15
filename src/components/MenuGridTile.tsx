import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

interface MealGridTileProps {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  onPress: () => void;
}

const MealGridTile: React.FC<MealGridTileProps> = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  isGlutenFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
  onPress
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        android_ripple={{ color: '#2D2D2D' }}
        onPress={onPress}
      >
        {/* Image with duration badge */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <View style={styles.durationBadge}>
            <Ionicons name="time-outline" size={14} color="#121212" />
            <Text style={styles.durationText}>{duration}m</Text>
          </View>
        </View>

        {/* Content area */}
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          
          {/* Dietary tags */}
          <View style={styles.dietaryContainer}>
            {isGlutenFree && (
              <View style={styles.dietaryTag}>
                <FontAwesome name="leaf" size={12} color="#4CAF50" />
                <Text style={styles.dietaryText}>GF</Text>
              </View>
            )}
            {isVegan && (
              <View style={styles.dietaryTag}>
                <MaterialCommunityIcons name="sprout" size={12} color="#4CAF50" />
                <Text style={styles.dietaryText}>Vegan</Text>
              </View>
            )}
            {isVegetarian && (
              <View style={styles.dietaryTag}>
                <Ionicons name="leaf" size={12} color="#4CAF50" />
                <Text style={styles.dietaryText}>Veg</Text>
              </View>
            )}
            {isLactoseFree && (
              <View style={styles.dietaryTag}>
                <MaterialCommunityIcons name="cup-off" size={12} color="#4CAF50" />
                <Text style={styles.dietaryText}>LF</Text>
              </View>
            )}
          </View>

          {/* Meal details */}
          <View style={styles.details}>
            <View style={styles.detailItem}>
              <Ionicons name="cash-outline" size={14} color="#FF6B00" />
              <Text style={styles.detailText}>{affordability}</Text>
            </View>
            <View style={styles.detailItem}>
              <MaterialCommunityIcons name="chef-hat" size={14} color="#FF6B00" />
              <Text style={styles.detailText}>{complexity}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#1E1E1E',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  imageContainer: {
    height: 150,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  durationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  durationText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
    color: '#121212',
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    minHeight: 40, // Ensure consistent height for 2 lines
  },
  dietaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  dietaryTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  dietaryText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginLeft: 4,
    textTransform: 'uppercase',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#FF6B00',
    marginLeft: 4,
    textTransform: 'capitalize',
  },
});

export default MealGridTile;