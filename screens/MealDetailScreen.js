import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext, useLayoutEffect } from "react";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite} from '../store/redux/favorites';
//import { FavoritesContext } from '../store/context/favorites-context';


const MealDetailScreen = ({ route, navigation }) => {
    //const favoriteMealsContext = useContext(FavoritesContext);
    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    //const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
    const mealIsFavorite = favoriteMealsIds.includes(mealId);

    const changeFavoriteStatusHandler = () => {
        if (mealIsFavorite) {
           // favoriteMealsContext.removeFavorite(mealId);
           dispatch(removeFavorite({ id : mealId }));
        } else {
           // favoriteMealsContext.addFavorite(mealId);
           dispatch(addFavorite({ id : mealId }));
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({ headerRight: () => {
            return <IconButton onPress={changeFavoriteStatusHandler} 
                                icon={mealIsFavorite ? 'heart' : 'heart-outline'} 
                                color="white"
                    />;
        }})
    },[navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.root}>
            <Image source={{ uri : selectedMeal.imageUrl }} style={styles.image}/>

            <View style={styles.innerContainer}>
            <Text style={styles.title}>{selectedMeal.title}</Text>
                <MealDetails duration={selectedMeal.duration} 
                            complexity={selectedMeal.complexity}
                            affordability={selectedMeal.affordability}
                            textStyle={{ color : 'white' }}
                />
            </View>
            <View style={styles.outerListContainer}>
            <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    root: {
        marginBottom: 24,
    },
    image: {
        width: '100%',
        height: 300,
    },
    innerContainer: {
        margin: 2,
        backgroundColor: '#471815ff',
        borderRadius: 12,
        borderColor: '#4a150fff',
        borderWidth: 2,
        elevation: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    outerListContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '90%',
    }
})