import React from 'react';
import { View, Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Sin = (deg) => {
    return Math.sin(deg * Math.PI / 180);
}
const Cos = (deg) => {
    return Math.cos(deg * Math.PI / 180);
}

export const DrawCircle = ({ boxSmallWidth, boxWidth, marginLeft, profile }) => {

    let _boxSmallWidth = boxSmallWidth ? boxSmallWidth : 100;
    let _boxWidth = boxWidth ? boxWidth : screenWidth;
    let _marginLeft = marginLeft ? marginLeft : _boxWidth * .05;
    let _profile = profile ? profile : [60, 30, 0, 330, 300];


    const _boxWidthr = _boxWidth / 2;
    const boxSubWidth = _boxWidth * .66;
    const _boxSmallWidthr = _boxSmallWidth / 2;

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: boxSubWidth,
                    height: boxSubWidth,
                    borderRadius: boxSubWidth / 2,
                    borderWidth: 2,
                    borderColor: 'red',
                    top: ((screenHeight) / 2) - (boxSubWidth / 2),
                    left: -boxSubWidth / 2 + _marginLeft,
                    position: 'absolute'
                }}>
            </View>

            <View
                style={{
                    width: _boxWidth,
                    height: _boxWidth,
                    borderRadius: _boxWidthr,
                    borderWidth: 2,
                    borderColor: 'red',

                    top: ((screenHeight) / 2) - (_boxWidthr),
                    left: -_boxWidthr + _marginLeft,
                    position: 'absolute'
                }}>
            </View>

            {_profile.map((item, index) => {
                return (
                    <View
                        key={"circle_" + index}
                        style={{
                            width: _boxSmallWidth,
                            height: _boxSmallWidth,
                            borderRadius: _boxSmallWidthr,
                            borderWidth: 2,
                            borderColor: 'red',
                            backgroundColor: 'white',

                            top: (((screenHeight) / 2) - (_boxSmallWidthr)) - (Sin(item) * _boxWidthr),
                            left: (-_boxSmallWidthr + _marginLeft) + (Cos(item) * _boxWidthr),
                            position: 'absolute'
                        }}>
                    </View>
                )
            })}

        </View>
    )
}