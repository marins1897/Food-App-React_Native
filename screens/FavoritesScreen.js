import { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const MealsOverviewScreen = () => {
    //const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter((meal) => {
        //return favoriteMealsContext.ids.includes(meal.id);
        return favoriteMealsIds.includes(meal.id)
    });

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}> No Favorite Meals added yet! </Text>
            </View>
        )
    }


    return <MealsList items={favoriteMeals}/>
    
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})