# 🚀 Guía Completa: Desplegar Microfrontends en Vercel

## 📋 Tabla de Contenidos
1. [Prerrequisitos](#prerrequisitos)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Configuración de Vercel](#configuración-de-vercel)
4. [Despliegue Paso a Paso](#despliegue-paso-a-paso)
5. [Verificación](#verificación)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Prerrequisitos

### ✅ Antes de empezar, verifica que tienes:

1. **Cuenta en Vercel**
   - Ve a https://vercel.com/signup
   - Regístrate con tu cuenta de GitHub (recomendado)

2. **Repositorio en GitHub**
   - Tu código debe estar en un repositorio de GitHub
   - Asegúrate de que esté público o que Vercel tenga acceso

3. **Node.js instalado**
   - Versión 20 o superior
   - Verifica con: `node --version`

4. **Código funcionando localmente**
   - Prueba cada build:
   ```bash
   npm run build shell -- --configuration production
   npm run build authenticator -- --configuration production
   npm run build tools -- --configuration production
   npm run build historically -- --configuration production
   npm run build assignments -- --configuration production
   npm run build general -- --configuration production
   ```

---

## 📁 Estructura del Proyecto

Tu workspace tiene 6 proyectos:

```
inventary-workspace/
├── projects/
│   ├── shell/                    → App principal (Shell)
│   ├── authenticator/            → MFE 1
│   ├── tools/                    → MFE 2
│   ├── historically/             → MFE 3
│   ├── assignments/              → MFE 4
│   └── general/                  → MFE 5
├── vercel-shell.json             → Config Shell
├── vercel-authenticator.json     → Config MFE 1
├── vercel-tools.json             → Config MFE 2
├── vercel-historically.json      → Config MFE 3
├── vercel-assignments.json       → Config MFE 4
└── vercel-general.json           → Config MFE 5
```

**Importante:** Cada proyecto necesita su propio sitio en Vercel.

---

## ⚙️ Configuración de Vercel

### Archivos de configuración creados:

Los archivos `vercel-*.json` ya están en tu repositorio. Cada uno contiene:

- **buildCommand**: Comando para construir el proyecto
- **outputDirectory**: Directorio donde está el build
- **installCommand**: Comando de instalación con `--legacy-peer-deps`
- **framework**: null (para evitar auto-detección)
- **rewrites**: Configuración para SPA routing

---

## 🚀 Despliegue Paso a Paso

### Método 1: Desde la UI de Vercel (Recomendado para principiantes)

#### **Paso 1: Preparar el Repositorio**

1. Asegúrate de que todos los archivos de configuración estén en tu repo:
   ```bash
   git status
   git add .
   git commit -m "chore: add vercel configuration files"
   git push origin main
   ```

#### **Paso 2: Crear el Primer Proyecto (Shell)**

1. Ve a https://vercel.com/dashboard
2. Click en **"Add New..."** → **"Project"**
3. Click en **"Import Git Repository"**
4. Busca tu repositorio: `Salvador243/inventary-workspace`
5. Click en **"Import"**

6. **Configuración del proyecto Shell:**
   - **Project Name**: `integradora-shell`
   - **Framework Preset**: `Other` (no selecciones Angular)
   - **Root Directory**: `.` (raíz del proyecto)
   - **Build Command**: `npm install --legacy-peer-deps && npm run build shell -- --configuration production`
   - **Output Directory**: `dist/shell/browser`
   - **Install Command**: `npm install --legacy-peer-deps`

7. **Variables de Entorno** (opcional):
   - Click en **"Environment Variables"**
   - Agrega si es necesario

8. Click en **"Deploy"**
9. Espera 3-5 minutos
10. ✅ Guarda la URL: `https://integradora-shell.vercel.app`

#### **Paso 3: Crear los 5 Proyectos MFE**

**Repite el proceso anterior 5 veces más**, uno para cada MFE:

---

##### **MFE 1: Authenticator**

1. Ve a https://vercel.com/dashboard
2. Click en **"Add New..."** → **"Project"**
3. Selecciona el MISMO repositorio: `Salvador243/inventary-workspace`
4. Configuración:
   - **Project Name**: `integradora-auth-mfe`
   - **Framework Preset**: `Other`
   - **Root Directory**: `.`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build authenticator -- --configuration production`
   - **Output Directory**: `dist/authenticator/browser`
   - **Install Command**: `npm install --legacy-peer-deps`
5. Click **"Deploy"**
6. ✅ Guarda la URL: `https://integradora-auth-mfe.vercel.app`

---

##### **MFE 2: Tools**

1. Nuevo proyecto en Vercel
2. Mismo repositorio
3. Configuración:
   - **Project Name**: `integradora-tools-mfe`
   - **Framework Preset**: `Other`
   - **Root Directory**: `.`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build tools -- --configuration production`
   - **Output Directory**: `dist/tools/browser`
   - **Install Command**: `npm install --legacy-peer-deps`
4. Click **"Deploy"**
5. ✅ Guarda la URL: `https://integradora-tools-mfe.vercel.app`

---

##### **MFE 3: Historically**

1. Nuevo proyecto en Vercel
2. Mismo repositorio
3. Configuración:
   - **Project Name**: `integradora-historically-mfe`
   - **Framework Preset**: `Other`
   - **Root Directory**: `.`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build historically -- --configuration production`
   - **Output Directory**: `dist/historically/browser`
   - **Install Command**: `npm install --legacy-peer-deps`
4. Click **"Deploy"**
5. ✅ Guarda la URL: `https://integradora-historically-mfe.vercel.app`

---

##### **MFE 4: Assignments**

1. Nuevo proyecto en Vercel
2. Mismo repositorio
3. Configuración:
   - **Project Name**: `integradora-assignments-mfe`
   - **Framework Preset**: `Other`
   - **Root Directory**: `.`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build assignments -- --configuration production`
   - **Output Directory**: `dist/assignments/browser`
   - **Install Command**: `npm install --legacy-peer-deps`
4. Click **"Deploy"**
5. ✅ Guarda la URL: `https://integradora-assignments-mfe.vercel.app`

---

##### **MFE 5: General**

1. Nuevo proyecto en Vercel
2. Mismo repositorio
3. Configuración:
   - **Project Name**: `integradora-general-mfe`
   - **Framework Preset**: `Other`
   - **Root Directory**: `.`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build general -- --configuration production`
   - **Output Directory**: `dist/general/browser`
   - **Install Command**: `npm install --legacy-peer-deps`
4. Click **"Deploy"**
5. ✅ Guarda la URL: `https://integradora-general-mfe.vercel.app`

---

### Método 2: Desde Vercel CLI (Más rápido)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Para cada proyecto, desde la raíz:
# Shell
vercel --name integradora-shell --build-command "npm install --legacy-peer-deps && npm run build shell -- --configuration production" --output-path dist/shell/browser

# Authenticator
vercel --name integradora-auth-mfe --build-command "npm install --legacy-peer-deps && npm run build authenticator -- --configuration production" --output-path dist/authenticator/browser

# Tools
vercel --name integradora-tools-mfe --build-command "npm install --legacy-peer-deps && npm run build tools -- --configuration production" --output-path dist/tools/browser

# Historically
vercel --name integradora-historically-mfe --build-command "npm install --legacy-peer-deps && npm run build historically -- --configuration production" --output-path dist/historically/browser

# Assignments
vercel --name integradora-assignments-mfe --build-command "npm install --legacy-peer-deps && npm run build assignments -- --configuration production" --output-path dist/assignments/browser

# General
vercel --name integradora-general-mfe --build-command "npm install --legacy-peer-deps && npm run build general -- --configuration production" --output-path dist/general/browser
```

---

## 📝 Paso 4: Actualizar URLs en el Shell

Una vez que todos los proyectos estén desplegados, actualiza las URLs en tu aplicación:

**Archivo:** `/projects/shell/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  mfes: {
    'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
    'mfe-tools': 'https://integradora-tools-mfe.vercel.app/remoteEntry.json',
    'mfe-historically': 'https://integradora-historically-mfe.vercel.app/remoteEntry.json',
    'mfe-assignments': 'https://integradora-assignments-mfe.vercel.app/remoteEntry.json',
    'mfe-general': 'https://integradora-general-mfe.vercel.app/remoteEntry.json',
  }
};
```

**Guarda y despliega de nuevo:**

```bash
git add .
git commit -m "chore: update production URLs"
git push origin main
```

Vercel automáticamente redesplegarĂ¡ el shell con las nuevas URLs.

---

## ✅ Verificación

### 1. Verifica cada MFE individualmente:

- ✅ https://integradora-auth-mfe.vercel.app
- ✅ https://integradora-tools-mfe.vercel.app
- ✅ https://integradora-historically-mfe.vercel.app
- ✅ https://integradora-assignments-mfe.vercel.app
- ✅ https://integradora-general-mfe.vercel.app

### 2. Verifica el Shell:

- ✅ https://integradora-shell.vercel.app
- Abre la consola del navegador (F12)
- Verifica que no haya errores de CORS
- Navega entre las diferentes secciones

### 3. Verifica los logs:

En cada proyecto de Vercel:
- Ve a **"Deployments"**
- Click en el último deployment
- Revisa los logs de build

---

## 🐛 Troubleshooting

### Error: "Build failed"

**Problema:** El build falla en Vercel

**Solución:**
1. Verifica que el build funcione localmente:
   ```bash
   npm run build [proyecto] -- --configuration production
   ```
2. Revisa los logs en Vercel Dashboard
3. Verifica que el comando de build sea correcto
4. Asegúrate de usar `--legacy-peer-deps`

---

### Error: "remoteEntry.json not found"

**Problema:** El shell no encuentra el MFE

**Solución:**
1. Verifica que la URL del MFE sea correcta
2. Abre la URL del MFE directamente: `https://[tu-mfe].vercel.app/remoteEntry.json`
3. Debe responder con un archivo JSON
4. Verifica la configuración de Native Federation

---

### Error: "CORS policy"

**Problema:** Error de CORS al cargar MFEs

**Solución:**
1. Verifica que los archivos `vercel-*.json` tengan los headers correctos
2. Cada archivo debe tener:
   ```json
   "headers": [
     {
       "source": "/(.*)",
       "headers": [
         { "key": "Access-Control-Allow-Origin", "value": "*" },
         { "key": "Access-Control-Allow-Methods", "value": "GET, OPTIONS" },
         { "key": "Access-Control-Allow-Headers", "value": "*" }
       ]
     }
   ]
   ```

---

### Error: "Framework preset"

**Problema:** Vercel detecta Angular automáticamente y usa configuración incorrecta

**Solución:**
1. En la configuración del proyecto, selecciona **"Other"** como Framework
2. O edita el proyecto:
   - Ve a **Settings** → **General**
   - **Framework Preset**: Cambia a **"Other"**
   - Guarda cambios
3. Redespliega

---

## 🔄 Workflow de Desarrollo

### Despliegue automático:

1. Haces cambios en tu código
2. `git push origin main`
3. Vercel detecta el push
4. Construye y despliega automáticamente
5. En 3-5 minutos está en producción

### Despliegue manual:

```bash
# Desde la carpeta del proyecto
vercel --prod
```

---

## 💡 Tips y Mejores Prácticas

### 1. **Environment Variables**
- Usa variables de entorno para URLs de API
- Configura en: **Settings** → **Environment Variables**

### 2. **Preview Deployments**
- Cada commit a una rama genera un preview
- Perfecto para testing antes de producción

### 3. **Dominios Personalizados**
- Ve a **Settings** → **Domains**
- Agrega tu dominio personalizado
- Ejemplo: `app.tudominio.com`, `auth.tudominio.com`

### 4. **Rollback**
- Ve a **Deployments**
- Selecciona un deployment anterior
- Click en **"..."** → **"Promote to Production"**

### 5. **Logs y Monitoring**
- **Real-time Function Logs**: Ve a **Logs** en el dashboard
- **Analytics**: Ve a **Analytics** para métricas

---

## 📊 Resumen de URLs

Después de completar todos los pasos, tendrás:

| Proyecto | URL |
|----------|-----|
| Shell | https://integradora-shell.vercel.app |
| Authenticator | https://integradora-auth-mfe.vercel.app |
| Tools | https://integradora-tools-mfe.vercel.app |
| Historically | https://integradora-historically-mfe.vercel.app |
| Assignments | https://integradora-assignments-mfe.vercel.app |
| General | https://integradora-general-mfe.vercel.app |

---

## 🎉 ¡Listo!

Tu aplicación de microfrontends ahora está desplegada en Vercel con:

- ✅ Despliegue automático en cada push
- ✅ HTTPS gratis
- ✅ CDN global
- ✅ Preview deployments
- ✅ Rollback fácil
- ✅ Analytics integrado

---

## 📞 ¿Necesitas Ayuda?

- **Documentación de Vercel**: https://vercel.com/docs
- **Soporte**: https://vercel.com/support
- **Community**: https://github.com/vercel/vercel/discussions
