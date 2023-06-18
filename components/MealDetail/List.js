import { View, Text, StyleSheet } from 'react-native';

const List = ({ data }) => {
    return (
        data.map((dataPoint) => 
            <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.itemText}> { dataPoint } </Text>
            </View>
        )
    )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 2,
        marginHorizontal:12,
        backgroundColor: '#73423cff',
    },
    itemText: {
        color: '#2e0401',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        paddingVertical: 4,
    }
})