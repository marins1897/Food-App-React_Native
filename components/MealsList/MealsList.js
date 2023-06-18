import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { useNavigation } from "@react-navigation/native";

const MealsList = ({ items }) => {
    const navigation = useNavigation();
    const renderMealItem = (itemData) => {
        const item = itemData.item;
          
        const mealItemProps = {
            title : item.title,
            imageUrl : item.imageUrl,
            complexity : item.complexity,
            duration : item.duration,
            affordability : item.affordability,
        };

        const openMealDetailHandler = () => {
            navigation.navigate('MealDetail', {mealId : item.id});
          };

        return <MealItem {...mealItemProps} onPress = {openMealDetailHandler} />
    }


    return (
        <View style={styles.container}>
            <FlatList data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={renderMealItem}
            >
            </FlatList>
        </View>
    )
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,

    }
})