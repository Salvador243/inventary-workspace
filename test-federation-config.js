#!/usr/bin/env node

/**
 * Script de prueba para verificar la configuración de Federation
 * Ejecuta: node test-federation-config.js
 */

console.log('🧪 Testing Federation Config...\n');

// Simular desarrollo
console.log('📍 Test 1: Modo DESARROLLO');
delete process.env.NODE_ENV;
delete require.cache[require.resolve('./projects/shell/federation.config.js')];
const devConfig = require('./projects/shell/federation.config.js');
console.log('✅ Config cargada en modo desarrollo\n');

// Simular producción
console.log('📍 Test 2: Modo PRODUCCIÓN');
process.env.NODE_ENV = 'production';
delete require.cache[require.resolve('./projects/shell/federation.config.js')];
const prodConfig = require('./projects/shell/federation.config.js');
console.log('✅ Config cargada en modo producción\n');

console.log('🎉 Tests completados!');
console.log('\n💡 Tip: Revisa los logs arriba para verificar que las URLs sean correctas.');
