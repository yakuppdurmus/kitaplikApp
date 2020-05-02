import { observable, action, configure, autorun, reaction, runInAction } from 'mobx'
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
    @observable textContainerStyle = {};
    @observable isHorizontal = true;
    @observable selectableTextStyle = { paddingBottom: 45,fontSize:20,fontFamily:'Andada-Regular' };

    
    @action nightModeSet(value) {
        this.nightMode = value;
        if (value) {
            this.selectableTextStyleSet({color: '#fff'});
            this.textContainerStyleSet({backgroundColor: '#222'});
            // this.textContentContainerStyleSet({backgroundColor: '#222'});
        } else {
            this.selectableTextStyleSet({color: '#222'});
            this.textContainerStyleSet({backgroundColor: '#fff'});
            // this.textContentContainerStyleSet({backgroundColor: '#fff'});
        }
    }
    @action textContainerStyleSet(value) {
        this.textContainerStyle = Object.assign(this.textContainerStyle, value);
    }
    @action isHorizontalSet(value) {
        this.isHorizontal = value;
    }
    @action textContentContainerStyleSet(value) {
        this.textContentContainerStyle = Object.assign(this.textContentContainerStyle, value);
    }
    @action selectableTextStyleSet(value) {
        this.selectableTextStyle = Object.assign(this.selectableTextStyle, value);
    }
    @action swiperStyleSet(value) {
    }
    @action textConightModeSet(value) {

    }
    @action textSubContainerStyleSet(value) {

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