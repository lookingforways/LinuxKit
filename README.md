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
- Colección de comandos agrupados por tema, combinando contenido estático con comandos revisados que se mantienen en `data/approved-commands.json` (solo lectura).

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
- La ruta `/proponer-comando` invita a quienes quieran colaborar a escribir a **hola@aulaciber.top**. La web es 100 % estática y no recibe datos de nadie: no hay formularios, cuentas, paneles de administración ni servicios externos. Los contenidos se actualizan solo desde el repositorio.

---

## 🛠️ Tecnologías utilizadas

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** + **shadcn/ui**
- **Export estático** (`output: 'export'`): sin backend ni servicios externos
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
├── data/approved-commands.json   # Comandos revisados de la biblioteca (solo lectura)
├── lib/
│   └── utils.ts
├── public/                       # Íconos y estáticos
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

### 3. Variables de entorno

No se necesita ninguna.

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

## 📚 Comandos aprobados de la biblioteca

`data/approved-commands.json` es una lista de grupos con esta forma; se incrusta en el build y se muestra en `/biblioteca/` junto a los grupos fijos:

```json
[
  { "title": "Categoría", "commands": [["comando", "Descripción breve"]] }
]
```

Los comandos nuevos se añaden editando este archivo en el repositorio. El sitio no envía ni recibe datos de nadie.

---

## Despliegue en Enhance

Sitio **100 % estático** (Next.js con `output: 'export'` y `trailingSlash: true`), publicado en `linuxkit.aulaciber.top` mediante *Desplegar desde GitHub*. No necesita ningún proceso Node en ejecución.

| Ajuste | Valor |
| --- | --- |
| Script de compilación | `npx --yes pnpm@12.3.4 install --frozen-lockfile && npx pnpm@12.3.4 build` |
| Directorio de publicación | `out` |
| Runtime | Ninguno |
| Variables de entorno | Ninguna |

Requisitos del entorno de compilación: Node.js 20.9 o superior (Next.js 16). Cada ruta se genera como `<ruta>/index.html` dentro de `out/`.

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
