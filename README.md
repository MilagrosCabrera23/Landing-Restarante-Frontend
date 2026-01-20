#  Landing Restaurante Frontend

Una aplicación web moderna y responsiva para la landing page de un restaurante llamado Restaurante Gourmet, la cual esta construida con **Next.js 16**, **React 19**, **Tailwind CSS** y **TypeScript**.

##  Características

-  Diseño moderno y responsivo
-  Rendimiento optimizado con Next.js
-  Galería de imágenes con Embla Carousel
-  Secciones completas: Hero, Menú, Equipo, Contacto, Galería
-  Formularios validados con React Hook Form y Zod
- Componentes reutilizables con Radix UI y CVA
-  Accesibilidad mejorada

##  Tecnologías Utilizadas

### Framework & Librerías
- **Next.js 16.1.1** - Framework React con SSR/SSG
- **React 19.2.3** 
- **TypeScript 5** - Tipado estático

### Estilos & Animaciones
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **PostCSS 8.5.6** - Procesador CSS

### Componentes & UI
- **Radix UI** - Componentes accesibles
- **Lucide React 0.562.0** - Iconos
- **Embla Carousel 8.6.0** - Carrusel de imágenes
- **Class Variance Authority 0.7.1** - Gestión de variantes de componentes

### Validación & Datos
- **React Hook Form 7.70.0** - Gestión de formularios
- **Zod 4.3.5** - Validación de esquemas TypeScript
- **date-fns 4.1.0** - Utilidades de fecha

##  Estructura del Proyecto

```
landing-restaurante/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Página de inicio
│   └── globals.css              # Estilos globales
├── components/                   # Componentes React
│   ├── layout/                  # Componentes de layout
│   │   ├── header.tsx           # Encabezado
│   │   └── footer.tsx           # Pie de página
│   ├── sections/                # Secciones de la página
│   │   ├── hero.tsx             # Sección hero
│   │   ├── about.tsx            # Sección sobre nosotros
│   │   ├── menu.tsx             # Sección menú
│   │   ├── gallery.tsx          # Galería de imágenes
│   │   ├── team.tsx             # Equipo
│   │   └── contact.tsx          # Contacto
│   └── ui/                      # Componentes UI reutilizables
│       ├── button.tsx           # Botones
│       ├── cardMenu.tsx         # Tarjetas del menú
│       ├── carousel.tsx         # Carrusel
│       ├── dialog.tsx           # Diálogos modales
│       └── socialLinks.tsx      # Enlaces sociales
├── data/                         # Datos JSON
│   ├── about.json               # Datos de "Sobre nosotros"
│   ├── menu.json                # Elementos del menú
│   ├── galeria.json             # Imágenes de galería
│   └── team.json                # Miembros del equipo
├── types/                        # Tipos TypeScript
│   ├── index.ts                 # Tipos principales
│   ├── about.ts                 # Tipos de About
│   ├── menu.ts                  # Tipos de Menu
│   ├── galeria.ts               # Tipos de Galería
│   └── team.ts                  # Tipos de Team
├── hooks/                        # Custom React Hooks
├── lib/                          # Funciones utilitarias
│   └── utils.ts                 # Funciones auxiliares
├── public/                       # Archivos estáticos
├── components.json              # Config de componentes
├── eslint.config.mjs            # Configuración ESLint
├── next.config.ts               # Configuración Next.js
├── tailwind.config.mjs           # Configuración Tailwind CSS
├── tsconfig.json                # Configuración TypeScript
├── postcss.config.mjs           # Configuración PostCSS
└── package.json                 # Dependencias del proyecto
```

##  Cómo Empezar

### Requisitos Previos
- **Node.js** 18+ 
- **npm** o **yarn** (gestor de paquetes)

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/landing-restaurante.git
cd landing-restaurante
```

2. **Instalar dependencias**
```bash
npm install
# o si prefieres yarn
yarn install
```

3. **Variables de entorno (si es necesario)**
```bash
cp .env.example .env.local
# Edita .env.local con tus variables
```
##  Scripts Disponibles

### Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:3000`

### Producción
```bash
npm run build
npm run start
```
Compila el proyecto para producción e inicia el servidor

### Linting
```bash
npm run lint
```
Ejecuta ESLint para verificar la calidad del código

## Componentes Principales

### Secciones
- **Hero** - Sección introductoria principal con CTA
- **About** - Información sobre el restaurante
- **Menu** - Catálogo de platos y bebidas
- **Gallery** - Galería de imágenes del restaurante
- **Team** - Presentación del equipo
- **Contact** - Formulario de contacto

### Componentes UI Reutilizables
- **Button** - Botones con variantes
- **CardMenu** - Tarjetas para elementos del menú
- **Carousel** - Carrusel de imágenes con controles
- **Dialog** - Modales y diálogos
- **SocialLinks** - Enlaces a redes sociales

##  Licencia

Este proyecto está bajo la licencia **MIT**.

---

