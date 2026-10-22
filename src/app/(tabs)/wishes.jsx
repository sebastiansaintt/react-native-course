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
import { colors, spacing, typography, radius, shadows } from "../../Tokens";
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
                  <View style={{gap: 4}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
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
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
    paddingBottom: spacing.sm,
  },
  headerTitle: {
    ...typography.largeTitle,
    color: colors.text,
  },
  headerButton: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.soft,
  },
  headerButtonPressed: {
    backgroundColor: colors.accentHover,
    transform: [{ scale: 0.95 }],
    opacity: 0.85,
  },
  products: {
    flex: 1,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  productCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing.sm,
    marginBottom: spacing.sm,
    ...shadows.soft,
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceSecondary,
    resizeMode: 'contain',
  },
  name: {
    ...typography.headline,
    color: colors.text,
    maxWidth: 180,
  },
  price: {
    ...typography.price,
    color: colors.accent,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginLeft: spacing.xs,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    backgroundColor: colors.surfaceSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonPressed: {
    opacity: 0.5,
    transform: [{ scale: 0.94 }],
  },
});
