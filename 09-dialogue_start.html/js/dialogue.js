/*eslint-env browser*/

//note: for this example the 'p:even' and 'p:odd' works, but what if one person sends 2-3 //messages in a row, so class selector could be better.

 $(document).ready(function(){
            //console.log("I'm ready");
	 		$('p').css({
				'font-family': 'sans-serif',
				'font-weight': 'bold',
				'color': 'white',
				'border': 'solid 1px #333',
				'padding': '7px',
				'clear': 'both'
			});
	        $('p:even').css({
	 		//$('.p1').css({
				'background-color': 'darkblue',
				'float': 'left',
				'border-radius': '12px 12px 0 12px',
				/*'box-shadow': '0 3px 7px rgba(0, 0, 0, 0.3)',*/
				/*'box-shadow': '3px 3px 5px #535353',*/
				'box-shadow': '3px 3px 5px rgba(0, 0, 0, 0.4)'
			});
	 		$('p:odd').css({
	 		//$('.p2').css({
				'background-color': 'darkred',
				'float': 'right',
				'border-radius': '12px 12px 12px 0',
				'box-shadow': '-3px 3px 5px rgba(0, 0, 0, 0.4)'
			});


        }); // end doc ready
