# 🚀 Guía de Despliegue en Netlify - Monorepo

## 📋 Resumen
Este proyecto es un **monorepo con Micro Frontends** usando Angular Module Federation.
Cada MFE se despliega en un sitio separado de Netlify, pero todos desde el mismo repositorio.

---

## 🏗️ Arquitectura

```
GitHub Repo (monorepo)
    │
    └─ Push to main
         │
         ├─ Netlify Site 1: Shell (Host)
         ├─ Netlify Site 2: Authenticator MFE
         ├─ Netlify Site 3: Tools MFE
         ├─ Netlify Site 4: Historically MFE
         ├─ Netlify Site 5: Assignments MFE
         └─ Netlify Site 6: General MFE
```

---

## 🎯 Paso 1: Crear 6 Sitios en Netlify

### **1.1 Conectar el repositorio**

1. Ve a [Netlify Dashboard](https://app.netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio de GitHub
4. **NO configures nada aún**, solo conecta el repo

### **1.2 Crear los 6 sitios**

Repite el proceso 6 veces para crear:

| Sitio | Nombre sugerido | Config File |
|-------|----------------|-------------|
| 1 | `integradora-shell` | `netlify-shell.toml` |
| 2 | `integradora-auth-mfe` | `netlify-authenticator.toml` |
| 3 | `integradora-tools-mfe` | `netlify-tools.toml` |
| 4 | `integradora-historically-mfe` | `netlify-historically.toml` |
| 5 | `integradora-assignments-mfe` | `netlify-assignments.toml` |
| 6 | `integradora-general-mfe` | `netlify-general.toml` |

---

## ⚙️ Paso 2: Configurar cada sitio

Para **cada sitio** en Netlify:

### **Configuración de Build:**

1. Ve a **Site settings** → **Build & deploy** → **Build settings**
2. Configura:

```
Base directory: (dejar vacío)
Build command: (dejar vacío, se usa del .toml)
Publish directory: (dejar vacío, se usa del .toml)
```

3. En **Build settings** → **Configure**:
   - **Config file path**: Especifica el archivo `.toml` correspondiente

#### **Ejemplo para cada sitio:**

**Shell:**
```
Config file path: netlify-shell.toml
```

**Authenticator:**
```
Config file path: netlify-authenticator.toml
```

**Tools:**
```
Config file path: netlify-tools.toml
```

**Historically:**
```
Config file path: netlify-historically.toml
```

**Assignments:**
```
Config file path: netlify-assignments.toml
```

**General:**
```
Config file path: netlify-general.toml
```

---

## 🌐 Paso 3: Obtener las URLs de Netlify

Después del primer despliegue, obtendrás URLs como:

```
Shell:          https://integradora-shell.netlify.app
Authenticator:  https://integradora-auth-mfe.netlify.app
Tools:          https://integradora-tools-mfe.netlify.app
Historically:   https://integradora-historically-mfe.netlify.app
Assignments:    https://integradora-assignments-mfe.netlify.app
General:        https://integradora-general-mfe.netlify.app
```

**Opcional:** Puedes configurar dominios personalizados en cada sitio.

---

## 📝 Paso 4: Actualizar URLs en el código

### **4.1 Actualizar `environment.prod.ts` del Shell**

Edita: `/projects/shell/src/environments/environment.prod.ts`

```typescript
export const environment = {
	production: true,
	mfes: {
		'mfe-authenticator': 'https://integradora-auth-mfe.netlify.app/remoteEntry.json',
		'mfe-tools': 'https://integradora-tools-mfe.netlify.app/remoteEntry.json',
		'mfe-historically': 'https://integradora-historically-mfe.netlify.app/remoteEntry.json',
		'mfe-assignments': 'https://integradora-assignments-mfe.netlify.app/remoteEntry.json',
		'mfe-general': 'https://integradora-general-mfe.netlify.app/remoteEntry.json',
	}
};
```

### **4.2 Actualizar URLs de APIs en cada proyecto**

Ya tienes configurados los `environment.prod.ts` en cada proyecto con las URLs de AWS.
Asegúrate de que apunten a tus backends correctos.

---

## 🔄 Paso 5: Workflow de Despliegue

### **Flujo automático:**

```bash
# 1. Haces cambios en cualquier proyecto
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main

# 2. Netlify detecta el push
# 3. Los 6 sitios se despliegan automáticamente en paralelo
# 4. Cada sitio construye solo su proyecto
```

### **Resultado:**
- ✅ Un push despliega todos los proyectos
- ✅ Cada sitio se construye independientemente
- ✅ Si uno falla, los demás continúan
- ✅ Despliegue en ~3-5 minutos

---

## 🎛️ Paso 6: Configuración Avanzada (Opcional)

### **6.1 Deploy Previews**

Netlify creará previews automáticos para cada Pull Request.
Cada sitio tendrá su propio preview URL.

### **6.2 Branch Deploys**

Puedes configurar despliegues automáticos para otras ramas:
- `develop` → URLs de staging
- `main` → URLs de producción

### **6.3 Environment Variables**

Si necesitas variables de entorno en build time:

1. Ve a **Site settings** → **Environment variables**
2. Agrega variables como:
   ```
   NODE_ENV=production
   API_URL=https://tu-api.com
   ```

---

## 🐛 Troubleshooting

### **Error: "Build failed"**

1. Verifica que el `netlify-*.toml` esté en la raíz del repo
2. Verifica que el comando de build sea correcto
3. Revisa los logs en Netlify Dashboard

### **Error: "remoteEntry.json not found"**

1. Verifica que el `publish` directory sea correcto en el `.toml`
2. Asegúrate de que el build genere el archivo `remoteEntry.json`
3. Revisa la estructura de carpetas en `dist/`

### **Error: CORS**

Los headers CORS ya están configurados en los archivos `.toml` de los MFEs.
Si aún tienes problemas, verifica en **Site settings** → **Headers**.

---

## 📊 Monitoreo

### **Ver estado de despliegues:**

1. Dashboard de Netlify muestra el estado de cada sitio
2. Puedes ver logs de build en tiempo real
3. Notificaciones por email/Slack cuando falla un deploy

### **Rollback:**

Si algo sale mal:
1. Ve al sitio en Netlify
2. **Deploys** → Selecciona un deploy anterior
3. Click en **"Publish deploy"**

---

## 💰 Costos

**Plan Free de Netlify incluye:**
- ✅ 100 GB bandwidth/mes
- ✅ 300 build minutes/mes
- ✅ Despliegues ilimitados
- ✅ HTTPS automático
- ✅ Deploy previews

**Para 6 sitios:**
- Cada build toma ~2-3 minutos
- Un push = 6 builds = ~15-18 minutos de build time
- Con 300 minutos/mes = ~16-20 deploys completos/mes

**Si necesitas más:** Plan Pro ($19/mes) incluye 1000 build minutes.

---

## ✅ Checklist Final

- [ ] Crear 6 sitios en Netlify
- [ ] Configurar cada sitio con su archivo `.toml`
- [ ] Hacer primer deploy y obtener URLs
- [ ] Actualizar `environment.prod.ts` del shell con URLs reales
- [ ] Hacer commit y push
- [ ] Verificar que todos los sitios se desplieguen correctamente
- [ ] Probar la aplicación en producción
- [ ] Configurar dominios personalizados (opcional)

---

## 🚀 ¡Listo!

Ahora cada vez que hagas push a `main`, todos tus MFEs se desplegarán automáticamente en Netlify.

**URLs de ejemplo:**
- Shell: https://integradora-shell.netlify.app
- Auth: https://integradora-auth-mfe.netlify.app
- Tools: https://integradora-tools-mfe.netlify.app
