import {Tabs} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {props} from '../../StyleProps'

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: props.accent,
            tabBarInactiveTintColor: props.inactive,
            tabBarLabelStyle: {
                fontFamily: 'Inter_500Medium', fontSize: 11
            }
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