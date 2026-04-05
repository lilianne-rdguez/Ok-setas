# TAREA 1: Análisis de index.astro

A continuación se detallan los componentes presentes en `index.astro` y el contenido extraído de cada uno:

### 1. Header.astro
- **Tira Promocional:** ✨ 10% DE DESCUENTO EN TU PRIMERA COMPRA CON EL CÓDIGO: GROW10 ✨
- **Texto Logo:** GrowTrades
- **Menú de Navegación:**
  - PRODUCTOS (con submenú: MICRODOSIS, TRUFAS MÁGICAS, KITS DE CULTIVO)
  - SOBRE NOSOTROS
- **Acciones:**
  - Carrito (con contador inicial 0)
  - Mi Cuenta (con submenú: INICIAR SESIÓN, CREAR CUENTA)

### 2. Hero.astro
- **Imagen de fondo:** `hero_bg_clean.png` (alt: "Glowing mushrooms in a dark mystical forest")
- **Eyebrow:** TIENDA ESPECIALIZADA EN MICOLOGÍA MÁGICA
- **Título principal:** DESPIERTA TU POTENCIAL
- **Subtítulo:** Calidad que se cultiva, experiencia que se siente.
- **Botones:**
  - Primario: EXPLORAR MICRODOSIS
  - Secundario: CONOCER MÁS

### 3. Intro.astro
- **Título:** Un enfoque profesional y consciente
- **Contenido destacado:** Ofrecemos trufas mágicas, TruffleKits, kits de cultivo de setas 100% micelio y microdosis...
- **Texto Pie:** Respaldados por 25 años de experiencia en el sector micológico.

### 4. Categories.astro
- **Eyebrow:** Un modelo que marca la diferencia
- **Título:** Descubre Nuestras Categorías
- **Listado de Categorías (Repeater):**
  - **Microdosis:** URL: `/microdosis`, Imagen: `https://ximoe124.sg-host.com/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-19-104259.png`
  - **Trufas Mágicas:** URL: `/trufas`, Imagen: `https://ximoe124.sg-host.com/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-19-094506.png`
  - **Kits de Cultivo:** URL: `/kits-de-cultivo`, Imagen: `https://ximoe124.sg-host.com/wp-content/uploads/2026/01/Captura-de-pantalla-2026-01-19-105228.png`

### 5. Products.astro
- **Eyebrow:** Catálogo 2026
- **Título:** Productos Destacados
- **Enlace "Ver todos":** `/productos`
- **Listado de Productos (Repeater):**
  - Psilocybe Cubensis Treasure Coast (36,00 €)
  - 2+1 Pack Microdosis (27,98 €)
  - Psilocybe Hollandia (21,50 €)
  - Psilocybe Atlantis (16,95 €)

### 6. Features.astro
- **Características (Repeater):**
  1. Calidad Premium: Seleccionamos cuidadosamente...
  2. Envíos Rápidos y Discretos: Preparamos y enviamos...
  3. Compra Segura: Pagos protegidos...

### 7. Trustpilot.astro
- **Texto Branding:** Trustpilot (con valoración 4.8/5 y Excelente)
- **Reseñas (Repeater):**
  1. Marcos T.: "Envío súper discreto..."
  2. Elena S.: "El Supra GrowKit..."
  3. David R.: "Atención al cliente..."

### 8. CTA.astro
- **Imagen:** `mystical_spores_cta.png` (alt: "Glowing golden spores in a mystical dark forest")
- **Título:** Despierta tu potencial.
- **Descripción:** Elaborado con atención plena...
- **Botón:** INICIAR EL VIAJE (URL: `https://ximoe124.sg-host.com/carrito/`)

### 9. Footer.astro
- **Descripción Marca:** Calidad que se cultiva, experiencia que se siente. El universo fungi a tu alcance con la máxima discreción y frescura.
- **Enlaces Rápidos:** Microdosis, Cultivos Mini, Spores y Genética.
- **Legal & Soporte:** Envíos, Política de Privacidad, Condiciones previas, Contacto.
- **Boletín:** Suscríbete para recibir actualizaciones y ofertas.
- **Redes:** IG, X.
- **Copyright:** © 2026 GrowTrades. Solo para fines experimentales y de investigación.
