import {View, Text, Image,StyleSheet} from 'react-native';

export default function Index(){
    return (
        <View style={styles.container}>
            <View style={styles.welcomeContainer}>
                <View>
                    <Text style={styles.primaryText} >Hola, Usuario</Text>
                    <Text style={styles.secondaryText}>Este es tu resumen de deseos</Text>
                </View>
                <View>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjz1gVQ92u98ghfzfAf7EpyXj3YRCLujbhUYTqSt0Dg&s=10'}} style={styles.image} />
                </View>
            </View>
            <View>
             <View>
                <Text>Tus deseos</Text>
             </View>
             <View>

             </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex:1,
            backgroundColor: '#f5f5f5'
        },
        welcomeContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
        },
        primaryText: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#000000',
        },
        secondaryText: {
            fontSize: 14,
            color: '#000000',
        },
        image: {
            width: 50,
            height: 50,
            borderRadius: 50,
        }
    }
)