import {Tabs} from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function TabLayout() {
    return (
        <Tabs
        
        screenOptions={{
            headerShown: false
        }}
        
        >
            <Tabs.Screen name='index'options={{
                title: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='home' size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name='wishes'options={{
                title: 'Wishes',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='heart' size={size} color={color}/>
                )
            }}/>
            <Tabs.Screen name='profile'options={{
                title: 'Profile', 
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='person' size={size} color={color}/>
                )
            }}/>
        </Tabs>
    )
}