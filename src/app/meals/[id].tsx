import { MEALS } from "@/data";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function MealDetails() {
    const { id } = useLocalSearchParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const foundMeal = MEALS.find((meal) => meal.id === id);
        setMeal(foundMeal);
    }, [id]);

    if (!meal) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FF6B00" />
            </View>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            
            <View style={styles.contentContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{meal.title}</Text>
                    <View style={styles.durationContainer}>
                        <Ionicons name="time-outline" size={18} color="#FF6B00" />
                        <Text style={styles.duration}>{meal.duration} min</Text>
                    </View>
                </View>

                <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                        <MaterialIcons name="attach-money" size={18} color="#FF6B00" />
                        <Text style={styles.metaText}>{meal.affordability}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <MaterialCommunityIcons name="chef-hat" size={18} color="#FF6B00" />
                        <Text style={styles.metaText}>{meal.complexity}</Text>
                    </View>
                </View>

                <View style={styles.dietaryContainer}>
                    {meal.isGlutenFree && (
                        <View style={styles.dietaryItem}>
                            <FontAwesome name="leaf" size={16} color="#4CAF50" />
                            <Text style={styles.dietaryText}>Gluten-free</Text>
                        </View>
                    )}
                    {meal.isVegan && (
                        <View style={styles.dietaryItem}>
                            <MaterialCommunityIcons name="sprout" size={16} color="#4CAF50" />
                            <Text style={styles.dietaryText}>Vegan</Text>
                        </View>
                    )}
                    {meal.isVegetarian && (
                        <View style={styles.dietaryItem}>
                            <Ionicons name="md-leaf" size={16} color="#4CAF50" />
                            <Text style={styles.dietaryText}>Vegetarian</Text>
                        </View>
                    )}
                    {meal.isLactoseFree && (
                        <View style={styles.dietaryItem}>
                            <MaterialCommunityIcons name="cup-off" size={16} color="#4CAF50" />
                            <Text style={styles.dietaryText}>Lactose-free</Text>
                        </View>
                    )}
                </View>

                <View style={styles.divider} />

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                    <View style={styles.ingredientsContainer}>
                        {meal.ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientItem}>
                                <View style={styles.bulletPoint} />
                                <Text style={styles.ingredient}>{ingredient}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.section}>
                    <Text style={styles.subtitle}>Preparation</Text>
                    {meal.steps.map((step, index) => (
                        <View key={index} style={styles.stepContainer}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepNumberText}>{index + 1}</Text>
                            </View>
                            <Text style={styles.step}>{step}</Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                    <Ionicons name="cart-outline" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
    },
    image: {
        width: '100%',
        height: 300,
    },
    contentContainer: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        flex: 1,
        marginRight: 10,
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    duration: {
        fontSize: 14,
        color: '#FF6B00',
        marginLeft: 5,
    },
    metaContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        gap: 15,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    metaText: {
        fontSize: 14,
        color: '#FF6B00',
        marginLeft: 5,
        textTransform: 'capitalize',
    },
    dietaryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 20,
    },
    dietaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    dietaryText: {
        fontSize: 12,
        color: '#4CAF50',
        marginLeft: 5,
    },
    divider: {
        height: 1,
        backgroundColor: '#2D2D2D',
        marginVertical: 20,
    },
    section: {
        marginBottom: 25,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 15,
    },
    ingredientsContainer: {
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 15,
    },
    ingredientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    bulletPoint: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#FF6B00',
        marginRight: 10,
    },
    ingredient: {
        fontSize: 16,
        color: '#E0E0E0',
    },
    stepContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        backgroundColor: '#1E1E1E',
        borderRadius: 12,
        padding: 15,
    },
    stepNumber: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#FF6B00',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    stepNumberText: {
        color: '#121212',
        fontWeight: 'bold',
        fontSize: 12,
    },
    step: {
        flex: 1,
        fontSize: 16,
        color: '#E0E0E0',
    },
    button: {
        backgroundColor: '#FF6B00',
        padding: 16,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});