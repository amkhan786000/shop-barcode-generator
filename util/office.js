//var exports = module.exports = {};
var path = require('path');
    async = require ( 'async' ),
    officegen = require('officegen');

const fs = require('fs');



exports.generateDoc = function(outputFile) {

	var themeXml = fs.readFileSync ( path.resolve ('./themes/theme.xml' ), 'utf8' );


	var docx = officegen ( {
	    type: 'docx',
	    orientation: 'portrait'
	} );


	docx.on ( 'error', function ( err ) {
	    console.log ( err );
	});

	var pObj = docx.createP ();

	pObj.addText ( 'Simple' );
	pObj.addText ( ' with color', { color: '000088' } );
	pObj.addText ( ' and back color.', { color: '00ffff', back: '000088' } );

	var out = fs.createWriteStream (outputFile);

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
   