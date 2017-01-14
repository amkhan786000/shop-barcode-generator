var barcode = require('barcode'),
    path = require('path');



exports.generateBarcode = function(codeType, barCodeWords,barCodeImgExt) {
	var datas=(barCodeWords).split(',');
	 for (var i=0; i<datas.length;i++){
	    var code39 = barcode(codeType, {
	        data: datas[i],
	        width: process.env.npm_package_config_width,
	        height: process.env.npm_package_config_height,
	    });
	    var fileName=datas[i].replace(/\s+/g, '')+"."+barCodeImgExt;
	    var outfile = path.join('./', 'imgs', fileName);
	    code39.saveImage(outfile, function (err) {
	        if (err) throw err;

	        console.log(outfile+' file has been written!');
	    });
	 }
};