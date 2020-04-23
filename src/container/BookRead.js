import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Platform, TextInput,Dimensions } from 'react-native'
import { SelectableText } from "@astrocoders/react-native-selectable-text";
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper'
import MyStore from '../services/MyStore';
import { Button } from 'native-base';
import { observer } from 'mobx-react';




const screenHeight = Dimensions.get('window').height;
let lastPage = 1;
//667
@observer
export class BookRead extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fontSize: 20,
            
        }
    }
    render() {
        let settings = {
            selectableText: {
                fontSize: this.state.fontSize,
                lineHeight:30
            },
            textContainerStyle: {

            }
        }
        return (
            <View style={{ flex: 1, backgroundColor: '#888', justifyContent: 'center', alignItems: 'center' }}>
                <Text>{MyStore.count}</Text>
                <Button onPress={()=>{MyStore.countSet(MyStore.count+1)}}><Text>asdasda</Text></Button>
                    {/* <BookBody settings={settings} /> */}
                    {/* <BookFooter /> */}
            </View>
        )
    }
}
export default BookRead



const BookFooter = () => {
    return (
        <View style={{ height: 50, flexDirection: 'row', paddingTop: 10 }}>
            <TouchableOpacity onPress={() => { this.setState({ fontSize: this.state.fontSize + 2 }) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, backgroundColor: 'red' }}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({ fontSize: this.state.fontSize - 2 }) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, backgroundColor: 'red' }}><Text>-</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => { this.setState({ fontSize: 18 }) }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 5, backgroundColor: 'red' }}><Text>Sıfırla</Text></TouchableOpacity>
        </View>
    )
}

const BookBody = ({ settings }) => {
    const { selectableText, textContainerStyle } = settings;
    let data = [];
    for (let index = 0; index < 100; index++) {
        data.push(index);

    }
    return (
        
        <Swiper
            loop={false}
            style={{}}
            index={1}
            showsPagination={false}
            showsButtons
            nextButton={
                <Text
                  style={{
                    fontSize: 16,
                    color: 'red',
                    fontWeight: 'bold',
                    padding: 20,
                  }}
                  
                >
                  {"NEXT"}
                </Text>
              }
            onIndexChanged={(pageIndex)=>{}}

            buttonWrapperStyle={{flexDirection:'column'}}

            prevButton={
              <Text
                style={{
                  fontSize: 16,
                  color: '#767676',
                  fontWeight: 'bold',
                  padding: 20,
                }}
              >
                Skip
              </Text>
            }



            >
            <BookPage
                selectableTextStyle={selectableText}
                textContainerStyle={textContainerStyle}
            />
            <BookPage
                selectableTextStyle={selectableText}
                textContainerStyle={textContainerStyle}
            />
            <BookPage
                selectableTextStyle={selectableText}
                textContainerStyle={textContainerStyle}
            />
        </Swiper>
    )
}

const BookPage = ({ selectableTextStyle, textContainerStyle }) => {
    return (
        <View showsVerticalScrollIndicator={false} contentContainerStyle={{ ...textContainerStyle }} style={{ flex: 1,backgroundColor:'red',justifyContent:'center',alignItems:'center',paddingTop:21 }}>
            <SelectableText

                selectable
                numberOfLines={4}
                scrollEnabled={false}
                editable={false}
                value={lorem}
                style={{
                    color: '#ddd',
                    flex: 1,
                    ...selectableTextStyle
                }}
            >
                <Text>asdasdkjfslfkjsdlk sfl sjldkfj slkdf jslkf jslsda</Text>
            </SelectableText>
            {/* <Text
            numberOfLines={21}
            style={{
                backgroundColor:'blue',
                color: '#ddd',
                flex: 1,
                ...selectableTextStyle
            }}
            >
                {lorem}
            </Text> */}
         </View>
    )
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas arcu velit, pretium eu lacinia in, vestibulum id turpis. In sem libero, auctor eu interdum quis, eleifend in dolor. Donec rutrum aliquet felis, et consectetur elit sollicitudin ut. Vivamus et magna mi. Ut tristique, arcu nec eleifend efficitur, ipsum elit ornare ligula, vitae vulputate felis dui nec sapien. Etiam facilisis, odio quis congue consectetur, augue metus luctus leo, a ullamcorper nulla erat fermentum metus. In sollicitudin cursus lacus, non commodo sem luctus viverra. Ut massa augue, mattis quis sapien ac, molestie molestie mauris. Sed ac lorem nec dolor volutpat imperdiet. Vestibulum pharetra orci sed ex rutrum, et pretium nibh bibendum. Maecenas nulla nisl, euismod vel mi lacinia, laoreet hendrerit dui.

Praesent a arcu commodo, rutrum ipsum a, consequat lectus. Aenean lacinia lectus purus, a commodo quam viverra in. Quisque eros sapien, congue in gravida eget, rutrum a diam. Fusce varius magna neque, ut pharetra est fringilla quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a congue enim, eu mattis felis. Sed tincidunt orci libero. Donec luctus, magna luctus auctor dapibus, tellus augue vestibulum dui, at fermentum nisl turpis ac risus.

Praesent luctus felis vel tempus volutpat. Vestibulum at turpis nunc. Vestibulum sit amet diam in sapien aliquet elementum vel ac nibh. Pellentesque pellentesque fermentum dolor vitae ultricies. Proin massa ipsum, eleifend id facilisis non, varius in augue. Etiam a augue justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque mauris eros, elementum at neque quis, vulputate accumsan nunc. Aliquam scelerisque euismod lectus id egestas. Sed nec quam et tortor accumsan cursus. Aliquam erat volutpat. Ut ultrices consequat varius. Donec eu urna ornare, vehicula mauris eu, fringilla tortor. Nunc non interdum nulla. Ut ut urna in metus pretium mollis.

Donec mollis metus nibh. Aliquam tincidunt tristique mauris sed vulputate. Mauris ut vestibulum velit, a consectetur mauris. Praesent rhoncus tortor id ipsum malesuada, sit amet pellentesque libero ultricies. Suspendisse luctus, turpis vel fringilla rutrum, magna turpis rutrum est, et imperdiet magna est et diam. Praesent rutrum eros mi, eget dignissim ipsum mollis vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna leo, ultrices vel lorem sed, efficitur vestibulum est. Nulla a ullamcorper diam. Duis vitae tellus nisl. Curabitur sagittis orci ut sollicitudin tincidunt. Donec felis risus, ultrices eget consequat venenatis, fermentum sed mauris. Ut vel imperdiet lacus, sit amet elementum sem. Donec mollis mauris tincidunt, tempus risus nec, vestibulum arcu.

Nunc placerat neque ut purus eleifend tincidunt. Duis dapibus, ex dictum fringilla aliquet, augue orci blandit ligula, eget finibus nibh elit eget massa. In varius laoreet arcu, a elementum quam aliquet sit amet. Sed sagittis ipsum in lacus interdum ultricies. Duis pretium erat ac turpis venenatis tincidunt. Pellentesque rutrum sapien id nunc consequat pulvinar. Maecenas leo justo, euismod non ultricies vel, accumsan ac est. Nam nec sem ut est volutpat maximus ut pulvinar sapien. Vestibulum interdum lacinia lorem non fermentum. Vivamus rutrum congue orci ac consectetur. Etiam sit amet tempor ligula, a dapibus mi. Donec ante magna, sagittis a libero nec, gravida posuere ipsum. Duis mollis nibh sem, ac volutpat nunc eleifend ac. Vivamus non dapibus ex, eu pretium ex.`;