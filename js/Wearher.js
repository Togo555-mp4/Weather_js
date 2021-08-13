let text='';
let day='';

function Day(){
    fetch("https://weather.tsukumijima.net/api/forecast?city=360010")
    .then(function (data) {
        return data.json(); //jsonファイル形式で読み込む
    })
    .then(function (json) { //読み込まれた際の処理
        for(let i=0; i<2; i++){
            //日にち
            if(i==0){
                day='今日';
            }else{
                day='明日';
            }
            let icon=json.forecasts[i].image.url; //アイコン
            let place=json.publishingOffice;      //観測場所
            let time=json.publicTimeFormatted;    //発表時間
            let weather=json.forecasts[i].telop;  //天気

            //HTML記述
            text=text+'<div class="day">'
            text=text+'<div>'+day+'</div>';
            text=text+'<div class="icon"><img src="'+icon+'"/></div>';
            text=text+'<div>場所：'+place+'</div>';
            text=text+'<div>発表日時：'+time+'</div>';
            text=text+'<div>天気：'+weather+'</div>';
            text=text+'</div>';
            if(i==1){
                report.innerHTML=text;
            }
        }
    })
}

Day();