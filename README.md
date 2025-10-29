# 📚 Calculadora de Nota Final

Aplicación web para calcular la nota media de asignaturas y la nota final ponderada.

## 🚀 Características

- ✅ Agregar múltiples notas con descripciones
- ✅ Editar notas directamente desde la lista
- ✅ Eliminar notas individualmente
- ✅ Cálculo automático de la nota media
- ✅ Fórmula personalizada: (Nota Media × 70%) + (Nota Adicional × 30%)
- ✅ Actualización dinámica de resultados
- ✅ Diseño responsive (funciona en móvil y escritorio)

## 📖 Cómo usar

1. Ingresa las notas de tus asignaturas (0-10) con una descripción
2. Agrega la nota adicional que representa el 30% de la calificación final
3. Los resultados se calculan automáticamente:
   - **Nota Media**: Promedio de todas las asignaturas
   - **Nota Media (70%)**: La nota media multiplicada por 0.7
   - **Nota Adicional (30%)**: La nota adicional multiplicada por 0.3
   - **Nota Final**: Suma de ambos porcentajes

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📱 Despliegue en la Nube

Esta aplicación puede desplegarse fácilmente en varias plataformas gratuitas. Todas funcionan perfectamente desde móvil, tablet o escritorio.

### 🥇 Opción 1: GitHub Pages (Más fácil y recomendado)

**Ventajas**: Gratis, fácil, integrado con GitHub, HTTPS automático

**Pasos**:
1. Sube este repositorio a GitHub (crea uno nuevo y sube los archivos)
2. Ve a **Settings** → **Pages** (en el menú lateral izquierdo)
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`
4. Haz clic en **Save**
5. Espera 1-2 minutos y tu app estará en: `https://tu-usuario.github.io/nombre-repositorio`

**Desde el móvil**: Solo abre el enlace en tu navegador móvil. Funciona como una app nativa.

### 🥈 Opción 2: Netlify Drop (Súper rápido, sin registro)

**Ventajas**: Sin registro necesario, drag & drop, HTTPS automático, dominio personalizable

**Pasos**:
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra y suelta la carpeta completa del proyecto
3. ¡Listo! Te dará una URL inmediatamente (ejemplo: `random-name-123.netlify.app`)
4. Puedes cambiar el nombre en Settings → Site details → Change site name

**Mejora**: Si creas cuenta gratis, puedes conectar tu GitHub para despliegues automáticos cada vez que hagas un cambio.

### 🥉 Opción 3: Vercel (Excelente para proyectos)

**Ventajas**: Muy rápido, despliegues automáticos desde GitHub, excelente rendimiento

**Pasos**:
1. Ve a [vercel.com](https://vercel.com) y crea cuenta (puedes usar GitHub)
2. Haz clic en **Add New Project**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un sitio estático
5. Haz clic en **Deploy** y en 30 segundos estará listo

### 🚀 Opción 4: Surge.sh (Desde la terminal)

**Ventajas**: Muy simple, dominio gratuito, control total

```bash
# Instala surge (solo una vez)
npm install -g surge

# En la carpeta del proyecto
surge

# Te pedirá:
# - Email (cualquier email funciona)
# - Password (créalo la primera vez)
# - Nombre del dominio (ejemplo: mis-notas.surge.sh)
```

### 🔥 Opción 5: Firebase Hosting (Google)

**Ventajas**: Infraestructura de Google, muy confiable, fácil

**Pasos**:
```bash
# Instala Firebase CLI
npm install -g firebase-tools

# Inicia sesión
firebase login

# Inicializa (selecciona Hosting y el proyecto)
firebase init hosting

# Despliega
firebase deploy
```

### 🌐 Opción 6: Cloudflare Pages (Nuevo y potente)

**Ventajas**: Infraestructura de Cloudflare, muy rápido en todo el mundo

**Pasos**:
1. Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecta tu cuenta de GitHub
3. Selecciona el repositorio
4. Cloudflare detectará automáticamente la configuración
5. Haz clic en **Save and Deploy**

## 📊 Comparativa Rápida

| Plataforma | Dificultad | Dominio | HTTPS | Auto-deploy | Mejor para |
|------------|------------|---------|-------|-------------|------------|
| **GitHub Pages** | ⭐ Fácil | `usuario.github.io/repo` | ✅ | ✅ | Proyectos GitHub |
| **Netlify** | ⭐ Muy fácil | Personalizable | ✅ | ✅ | Desarrollo rápido |
| **Vercel** | ⭐ Fácil | Personalizable | ✅ | ✅ | Proyectos modernos |
| **Surge** | ⭐⭐ Media | Personalizable | ✅ | ❌ | Control total |
| **Firebase** | ⭐⭐ Media | Personalizable | ✅ | ✅ | Apps complejas |
| **Rnrender/Render** | ⭐ Fácil | Personalizable | ✅ | ✅ | Alternativa moderna |

## 💡 Recomendación

Para tu caso, te recomiendo **GitHub Pages** si ya usas GitHub, o **Netlify Drop** si quieres algo aún más rápido sin configuración. Ambas son perfectas para acceder desde el móvil.

## 📱 Acceso desde Móvil

Una vez desplegada, puedes:
- Guardar el enlace como favorito en tu navegador móvil
- Agregarlo a la pantalla de inicio (en móviles Android/iOS: "Agregar a pantalla de inicio")
- Funciona offline si ya la has cargado antes (gracias al navegador)

## 📝 Notas

- Todas las opciones son **100% gratuitas** para sitios estáticos
- Todas incluyen **HTTPS automático** (seguro)
- Funcionan perfectamente en **móvil, tablet y escritorio**
- No necesitas servidor, base de datos ni configuración compleja

