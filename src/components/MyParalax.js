import React from 'react';
import { View, Animated, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MyHeader } from './MyHeader';


const HEADER_MIN_HEIGHT = 0;
const HEADER_MAX_HEIGHT = Dimensions.get('window').width * .6;

export const MyParalax = ({ image, title, titleStyle, titleContainerStyle, children, navigation, renderBottomButton }) => {


    const scrollYAnimatedValue = new Animated.Value(0);
    const headerHeight = scrollYAnimatedValue.interpolate(
        {
            inputRange: [(HEADER_MIN_HEIGHT - HEADER_MAX_HEIGHT), (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
            outputRange: [HEADER_MAX_HEIGHT + (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT), HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        });

    return (<View style={stylesParalax.container} >

        <Animated.Image
            source={{ uri: image }}
            style={[stylesParalax.animatedHeaderContainer, { height: headerHeight }]}
        />

       <MyHeader 
       navigation={navigation}
       text="Popüler Kitaplar"
       back
       transparent/>

        <KeyboardAwareScrollView
            keyboardShouldPersistTaps='always'
            contentContainerStyle={{ marginTop: HEADER_MAX_HEIGHT - 85, backgroundColor: '#fff', paddingBottom: renderBottomButton ? 220 : 170 }}
            scrollEventThrottle={() => { }}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollYAnimatedValue } } }]
            )}>

            {children}

        </KeyboardAwareScrollView>
        {renderBottomButton && renderBottomButton}
    </View>);

}

const stylesParalax = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        animatedHeaderContainer: {
            position: 'absolute',
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#eee'
        },
        headerText: {
            color: 'white',
            fontSize: 22
        },
        item: {
            backgroundColor: '#fff',
            borderBottomWidth: 2,
            borderColor: "#eee",
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
        },
        itemText: {
            color: 'black',
            fontSize: 16
        }

    });

