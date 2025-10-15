# 🚀 Quick Start - Despliegue en Netlify

## 📝 Resumen Ultra Rápido

1. **Crear 6 sitios en Netlify** (uno por cada proyecto)
2. **Configurar cada sitio** con su archivo `.toml`
3. **Push a GitHub** → Netlify despliega automáticamente
4. **Actualizar URLs** en `environment.prod.ts` del shell
5. **Listo!** 🎉

---

## 🎯 Paso 1: Crear Sitios en Netlify (5 minutos)

### Opción A: Desde la UI de Netlify

1. Ve a https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Conecta tu repo de GitHub
4. **Repite 6 veces** para crear estos sitios:

```
1. integradora-shell           → netlify-shell.toml
2. integradora-auth-mfe        → netlify-authenticator.toml
3. integradora-tools-mfe       → netlify-tools.toml
4. integradora-historically-mfe → netlify-historically.toml
5. integradora-assignments-mfe → netlify-assignments.toml
6. integradora-general-mfe     → netlify-general.toml
```

### Opción B: Desde Netlify CLI (más rápido)

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Crear los 6 sitios
netlify sites:create --name integradora-shell
netlify sites:create --name integradora-auth-mfe
netlify sites:create --name integradora-tools-mfe
netlify sites:create --name integradora-historically-mfe
netlify sites:create --name integradora-assignments-mfe
netlify sites:create --name integradora-general-mfe
```

---

## ⚙️ Paso 2: Configurar cada sitio (2 minutos por sitio)

Para **cada sitio** en Netlify Dashboard:

1. Ve a **Site settings** → **Build & deploy** → **Build settings**
2. Click en **"Configure"**
3. En **"Config file path"**, especifica:

```
Shell:          netlify-shell.toml
Authenticator:  netlify-authenticator.toml
Tools:          netlify-tools.toml
Historically:   netlify-historically.toml
Assignments:    netlify-assignments.toml
General:        netlify-general.toml
```

4. Click **"Save"**

---

## 🌐 Paso 3: Obtener URLs (automático)

Después del primer deploy, tendrás URLs como:

```
https://integradora-shell.netlify.app
https://integradora-auth-mfe.netlify.app
https://integradora-tools-mfe.netlify.app
https://integradora-historically-mfe.netlify.app
https://integradora-assignments-mfe.netlify.app
https://integradora-general-mfe.netlify.app
```

---

## 📝 Paso 4: Actualizar environment.prod.ts (1 minuto)

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

---

## 🚀 Paso 5: Deploy! (automático)

```bash
git add .
git commit -m "chore: configure netlify deployment"
git push origin main
```

**Netlify automáticamente:**
- ✅ Detecta el push
- ✅ Construye los 6 proyectos en paralelo
- ✅ Despliega cada uno en su sitio
- ✅ Te notifica cuando termina

---

## ✅ Verificar que funciona

1. Ve a https://integradora-shell.netlify.app
2. Deberías ver tu aplicación funcionando
3. Los MFEs se cargan dinámicamente desde sus URLs

---

## 🔄 Workflow Diario

```bash
# 1. Haces cambios
git add .
git commit -m "feat: nueva funcionalidad"
git push

# 2. Netlify despliega automáticamente
# 3. En ~3-5 minutos está en producción
# 4. ¡Listo!
```

---

## 💡 Tips

### **Dominios Personalizados**
En cada sitio de Netlify:
- **Domain settings** → **Add custom domain**
- Ejemplo: `app.tudominio.com`, `auth.tudominio.com`, etc.

### **HTTPS**
- ✅ Automático con Netlify
- ✅ Certificados SSL gratis
- ✅ Renovación automática

### **Deploy Previews**
- ✅ Cada PR genera URLs de preview
- ✅ Prueba antes de mergear
- ✅ Comentarios automáticos en el PR

### **Rollback**
Si algo sale mal:
1. Ve al sitio en Netlify
2. **Deploys** → Selecciona deploy anterior
3. **Publish deploy**

---

## 🐛 Problemas Comunes

### "Build failed"
```bash
# Verifica que el build funcione localmente
npm run build shell -- --configuration production
npm run build authenticator -- --configuration production
# etc...
```

### "remoteEntry.json not found"
- Verifica que el proyecto sea un MFE (no el shell)
- Revisa la configuración de Module Federation

### "CORS error"
- Ya está configurado en los archivos `.toml`
- Los headers CORS están en la sección `[[headers]]`

---

## 📊 Monitoreo

**Dashboard de Netlify:**
- Estado de cada sitio
- Logs de build
- Analytics
- Notificaciones

**GitHub Actions (opcional):**
- Verifica builds antes de deploy
- Archivo: `.github/workflows/netlify-deploy.yml`

---

## 💰 Costos

**Plan Free:**
- ✅ 100 GB bandwidth/mes
- ✅ 300 build minutes/mes
- ✅ Suficiente para ~16-20 deploys completos/mes

**Plan Pro ($19/mes):**
- ✅ 1 TB bandwidth/mes
- ✅ 1000 build minutes/mes
- ✅ Suficiente para ~55-65 deploys completos/mes

---

## 🎉 ¡Eso es todo!

Tu aplicación ahora se despliega automáticamente en Netlify con cada push.

**Ventajas:**
- ✅ Despliegue automático
- ✅ HTTPS gratis
- ✅ CDN global
- ✅ Deploy previews
- ✅ Rollback fácil
- ✅ Sin configuración de servidores

**¿Preguntas?** Revisa `NETLIFY_DEPLOYMENT_GUIDE.md` para más detalles.
