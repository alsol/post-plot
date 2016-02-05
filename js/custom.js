
			//just plot params, nothing special
			var plot_conf = {
					series: {
					lines: { 
					show: true,
					lineWidth: 2 
					}
				}
			};
		
			function showFileInput() {
				var fileInput = document.getElementById("fileInput");
				fileInput.click();
			}
		
			//get local file and parse it
			function processFiles(files){
			
				var file = files[0];
				var reader = new FileReader();
				
				//Starts reading file
				reader.readAsText(file);
				
				//Calls when the file loads
				reader.onloadend = function (e) {
					
					var text = reader.result;
	
					var dataArray = [];
											
					var temp = text.split(/\n/);
					
					//shitcode
					temp.forEach(function(item, i, arr) {
						dataArray.push(item.split(/\s+/));
					});
					
					console.log(dataArray);	
					
					$.plot($("#placeholder"), [{data:dataArray}], plot_conf);
					//}

				};//eof onloadend
				
			}
			
		