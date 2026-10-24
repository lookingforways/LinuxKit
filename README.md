# 🐧 LinuxKit

### Plataforma práctica e interactiva de comandos Linux orientada a ciberseguridad y redes

**LinuxKit** es una herramienta web educativa para aprender, consultar y practicar comandos Linux. Combina un glosario de comandos con casos de uso guiados, un generador de comandos personalizado y una biblioteca ampliada, pensado para estudiantes, administradores de sistemas, desarrolladores y cualquier persona que empiece a trabajar con Linux, servidores, VPS y ciberseguridad.

🔗 **Sitio:** [linuxkit.aulaciber.top](https://linuxkit.aulaciber.top)

---

## 🚀 Características

### 📚 Glosario de comandos
- Más de 30 comandos organizados en categorías (Sistema, Archivos, Procesos, Servicios, Redes, Seguridad, Auditoría, Permisos, Incidentes, Paquetes, Almacenamiento, Contenedores, Git).
- Cada comando incluye descripción, sintaxis, ejemplo práctico, nivel (Básico / Intermedio / Avanzado) y etiquetas.
- Búsqueda y filtrado por categoría.
- Botón de copiado rápido al portapapeles.

### 📖 Biblioteca ampliada
- Colección de comandos agrupados por tema, combinando contenido estático con comandos aprobados publicados en Firestore (lectura pública desde el navegador).

### 🧩 Casos de uso guiados
- Escenarios reales paso a paso (por ejemplo, *"Servidor bajo ataque"*, *"Endurecer SSH"*) que guían al usuario por un flujo de diagnóstico y respuesta.

### 🛡️ Sección de seguridad
- Buenas prácticas y reglas de uso ético/autorizado antes de ejecutar cualquier prueba.
- Generador de comandos `nmap` con campos rellenables (`{{objetivo}}`, `{{cantidad}}`, etc.).

### 🧪 Laboratorio de comandos
- Generador de comandos personalizado a partir de plantillas ("flows") con campos configurables.
- Permite guardar y reutilizar comandos propios dentro de la sesión.

### 🎯 Ataques controlados
- Ejercicios de detección (escaneos, rate limiting, reglas IDS/IPS) diseñados para practicarse sobre logs y entornos propios, sin generar tráfico ofensivo.

### 🤝 Colaboración
- La ruta `/proponer-comando` invita a quienes quieran colaborar a escribir a **hola@aulaciber.top**. La web no recibe datos de nadie: no hay formulario ni panel de administración, y las reglas de Firestore deniegan toda escritura.

---

## 🛠️ Tecnologías utilizadas

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Firebase** (SDK cliente, solo lectura de Firestore) para la biblioteca dinámica
- **lucide-react** para iconografía
- Gestor de paquetes: **pnpm**

---

## 📂 Estructura del proyecto

```
LinuxKit/
├── app/
│   ├── page.tsx                  # Glosario principal
│   ├── layout.tsx
│   ├── ataques-controlados/      # Ejercicios de detección
│   ├── biblioteca/               # Biblioteca ampliada de comandos
│   ├── casos/                    # Casos de uso guiados
│   ├── laboratorio/              # Generador de comandos personalizado
│   ├── proponer-comando/         # Invitación a colaborar por correo
│   └── seguridad/                # Buenas prácticas + generador nmap
├── components/ui/                # Componentes shadcn/ui
├── .env.example                  # Variables NEXT_PUBLIC_FIREBASE_* (vacías)
├── lib/
│   ├── firebase.ts               # Configuración e inicialización de Firebase
│   └── utils.ts
├── public/                       # Íconos y estáticos
├── firestore.rules               # Reglas de seguridad de Firestore
├── package.json
└── README.md
```

---

## 💻 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/jess300605/LinuxKit.git
cd LinuxKit
```

### 2. Instalar dependencias

```bash
pnpm install
# o
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env.local` en la raíz con tus credenciales de Firebase (necesarias para la biblioteca dinámica; `NEXT_PUBLIC_FIREBASE_API_KEY` es obligatoria para compilar):

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

> Las variables `NEXT_PUBLIC_*` se **incrustan en el build** (son públicas por diseño en el SDK cliente de Firebase). Si `NEXT_PUBLIC_FIREBASE_API_KEY` no está definida, `next build` en producción falla con un mensaje claro en lugar de generar un sitio con la biblioteca dinámica rota.

### 4. Ejecutar en modo desarrollo

```bash
pnpm dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### 5. Generar una versión de producción

```bash
pnpm build   # genera el sitio estático en out/
```

---

## 🔥 Configuración de Firebase

El sitio solo usa el SDK **cliente** de Firebase y únicamente **lee** la colección `commands` (comandos aprobados, lectura pública) desde `/biblioteca`.

Las reglas (`firestore.rules`) permiten **solo lectura pública de `commands`** y deniegan todo lo demás (incluidas `commandProposals` y `admins`, ya sin uso). Nadie puede escribir desde la web ni desde la API; los comandos se gestionan a mano desde la consola de Firebase. Publica estas reglas en tu proyecto (`firebase deploy --only firestore:rules` o desde la consola).

Recomendado en Google Cloud: restringir la API key por referrer HTTP a `https://linuxkit.aulaciber.top/*` y limitarla a la API de Firestore.

---

## Despliegue en Enhance

Sitio **100 % estático** (Next.js con `output: 'export'` y `trailingSlash: true`), publicado en `linuxkit.aulaciber.top` mediante *Desplegar desde GitHub*. No necesita ningún proceso Node en ejecución.

| Ajuste | Valor |
| --- | --- |
| Script de compilación | `npx --yes pnpm@12.3.4 install --frozen-lockfile && npx pnpm@12.3.4 build` |
| Directorio de publicación | `out` |
| Runtime | Ninguno |
| Variables de entorno | `NEXT_PUBLIC_FIREBASE_API_KEY` (obligatoria), `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`, `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`, `NEXT_PUBLIC_FIREBASE_APP_ID`, `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` |

Requisitos del entorno de compilación: Node.js 20.9 o superior (Next.js 16). Cada ruta se genera como `<ruta>/index.html` dentro de `out/`.

Para compilar es **obligatoria** `NEXT_PUBLIC_FIREBASE_API_KEY`; si falta, el build falla a propósito. Valores de Firebase: consola de Firebase → Configuración del proyecto → Tus apps (SDK web). No inventes ni reutilices claves de otro proyecto.

---

## 🎯 Objetivo del proyecto

LinuxKit nace como un proyecto educativo para reunir en una sola herramienta el aprendizaje de comandos Linux con práctica guiada de ciberseguridad. El objetivo es que el usuario no solo copie un comando, sino que comprenda:

- Qué hace.
- Cómo funciona.
- Cuándo utilizarlo.
- Qué parámetros acepta.
- Qué resultado puede esperar.
- En qué escenario real (caso de uso) se aplicaría.

---

## ⚠️ Uso responsable

Algunos comandos Linux —y en particular los relacionados con escaneo de redes, auditoría o pruebas de seguridad— pueden modificar archivos, permisos, usuarios, procesos o configuraciones del sistema, o ser interpretados como actividad ofensiva si se usan sin autorización.

- Utiliza estos comandos solo en sistemas y redes que administras o para los que tienes autorización explícita.
- Los ejercicios de la sección "Ataques controlados" están diseñados para practicarse sobre entornos propios (laboratorio, VPS personal), nunca contra terceros.
- LinuxKit tiene fines **educativos, administrativos y de aprendizaje** — no sustituye el criterio profesional ni la normativa legal aplicable.

---

## 🤝 Contribuir

¿Tienes un comando útil que no está en el glosario? Escribe a **hola@aulaciber.top** (ver [`/proponer-comando`](https://linuxkit.aulaciber.top/proponer-comando/)) — se revisa antes de publicarse.

Para contribuir al código, puedes abrir un *issue* o un *pull request* en este repositorio.

---

## 👨‍💻 Autor

**Jesús Sanabria** — Estudiante de ciberseguridad en FUSALMO

Proyecto desarrollado como iniciativa personal enfocada en el aprendizaje de:

- Linux y administración de sistemas
- Servidores y VPS
- Ciberseguridad
- Desarrollo web

- GitHub: [github.com/jess300605](https://github.com/jess300605)
- Proyecto: [github.com/jess300605/LinuxKit](https://github.com/jess300605/LinuxKit)

---

## 📄 Licencia

Este proyecto puede utilizarse como material educativo. Si deseas reutilizar o modificar el proyecto, se recomienda mantener la atribución correspondiente al autor original.

---

**🐧 LinuxKit — Aprende Linux. Comprende los comandos. Practica con criterio.**
