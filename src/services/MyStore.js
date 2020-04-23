import {get,set,observable,action, configure,autorun, reaction} from 'mobx'

//actions kullanımına zorlar
configure({
    enforceActions:"observed"
});

class MyStore  {
constructor(){

     //Store her oluşturulduğunda ve güncellendiğinde burası çalışır
    autorun(()=>{
        console.log("Store initial & set");
    })

    //Bir değişkenin güncelleme durumunu takip etmeye yarar
    reaction(
        ()=> this.count,
        count =>{
            console.log("Count Güncel : "+this.count);
            
        }
    
    )
}

    @observable count = 0;

    @action countSet(value){
        this.count = value;
    }

    


}

export default new MyStore()