import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { Button, Text, Title } from 'native-base'
import { AppBackground, MyHeader, MyCard, AppInput } from '../components';
import Spinner from 'react-native-spinkit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { register } from '../services'

const screenWidth = Dimensions.get('window').width;
export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nameSurname: "yakup durmuş",
            email: "yakup@com.tr",
            password: "1234",
            passwordConfirm:"1234",
            lock: false
        }
    }
    onChangeTextNameSurname(input) {
        this.setState({ nameSurname: input });
    }
    onChangeTextEmail(input) {
        this.setState({ email: input });
    }
    onChangeTextPassword(input) {
        this.setState({ password: input });
    }
    onChangeTextPasswordConfirm(input) {
        this.setState({ passwordConfirm: input });
    }
    onSubmit = async () => {


        this.setState({ lock: true });
        let model = this.state;
        const response = await register(model);
        if (!response) {
            console.log("Response boş");
            this.setState({ lock: false });
            return;
        }

        if (response.status) {
            this.props.navigation.navigate('Home');
        } else {
            console.log("Response", response);
            alert(response.message);
            this.setState({ lock: false });
        }



    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppBackground type="header" />
                <MyHeader navigation={this.props.navigation} back text="Kayıt Ol" />

                <View style={{ alignItems: 'center', flex: 1, paddingTop: 20, paddingBottom: 50 }}>
                    <MyCard style={{ width: screenWidth * .9, padding: 10, paddingTop: 20 }}>


                        <Title style={{ marginBottom: 20 }}>Kaydol ve kitap dünyasına katıl! </Title>
                        <KeyboardAwareScrollView
                            keyboardShouldPersistTaps='always'>
                            <AppInput
                                autoFocus
                                containerStyle={{ height: 40 }}
                                textStyle={{ color: '#333' }}
                                placeholder="Ad Soyad"
                                reqired
                                input={this.state.nameSurname}
                                inputChange={(input) => this.onChangeTextNameSurname(input)}
                                title="Ad Soyad" />
                            <AppInput
                                containerStyle={{ height: 40 }}
                                textStyle={{ color: '#333' }}
                                placeholder="Email"
                                reqired
                                input={this.state.email}
                                inputChange={(input) => this.onChangeTextEmail(input)}
                                title="Email" />

                            <AppInput
                                secureTextEntry
                                containerStyle={{ height: 40 }}
                                textStyle={{ color: '#333' }}
                                placeholder="Şifre"
                                reqired
                                input={this.state.password}
                                inputChange={(input) => this.onChangeTextPassword(input)}
                                title="Şifre" />
                            <AppInput
                                secureTextEntry
                                containerStyle={{ height: 40, marginBottom: 20 }}
                                textStyle={{ color: '#333' }}
                                placeholder="Şifre Tekrar"
                                reqired
                                input={this.state.passwordConfirm}
                                inputChange={(input) => this.onChangeTextPasswordConfirm(input)}
                                title="Şifre Tekrar" />
                            <Button
                                disabled={this.state.lock}
                                full
                                style={{ backgroundColor: '#2980b9', borderColor: '#2980b9', borderRadius: 10 }}
                                onPress={() => this.onSubmit()}>
                                {!this.state.lock && <Text >Kaydet ve Giriş Yap</Text>}
                                <Spinner isVisible={!!this.state.lock} size={30} type={"Wave"} color={"white"} />
                            </Button>
                        </KeyboardAwareScrollView>

                    </MyCard>
                </View>
            </View>
        )
    }
}

export default Register
