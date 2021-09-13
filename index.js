const sharp = require('sharp');

(async ()=> {

    // 参考
    // 【Node.js】 画像処理モジュールsharpの使い方を網羅してみました
    // https://note.affi-sapo-sv.com/nodejs-sharp.php

    await sharp('base.png')
           .composite([ 
                  {
                    input: 'weapon.png',
                    top: 50,
                    left: 100
                }, {
                    input: 'head.png',
                    top: 100,
                    left: 200
                },{
                    input: 'wear.png',
                    top: 300,
                    left: 200
                },
           ] )
           .toFile('output1.png', (err, info)=>{
            if(err){ throw err }
            });
    
})();
