import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface SideModalProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: any;
}

const SideModal: React.FC<SideModalProps> = ({ isVisible, onClose, navigation }) => {
  const translateX = React.useRef(new Animated.Value(-300)).current;

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(translateX, {
        toValue: -300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <Animated.View style={[styles.modalContainer, { transform: [{ translateX }] }]} >
        <View style={styles.modalContent}  className='bg-black h-screen' >
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              navigation.navigate('index');
              onClose();
            }}
          >
            <Ionicons name="home-outline" size={24} color="#FF6B00" />
            <Text style={styles.menuText}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              router.navigate('favourites')
              onClose();
            }}
          >
            <Ionicons name="heart-outline" size={24} color="#FF6B00" />
            <Text style={styles.menuText}>Favorites</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
      
      <TouchableOpacity  className='bg-black'
        style={styles.overlay} 
        activeOpacity={1}
        onPress={onClose}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#121212',
    zIndex: 100,
    borderRightWidth: 1,
    borderRightColor: '#2D2D2D',
  },
  modalContent: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2D2D2D',
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginLeft: 15,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 99,
  },
});

export default SideModal;