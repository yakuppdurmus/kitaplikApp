import React from 'react';
import { View, Dimensions, TouchableOpacity, ImageBackground,Image } from 'react-native';
import { Icon, Text } from 'native-base'
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Sin = (deg) => {
    return Math.sin(deg * Math.PI / 180);
}
const Cos = (deg) => {
    return Math.cos(deg * Math.PI / 180);
}

export const CircleProfile = ({ boxSmallWidth, boxWidth, marginLeft, profile }) => {

    let _boxSmallWidth = boxSmallWidth ? boxSmallWidth : 100;
    let _boxWidth = boxWidth ? boxWidth : screenWidth;
    let _marginLeft = marginLeft ? marginLeft : _boxWidth * .05;
    let _profile = profile ? profile : [60, 30, 0, 330, 300];
    let _borderColor = "#fff";
    let _backgrounColor = "#34495e";
    let _iconSize = 30;


    const _boxWidthr = _boxWidth / 2;
    const _boxSubWidth = _boxWidth * .8;
    const _boxSmallWidthr = _boxSmallWidth / 2;
    // const image = require('../assets/images/bg1.jpg');
    return (
        <ImageBackground 
        style={{ flex: 1 }} 
        blurRadius={10}
        // source={image}
        >
            
            <View
                style={{
                    width: _boxSubWidth,
                    height: _boxSubWidth,
                    borderRadius: _boxSubWidth / 2,
                    borderWidth: 2,
                    borderColor: _borderColor,
                    top: ((screenHeight) / 2) - (_boxSubWidth / 2),
                    left: -_boxSubWidth / 2 + _marginLeft,
                    position: 'absolute'
                }}>
                    <Image 
                    resizeMode="cover"
                    style={{width:_boxSubWidth-4,height:_boxSubWidth-4,borderRadius:_boxSubWidth}}
                    source={image}/>
            </View>

            <View
                style={{
                    width: _boxWidth,
                    height: _boxWidth,
                    borderRadius: _boxWidthr,
                    borderWidth: 2,
                    borderColor: _borderColor,

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
                            borderColor: _borderColor,
                            backgroundColor: _backgrounColor,

                            top: (((screenHeight) / 2) - (_boxSmallWidthr)) - (Sin(item.deg) * _boxWidthr),
                            left: (-_boxSmallWidthr + _marginLeft) + (Cos(item.deg) * _boxWidthr),
                            position: 'absolute'
                        }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon style={{ fontSize: _iconSize,color:"#fff" }} type={item.type ? item.type : "Ionicons"} name={item.icon} />
                            <View style={{ backgroundColor: 'rgba(52, 73, 94,0.5)',position: 'absolute', left: _boxSmallWidth,top:item.deg==90?-_boxSmallWidth/4:item.deg == 270 ? +_boxSmallWidthr+_boxSmallWidth/4 : undefined ,paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,borderRadius:5 }}>
                                <Text style={{ textAlign: 'center',fontWeight:'600',fontFamily:'Roboto-Italic',fontWeight:'400', color: 'white', fontSize: 12,width:120 }}>{item.text}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            })}

        </ImageBackground>
    )
}