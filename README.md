# Tarea 2.3 | Problemas de programación funcional
Este repositorio fue creado para la tarea 2.3 de la materia de Desarrollo Basado en Plataformas por Raúl Alejandro Díaz Gutiérrez.



## Prerequisitos
Para ejecutar los programas en la terminal de linux para su facil ejecucion se debe de contar con alguna version de Node.js.

A continuacion se describen los pasos para descargar e instalar los programas necesarios.

### Instalando
Para actualizar a las ultimas versiones de Node.js se pueden utilizar los siguientes comandos:

sudo apt-get update

sudo apt-get upgrade


Para descargar e instalar Node.js se pueden utilizar los siguientes comandos en la terminal:

sudo apt-get install nodejs


## Corriendo pruebas
Para correr cada archivo por separado, puede escribir en la consola/terminal lo siguiente:

node <nombreDelArchivo.js>



## Construido con
* Visual Studio Code - Editor de texto
* Node.js - Entorno para ejecutar JS (EC6)

## Contribuiciones
Nadie contribuyó a la creación de este archivo.

## Autores
**Raúl Alejandro Díaz Gutiérrez.**

## Licencia
El proyecto tiene libre licencia.

## Agradecimientos
A mi mamá y a mi papá por apoyarme.

Gracias a las personas de PurpleBooth por su referencia de como debe ser el [formato de un readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).


## Descripción de los problemas

La empresa de abarrotes doña Julia tiene una lista de productos donde almacena la clave del producto, su descripción precio, clasificación, cantidad de existencia, existencia mínima y máxima. Doña Julia requiere generar varios reportes:

1) Número de productos con existencia mayor a 20.
2) Número de productos con existencia menos a 15.
3) Lista de productos con la misma clasificación y precio mayor 15.50
4) Lista de productos con precio mayor a 20.30 y menor a 45.00
5) Número de productos agrupados por su clasificación

Cree un DAO para cargar la información de un archivo con 80 productos como mínimo.