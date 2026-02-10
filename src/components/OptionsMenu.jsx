import React from 'react';
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Languages } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import GlassView from './GlassView';

const OptionsMenu = ({ visible, onClose }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    if (!visible) return null;

    return (
        <Modal
            transparent
            visible={visible}
            animationType="none"
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View className="flex-1">
                    <View
                        className="absolute top-20 right-4 w-56"
                    >
                        <GlassView intensity={0.2} blurAmount={30} style={{ borderRadius: 16, overflow: 'hidden' }}>
                            <View className="p-2">
                                <TouchableOpacity
                                    onPress={() => {
                                        onClose();
                                        navigation.navigate('LanguageSelection');
                                    }}
                                    className="flex-row items-center p-4 rounded-xl active:bg-white/10"
                                >
                                    <Languages size={20} color="white" />
                                    <Text className="text-white font-medium ml-3">
                                        {t('common.changeLanguage')}
                                    </Text>
                                </TouchableOpacity>

                                {/* Add more menu items here in the future */}
                            </View>
                        </GlassView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default OptionsMenu;
