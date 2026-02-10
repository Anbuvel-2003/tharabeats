import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const LogoutModal = ({ visible, onClose, onLogout }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-black/50">
                <View className="bg-white w-80 p-6 rounded-2xl shadow-xl">
                    <Text className="text-lg font-semibold text-gray-900 mb-4 text-center">
                        Are you sure want to Logout?
                    </Text>

                    <View className="flex-row justify-between gap-x-4">
                        <TouchableOpacity
                            onPress={onClose}
                            className="flex-1 py-3 border border-gray-200 rounded-xl items-center"
                        >
                            <Text className="text-gray-500 font-medium">Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onLogout}
                            className="flex-1 py-3 bg-orange-600 rounded-xl items-center"
                        >
                            <Text className="text-white font-medium">Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default LogoutModal;
