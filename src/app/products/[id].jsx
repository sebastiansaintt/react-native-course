import {View, Text, StyleSheet} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function Product() {
    const {id} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text>Product</Text>
            <Text>ID: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    primaryText: {
        fontSize: 20,
        fontFamily: "Inter_700Bold",
        color: 'white'
    },
    secondaryText: {
        fontSize: 15,
        fontFamily: "Inter_400Regular",
        color: 'white'
    }
})
