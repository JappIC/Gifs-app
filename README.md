# Gifs App

Una web app desarrollada en [Angular 17](https://angular.dev/) para buscar gif usando la api de giphy.com
<br><br>
Este proyecto se usa para el aprendizaje y muestra de capacidades. Siéntase libre de clonar este proyecto

<img src="/src/assets/Gifs-app.webp" alt="Captura de imagen Gifs App"/>

## General:
La aplicación tiene un buscador de Gifs. Una vez buscados, genera una lista de gifs y añade en el menú un nuevo botón para poder filtrar más tarde los resultados buscados. Para hacer persistentes las búsquedas y los botones generados con el término buscado, se usa el localstorage.

## Componentes:
La app está realizada en componentes reutilizables.
### Card:
Se encarga de mostrar una tarjeta con la información y el gif
### Card List:
Componente para mostrar la lista de tarjetas de los Gifs
### Search box: 
El componente encargado de realizar las peticiones de busqueda
### Lazy image:
Un componente reutilizable por las tarjetas para mostrar el Gif y una lógica de espera de carga
### Sidebar:
Este componente se encarga de toda la lógica del menú que se genera con los términos de busqueda

## Páginas:
Las página se encargan de unificar los diferentes reutilizables y lógica.
### Home:
Página que engloba el componente de busqueda y los resultados

## Otros datos de interés:

- El archivo gifs.interfaces.ts, guarda la configuración del tipo de tipado de la solicitud.
- El archivo gifs.service.ts, contiene toda la lógica principal de las peticiones.
