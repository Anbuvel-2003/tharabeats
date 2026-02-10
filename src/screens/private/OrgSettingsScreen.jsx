import { ChevronDown, Globe } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';

const OrgSettingsScreen = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <View className="flex-1 bg-black">
            <LinearGradient
                colors={['#064e3b', '#000000', '#000000']}
                className="flex-1"
            >
                <ScrollView className="flex-1 px-4 pt-4">
                    <View className="mb-4">
                        <Text className="text-gray-400 mb-2">Organization Name</Text>
                        <TextInput
                            className="bg-white/10 border border-white/20 rounded-lg p-4 text-white"
                            placeholder="Organization 001"
                            placeholderTextColor="#6b7280"
                        />
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-400 mb-2">Address</Text>
                        <TextInput
                            className="bg-white/10 border border-white/20 rounded-lg p-4 text-white h-24"
                            placeholder="Lorem Ipsum is Simply Dummy Text"
                            placeholderTextColor="#6b7280"
                            multiline
                            textAlignVertical="top"
                        />
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-400 mb-2">City</Text>
                        <TextInput
                            className="bg-white/10 border border-white/20 rounded-lg p-4 text-white"
                            placeholder="Coimbatore"
                            placeholderTextColor="#6b7280"
                        />
                    </View>

                    <View className="flex-row">
                        <View className="flex-1 mr-2">
                            <Text className="text-gray-400 mb-2">State</Text>
                            <View className="flex-row bg-white/10 border border-white/20 rounded-lg overflow-hidden items-center">
                                <TextInput
                                    className="flex-1 p-4 text-white"
                                    placeholder="Tamil Nadu"
                                    placeholderTextColor="#6b7280"
                                    editable={false}
                                />
                                <ChevronDown size={20} color="#9ca3af" className="mr-3" />
                            </View>
                        </View>
                        <View className="flex-1 ml-2">
                            <Text className="text-gray-400 mb-2">Country</Text>
                            <View className="flex-row bg-white/10 border border-white/20 rounded-lg overflow-hidden items-center">
                                <TextInput
                                    className="flex-1 p-4 text-white"
                                    placeholder="India"
                                    placeholderTextColor="#6b7280"
                                    editable={false}
                                />
                                <ChevronDown size={20} color="#9ca3af" className="mr-3" />
                            </View>
                        </View>
                    </View>

                    <View className="mb-4 mt-4 w-1/2 pr-2">
                        <Text className="text-gray-400 mb-2">Pincode</Text>
                        <TextInput
                            className="bg-white/10 border border-white/20 rounded-lg p-4 text-white"
                            placeholder="600 000"
                            placeholderTextColor="#6b7280"
                            keyboardType="numeric"
                        />
                    </View>

                    <View className="mb-8">
                        <Text className="text-gray-400 mb-4 font-semibold">{t('common.settings')}</Text>
                        <View className="flex-row gap-4">
                            <TouchableOpacity
                                onPress={() => changeLanguage('en')}
                                className={`flex-1 p-4 rounded-xl border ${i18n.language === 'en' ? 'border-green-500 bg-green-500/20' : 'border-white/20 bg-white/10'} items-center`}
                            >
                                <Text className={`font-bold ${i18n.language === 'en' ? 'text-green-500' : 'text-gray-400'}`}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => changeLanguage('ta')}
                                className={`flex-1 p-4 rounded-xl border ${i18n.language === 'ta' ? 'border-green-500 bg-green-500/20' : 'border-white/20 bg-white/10'} items-center`}
                            >
                                <Text className={`font-bold ${i18n.language === 'ta' ? 'text-green-500' : 'text-gray-400'}`}>Tamil (தமிழ்)</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                <View className="p-4 border-t border-white/10 bg-black/50">
                    <TouchableOpacity className="bg-green-600 rounded-xl py-4 items-center">
                        <Text className="text-white font-bold text-lg">Save</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};

export default OrgSettingsScreen;
