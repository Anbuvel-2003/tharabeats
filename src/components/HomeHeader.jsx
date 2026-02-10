import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Heart, MoreVertical } from 'lucide-react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import OptionsMenu from './OptionsMenu';

const HomeHeader = () => {
    const navigation = useNavigation();
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View className="flex-row items-center justify-between px-4 py-6">
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150?u=artist' }}
                    className="w-12 h-12 rounded-full border-2 border-green-500/30"
                />
            </TouchableOpacity>

            <View className="flex-row items-center gap-x-3">
                <TouchableOpacity className="w-12 h-12 bg-white/10 rounded-full items-center justify-center">
                    <Heart size={20} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setMenuVisible(true)}
                    className="w-12 h-12 bg-white/10 rounded-full items-center justify-center"
                >
                    <MoreVertical size={20} color="white" />
                </TouchableOpacity>
            </View>

            <OptionsMenu
                visible={menuVisible}
                onClose={() => setMenuVisible(false)}
            />
        </View>
    );
};

export default HomeHeader;
