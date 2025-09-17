import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  // Ignorar archivos
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'out-tsc/**',
      '.angular/**',
      'coverage/**',
      '**/remoteEntry.js',
      '**/remoteEntry.js.map',
      '**/*.d.ts',
      '**/*.spec.ts',
      '**/*.test.ts',
      '**/karma.conf.js',
      '**/protractor.conf.js',
      '*.config.js',
      '!eslint.config.js'
    ]
  },

  // Configuración base para archivos TypeScript
  {
    files: ['projects/**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': typescript
    },
    rules: {
      // Reglas básicas recomendadas
      ...js.configs.recommended.rules,

      // ✅ INDENTACIÓN CON 2 ESPACIOS - Tu requisito principal
      'indent': [
        'error',
        2,
        {
          'SwitchCase': 1,
          'VariableDeclarator': 1,
          'outerIIFEBody': 1,
          'FunctionDeclaration': {
            'parameters': 1,
            'body': 1
          },
          'FunctionExpression': {
            'parameters': 1,
            'body': 1
          },
          'CallExpression': {
            'arguments': 1
          },
          'ArrayExpression': 1,
          'ObjectExpression': 1,
          'ImportDeclaration': 1,
          'flatTernaryExpressions': false,
          'ignoreComments': false
        }
      ],

      // ✅ PROHIBIR EL USO DE 'ANY' - Tu requisito principal
      '@typescript-eslint/no-explicit-any': 'error',

      // ✅ PERMITIR VARIABLES NO UTILIZADAS - Para variables que empiecen con _
      'no-unused-vars': 'off', // Desactivar la regla base
      '@typescript-eslint/no-unused-vars': [
        'warn', // Cambiar a 'warn' en lugar de 'error' para ser menos estricto
        {
          'argsIgnorePattern': '^_', // Ignorar argumentos que empiecen con _
          'varsIgnorePattern': '^_', // Ignorar variables que empiecen con _
          'caughtErrorsIgnorePattern': '^_', // Ignorar errores capturados que empiecen con _
          'destructuredArrayIgnorePattern': '^_', // Ignorar elementos de array destructurado que empiecen con _
          'ignoreRestSiblings': true // Ignorar propiedades rest siblings
        }
      ],
      'no-console': 'off',

      // Reglas generales de código
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'quotes': [
        'error',
        'single',
        {
          'allowTemplateLiterals': true
        }
      ],
      'semi': [
        'error',
        'always'
      ],
      'eol-last': 'error',
      'object-curly-spacing': [
        'error',
        'always'
      ],
      'array-bracket-spacing': [
        'error',
        'never'
      ]
    }
  }
];