import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { ChevronLeft, Search, Check, Circle } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

const LanguageScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || 'en');
    const [searchQuery, setSearchQuery] = useState('');

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'ta', label: 'Tamil', flag: '🇮🇳' },
        { code: 'ar', label: 'Arabic', flag: '🇦🇪' },
        { code: 'es', label: 'Spanish', flag: '🇪🇸' },
        { code: 'fr', label: 'French', flag: '🇫🇷' },
        { code: 'de', label: 'German', flag: '🇩🇪' },
        { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
        { code: 'ko', label: 'Korean', flag: '🇰🇷' },
    ];

    const handleContinue = () => {
        i18n.changeLanguage(selectedLanguage);
        navigation.goBack();
    };

    const currentLangObj = languages.find(l => l.code === selectedLanguage) || languages[0];

    const filteredLanguages = languages.filter(l =>
        l.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <SafeAreaView className="flex-1 bg-black">
            <LinearGradient
                colors={['#064e3b', '#000', '#000']}
                className="flex-1 px-4"
            >
                {/* Header */}
                <View className="flex-row items-center mt-4 mb-8">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="w-12 h-12 rounded-full border border-white/20 items-center justify-center bg-white/5"
                    >
                        <ChevronLeft size={24} color="white" />
                    </TouchableOpacity>
                </View>

                <View className="mb-8">
                    <Text className="text-white text-3xl font-bold mb-2">
                        {t('language.choose')}
                    </Text>
                    <Text className="text-gray-400 text-lg">
                        {t('language.subtitle')}
                    </Text>
                </View>

                {/* You Selected Section */}
                <View className="mb-8">
                    <Text className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">
                        {t('language.youSelected')}
                    </Text>
                    <View className="border-2 border-cyan-500 rounded-2xl bg-cyan-500/10 p-4 flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Text className="text-2xl mr-3">{currentLangObj.flag}</Text>
                            <Text className="text-white text-xl font-medium">{currentLangObj.label}</Text>
                        </View>
                        <View className="w-6 h-6 rounded-full bg-cyan-500 items-center justify-center">
                            <Check size={16} color="black" strokeWidth={3} />
                        </View>
                    </View>
                </View>

                {/* All Languages Section */}
                <View className="flex-1">
                    <Text className="text-white font-semibold mb-3 uppercase tracking-wider text-xs">
                        {t('language.allLanguages')}
                    </Text>

                    <View className="bg-white/10 rounded-2xl border border-white/5 mb-4 p-1">
                        <View className="flex-row items-center px-4 py-3 border-b border-white/5">
                            <Search size={20} color="#9ca3af" />
                            <TextInput
                                className="flex-1 ml-3 text-white text-lg"
                                placeholder={t('language.search')}
                                placeholderTextColor="#9ca3af"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            {filteredLanguages.map((lang) => (
                                <TouchableOpacity
                                    key={lang.code}
                                    onPress={() => setSelectedLanguage(lang.code)}
                                    className={`flex-row items-center justify-between p-4 ${selectedLanguage === lang.code ? 'bg-white/5' : ''
                                        }`}
                                >
                                    <View className="flex-row items-center">
                                        <Text className="text-2xl mr-3">{lang.flag}</Text>
                                        <Text className={`text-xl font-medium ${selectedLanguage === lang.code ? 'text-white' : 'text-gray-400'
                                            }`}>
                                            {lang.label}
                                        </Text>
                                    </View>
                                    {selectedLanguage === lang.code ? (
                                        <View className="w-6 h-6 rounded-full bg-cyan-500 items-center justify-center">
                                            <Check size={16} color="black" strokeWidth={3} />
                                        </View>
                                    ) : (
                                        <Circle size={24} color="#374151" />
                                    )}
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                {/* Footer Button */}
                <View className="pb-8 pt-4">
                    <TouchableOpacity
                        onPress={handleContinue}
                        className="bg-cyan-500 rounded-full py-4 items-center"
                    >
                        <Text className="text-black font-bold text-xl uppercase tracking-widest">
                            {t('language.continue')}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
};

export default LanguageScreen;
