//var exports = module.exports = {};
var path = require('path');
    async = require ( 'async' ),
    officegen = require('officegen');

const fs = require('fs');



exports.generateDoc = function(outputFile, barcodeWords,barCodeImgExt) {

	var themeXml = fs.readFileSync ( path.resolve ('./themes/theme.xml' ), 'utf8' );


	var docx = officegen ( {
	    type: 'docx',
	    orientation: 'portrait'
	} );


	docx.on ( 'error', function ( err ) {
	    console.log ( err );
	});

//Start design your file

	var barcodes=(barcodeWords).split(',');
	for (var i=0; i<barcodes.length;i++){
		var pObj = docx.createP ();
		pObj.options.width = 'right';
		pObj.addText ( barcodes[i]+'     ', {  align: 'left', border: 'dotted', borderSize: 12, borderColor: '000000', font_face: 'Comic Sans MS', font_size: 20 } );
		var fileName='./imgs/'+barcodes[i].replace(/\s+/g, '')+"."+barCodeImgExt;
		console.log(fileName);
		pObj.addImage ( path.resolve(fileName),{  align:'right',border: 'dotted', borderSize: 12, borderColor: '000000', font_face: 'Comic Sans MS', font_size: 20 });
		//pObj.addHorizontalLine ();
	}




// Finish design your file


// Closing stream
	var out = fs.createWriteStream(outputFile);

	out.on ( 'error', function ( err ) {
	    console.log ( err );
	});

	async.parallel ([
	    function ( done ) {
	        out.on ( 'close', function () {
	            console.log ( 'Finish to create a DOCX file.' );
	            done ( null );
	        });
	        docx.generate ( out );
	    }

	], function ( err ) {
	    if ( err ) {
	        console.log ( 'error: ' + err );
	    } // Endif.
	});

};


function drawTable(){

var table = [
	[{
		val: "S. No.",
		opts: {
			b:true,
			sz: '24',
			fontFamily: "Comic Sans MS",
			align: "center"
		}
	},{
		val: "Merchandise Name",
		opts: {
			b:true,
			sz: '24',
			fontFamily: "Comic Sans MS",
			align: "center"
		}
	},{
		val: "Bar Code",
		opts: {
			b:true,
			sz: '24',
			fontFamily: "Comic Sans MS",
			align: "center"
		}
	}],
	//var barcodes=(barcodeWords).split(',');
	//for (var i=0; i<barcodes.length;i++){
		[1,1,pObj.addImage(path.resolve('./imgs/Baklawa.png' ))],

	//}
]

var tableStyle = {
	tableColWidth: 4261,
	tableSize: 18,
	tableColor: "ada",
	tableAlign: "left",
	tableFontFamily: "Comic Sans MS",
	borders:"single"
}

docx.createTable (table, tableStyle);


}
   