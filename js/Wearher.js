let text='';
let day='';

function Day(i){
    fetch("https://weather.tsukumijima.net/api/forecast?city=360010")
    .then(function (data) {
        return data.json(); //jsonファイル形式で読み込む
    })
    .then(function (json) { //読み込まれた際の処理
        //日にち
        if(i==0){
            day='今日';
        }else{
            day='明日';
        }
        let icon=json.forecasts[i].image.url;
        let place=json.publishingOffice;
        let time=json.publicTimeFormatted;
        let weather=json.forecasts[i].telop;

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
    })
}

for(let j=0; j<2; j++){
    Day(j);
}