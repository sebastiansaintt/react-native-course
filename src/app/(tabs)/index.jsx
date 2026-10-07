import { View, Text, Image, StyleSheet, ScrollView, Pressable, Modal} from "react-native";
import Card from "../../../components/Card";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {useState} from 'react';

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const data = [
    {"id": 1, "name": 'Airpods', "price": 2000},
    {"id": 2, "name": 'tv', "price": 1500},
    {"id": 3, "name": 'iphone', "price": 1000},
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        <View style={styles.welcomeContainer}>
          <View>
            <Text style={styles.primaryText}>Welcome, User</Text>
            <Text style={styles.secondaryText}>
              This is a summary of your wishlist
            </Text>
          </View>
          <View>
            <Link href="/profile">
              <Image
                source={{
                  uri: "https://img.magnific.com/free-vector/woman-profile-account-picture_24908-81036.jpg?semt=ais_hybrid&w=740&q=80",
                }}
                style={styles.image}
              />
            </Link>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <Card
            icon="heart"
            color="#F02222"
            data="10"
            text="Saved Wishes"
            symbol=""
          />
          <Card
            icon="cash"
            color="#48C433"
            data="1000"
            text="Total Estimated Cost"
            symbol="$"
          />
        </View>
        <Pressable
        onPress={() => setModalVisible(true)}
        style={{backgroundColor: '#1f2effff', padding: 15, borderRadius: 10, margin: 10}}
        >
            <Text>Add Wish</Text>
        </Pressable>
        <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={()=> setModalVisible(false)}
        >
          <Text>Hola</Text>
          <Pressable
          onPress={() => setModalVisible(false)}
          >
            <Text>Cerrar</Text>
          </Pressable>
        </Modal>
        <View style={styles.wishes}>
          <View style={styles.headerWishes}>
            <Text style={styles.primaryText}>Recently Added</Text>
            <Link href="/wishes" style={styles.link}>
              <Text style={styles.linkText}>See All</Text>
            </Link>
          </View>
          <View style={styles.products}>
            {data.slice(-3).reverse().map((item, index)=>(
              <View key={index} style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, marginBottom: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f5f5f5",
  },
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  primaryText: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    color: "#000000",
    letterSpacing: -0.5
  },
  secondaryText: {
    fontSize: 18,
    color: "#6d6d6db6",
    fontFamily: "Inter_400Regular",
    letterSpacing: -0.8
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    gap: 8,
  },
  wishes: {
    padding: 10,
  },
  headerWishes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkText: {
    fontFamily: 'Inter_700Bold',
    color: "#008aedff",
    fontSize: 18,
  },
});
