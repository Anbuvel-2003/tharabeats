import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';

const DevicesScreen = () => {
    const { t } = useTranslation();

    return (
        <View className="flex-1 bg-black">
            <LinearGradient
                colors={['#064e3b', '#000000', '#000000']}
                className="flex-1 justify-center items-center"
            >
                <Text className="text-xl font-bold text-white">{t('common.devices')}</Text>
                <Text className="text-gray-400 mt-2">Coming Soon</Text>
            </LinearGradient>
        </View>
    );
};

export default DevicesScreen;
