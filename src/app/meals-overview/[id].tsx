import { CATEGORIES, MEALS } from "@/data";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useLayoutEffect } from "react";

const MealsOverview = () => {
    const navigation = useNavigation()
    const { id } = useLocalSearchParams();
    
    // Filter meals that belong to this category
    const category = CATEGORIES.find(cat => cat.id === id);
    const categoryMeals = MEALS.filter(meal => meal.categoryIds.includes(id as string));

    if (categoryMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.noMealsText}>No meals found in this category</Text>
            </View>
        );
    }
    useLayoutEffect(() => {
        navigation.setOptions({
          title: category.title,
        });
      }, [navigation]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.gridContainer}>
                {categoryMeals.map((meal) => (
                    <Link 
                        key={meal.id} 
                        href={`/meals/${meal.id}`} 
                        asChild
                    >
                        <TouchableOpacity style={styles.mealCard}>
                            <Image 
                                source={{ uri: meal.imageUrl }} 
                                style={styles.mealImage}
                            />
                            <View style={styles.mealInfo}>
                                <Text style={styles.mealTitle}>{meal.title}</Text>
                                <View style={styles.mealMeta}>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="time-outline" size={16} color="#FF6B00" />
                                        <Text style={styles.metaText}>{meal.duration} min</Text>
                                    </View>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="cash-outline" size={16} color="#FF6B00" />
                                        <Text style={styles.metaText}>{meal.affordability}</Text>
                                    </View>
                                    <View style={styles.metaItem}>
                                        <Ionicons name="restaurant-outline" size={16} color="#FF6B00" />
                                        <Text style={styles.metaText}>{meal.complexity}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Link>
                ))}
            </View>
        </ScrollView>
    );
}

MealsOverview.options = ({ route }) => ({
    title: route.params?.title || 'Meals'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        gap: 10,
    },
    mealCard: {
        width: '48%',
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 10,
    },
    mealImage: {
        width: '100%',
        height: 150,
    },
    mealInfo: {
        padding: 10,
    },
    mealTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    mealMeta: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2D2D2D',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 12,
    },
    metaText: {
        fontSize: 12,
        color: '#FF6B00',
        marginLeft: 4,
        textTransform: 'capitalize',
    },
    noMealsText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MealsOverview;
