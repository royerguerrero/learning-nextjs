# Learning Next.js

## 🔀 Routing
Tipo de rutas:
 - 🌳 Rutas Estaticas -> `/about/` -> Estas funcionan usando el file system es decir creamos dentro de pages las paginas por ejemplo **contact, about, index, etc...** 

 - ⚡️ Rutas Dinamicas -> `/user/R0Y3R/`, `/user/platzi` -> Estas son muy similares a las rutas estaticas en el sentido de que usan el file system pero de una forma diferente, usando carpetas y archivos a la vez. Ejemplo: 
    - `/products/:id` -> `pages/products/[id].js`
    - `/blog/:slug` -> `pages/blog/[slug].js`
Hay que recordar que para poder recuperar los parametros de la ruta se debe usar un hook llamado `useRouter()` que se encuntra en `next/router`

### 👀 UnderTheHood
- Code Splitting -> Optimizacion mediantes hashs para los assets -> Looks like this
    ```
    + First Load JS shared by all    67 kB
    ├ chunks/framework.b97a0e.js   42 kB
    ├ chunks/main.8d1561.js        23.3 kB
    ├ chunks/pages/_app.1a580d.js  979 B
    └ chunks/webpack.49d04e.js     690 B
    ```
    P.D -> Revisar el [curso de optimizacion](https://platzi.com/clases/web-performance/) para la web en platzi 
- Pre-rendering -> Next.js crea el HTML por cada pagina lo cual resulta mejor para el SEO. Adicionalmente hay que saber que existen dos metodos de Pre-rendering
    1. Static Generation (Recomendado por Next.js) -> El HTML es generado en **build time** y es reutilizable para cada peticion
    2. Server-side Rendering: El HTML es generado en cada peticion

### 🤞 Linking pages
Para relacionar nuestras paginas usando Next.js debemos usar el componente `Link` que se encuentra en `next/link` y se usa asi:
```
    ...
    <Link href="/about">
        <a>About Us</ a>
    </Link> 
    ...
```

### 👀 UnderTheHood
- Prefetching automatico -> Next.js realiza por nosotros una precarga de las paginas antes de que el cliente vaya a dichas paginas
