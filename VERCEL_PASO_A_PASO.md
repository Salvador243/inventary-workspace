# 🎯 Vercel - Paso a Paso VISUAL

## 📋 Antes de Empezar

### ✅ Checklist:
- [ ] Tengo cuenta en Vercel (https://vercel.com/signup)
- [ ] Mi código está en GitHub
- [ ] Los archivos `vercel-*.json` están en mi repo
- [ ] Node.js 20+ instalado

---

## 🚀 PASO 1: Subir Configuración a GitHub

```bash
cd /home/dev/github/inventary-workspace
git add .
git commit -m "feat: add vercel deployment config"
git push origin main
```

**✅ Listo!** Archivos subidos.

---

## 🌐 PASO 2: Crear Proyecto 1 - SHELL (5 min)

### 2.1. Ir a Vercel
🔗 https://vercel.com/dashboard

### 2.2. Crear Proyecto
1. Click en botón **"Add New..."** (arriba a la derecha)
2. Selecciona **"Project"**

### 2.3. Importar Repositorio
1. Click en **"Import Git Repository"**
2. Busca: `Salvador243/inventary-workspace`
3. Click en **"Import"**

### 2.4. Configurar Proyecto

**📝 Copia exactamente:**

```
Project Name:
integradora-shell

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build shell -- --configuration production

Output Directory:
dist/shell/browser

Install Command:
npm install --legacy-peer-deps
```

### 2.5. Deploy
1. Click en **"Deploy"**
2. Espera 3-5 minutos ⏳
3. ✅ **Guarda la URL:** `https://integradora-shell.vercel.app`

---

## 🔐 PASO 3: Crear Proyecto 2 - AUTHENTICATOR (5 min)

### 3.1. Nuevo Proyecto
1. Ve a https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**

### 3.2. Mismo Repo
1. Selecciona **el mismo repositorio**: `Salvador243/inventary-workspace`
2. Click **"Import"**

### 3.3. Configurar

**📝 Copia exactamente:**

```
Project Name:
integradora-auth-mfe

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build authenticator -- --configuration production

Output Directory:
dist/authenticator/browser

Install Command:
npm install --legacy-peer-deps
```

### 3.4. Deploy
1. Click **"Deploy"**
2. Espera 3-5 minutos ⏳
3. ✅ **Guarda la URL:** `https://integradora-auth-mfe.vercel.app`

---

## 🛠️ PASO 4: Crear Proyecto 3 - TOOLS (5 min)

### 4.1. Nuevo Proyecto
1. Ve a https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Mismo repo: `Salvador243/inventary-workspace`

### 4.2. Configurar

**📝 Copia exactamente:**

```
Project Name:
integradora-tools-mfe

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build tools -- --configuration production

Output Directory:
dist/tools/browser

Install Command:
npm install --legacy-peer-deps
```

### 4.3. Deploy
1. Click **"Deploy"**
2. ✅ **URL:** `https://integradora-tools-mfe.vercel.app`

---

## 📊 PASO 5: Crear Proyecto 4 - HISTORICALLY (5 min)

### 5.1. Nuevo Proyecto
1. Dashboard → **"Add New..."** → **"Project"**
2. Mismo repo

### 5.2. Configurar

**📝 Copia exactamente:**

```
Project Name:
integradora-historically-mfe

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build historically -- --configuration production

Output Directory:
dist/historically/browser

Install Command:
npm install --legacy-peer-deps
```

### 5.3. Deploy
1. Click **"Deploy"**
2. ✅ **URL:** `https://integradora-historically-mfe.vercel.app`

---

## 📝 PASO 6: Crear Proyecto 5 - ASSIGNMENTS (5 min)

### 6.1. Nuevo Proyecto
1. Dashboard → **"Add New..."** → **"Project"**
2. Mismo repo

### 6.2. Configurar

**📝 Copia exactamente:**

```
Project Name:
integradora-assignments-mfe

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build assignments -- --configuration production

Output Directory:
dist/assignments/browser

Install Command:
npm install --legacy-peer-deps
```

### 6.3. Deploy
1. Click **"Deploy"**
2. ✅ **URL:** `https://integradora-assignments-mfe.vercel.app`

---

## 🌍 PASO 7: Crear Proyecto 6 - GENERAL (5 min)

### 7.1. Nuevo Proyecto
1. Dashboard → **"Add New..."** → **"Project"**
2. Mismo repo

### 7.2. Configurar

**📝 Copia exactamente:**

```
Project Name:
integradora-general-mfe

Framework Preset:
Other

Root Directory:
.

Build Command:
npm install --legacy-peer-deps && npm run build general -- --configuration production

Output Directory:
dist/general/browser

Install Command:
npm install --legacy-peer-deps
```

### 7.3. Deploy
1. Click **"Deploy"**
2. ✅ **URL:** `https://integradora-general-mfe.vercel.app`

---

## ✅ PASO 8: Verificar que Todo Esté Desplegado

Abre cada URL y verifica que cargue:

- [ ] ✅ https://integradora-shell.vercel.app
- [ ] ✅ https://integradora-auth-mfe.vercel.app
- [ ] ✅ https://integradora-tools-mfe.vercel.app
- [ ] ✅ https://integradora-historically-mfe.vercel.app
- [ ] ✅ https://integradora-assignments-mfe.vercel.app
- [ ] ✅ https://integradora-general-mfe.vercel.app

**Si alguna no carga:**
1. Ve al proyecto en Vercel
2. Click en **"Deployments"**
3. Revisa los logs del último deployment
4. Busca errores en rojo

---

## 📝 PASO 9: Actualizar URLs en el Código

### 9.1. Editar archivo

**Ruta:** `/projects/shell/src/environments/environment.prod.ts`

### 9.2. Contenido:

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

### 9.3. Guardar y Push

```bash
git add .
git commit -m "chore: update production URLs"
git push origin main
```

---

## 🎉 PASO 10: ¡LISTO!

Espera 3-5 minutos y ve a:

👉 **https://integradora-shell.vercel.app**

Tu aplicación está desplegada! 🎊

---

## 🐛 ¿Algo Salió Mal?

### Problema 1: "Build failed"

**Solución:**
1. Ve al proyecto en Vercel
2. **Settings** → **General**
3. Verifica que **Framework Preset** sea **"Other"**
4. Ve a **Deployments** → Click en el último
5. Click en **"..."** → **"Redeploy"**

---

### Problema 2: Página en blanco

**Solución:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña **"Console"**
3. Busca errores en rojo
4. Si dice "remoteEntry.json not found":
   - Verifica que la URL del MFE sea correcta
   - Abre directamente: `https://[tu-mfe].vercel.app/remoteEntry.json`

---

### Problema 3: Error de CORS

**Solución:**
1. Los archivos `vercel-*.json` ya tienen los headers CORS
2. Si persiste el error:
   - Ve al proyecto en Vercel
   - **Settings** → **Functions**
   - Verifica la configuración

---

## 💡 Tips Útiles

### **Ver logs en tiempo real:**
1. Ve al proyecto en Vercel
2. Click en **"Deployments"**
3. Click en el deployment que está "Building"
4. Verás los logs en tiempo real

### **Cambiar configuración después:**
1. Ve al proyecto
2. **Settings** → **General**
3. Edita **Build & Output Settings**
4. Guarda
5. **Deployments** → **"Redeploy"**

### **Ver qué archivo se está usando:**
1. Ve al proyecto
2. **Settings** → **General**
3. Busca **"Build & Output Settings"**
4. Ahí verás todos los comandos configurados

---

## 📞 ¿Necesitas Ayuda?

- **Guía completa:** `VERCEL_DEPLOYMENT_GUIDE.md`
- **Quick start:** `QUICK_START_VERCEL.md`
- **Docs de Vercel:** https://vercel.com/docs

---

## 🎓 Resumen de lo que Hiciste

1. ✅ Subiste archivos de configuración a GitHub
2. ✅ Creaste 6 proyectos en Vercel (1 shell + 5 MFEs)
3. ✅ Configuraste cada proyecto con su build command
4. ✅ Verificaste que todos estén desplegados
5. ✅ Actualizaste las URLs en el código
6. ✅ Hiciste push y Vercel redespleғó automáticamente

**¡Felicidades! 🎉** Tu arquitectura de microfrontends está en producción.
