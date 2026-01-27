#  Landing Page Restaurante Gourmet

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase)

##  Descripción

**Restaurante Gourmet** no es solo una landing page estática: es una **aplicación web fullstack moderna** diseñada para ofrecer una experiencia inmersiva y funcional. Incluye un **sistema de reservas conectado a base de datos real (Supabase)**, optimización avanzada de imágenes con **Cloudinary (WebP/AVIF)**, y una arquitectura de componentes reutilizables y escalables.

Este proyecto está construido con las últimas tecnologías del ecosistema React, utilizando **Next.js App Router** para SSR/SSG, **Server Actions** para la lógica del servidor, y prácticas de **Mobile First** para garantizar un rendimiento óptimo en todos los dispositivos.

---

##  Características Clave

-  **Sistema de Reservas Real**: Formulario conectado a Supabase (PostgreSQL) con validación estricta mediante React Hook Form + Zod
-  **Optimización de Rendimiento**: Imágenes servidas desde Cloudinary en formatos modernos (WebP/AVIF) para mejorar LCP y CLS
-  **Diseño Responsive Mobile First**: Interfaz fluida y adaptable construida con Tailwind CSS 4
-  **Arquitectura Modular**: Componentes reutilizables con Radix UI y Class Variance Authority
- ⚡ **Next.js 16 App Router**: Aprovecha Server Components, Server Actions y optimizaciones automáticas
-  **Galería Interactiva**: Embla Carousel para una experiencia visual fluida
-  **Validación Robusta**: Esquemas TypeScript-first con Zod 4.3.5
- ♿ **Accesibilidad**: Componentes accesibles por defecto con Radix UI
-  **Animaciones Suaves**: Framer Motion para transiciones elegantes
-  **Type-Safe**: TypeScript 5 con tipado estricto en toda la aplicación

---

##  Stack Tecnológico

### Framework & Runtime
- **Next.js 16.1.1** - Framework React con App Router, SSR/SSG y Server Actions
- **React 19.2.3** - Biblioteca UI con nuevas capacidades de servidor
- **TypeScript 5** - Superset de JavaScript con tipado estático

### Backend & Servicios
- **Supabase** - Base de datos PostgreSQL en la nube para gestión de reservas
- **Cloudinary** - CDN para hosting y optimización de imágenes (WebP/AVIF)

### Estilos & UI
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Radix UI** - Componentes primitivos accesibles y sin estilos
- **Lucide React 0.562.0** - Iconos SVG optimizados
- **Framer Motion 12.24.12** - Biblioteca de animaciones
- **Class Variance Authority 0.7.1** - Gestión de variantes de componentes

### Formularios & Validación
- **React Hook Form 7.71.1** - Gestión eficiente de formularios
- **Zod 4.3.5** - Validación y parseo de esquemas TypeScript-first
- **@hookform/resolvers 5.2.2** - Integración entre React Hook Form y Zod

### Componentes & Utilidades
- **Embla Carousel 8.6.0** - Carrusel de imágenes ligero y performante
- **date-fns 4.1.0** - Utilidades modernas para manejo de fechas
- **Sonner 2.0.7** - Sistema de notificaciones toast
- **next-themes 0.4.6** - Manejo de temas (dark/light mode)

---

## 📁 Estructura del Proyecto

