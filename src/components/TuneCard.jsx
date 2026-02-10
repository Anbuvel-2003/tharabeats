import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import GlassView from './GlassView';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7;

const TuneCard = ({ item }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{ width: CARD_WIDTH, height: CARD_WIDTH * 1.2 }}
            className="mr-4 rounded-3xl overflow-hidden"
        >
            <Image
                source={{ uri: item.image }}
                style={{ width: '100%', height: '100%' }}
                className="absolute"
            />

            <View className="flex-1 justify-end">
                <GlassView
                    blurAmount={15}
                    intensity={0.05}
                    style={{ borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' }}
                    className="p-4"
                >
                    <Text className="text-white font-bold text-lg mb-1">{item.title}</Text>
                    <Text className="text-gray-300 text-xs" numberOfLines={1}>{item.subtitle}</Text>
                </GlassView>
            </View>
        </TouchableOpacity>
    );
};

export default TuneCard;
