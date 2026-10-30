# Programa Eureka – QA Automatizador

Sitio web estático multipágina para presentar las preguntas del ejercicio del programa Eureka. Está construido con HTML, CSS y JavaScript Vanilla, y utiliza Bootstrap 5 desde CDN.

## Descargar

Puedes descargar el proyecto de cualquiera de estas formas:

- En GitHub, selecciona **Code → Download ZIP** y descomprime el archivo.
- O clona el repositorio:

```bash
git clone <URL-del-repositorio>
cd PruebaSemana2
```

## Ejecutar localmente

Se recomienda servir la carpeta con un servidor HTTP local. Si tienes Python 3 instalado, desde la raíz del proyecto ejecuta:

```bash
python3 -m http.server 8000
```

Luego abre <http://localhost:8000> en el navegador. Para detener el servidor, presiona `Ctrl+C` en la terminal.

Bootstrap se carga desde un CDN, por lo que se requiere conexión a internet para visualizar correctamente sus estilos y componentes.

## Contenido

- `index.html`: menú principal con enlaces a las preguntas.
- `pages/`: páginas HTML independientes para las siete preguntas.
- `css/`: hojas de estilo globales y específicas.
- `js/`: scripts JavaScript externos.
- `data/`: archivo CSV `Plan_de_Pruebas_Oferta-Especificacion_Gherkin.csv`.

El botón de la página principal descarga el plan de pruebas desde esta carpeta.
