import { View, Text, StyleSheet } from "react-native";


const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}> { children }</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#73423cff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: '#73423cff',
        borderBottomWidth: 2,
        padding: 6,
        marginHorizontal: 12,
        marginVertical:16,
    }
})