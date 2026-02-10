import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import ProfileScreen from '../screens/private/ProfileScreen';
import EditProfileScreen from '../screens/private/EditProfileScreen';
import ChangePasswordScreen from '../screens/private/ChangePasswordScreen';
import OrgSettingsScreen from '../screens/private/OrgSettingsScreen';

const Stack = createNativeStackNavigator();

export function ProfileStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitleVisible: false,
                headerTintColor: '#374151',
            }}
        >
            <Stack.Screen
                name="ProfileMain"
                component={ProfileScreen}
                options={{ title: 'Profile' }}
            />
            <Stack.Screen
                name="EditProfile"
                component={EditProfileScreen}
                options={{ title: 'Edit Profile' }}
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{ title: 'Change Password' }}
            />
            <Stack.Screen
                name="OrgSettings"
                component={OrgSettingsScreen}
                options={{ title: 'Organization Settings' }}
            />
        </Stack.Navigator>
    );
}
