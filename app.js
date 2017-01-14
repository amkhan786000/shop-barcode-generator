var barcode=require('./util/barcode'),
	office=require('./util/office');



barcode.generateBarcode(process.env.npm_package_config_codeType,
	process.env.npm_package_config_barCodeWords,
	process.env.npm_package_config_barCodeImgExt);



office.generateDoc(__dirname+'/'+process.env.npm_package_config_docxName);
