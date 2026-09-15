import {View, Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Profile() {
    return (
        <SafeAreaView>
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 50
    }
})