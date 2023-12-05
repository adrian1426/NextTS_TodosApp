## Instalando y levantando el proyecto

Primer paso instalar las dependencias(hacerlo en la carpeta raiz):

```bash
npm install
#or
yarn install
```

Segundo paso Levanta el proyecto en modo DEV:

```bash
npm run dev
#or
yarn dev
```

Tercer paso probar la App(http://localhost:3000):



## Levantando el proyecto en modo PROD

Si se desea levantar el proyecto en modo PROD, hacer lo siguiente:

Primer paso ejecutar el siguiente comando:

```bash
npm run build
#or
yarn build
```

Después de finalizar el primer paso, ejecutar el siguiente comando:

```bash
npm start
#or
yarn start
```

Tercer paso probar la App(http://localhost:3000):


## Sobre el proyecto


Implementa los siguientes conceptos:

- 1.	Deberá tener una página de Login
- 2.	Debera tener una página de Home, donde mostraras un componente de layout y un componente de lista dentro del layout
- 3.	Considera que si más adelante quieres agregar otra pagina el layout debera servir para montar cualquier contenido dentro en otra página
- 4.	El layout debera tener un navbar con un boton de logout y el nombre el usuario loggeado
- 5.	Debera manejar autenticación para entrar a la página de home utilizando HOC para verificar si el usuario esta autenticado.
- 6.	Deberas utilizar componentes para Login, Layout y Todo
- 7.	En el componente de TODO podras ejecutar CRUD
- 8.	En el componente de TODO deberas implementar un custom hook para las llamadas a api de CRUD (pensando en reutilizar en futuras secciones de la app)
- 9.	Deberas mostrar un mensaje de bienvenida (“Bienvenido {username}”) utilizando Context para compartir la variable desde la app
- 10.	Deberas crear un componente para tus botones utilizando “render prop”
- 11.	Dentro de tu código de manera libre deberas utilizar “useEffect”