```
landing-restaurante/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal con providers
│   ├── page.tsx                 # Página de inicio (Home)
│   ├── globals.css              # Estilos globales + Tailwind
│   └── actions/                 # Server Actions
│       └── contact.ts           # Lógica para formulario de reservas
├── components/                   # Componentes React
│   ├── layout/                  # Componentes de layout
│   │   ├── header.tsx           # Navegación principal
│   │   └── footer.tsx           # Pie de página
│   ├── sections/                # Secciones de la landing
│   │   ├── hero.tsx             # Hero section
│   │   ├── about.tsx            # Sección "Sobre Nosotros"
│   │   ├── menu.tsx             # Menú de platillos
│   │   ├── gallery.tsx          # Galería de imágenes
│   │   ├── team.tsx             # Equipo del restaurante
│   │   └── contact.tsx          # Formulario de contacto/reservas
│   └── ui/                      # Componentes UI reutilizables
│       ├── button.tsx           # Botón con variantes
│       ├── input.tsx            # Input de formulario
│       ├── label.tsx            # Label de formulario
│       ├── dialog.tsx           # Modal/diálogo
│       ├── carousel.tsx         # Wrapper de Embla Carousel
│       ├── cardMenu.tsx         # Card para items del menú
│       ├── formError.tsx        # Mensaje de error de formularios
│       ├── socialLinks.tsx      # Links de redes sociales
│       └── sonner.tsx           # Toast notifications
├── data/                         # Datos JSON estáticos
│   ├── about.json               # Información "Sobre Nosotros"
│   ├── contact.json             # Información de contacto
│   ├── footer.json              # Links del footer
│   ├── galeria.json             # URLs de imágenes (Cloudinary)
│   ├── header.json              # Navegación del header
│   ├── hero.json                # Contenido del hero
│   ├── menu.json                # Platillos del restaurante
│   └── team.json                # Miembros del equipo
├── lib/                          # Lógica de conexiones y utilidades
│   ├── supabase.ts              # Cliente de Supabase (conexión a BD)
│   └── utils.ts                 # Funciones auxiliares (clsx, cn, etc.)
├── schemas/                      # Esquemas de validación Zod
│   └── contact.ts               # Schema para formulario de reservas
├── types/                        # Definiciones de tipos TypeScript
│   ├── index.ts                 # Exports centralizados
│   ├── about.ts                 # Tipos para About
│   ├── contact.ts               # Tipos para Contact
│   ├── footer.ts                # Tipos para Footer
│   ├── galeria.ts               # Tipos para Galería
│   ├── header.ts                # Tipos para Header
│   ├── menu.ts                  # Tipos para Menu
│   └── team.ts                  # Tipos para Team
├── public/                       # Archivos estáticos (favicon, etc.)
├── components.json               # Configuración de componentes Radix UI
├── eslint.config.mjs             # Configuración de ESLint
├── next.config.ts                # Configuración de Next.js
├── next-env.d.ts                 # Tipos de Next.js
├── tailwind.config.mjs           # Configuración de Tailwind CSS
├── tsconfig.json                 # Configuración de TypeScript
├── postcss.config.mjs            # Configuración de PostCSS
└── package.json                  # Dependencias del proyecto
```

---

##  Instalación y Configuración

### Requisitos Previos
- **Node.js** 18.17 o superior
- **npm** o **yarn** o **pnpm**
- **Cuenta de Supabase** (gratuita en [supabase.com](https://supabase.com))

### Pasos de Instalación

#### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/landing-restaurante.git
cd landing-restaurante
```

#### 2. Instalar dependencias
```bash
npm install
# o si prefieres yarn
yarn install
# o con pnpm
pnpm install
```

#### 3. Configurar Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=tu_supabase_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_supabase_anon_key_aqui
```

**¿Dónde obtener estas credenciales?**

1. Ve a [supabase.com](https://supabase.com) y crea un proyecto gratuito
2. En el dashboard de tu proyecto, ve a **Settings** → **API**
3. Copia la **URL** y la **anon/public key**
4. Pega estos valores en tu archivo `.env.local`

**Tabla de Base de Datos**

Para que el formulario de reservas funcione, crea una tabla en Supabase con esta estructura:

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  date TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### 4. Ejecutar el proyecto

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

---

##  Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `http://localhost:3000` |
| `npm run build` | Genera la build optimizada para producción |
| `npm run start` | Inicia el servidor de producción (requiere `npm run build` primero) |
| `npm run lint` | Ejecuta ESLint para análisis de código |

---

##  Arquitectura y Patrones

### Server Actions
Este proyecto utiliza **Server Actions** de Next.js 16 para manejar la lógica del servidor directamente desde los componentes:

- [app/actions/contact.ts](app/actions/contact.ts): Procesa el formulario de reservas y guarda los datos en Supabase


### Optimización de Imágenes
Las imágenes se sirven desde **Cloudinary** en formatos modernos:
- **WebP** para navegadores modernos
- **AVIF** como fallback
- Lazy loading automático
- Responsive images con `srcset`

---

##  Secciones de la Landing

- **Hero**  - Sección introductoria con CTA principal
- **About**  - Historia y filosofía del restaurante
- **Menu**  - Catálogo de platillos y bebidas con precios
- **Gallery**  - Galería de imágenes con carousel interactivo
- **Team**  - Presentación del equipo de chefs
- **Contact**  - Formulario de reservas conectado a Supabase

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**.

---

