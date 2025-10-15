# 🔧 Federation Config - Environments Dinámicos

## 📝 Resumen

El archivo `federation.config.js` ahora detecta automáticamente el entorno (desarrollo o producción) y usa las URLs correctas para los microfrontends.

---

## 🎯 ¿Cómo Funciona?

### **Desarrollo (localhost)**
Cuando ejecutas:
```bash
npm start
# o
ng serve
```

**Federation usa:**
- `http://localhost:4201/remoteEntry.json` (authenticator)
- `http://localhost:4202/remoteEntry.json` (tools)
- `http://localhost:4203/remoteEntry.json` (historically)
- `http://localhost:4204/remoteEntry.json` (assignments)
- `http://localhost:4205/remoteEntry.json` (general)

---

### **Producción (Vercel)**
Cuando ejecutas:
```bash
npm run build:shell
# o
ng build shell --configuration production
```

**Federation usa:**
- `https://integradora-auth-mfe.vercel.app/remoteEntry.json`
- `https://integradora-tools-mfe.vercel.app/remoteEntry.json`
- `https://integradora-historically-mfe.vercel.app/remoteEntry.json`
- `https://integradora-assignments-mfe.vercel.app/remoteEntry.json`
- `https://integradora-general-mfe.vercel.app/remoteEntry.json`

---

## 🔍 Detección del Entorno

El archivo `federation.config.js` detecta el entorno usando:

```javascript
const isProduction = 
  process.env['NODE_ENV'] === 'production' ||           // Variable de entorno
  process.env['npm_config_production'] === 'true' ||    // npm config
  process.argv.includes('--configuration=production') || // Angular CLI
  process.argv.includes('--configuration') && 
    process.argv[process.argv.indexOf('--configuration') + 1] === 'production';
```

---

## 📦 Scripts de Build Actualizados

Los scripts en `package.json` ahora establecen `NODE_ENV=production`:

```json
{
  "scripts": {
    "build:shell": "NODE_ENV=production ng build shell --configuration production",
    "build:authenticator": "NODE_ENV=production ng build authenticator --configuration production",
    "build:tools": "NODE_ENV=production ng build tools --configuration production",
    "build:historically": "NODE_ENV=production ng build historically --configuration production",
    "build:assignments": "NODE_ENV=production ng build assignments --configuration production",
    "build:general": "NODE_ENV=production ng build general --configuration production"
  }
}
```

---

## 🌐 Configuración de Vercel

El archivo `vercel-shell.json` también establece la variable de entorno:

```json
{
  "env": {
    "NODE_ENV": "production"
  },
  "buildCommand": "npm install --legacy-peer-deps && NODE_ENV=production npm run build shell -- --configuration production"
}
```

---

## ✅ Verificación

### **En Desarrollo:**

1. Ejecuta el shell:
   ```bash
   npm start
   ```

2. Verás en la consola:
   ```
   🚀 Federation Config - Mode: DEVELOPMENT
   📦 Remotes: {
     'mfe-authenticator': 'http://localhost:4201/remoteEntry.json',
     ...
   }
   ```

---

### **En Producción:**

1. Ejecuta el build:
   ```bash
   npm run build:shell
   ```

2. Verás en la consola:
   ```
   🚀 Federation Config - Mode: PRODUCTION
   📦 Remotes: {
     'mfe-authenticator': 'https://integradora-auth-mfe.vercel.app/remoteEntry.json',
     ...
   }
   ```

---

## 🔄 Cambiar URLs de Producción

Si necesitas cambiar las URLs de producción (por ejemplo, si cambias el nombre de los proyectos en Vercel):

1. Edita: `projects/shell/federation.config.js`
2. Actualiza el objeto `prodRemotes`:

```javascript
const prodRemotes = {
  'mfe-authenticator': 'https://TU-NUEVA-URL.vercel.app/remoteEntry.json',
  'mfe-tools': 'https://TU-NUEVA-URL.vercel.app/remoteEntry.json',
  // ... etc
};
```

3. También actualiza: `projects/shell/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  mfes: {
    'mfe-authenticator': 'https://TU-NUEVA-URL.vercel.app/remoteEntry.json',
    // ... etc
  }
};
```

---

## 🐛 Troubleshooting

### **Problema: Sigue usando localhost en producción**

**Solución:**
1. Verifica que el build se ejecute con `--configuration production`
2. Verifica que `NODE_ENV=production` esté establecido
3. Revisa los logs del build en Vercel

---

### **Problema: No encuentra los MFEs en desarrollo**

**Solución:**
1. Asegúrate de que los MFEs estén corriendo en los puertos correctos:
   ```bash
   # Terminal 1
   ng serve authenticator --port 4201
   
   # Terminal 2
   ng serve tools --port 4202
   
   # Terminal 3
   ng serve historically --port 4203
   
   # Terminal 4
   ng serve assignments --port 4204
   
   # Terminal 5
   ng serve general --port 4205
   
   # Terminal 6
   ng serve shell --port 4200
   ```

---

### **Problema: Error de CORS en producción**

**Solución:**
1. Verifica que los archivos `vercel-*.json` tengan los headers CORS
2. Asegúrate de que todos los MFEs estén desplegados en Vercel
3. Verifica que las URLs sean correctas (HTTPS, no HTTP)

---

## 💡 Ventajas de esta Configuración

✅ **Automático**: No necesitas cambiar código manualmente
✅ **Seguro**: Usa localhost en desarrollo, URLs reales en producción
✅ **Fácil de mantener**: Un solo lugar para actualizar URLs
✅ **Logs claros**: Ves qué modo está usando en la consola
✅ **Compatible con CI/CD**: Funciona en Vercel, Netlify, etc.

---

## 📚 Archivos Relacionados

- `projects/shell/federation.config.js` - Configuración principal
- `projects/shell/src/environments/environment.ts` - Desarrollo
- `projects/shell/src/environments/environment.prod.ts` - Producción
- `package.json` - Scripts de build
- `vercel-shell.json` - Config de Vercel

---

## 🎉 ¡Listo!

Ahora tu aplicación usa automáticamente las URLs correctas según el entorno. No necesitas cambiar nada manualmente.
