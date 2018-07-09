'use strict';

//!!!---浮動小数点数で演算しているため誤差が出る場合があります---!!!
//!!!---メモリ不足で落ちるのは仕様です---!!!
//!!!---IDEで起動しないでください危険です---!!!

const num = [39,53,17,61,31];
const ans = 57;

let data = [];
let dataLength = 0;
let start;
let oldDataLength;

const output = out=>{
  if(out.kaito === ans) {
    console.log(data[data.length-1].shiki);
  }
}
const kakko = s =>{
  s = s+"";
  if(s.match(/\+|\-/))  s=`(${s})`;
  return s;
}
const tankou = s =>{
  s = s+"";
  if(s.match(/\+|\-|\*|\//)) s=`(${s})`;
  return s;
}

for(let i=0;i<num.length;i++){
  data.push({
    "shiki":num[i],
    "kaito":num[i]
  });
}

//while(true){
for(let i0=0;i0<3;i0++){
//i0は3でも開発者の環境だとメモリ不足になりますが、2だとほとんど計算がされません。

  start = dataLength;
  oldDataLength = dataLength;
  dataLength = data.length;
  for(let i1=0;i1<dataLength;i1++){
    for(let i2=start;i2<dataLength;i2++){
      //足し算
      data.push({
        "shiki": `${data[i1].shiki}+${data[i2].shiki}`,
        "kaito": data[i1].kaito+data[i2].kaito
      });
      output(data[data.length-1]);
      //掛け算
      data.push({
        "shiki": `${kakko(data[i1].shiki)}*${kakko(data[i2].shiki)}`,
        "kaito": data[i1].kaito*data[i2].kaito
      });
      output(data[data.length-1]);
    }
    if(start<=i1) start++;

    let i3;
    for(i1<oldDataLength?i3=oldDataLength:i3=0;i3<dataLength;i3++){
      //引き算
      data.push({
        "shiki": `${data[i1].shiki}-${kakko(data[i3].shiki)}`,
        "kaito": data[i1].kaito-data[i3].kaito
      });
      output(data[data.length-1]);
      
      //割り算
      let w = data[i1].kaito/data[i3].kaito;
      if(w != Infinity){
        data.push({
          "shiki": `${kakko(data[i1].shiki)}/${tankou(data[i3].shiki)}`,
          "kaito": w
        });
      output(data[data.length-1]);
      }
    }
  }
}
