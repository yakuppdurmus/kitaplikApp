import { observable, action, configure, autorun, reaction, runInAction } from 'mobx'
import { StyleSheet } from 'react-native'
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

    textMinimumValue = 20;
    textMaximumValue = 32;
    @observable count = 0;
    @observable nightMode = true;
    @observable swiperStyle = {};
    @observable textContentContainerStyle = {};
    @observable textConightMode = {};
    @observable textSubContainerStyle = {};
    @observable selectableTextStyle = { paddingBottom: 45,fontSize:20 };

    @action nightModeSet(vale) {
        this.nightMode = vale;
        if (vale) {
            this.selectableTextStyleSet({color: '#fff'});
            this.textContentContainerStyleSet({backgroundColor: '#222'});
        } else {
            this.selectableTextStyleSet({color: '#222'});
            this.textContentContainerStyleSet({backgroundColor: '#fff'});
        }
    }

    @action swiperStyleSet(value) {
    }
    @action textContentContainerStyleSet(value) {
        this.textContentContainerStyle = Object.assign(this.textContentContainerStyle, value);
    }
    @action textConightModeSet(value) {

    }
    @action textSubContainerStyleSet(value) {

    }
    @action selectableTextStyleSet(value) {
        this.selectableTextStyle = Object.assign(this.selectableTextStyle, value);
    }
    @action countSet(value) {
        this.count = value;

        //Farklı bir scrope sahip fonksiyonları runInAction içerisinde set işlemi yapabiliriz.
        // setTimeout(() => {
        //     runInAction(() => {
        //         this.count = value;
        //     })

        // }, 2000)
    }
    textSizeUp() {
        let value = this.selectableTextStyle.fontSize + 3;
        if (value < this.textMinimumValue) return;
        this.selectableTextStyleSet({ fontSize: value, lineHeight: value * 1.3 });
    }
    textSizeDown() {
        let value = this.selectableTextStyle.fontSize - 3;
        if (value < this.textMinimumValue) return;
        this.selectableTextStyleSet({ fontSize: value, lineHeight: value * 1.3 });
    }
    textSizeSet(value) {
        this.selectableTextStyleSet({ fontSize: value, lineHeight: value * 1.3 });
    }
}
export default new MyStore()