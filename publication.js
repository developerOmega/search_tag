var publication_text_area = document.getElementById('publication-text-area');
	var tagsIdsarea = document.getElementById("tag_area");


	publication_text_area.addEventListener( "keyup", function(){

		var contentTags = document.getElementById("contentTags");
		console.log(contentTags, tagsIdsarea, infoData);

		for (let i = 0; i <= contentTags.childNodes.length -1; i++) {

			create_tags(contentTags.childNodes[i], 'user', "publication_tags_users");
			create_tags(contentTags.childNodes[i], 'property', "publication_tags_properties");
			
		}

		

	});


	function create_tags(contentTag, type, tag_id){

		if(contentTag.children[1].children[1].innerText == type){
			
			contentTag.addEventListener("click", function(e){

				for (let i = 1; i < tagsIdsarea.childNodes.length; i++) {
					if (this.children[1].children[0].innerText == tagsIdsarea.childNodes[i].children[0].innerText) {
						return;
					}
				}	


				var tags_ids = [];
				var tagsTotal = "";

				console.log(this.value);

				
				tags_ids.push(this.value);
				var string_tags = tags_ids.join(",");
				
				console.log(this.children[1].innerText);

				document.getElementById(tag_id).value += string_tags + ",";
				console.log("AGREGADO", string_tags);


				var div = document.createElement("div");
				div.innerHTML = "<p>"+ this.children[1].children[0].innerHTML +"</p><button id='delete'>x</button>";

				tag_area.appendChild(div);



				for (let c = 0; c <= tag_area.children.length-1; c++) {
					tag_area.children[c].children[1].addEventListener("click", function(e){
						e.preventDefault();
						tags_ids.splice(c-1,1);

						string_tags = tags_ids.join(",");
						tagsTotal += string_tags + ",";

						console.log("ELIMINADO", tagsTotal);
						document.getElementById("publication_tags_users").value = tagsTotal;


						this.parentNode.parentNode.removeChild(this.parentNode);
						// console.log(this.parentNode);
					});

				}



			});
		}
	}