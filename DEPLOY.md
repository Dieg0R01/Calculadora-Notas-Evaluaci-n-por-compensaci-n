# 🚀 Guía de Despliegue Rápida

## Opción más rápida: Netlify Drop (30 segundos)

1. Ve a: https://app.netlify.com/drop
2. Comprime esta carpeta en un ZIP
3. Arrastra el ZIP a la página
4. ¡Listo! Ya tienes tu app online

## Opción con GitHub: GitHub Pages (2 minutos)

### Paso 1: Subir a GitHub

```bash
# Inicializa git (si no lo has hecho)
git init

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Primera versión de la calculadora de notas"

# Crea un repositorio en GitHub (desde github.com)
# Luego conecta y sube:
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

### Paso 2: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. Click en **Pages** (en el menú lateral)
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder:竖向`/ (root)`
5. Click en **Save**
6. Espera 1-2 minutos
7. Tu app estará en: `https://TU-USUARIO.github.io/TU-REPO`

## Acceso desde móvil

Una vez desplegada, abre la URL en tu móvil:
- Puedes guardarla como favorito
- Puedes agregarla a la pantalla de inicio (como una app)
- Funciona perfectamente en cualquier dispositivo

## Más opciones

Revisa el README.md para ver todas las opciones disponibles (Netlify, Vercel, Firebase, etc.)

