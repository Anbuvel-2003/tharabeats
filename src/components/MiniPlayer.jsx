import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TrackPlayer, { usePlaybackState, State } from 'react-native-track-player';
import { Play, Pause, SkipForward } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const MiniPlayer = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const playbackState = usePlaybackState();
    const isPlaying = playbackState.state === State.Playing;

    const togglePlayback = async () => {
        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('PlayerMain')}
            className="absolute bottom-[0px] left-0 right-0 bg-[#18181b] border-t border-white/10 px-4 py-2 flex-row items-center shadow-lg"
            style={{ elevation: 10 }}
        >
            <Image
                source={{ uri: 'https://picsum.photos/100/100' }}
                className="w-12 h-12 rounded-lg"
            />

            <View className="flex-1 ml-3">
                <Text className="text-white font-bold" numberOfLines={1}>
                    {t('common.nowPlaying')}
                </Text>
                <Text className="text-gray-400 text-xs" numberOfLines={1}>
                    SoundHelix Song 1
                </Text>
            </View>

            <View className="flex-row items-center gap-x-4">
                <TouchableOpacity onPress={togglePlayback}>
                    {isPlaying ? (
                        <Pause size={28} color="#22c55e" fill="#22c55e" />
                    ) : (
                        <Play size={28} color="#22c55e" fill="#22c55e" />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                    <SkipForward size={24} color="#fff" fill="#fff" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default MiniPlayer;
