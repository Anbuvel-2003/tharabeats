import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import {
    UserPen,
    ShieldCheck,
    Building2,
    LogOut,
    ChevronRight,
    User
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import LogoutModal from '../../components/LogoutModal';

const ProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const menuItems = [
        {
            id: 'edit-profile',
            title: 'Edit Profile',
            icon: UserPen,
            color: 'text-gray-500',
            target: 'EditProfile'
        },
        {
            id: 'change-password',
            title: 'Change Password',
            icon: ShieldCheck,
            color: 'text-gray-500',
            target: 'ChangePassword'
        },
        {
            id: 'org-settings',
            title: 'Organization Settings',
            icon: Building2,
            color: 'text-gray-500',
            target: 'OrgSettings'
        },
        {
            id: 'logout',
            title: 'Logout',
            icon: LogOut,
            color: 'text-gray-500',
            isLogout: true
        },
    ];

    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1">
                {/* Header Section */}
                <View className="items-center pt-10 pb-8 bg-white">
                    <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-4">
                        <User size={48} color="#9ca3af" />
                    </View>
                    <Text className="text-xl font-bold text-gray-900">Arun S (Admin)</Text>
                    <Text className="text-gray-500 mt-1">
                        aruns@gmail.com | +91 98745 63210
                    </Text>
                </View>

                {/* Menu Items */}
                <View className="px-4 mt-4">
                    {menuItems.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() => {
                                if (item.isLogout) {
                                    setModalVisible(true);
                                } else if (item.target) {
                                    navigation.navigate(item.target);
                                }
                            }}
                            className="flex-row items-center justify-between py-5 border-b border-gray-100"
                        >
                            <View className="flex-row items-center">
                                <View className="mr-4">
                                    <item.icon size={22} color="#6b7280" />
                                </View>
                                <Text className="text-base text-gray-800 font-medium">
                                    {item.title}
                                </Text>
                            </View>
                            <ChevronRight size={20} color="#d1d5db" />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <LogoutModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onLogout={() => {
                    setModalVisible(false);
                    // Add actual logout logic here
                    console.log('Logged out');
                }}
            />
        </View>
    );
};

export default ProfileScreen;
