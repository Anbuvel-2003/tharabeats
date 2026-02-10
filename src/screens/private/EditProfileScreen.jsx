import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const EditProfileScreen = () => {
    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1 px-4 pt-4">
                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">First Name</Text>
                    <TextInput
                        className="border border-gray-200 rounded-lg p-4 text-gray-900"
                        placeholder="Arun"
                        placeholderTextColor="#9ca3af"
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">Last Name</Text>
                    <TextInput
                        className="border border-gray-200 rounded-lg p-4 text-gray-900"
                        placeholder="S"
                        placeholderTextColor="#9ca3af"
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">Phone Number</Text>
                    <View className="flex-row border border-gray-200 rounded-lg overflow-hidden">
                        <View className="bg-gray-50 px-3 justify-center border-r border-gray-200">
                            <Text className="text-gray-900">🇮🇳 +91</Text>
                        </View>
                        <TextInput
                            className="flex-1 p-4 text-gray-900"
                            placeholder="98745 63210"
                            placeholderTextColor="#9ca3af"
                            keyboardType="phone-pad"
                        />
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">Email</Text>
                    <TextInput
                        className="border border-gray-200 rounded-lg p-4 text-gray-900"
                        placeholder="aruns@gmail.com"
                        placeholderTextColor="#9ca3af"
                        keyboardType="email-address"
                    />
                </View>

                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">Role</Text>
                    <TextInput
                        className="border border-gray-200 rounded-lg p-4 text-gray-900 bg-gray-50"
                        placeholder="Admin"
                        placeholderTextColor="#9ca3af"
                        editable={false}
                    />
                </View>
            </ScrollView>

            <View className="p-4 border-t border-gray-100">
                <TouchableOpacity className="bg-orange-600 rounded-xl py-4 items-center">
                    <Text className="text-white font-bold text-lg">Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditProfileScreen;
