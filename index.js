const sharp = require('sharp');

(async ()=> {

    // 参考
    // 【Node.js】 画像処理モジュールsharpの使い方を網羅してみました
    // https://note.affi-sapo-sv.com/nodejs-sharp.php

    await sharp('resources/1faceM1.png')
           .composite([ 
                  {
                    input: 'resources/2eye3.png',
                    // top: 50,
                    // left: 100
                }, {
                    input: 'resources/3hair2.png',
                    // top: 100,
                    // left: 200
                // },{
                //     input: 'resources/wear.png',
                //     top: 300,
                //     left: 200
                },
           ] )
           .toFile('dist/outputM132.png', (err, info)=>{
            if(err){ throw err }
            });
    
})();
