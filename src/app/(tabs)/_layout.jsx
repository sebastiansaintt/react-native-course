import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: () => (
                    <Ionicons name='home' size={24} color='blue'/>
                )
            }}/>
            <Tabs.Screen name="wishes" options={{
                title: 'Wishes',
                tabBarIcon: () => (
                    <Ionicons name="heart" size={24} color="blue" />
                )
            }}/>
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: () => (
                    <Ionicons name='person' size={24} color='blue' />
                )
            }}/>
        </Tabs>
    )
}