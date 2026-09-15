import {View,Text, StyleSheet} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';


export default function Card({icon, color, data, text, symbol}){
    return(
        <View style={cardStyles.card}>
            <Ionicons name={icon} size={30} color={color} />           
            <Text style={cardStyles.primaryText}>{symbol}{data}</Text>
            <Text style={cardStyles.secondaryText}>{text}</Text>
        </View>
    )
}


const cardStyles = StyleSheet.create(
    {
        card: {
            flex: 1,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            padding: 20,
            gap: 10,
            shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2, 
        },
        primaryText: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#000000',
        },
        secondaryText: {
            fontSize: 18,
            color: '#6d6d6db6',
        }
    }
)
