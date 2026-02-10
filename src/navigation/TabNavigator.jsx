import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Users, Activity, CircleUser } from 'lucide-react-native';

// Import Screens
import HomeScreen from '../screens/private/HomeScreen';
import UsersScreen from '../screens/private/UsersScreen';
import DevicesScreen from '../screens/private/DevicesScreen';
import { ProfileStack } from './ProfileStack';
import MiniPlayer from '../components/MiniPlayer';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
    return (
        <View className="flex-1">
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let IconComponent;

                        if (route.name === 'Home') {
                            IconComponent = Home;
                        } else if (route.name === 'Users') {
                            IconComponent = Users;
                        } else if (route.name === 'Devices') {
                            IconComponent = Activity;
                        } else if (route.name === 'Profile') {
                            IconComponent = CircleUser;
                        }

                        return <IconComponent size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#f97316', // Orange-500
                    tabBarInactiveTintColor: '#64748b', // Slate-500
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontWeight: '500',
                    },
                    headerShown: route.name !== 'Profile', // Hide tab header for Profile stack
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f1f5f9',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Users" component={UsersScreen} />
                <Tab.Screen name="Devices" component={DevicesScreen} />
                <Tab.Screen name="Profile" component={ProfileStack} />
            </Tab.Navigator>
            <MiniPlayer />
        </View>
    );
}
