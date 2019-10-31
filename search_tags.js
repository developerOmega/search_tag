function SearchTag (dataValue, inputTags){
	this.publication_option = document.getElementById("contentTags");
    //Propiedad con etiqueta id 'contentTags: etiqueta donde se publican los tags

	this.field = document.getElementById(inputTags);
    //Propiedad que recibirá el input del parámetro del método constructor 'inputTags';

	this.data = dataValue;
    //Propiedad que recibirá los datos tipo objeto del parametro del metodo constructor 'dataValue'

	//Método searchTags; crea las tags en base a los usuarios; como parámetro recibe un array con elementos div de los datos existentes
	this.seachTags = function(options){

        //Se hace una validación por medio de expresiones regulares, validando la existencia del carácter '@' 
		if (this.field.value.match(/#[a-zA-Z0-9]+/)){

			//La propiedad 'field' se convierte en un array de caracteres; 'field' = input con la información de la búsqueda
            //Se elimina el primer elemento del array, el cual es el "@"
            //El array se convierte en una cadena de texto nuevamente
			var value = this.field.value.split("");
			value.shift();
			value = value.join("");
            /*---------------------------------------------------------- */

            //Ciclo que recorre todos los datos de la propiedad 'data'
			for (let i = 0; i < this.data.length; i++){

				//Condición para crear los datos existentes de la información recibida por la variable 'value'; En caso de ser -1 los elementos no tendran informacion y no se mostrarán en la página
				if (this.data[i].name.indexOf(value) > -1) {

					console.log("correcto");

					options[i].value = this.data[i].id;
					options[i].innerHTML = "<img src= '" +this.data[i].photo + "' > " +  "<div> <p>" + this.data[i].name + "</p> <p>" +  this.data[i].type + "</p></div>";

					this.publication_option.appendChild(options[i]);
				}else{

					options[i].value = "";
					options[i].innerHTML = "";
				}
			}
		}else{
			this.publication_option.innerHTML = "";
		}	
	}

    //Método para crear los elementos obtenidos por la propiedad 'data'  
	this.tags = function(){

        //Variable array que guardara los elementos div
		var options = new Array();

       //Variable que contiene la información 'this' de la clase
		var self = this;

       //Ciclo que genera los div de todos los usuarios existentes; los div se guardan en la variable 'options'
		for (let i = 0; i < self.data.length; i++) {
			// options[i] = document.createElement('option');
			options[i] = document.createElement('div');
		}

		//Evento 'keyup'; se ejecuta cada vez que se escribe un caracter en el input que está guardado en la propiedad 'field'; invoca el método searchTags y recibe el parámetro de la varibe 'option' 1
		self.field.addEventListener('keyup',function(){
			self.seachTags(options);

		});

	}


}