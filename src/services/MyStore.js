import { observable, action, configure, autorun, reaction, runInAction } from 'mobx'
import {StyleSheet} from 'react-native'
//actions kullanımına zorlar
configure({
    enforceActions: "observed"
});

class MyStore {
    constructor() {

        //Store her oluşturulduğunda ve güncellendiğinde burası çalışır
        autorun(() => {
            console.log("Store initial & set");
        })

        //Bir değişkenin güncelleme durumunu takip etmeye yarar
        reaction(
            () => this.count,
            count => {
                console.log("Count Güncel : " + this.count);

            }

        )
    }

    @observable count = 0;
    @observable selectableTextStyle = {paddingBottom:45,fontSize:20};
    @observable textSettings = {...textSettings};


    @action countSet(value) {
        this.count = value;

        //Farklı bir scrope sahip fonksiyonları runInAction içerisinde set işlemi yapabiliriz.
        // setTimeout(() => {
        //     runInAction(() => {
        //         this.count = value;
        //     })

        // }, 2000)
    }

    @action textSettingsSet(value){
        this.textSettings = value;
    }
    @action selectableTextStyleSet(value){
        this.selectableTextStyle = Object.assign(this.selectableTextStyle,value);
    }

}

const textSettings = StyleSheet.create({
    swiperStyle : {},
    textContentContainerStyle :{},
    textContainerStyle:{},
    textSubContainerStyle:{},
})

export default new MyStore()