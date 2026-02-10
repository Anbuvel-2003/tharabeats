import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import TrackPlayer, {
    useProgress,
    usePlaybackState,
    State,
    Capability,
    RepeatMode
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {
    Play,
    Pause,
    SkipBack,
    SkipForward,
    Repeat,
    Shuffle,
    ChevronDown
} from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const PlayerScreen = () => {
    const navigation = useNavigation();
    const progress = useProgress();
    const playbackState = usePlaybackState();
    const isPlaying = playbackState.state === State.Playing;

    const togglePlayback = async () => {
        if (isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <View className="flex-1 bg-white px-6 pt-12">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="mb-8"
            >
                <ChevronDown size={30} color="#374151" />
            </TouchableOpacity>

            <View className="items-center">
                <Image
                    source={{ uri: 'https://picsum.photos/800/800' }}
                    className="rounded-3xl shadow-2xl"
                    style={{ width: width - 80, height: width - 80 }}
                />
            </View>

            <View className="mt-8">
                <Text className="text-2xl font-bold text-gray-900">SoundHelix Song 1</Text>
                <Text className="text-lg text-gray-500 mt-1">SoundHelix</Text>
            </View>

            <View className="mt-8">
                <Slider
                    style={{ width: '100%', height: 40 }}
                    minimumValue={0}
                    maximumValue={progress.duration}
                    value={progress.position}
                    minimumTrackTintColor="#f97316"
                    maximumTrackTintColor="#e2e8f0"
                    thumbTintColor="#f97316"
                    onSlidingComplete={async (value) => {
                        await TrackPlayer.seekTo(value);
                    }}
                />
                <View className="flex-row justify-between">
                    <Text className="text-gray-400 text-xs">{formatTime(progress.position)}</Text>
                    <Text className="text-gray-400 text-xs">{formatTime(progress.duration)}</Text>
                </View>
            </View>

            <View className="flex-row justify-between items-center mt-8">
                <TouchableOpacity>
                    <Shuffle size={24} color="#9ca3af" />
                </TouchableOpacity>

                <View className="flex-row items-center gap-x-8">
                    <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
                        <SkipBack size={32} color="#1f2937" fill="#1f2937" />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={togglePlayback}
                        className="w-20 h-20 bg-orange-600 rounded-full items-center justify-center shadow-lg"
                    >
                        {isPlaying ? (
                            <Pause size={36} color="white" fill="white" />
                        ) : (
                            <Play size={36} color="white" fill="white" className="ml-1" />
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
                        <SkipForward size={32} color="#1f2937" fill="#1f2937" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Repeat size={24} color="#9ca3af" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PlayerScreen;
