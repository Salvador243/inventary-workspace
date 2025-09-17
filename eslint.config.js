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

      // Reglas adicionales de TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'varsIgnorePattern': '^_'
        }
      ],

      // Reglas generales de código
      'no-console': [
        'warn',
        {
          'allow': [
            'warn',
            'error'
          ]
        }
      ],
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
      'comma-dangle': [
        'error',
        'never'
      ],
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