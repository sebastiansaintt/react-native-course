import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@react-native-vector-icons/ionicons";

export default function Profile() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userCard}>
        <Image
          source={{
            uri: "https://img.magnific.com/free-vector/woman-profile-account-picture_24908-81036.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          style={styles.image}
        />
        <View style={styles.userInfo}>
            <Text style={styles.userName}>John Doe</Text>
            <Text style={styles.userEmail}>johndoe@mail.com</Text>
        </View>
        <View style={styles.userData}>
            <View style={styles.statItem}>
                <Text style={styles.statValue}>10</Text>
                <Text style={styles.statLabel}>Saved Wishes</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
                <Text style={styles.statValue}>1000</Text>
                <Text style={styles.statLabel}>Total Estimated Cost</Text>
            </View>
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Pressable 
          style={({ pressed }) => [styles.actionButton, pressed && styles.actionButtonPressed]}
        >
          <View style={styles.iconWrapper}>
            <Ionicons name="settings-outline" size={20} color="#4A5568" />
          </View>
          <Text style={styles.actionText}>Settings</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.actionButton, 
            styles.logoutButton, 
            pressed && styles.actionButtonPressed
          ]}
        >
          <View style={[styles.iconWrapper, styles.logoutIconWrapper]}>
            <Ionicons name="log-out-outline" size={20} color="#E53E3E" />
          </View>
          <Text style={styles.logoutText}>Cerrar Sesión</Text>
        </Pressable>
        <Button
      title="Go Back Home"
      onPress={() => router.back()}
    />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7FAFC",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  userCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#EDF2F7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: "#f3f3f3ff",
    marginBottom: 12,
  },
  userInfo: {
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A202C",
    letterSpacing: -0.3,
  },
  userEmail: {
    fontSize: 14,
    color: "#718096",
    marginTop: 2,
  },
  userData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#EDF2F7",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2D3748",
  },
  statLabel: {
    fontSize: 13,
    color: "#A0AEC0",
    marginTop: 2,
    fontWeight: "500",
  },
  statDivider: {
    width: 1,
    height: 28,
    backgroundColor: "#EDF2F7",
  },
  menuContainer: {
    gap: 12,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.02,
    shadowRadius: 4,
    elevation: 1,
  },
  actionButtonPressed: {
    backgroundColor: "#F7FAFC",
    transform: [{ scale: 0.99 }],
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EDF2F7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },
  actionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2D3748",
  },
  logoutButton: {
    borderColor: "#FED7D7",
    backgroundColor: "#FFFFFF",
  },
  logoutIconWrapper: {
    backgroundColor: "#FFF5F5",
  },
  logoutText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#E53E3E",
  },
});
