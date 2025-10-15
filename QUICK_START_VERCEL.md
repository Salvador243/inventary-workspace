# 🚀 Quick Start - Vercel (5 pasos)

## ✅ Checklist Rápido

### **Paso 1: Push de archivos de configuración** (30 segundos)
```bash
git add .
git commit -m "chore: add vercel configuration"
git push origin main
```

---

### **Paso 2: Crear 6 proyectos en Vercel** (5 minutos cada uno)

Para CADA proyecto, repite:

1. Ve a https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Selecciona tu repo: `Salvador243/inventary-workspace`
4. Configuración:

#### **Proyecto 1: Shell**
- **Project Name**: `integradora-shell`
- **Framework Preset**: `Other`
- **Root Directory**: `.` (punto, raíz)
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build shell -- --configuration production
  ```
- **Output Directory**: `dist/shell/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-shell.vercel.app`

---

#### **Proyecto 2: Authenticator**
- **Project Name**: `integradora-auth-mfe`
- **Framework Preset**: `Other`
- **Root Directory**: `.`
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build authenticator -- --configuration production
  ```
- **Output Directory**: `dist/authenticator/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-auth-mfe.vercel.app`

---

#### **Proyecto 3: Tools**
- **Project Name**: `integradora-tools-mfe`
- **Framework Preset**: `Other`
- **Root Directory**: `.`
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build tools -- --configuration production
  ```
- **Output Directory**: `dist/tools/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-tools-mfe.vercel.app`

---

#### **Proyecto 4: Historically**
- **Project Name**: `integradora-historically-mfe`
- **Framework Preset**: `Other`
- **Root Directory**: `.`
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build historically -- --configuration production
  ```
- **Output Directory**: `dist/historically/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-historically-mfe.vercel.app`

---

#### **Proyecto 5: Assignments**
- **Project Name**: `integradora-assignments-mfe`
- **Framework Preset**: `Other`
- **Root Directory**: `.`
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build assignments -- --configuration production
  ```
- **Output Directory**: `dist/assignments/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-assignments-mfe.vercel.app`

---

#### **Proyecto 6: General**
- **Project Name**: `integradora-general-mfe`
- **Framework Preset**: `Other`
- **Root Directory**: `.`
- **Build Command**: 
  ```
  npm install --legacy-peer-deps && npm run build general -- --configuration production
  ```
- **Output Directory**: `dist/general/browser`
- **Install Command**: `npm install --legacy-peer-deps`

Click **"Deploy"** → Guarda URL: `https://integradora-general-mfe.vercel.app`

---

### **Paso 3: Verificar que los 6 sitios estén desplegados** (2 minutos)

Abre cada URL y verifica que cargue:
- ✅ https://integradora-shell.vercel.app
- ✅ https://integradora-auth-mfe.vercel.app
- ✅ https://integradora-tools-mfe.vercel.app
- ✅ https://integradora-historically-mfe.vercel.app
- ✅ https://integradora-assignments-mfe.vercel.app
- ✅ https://integradora-general-mfe.vercel.app

---

### **Paso 4: Actualizar environment.prod.ts** (1 minuto)

Edita: `/projects/shell/src/environments/environment.prod.ts`

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

---

### **Paso 5: Push final** (30 segundos)

```bash
git add .
git commit -m "chore: update production URLs for Vercel"
git push origin main
```

Vercel automáticamente redesplegarĂ¡ el shell. Espera 3-5 minutos.

---

## ✅ ¡Listo!

Tu aplicación está desplegada. Ve a:
👉 https://integradora-shell.vercel.app

---

## 🐛 Problemas Comunes

### ❌ "Build failed"
**Solución:** 
- Verifica que Framework Preset sea **"Other"** (no Angular)
- Revisa los logs en Vercel Dashboard

### ❌ "remoteEntry.json not found"
**Solución:**
- Verifica que la URL del MFE sea correcta
- Abre: `https://[tu-mfe].vercel.app/remoteEntry.json`

### ❌ Página en blanco
**Solución:**
- Abre la consola (F12)
- Verifica errores de CORS
- Asegúrate de que los headers estén configurados

---

## 💡 Tips

### **Cambiar configuración después de crear el proyecto:**

1. Ve al proyecto en Vercel
2. **Settings** → **General**
3. Edita **Build & Output Settings**:
   - **Framework Preset**: Other
   - **Build Command**: [comando correcto]
   - **Output Directory**: [directorio correcto]
4. **Settings** → **Environment Variables**
5. Ve a **Deployments** → **Redeploy**

---

## 📚 Documentación Completa

Para más detalles, consulta: `VERCEL_DEPLOYMENT_GUIDE.md`
