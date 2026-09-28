import { Tabs } from "expo-router";
import Ionicons from "@react-native-vector-icons/ionicons";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="wishes"
          options={{
            headerShown: false,
            title: "Wishlist",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: false,
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
}
