# search tags

![](https://dl.dropboxusercontent.com/s/antdn71h95ud7p3/main_image_searchTag.jpg?dl=0)

Search Tags es un plugin de javaScript que hace búsquedas de forma automática; la información obtenida puede ser 
presentada en forma de tags o etiquetas similares a plataformas como facebook.

## Información e instalacion.
Para utilizar el Search Tags necesitas clonar el repositorio. Puedes utilizar cualquiera de los dos scripts.
- El script search_tags.js  está escrito con código adaptable a navegadores viejos.
- El script search_tags_v2.js fue escrito en base a ECMAScript 6.
- Si quieres ver la documentación de código, puedes entrar al branch ‘dev’.

Para instalarlo puedes agregar el script a tu index.html.

## Tutorial.
### HTML
Hay que crear un form que contenga el input del buscador, se debe agregar un id.
```html
  <form action="" method="POST">
          <input type="search" name="search" placeholder="Buscar" id="search_input">
          <input type="submit" value="Aceptar">	
  </form>
```
Hay que crear un contenedor  con el id ’contentTags’.
```html
  <div id="contentTags" class="content_tags"></div>
```
## JavaScript
Crear una instancia del objeto SearchTag con dos parámetros; el primero debe ser  un array con objetos o un JSON y el segundo parámetro debe de contener el id del input.

El objeto o JSON debe de tener las propiedades ‘id’, ‘name’, ‘photo’ y ‘type’. El id debe ser de tipo entero; name, photo y type de tipo string.

```javascript
  let data = {
    'id': 1,
    'name': 'Arturo Lopez',
    'photo': 'images/arturo.jpeg',
    'type': 'usuario'
  };
```
La instancia del objeto debe de inicializar así:
```javascript
  let searchTag = new SearchTag(data, 'search_input');
```
Para correr la función del plugin, invocamos el método tag() de la instancia searchTag:
```javascript
  searchTag.tags();
```
Esta es la forma en la que el plugin funciona.

## CSS
Esto es opcional, puedes utilizar los estilos del repositorio.

### Clases.
- *form_tag:* Agrega los estilos al formulario; se agrega en el form.
- *flex_column:* los elementos hijo del form estan es posición de tipo columna.
- *btn_tag:* Agrega estilos a los botones.
- *content_tags:* Agrega estilos al contenido de las etiquetas: se agrega en el div con en id ‘content_tags’

