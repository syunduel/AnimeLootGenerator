const sharp = require('sharp');

(async ()=> {

    // 参考
    // 【Node.js】 画像処理モジュールsharpの使い方を網羅してみました
    // https://note.affi-sapo-sv.com/nodejs-sharp.php

    await sharp('resources/01 顔　F.png')
           .composite([ 
                  {
                    input: 'resources/02　目　１.png',
                    // top: 50,
                    // left: 100
                }, {
                    input: 'resources/03 髪１.png',
                    // top: 100,
                    // left: 200
                // },{
                //     input: 'resources/wear.png',
                //     top: 300,
                //     left: 200
                },
           ] )
           .toFile('dist/output2.png', (err, info)=>{
            if(err){ throw err }
            });
    
})();
