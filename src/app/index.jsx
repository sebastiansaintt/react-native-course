import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import Card from "../../components/Card";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.welcomeContainer}>
        <View>
          <Text style={styles.primaryText}>Welcome, User</Text>
          <Text style={styles.secondaryText}>
            This is a summary of your wishlist
          </Text>
        </View>
        <View>
          <Link href='/profile' asChild>
          <TouchableOpacity>
            <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKjz1gVQ92u98ghfzfAf7EpyXj3YRCLujbhUYTqSt0Dg&s=10",
            }}
            style={styles.image}
          />
          </TouchableOpacity>
          </Link>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <Card
          icon="heart"
          color="red"
          data={12}
          text={"Saved Wishlist"}
          symbol={""}
        />
        <Card
          icon="cash"
          color="green"
          data={10000}
          text={"Total Estimated Cost"}
          symbol={"$"}
        />
      </View>
        <TouchableOpacity style={styles.button}>
            <Text style={{fontSize:18, color: '#fff'}}>Agrega un nuevo producto a tu lista</Text>
            <Ionicons name='add-circle-outline' size={24} color="#fff" />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  primaryText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000000",
  },
  secondaryText: {
    fontSize: 18,
    color: "#6d6d6db6",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    gap: 10,
  },
  button: {
    backgroundColor: '#2c5ed1ff',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap:10,
    flexDirection: 'row'
  }

});
