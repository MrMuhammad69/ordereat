import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, usePathname } from "expo-router";
import SideModal from "./SideModal"; // You'll need to create this component
import {useFavoriteStore, useStoreHydration} from '../store/favourites'
interface CustomHeaderProps {
  title: string;
  type?: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title }) => {
    const { addFavorite, removeFavorite, favorites } = useFavoriteStore();
    const isHydrated = useStoreHydration();
    const navigation = useNavigation();
    const path = usePathname();
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const parts = path.split('/');
    const id = parts[2];
    const showStarIcon = path.startsWith('/meals/');
  
    // Only check favorites after hydration
    const isFav = isHydrated && favorites.includes(id);
  
    const toggleFavorite = () => {
      if (!id) return;
      isFav ? removeFavorite(id) : addFavorite(id);
    };
  
    if (!isHydrated) {
      return (
        <View style={styles.container}>
          <View style={[styles.header, { justifyContent: 'center' }]}>
            <ActivityIndicator size="small" color="#FF6B00" />
          </View>
        </View>
      );
    }
  
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Ionicons
                name="menu"
                size={28}
                color="#FF6B00"
                style={styles.menuButton}
              />
            </TouchableOpacity>
  
            <Text style={styles.title}>{title}</Text>
  
            {showStarIcon && (
              <TouchableOpacity 
                onPress={toggleFavorite} 
                style={styles.rightPlaceholder}
              >
                <Ionicons
                  name={isFav ? 'star' : 'star-outline'}
                  size={24}
                  color="#FF6B00"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
  
        <SideModal 
          isVisible={isModalVisible} 
          onClose={() => setIsModalVisible(false)}
          navigation={navigation}
        />
      </>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    marginTop: -30,
    paddingTop: Platform.OS === "ios" ? 50 : 30,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#2D2D2D",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
  },
  backButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1,
    textAlign: "center",
    marginHorizontal: 10,
  },
  rightPlaceholder: {
    width: 40,
    alignItems: "flex-end",
  },
});

export default CustomHeader;