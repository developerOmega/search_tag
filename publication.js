var publication_text_area = document.getElementById('publication-text-area');
	var tagsIdsarea = document.getElementById("tag_area");


	publication_text_area.addEventListener( "keyup", function(){

		var contentTags = document.getElementById("contentTags");
		console.log(contentTags, tagsIdsarea);

		contentTags.childNodes.forEach( children => {

			
			

			children.addEventListener("click", function(e){

				for (let i = 1; i < tagsIdsarea.childNodes.length; i++) {
					if (this.children[1].innerText == tagsIdsarea.childNodes[i].children[0].innerText) {
						return;
					}
				}	

				console.log("Este mensaje se repetira");
				var tags_ids = [];

				
				tags_ids.push(this.value);
				var string_tags = tags_ids.join(",");
				
				console.log(this.children[1].innerText);

				document.getElementById("publication_tags_users").value = string_tags;

				var div = document.createElement("div");
				div.innerHTML="<p>"+ this.children[1].innerHTML +"</p><button id='delete'>x</button>";

				tag_area.appendChild(div);

				for (let c = 0; c <= tag_area.children.length-1; c++) {
					tag_area.children[c].children[1].addEventListener("click", function(e){
						e.preventDefault();
						tags_ids.splice(c-1,1);

						string_tags = tags_ids.join(",");
						console.log(tags_ids);
						document.getElementById("publication_tags_users").value = string_tags;


						this.parentNode.parentNode.removeChild(this.parentNode);
						// console.log(this.parentNode);
					});

				}



			});
		});

		

	});