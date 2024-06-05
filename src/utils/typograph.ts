// typography.js
import { StyleSheet } from 'react-native';

const typography = StyleSheet.create({

    fontFamilyLight: {
        fontFamily: 'Lato_300Light'
    },
    fontFamilyRegular: {
        fontFamily: 'Lato_400Regular',
    },
    fontFamilyBold: {
        fontFamily: 'Lato_700Bold',
    },

    // Font Sizes
    fontSizeSmall: {
        fontSize: 14,
    },
    fontSizeMedium: {
        fontSize: 16,
    },
    fontSizeLarge: {
        fontSize: 20,
    },
    fontSizeXLarge: {
        fontSize: 24,
    },
    fontSizeXXLarger: {
        fontSize: 36
    },
    fontWeightLight: {
        fontWeight: '300',
    },
    fontWeightNormal: {
        fontWeight: '400',
    },
    fontWeightSemiBold:{
        fontWeight:'500'
    },
    fontWeightBold: {
        fontWeight: '700',
    },

    lineHeightTight: {
        lineHeight: 1.2,
    },
    lineHeightNormal: {
        lineHeight: 1.5,
    },
    lineHeightLoose: {
        lineHeight: 1.8,
    },

    // Example Combined Styles
    bodyText: {
        fontFamily: 'Lato_400Regular',
        fontSize: 16,
        lineHeight: 1.5,
    },
    heading: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        lineHeight: 1.5,
    },
    subheading: {
        fontFamily: 'Lato_400Regular',
        fontSize: 20,
        lineHeight: 1.5,
    }
});

export { typography };