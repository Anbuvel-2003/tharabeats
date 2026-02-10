import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const GlassView = ({ children, style, blurAmount = 20, blurType = 'dark', intensity = 0.2 }) => {
    return (
        <View style={[styles.container, style]}>
            <BlurView
                style={StyleSheet.absoluteFill}
                blurType={blurType}
                blurAmount={blurAmount}
                reducedTransparencyFallbackColor="white"
            />
            <View style={[
                styles.overlay,
                { backgroundColor: `rgba(255, 255, 255, ${intensity})` }
            ]}>
                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    overlay: {
        flex: 1,
    }
});

export default GlassView;
