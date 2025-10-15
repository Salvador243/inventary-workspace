# 🔧 Federation Setup - Configuración Completa

## 📋 Problema Resuelto

**Error Original:**
```
GET http://localhost:4202/remoteEntry.json net::ERR_CONNECTION_REFUSED
```

**Causa:** El shell estaba intentando cargar MFEs desde localhost en producción (Vercel).

---

## ✅ Cambios Aplicados

### **1. `projects/shell/federation.config.js`** ✏️ MODIFICADO

**Antes:**
```javascript
remotes: {
  'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
  // ... URLs hardcodeadas de producción
}
```

**Ahora:**
```javascript
const isProduction = process.env['NODE_ENV'] === 'production';

const remotes = isProduction ? {
  // URLs de Vercel (producción)
  'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
  // ...
} : {
  // URLs de localhost (desarrollo)
  'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
  // ...
};
```

**✅ Beneficio:** Detecta automáticamente el entorno en BUILD TIME.

---

### **2. `projects/shell/src/main.ts`** ✏️ MODIFICADO

**Antes:**
```javascript
initFederation(environment.mfes)  // ❌ Sobrescribía las URLs del federation.config.js
```

**Ahora:**
```javascript
initFederation()  // ✅ Usa las URLs del federation.config.js
```

**✅ Beneficio:** Ya no hay conflicto entre BUILD TIME y RUNTIME.

---

### **3. `vercel-shell.json`** ✏️ MODIFICADO

**Antes:**
```json
{
  "buildCommand": "npm install --legacy-peer-deps && NODE_ENV=production npm run build shell -- --configuration production"
}
```

**Ahora:**
```json
{
  "buildCommand": "npm run build:shell",
  "env": {
    "NODE_ENV": "production"
  }
}
```

**✅ Beneficio:** Usa el script de package.json que ya tiene NODE_ENV configurado.

---

## 🎯 Cómo Funciona Ahora

### **Flujo en DESARROLLO (localhost):**

1. Ejecutas: `ng serve shell`
2. `NODE_ENV` NO está definido → `isProduction = false`
3. `federation.config.js` configura: `http://localhost:4201`, etc.
4. `main.ts` llama a `initFederation()` sin argumentos
5. ✅ Carga MFEs desde localhost

**Console logs:**
```
🚀 Federation Config [BUILD]: DEVELOPMENT
🚀 Shell App [RUNTIME]: DEVELOPMENT
```

---

### **Flujo en PRODUCCIÓN (Vercel):**

1. Vercel ejecuta: `npm run build:shell`
2. `NODE_ENV=production` → `isProduction = true`
3. `federation.config.js` configura: `https://integradora-auth-mfe.vercel.app`, etc.
4. `main.ts` llama a `initFederation()` sin argumentos
5. ✅ Carga MFEs desde Vercel

**Console logs:**
```
🚀 Federation Config [BUILD]: PRODUCTION
🚀 Shell App [RUNTIME]: PRODUCTION
```

---

## 🧪 Cómo Verificar

### **1. Desarrollo Local:**

```bash
ng serve shell
```

En la consola del navegador deberías ver:
```
🚀 Federation Config [BUILD]: DEVELOPMENT
🚀 Shell App [RUNTIME]: DEVELOPMENT
```

### **2. Build Local:**

```bash
npm run build:shell
```

En la consola del terminal deberías ver:
```
🚀 Federation Config [BUILD]: PRODUCTION
```

### **3. Vercel Deploy:**

Después de hacer push a GitHub, abre la app en Vercel y verifica en la consola del navegador que veas:
```
🚀 Shell App [RUNTIME]: PRODUCTION
```

Y **NO** deberías ver errores de `localhost` o `ERR_CONNECTION_REFUSED`.

---

## ✅ Checklist Final

- [x] `federation.config.js` detecta NODE_ENV
- [x] `main.ts` llama a `initFederation()` sin argumentos
- [x] `vercel-shell.json` tiene `NODE_ENV=production`
- [x] `package.json` tiene scripts con `NODE_ENV=production`
- [ ] Commit y push a GitHub
- [ ] Verificar deployment en Vercel
- [ ] Verificar en consola del navegador

---

**¡Todo listo!** 🎉
