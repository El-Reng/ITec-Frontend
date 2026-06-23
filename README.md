# Tarea: Funciones y Operadores Aritméticos

Poner en práctica la creación de un entorno de trabajo desde cero, la configuración de estilos y la construcción de una interfaz modular usando Componentes Funcionales y Props.

# Requerimientos:
  R1: Configuración del proyecto
  
    - Crear un nuevo proyecto usando Vite con React y JavaScript.
    - Limpiar los archivos por defecto que trae la instalación (por ejemplo, vaciar App.css y limpiar el contenido inicial de App.jsx).
    - Instalar y configurar Tailwind CSS .
    - Instalar Axios, hacer una petición GET de prueba a una API pública (como FAKEStoreAPI o discogs) dentro de App.jsx y mostrar el resultado.

  R2: Estructura de carpetas

    - Dentro de la carpeta src, crear una nueva subcarpeta llamada components.

  R3: Creación de componentes 
    Construir dos componentes independientes dentro de la carpeta components:

    - Header.jsx: Debe retornar una barra de navegación superior con el título de la tienda/disquera.
    - Card.jsx: No debe contener información fija en su interior, sino que debe estar preparado para recibir las siguientes Props:

      - imagen (una URL en formato texto)
      - titulo
      - descripcion
      - precio
      - Usar Tailwind para darle forma de tarjeta

  R4: Renderizado de la lista

    - En el archivo principal App.jsx, crear una funcion que guarde los datos de la API. 
    - En el retorno (return) de App.jsx, usar el método .map() para recorrer los datos. Por cada elemento del arreglo, renderizar un componente Card pasándole la información a través de las Props.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.