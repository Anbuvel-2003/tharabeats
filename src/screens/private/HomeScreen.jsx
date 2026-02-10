import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Search, Mic } from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../../components/HomeHeader';
import TuneCard from '../../components/TuneCard';
import RecommendationCard from '../../components/RecommendationCard';

const TUNES_DATA = [
    {
        id: '1',
        title: 'Justin Bieber',
        subtitle: 'Taylor Swift, Ariana Grande and Billie Eilish',
        image: 'https://picsum.photos/id/1/600/800',
    },
    {
        id: '2',
        title: 'Ed Sheeran',
        subtitle: 'A.R. Rahman, Pritam and Kushagra',
        image: 'https://picsum.photos/id/2/600/800',
    },
    {
        id: '3',
        title: 'Ariana Grande',
        subtitle: 'The Weeknd, Doja Cat and SZA',
        image: 'https://picsum.photos/id/3/600/800',
    },
];

const RECOMMENDATIONS_DATA = [
    {
        id: '1',
        title: 'Misic',
        colors: ['#4d7c0f', '#14532d'], // Green tones
        image: 'https://picsum.photos/id/10/200/200',
    },
    {
        id: '2',
        title: 'Live Events',
        colors: ['#701a75', '#4a044e'], // Purple tones
        image: 'https://picsum.photos/id/11/200/200',
    },
    {
        id: '3',
        title: 'Made for you',
        colors: ['#b91c1c', '#7f1d1d'], // Red tones
        image: 'https://picsum.photos/id/12/200/200',
    },
    {
        id: '4',
        title: 'Upcoming releases',
        colors: ['#15803d', '#166534'], // Green tones
        image: 'https://picsum.photos/id/13/200/200',
    },
    {
        id: '5',
        title: 'New releases',
        colors: ['#a16207', '#713f12'], // Gold/Yellow tones
        image: 'https://picsum.photos/id/14/200/200',
    },
    {
        id: '6',
        title: 'Desi',
        colors: ['#92400e', '#78350f'], // Orange tones
        image: 'https://picsum.photos/id/15/200/200',
    },
];

const HomeScreen = () => {
    return (
        <View className="flex-1 bg-black">
            <LinearGradient
                colors={['#064e3b', '#000000', '#000000']}
                className="flex-1"
            >
                <ScrollView
                    className="flex-1"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                >
                    <HomeHeader />

                    {/* Search Bar */}
                    <View className="px-4 mb-8">
                        <View className="flex-row items-center bg-white/10 rounded-full px-4 h-14">
                            <Search size={20} color="#9ca3af" />
                            <TextInput
                                placeholder="What to listen?"
                                placeholderTextColor="#9ca3af"
                                className="flex-1 ml-3 text-white font-medium"
                            />
                            <TouchableOpacity className="bg-green-500 w-10 h-10 rounded-full items-center justify-center">
                                <Mic size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Find New Tunes Section */}
                    <View className="mb-8">
                        <View className="flex-row items-center justify-between px-4 mb-4">
                            <Text className="text-white text-2xl font-bold">Find new tunes</Text>
                            <TouchableOpacity>
                                <Text className="text-gray-400 text-sm">See all</Text>
                            </TouchableOpacity>
                        </View>

                        <FlatList
                            data={TUNES_DATA}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            contentContainerStyle={{ paddingLeft: 16 }}
                            renderItem={({ item }) => <TuneCard item={item} />}
                        />
                    </View>

                    {/* Recommended for today Section */}
                    <View className="px-4">
                        <Text className="text-white text-2xl font-bold mb-4">Recommended for today</Text>

                        <View className="flex-row flex-wrap">
                            {RECOMMENDATIONS_DATA.map((item) => (
                                <View key={item.id} style={{ width: '50%' }}>
                                    <RecommendationCard item={item} />
                                </View>
                            ))}
                        </View>
                    </View>

                </ScrollView>
            </LinearGradient>
        </View>
    );
};

export default HomeScreen;
