import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { Home, Users, Activity, CircleUser } from 'lucide-react-native';

// Import Screens
import HomeScreen from '../screens/private/HomeScreen';
import UsersScreen from '../screens/private/UsersScreen';
import DevicesScreen from '../screens/private/DevicesScreen';
import { ProfileStack } from './ProfileStack';
import MiniPlayer from '../components/MiniPlayer';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
    const { t } = useTranslation();

    return (
        <View className="flex-1">
            <Drawer.Navigator
                screenOptions={({ route }) => ({
                    drawerIcon: ({ focused, color, size }) => {
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
                    drawerActiveTintColor: '#22c55e', // Green-500
                    drawerInactiveTintColor: '#9ca3af', // Gray-400
                    drawerStyle: {
                        backgroundColor: '#18181b', // Zinc-900
                    },
                    drawerLabelStyle: {
                        fontSize: 14,
                        fontWeight: '500',
                        marginLeft: -10,
                    },
                    headerShown: route.name !== 'Profile' && route.name !== 'Home',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#000',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 1,
                        borderBottomColor: '#27272a', // Zinc-800
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
            >
                <Drawer.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: t('common.home') }}
                />
                <Drawer.Screen
                    name="Users"
                    component={UsersScreen}
                    options={{ title: t('common.users') }}
                />
                <Drawer.Screen
                    name="Devices"
                    component={DevicesScreen}
                    options={{ title: t('common.devices') }}
                />
                <Drawer.Screen
                    name="Profile"
                    component={ProfileStack}
                    options={{ title: t('common.profile') }}
                />
            </Drawer.Navigator>
            <MiniPlayer />
        </View>
    );
}
