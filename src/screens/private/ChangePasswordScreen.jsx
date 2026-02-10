import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { EyeOff } from 'lucide-react-native';

const ChangePasswordScreen = () => {
    return (
        <View className="flex-1 bg-white">
            <ScrollView className="flex-1 px-4 pt-4">
                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">New Password</Text>
                    <View className="flex-row border border-gray-200 rounded-lg overflow-hidden items-center">
                        <TextInput
                            className="flex-1 p-4 text-gray-900"
                            placeholder="Enter Password"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry
                        />
                        <TouchableOpacity className="px-3">
                            <EyeOff size={20} color="#d1d5db" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="mb-4">
                    <Text className="text-gray-500 mb-2">Confirm Password</Text>
                    <View className="flex-row border border-gray-200 rounded-lg overflow-hidden items-center">
                        <TextInput
                            className="flex-1 p-4 text-gray-900"
                            placeholder="Re-enter Password"
                            placeholderTextColor="#9ca3af"
                            secureTextEntry
                        />
                        <TouchableOpacity className="px-3">
                            <EyeOff size={20} color="#d1d5db" />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View className="p-4 border-t border-gray-100">
                <TouchableOpacity className="bg-orange-600 rounded-xl py-4 items-center">
                    <Text className="text-white font-bold text-lg">Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ChangePasswordScreen;
