[README.md](https://github.com/user-attachments/files/25613247/README.md)
# GrowTrades - Premium Mycology Store 🍄✨

Bienvenido al repositorio oficial de **GrowTrades** (anteriormente Setas Online Store), una plataforma de comercio electrónico de última generación especializada en trufas mágicas, microdosis y kits de cultivo de grado profesional.

![GrowTrades Preview](./transformacion/public/hero_bg_clean.png)

## 🌟 Características Principales

*   **Diseño Premium & Moderno:** Interfaz inmersiva en modo oscuro con acentos dorados (`gold`), utilizando técnicas de glassmorphism y micro-animaciones para una experiencia visual superior.
*   **Carrito de Compras Nativo & Reactivo:** Sistema de carrito deslizante integrado desarrollado en JavaScript puro sin dependencias externas pesadas. Persistencia de datos mediante `localStorage` para no perder los artículos al recargar.
*   **Catálogo Dinámico:** Separación estructurada por categorías (Trufas, Microdosis, Kits de Cultivo) con vistas detalladas de productos y botones de compra ágiles ("1 Clic").
*   **Velocidad Extrema:** Renderizado estático super rápido gracias a Astro.
*   **Arquitectura Escalable:** Componentes reutilizables e infraestructura preparada para crecer (SEO optimizado por defecto).

## 🛠️ Tecnologías Utilizadas

Este proyecto ha sido reconstruido desde cero abandonando arquitecturas legadas (WordPress/WooCommerce tradicionales) para adoptar un stack moderno y eficiente (JAMstack):

*   [**Astro 🚀**](https://astro.build/) - Framework web para construir sitios super-rápidos orientados a contenido.
*   [**Tailwind CSS 🎨**](https://tailwindcss.com/) - Framework CSS de utilidad (Utility-first) para un diseño a medida y control absoluto de la interfaz interactiva.
*   [**TypeScript / JavaScript (ES6+) ✨**](https://www.typescriptlang.org/) - Para la lógica de negocio sólida, y manipulación DOM rápida y ligera del carrito de compras.
*   **Node.js / npm** - Gestión de dependencias y tiempos de ejecución.

## 🚀 Instalación y Despliegue Local

Sigue estos pasos para arrancar el proyecto en tu entorno de desarrollo local:

### Prerrequisitos
Asegúrate de tener instalado **Node.js** (versión 18+ recomendada) en tu equipo.

### 1. Clonar el repositorio
```bash
git clone https://github.com/lilianne-rdguez/Setas-s-Online-Store.git
cd Setas-s-Online-Store/transformacion
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
La terminal indicará un puerto local (generalmente `http://localhost:4321`). Abre ese enlace en tu navegador web. Pudes editar los archivos en la carpeta `src/` y el navegador se actualizará automáticamente.

## 📦 Construir para Producción (Build)

Cuando la web esté lista para subirse a un servidor de producción (Vercel, Netlify, Cloudflare Pages o tu propio hosting):

```bash
npm run build
```
Esto generará una carpeta `dist/` con el sitio estático minificado y ultra-rápido, listo para ser desplegado. Podrás previsualizarlo localmente con:
```bash
npm run preview
```

## 📂 Estructura del Proyecto

Dentro del directorio `transformacion/`, la estructura clave es:

```text
/
├── public/              # Archivos estáticos (imágenes, iconos, etc.)
├── src/
│   ├── components/      # Componentes de UI reutilizables (Botones, Carrito, Headers...)
│   ├── layouts/         # Plantillas base (Marco de la página con Navbar y Footer integrados)
│   ├── pages/           # Rutas automáticas (index.astro -> /, productos.astro -> /productos)
│   │   └── producto/    # Rutas dinámicas para el detalle individual del producto ([id].astro)
│   └── utils/           # Utilidades JavaScript externas (ej. cartStore.js para el carrito)
├── package.json         # Dependencias del proyecto
└── tailwind.config.mjs  # Configuración de los temas de color y estilos propios
```

## 📝 Licencia / Copyright
Todos los derechos reservados © 2026 GrowTrades. Las texturas visuales, imágenes, marcas e identidad comercial son propiedad de sus respectivos autores. El código está alojado para control de versiones privado.
