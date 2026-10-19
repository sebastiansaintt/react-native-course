import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {colors, typography, spacing, radius} from '../../Tokens';

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.accent,
            tabBarInactiveTintColor: colors.inactive,
            tabBarLabelStyle: {fontFamily: 'Inter_500Medium', fontSize: 12},
            tabBarStyle: {backgroundColor: '#f5f5f5', borderTopColor: '#dededeff', height: 60, marginBottom: 8},
            animation: 'shift'
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color}/>
                )
            }}/>
            <Tabs.Screen name="wishes" options={{
                title: 'Wishes',
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? 'heart' : 'heart-outline'} size={24} color={color} />
                )
            }}/>
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: ({focused, color}) => (
                    <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
                )
            }}/>
        </Tabs>
    )
}