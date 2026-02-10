import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RecommendationCard = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            className="flex-1 h-32 rounded-2xl overflow-hidden mb-4 mr-4"
        >
            <LinearGradient
                colors={item.colors || ['#10b981', '#059669']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="flex-1 p-3"
            >
                <Text className="text-white font-bold text-sm mb-1">{item.title}</Text>

                <View className="absolute bottom-[-10] right-[-10]">
                    <Image
                        source={{ uri: item.image }}
                        className="w-20 h-20 rounded-lg rotate-[15deg]"
                    />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    );
};

export default RecommendationCard;
