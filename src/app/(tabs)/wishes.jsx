import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import WishesData from "../../data/data.json";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors, spacing } from "../../Tokens";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Wishes() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.products}>
        <FlatList
          data={WishesData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Pressable onPress={() => router.push(`/products/${item.id}`)}>
                <View style={styles.productInfo}>
                  <Image
                    source={{ uri: item.url_image }}
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>
              </Pressable>
              <View style={styles.actions}>
                <Pressable>
                    <Ionicons name="trash-outline" size={24} color="#e04949ff" />
                </Pressable>
                <Pressable>
                    <Ionicons name="pencil-outline" size={24} color="#55a4ffff" />
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
