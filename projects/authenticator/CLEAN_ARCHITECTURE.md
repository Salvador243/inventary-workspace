# Clean Architecture - Proyecto Authenticator

Este proyecto implementa Clean Architecture para el módulo de autenticación, siguiendo los principios de separación de responsabilidades y inversión de dependencias.

## Estructura de Carpetas

```
src/app/
├── domain/                     # Capa de Dominio (Entidades y Reglas de Negocio)
│   ├── entities/              # Entidades del dominio
│   │   ├── user.entity.ts
│   │   └── auth-token.entity.ts
│   ├── repositories/          # Interfaces de repositorios
│   │   ├── user.repository.ts
│   │   └── auth.repository.ts
│   └── services/              # Interfaces de servicios del dominio
│       └── password.service.ts
│
├── application/               # Capa de Aplicación (Casos de Uso)
│   └── use-cases/            # Casos de uso de la aplicación
│       ├── login.use-case.ts
│       ├── register.use-case.ts
│       ├── logout.use-case.ts
│       └── refresh-token.use-case.ts
│
├── infrastructure/           # Capa de Infraestructura (Implementaciones)
│   ├── repositories/        # Implementaciones de repositorios
│   │   ├── http-user.repository.ts
│   │   └── local-storage-auth.repository.ts
│   ├── services/           # Implementaciones de servicios
│   │   └── bcrypt-password.service.ts
│   └── di/                 # Configuración de inyección de dependencias
│       └── providers.ts
│
└── presentation/            # Capa de Presentación (UI)
    └── components/         # Componentes de Angular
        ├── login/
        │   └── login.component.ts
        └── register/
            └── register.component.ts
```

## Capas de Clean Architecture

### 1. Capa de Dominio (`domain/`)
- **Entidades**: Modelos de datos puros sin dependencias externas
- **Repositorios**: Interfaces que definen contratos para acceso a datos
- **Servicios**: Interfaces para servicios del dominio (ej: validación de contraseñas)

### 2. Capa de Aplicación (`application/`)
- **Casos de Uso**: Lógica de negocio específica de la aplicación
- Orquesta las entidades y repositorios para cumplir requisitos específicos
- No depende de frameworks externos

### 3. Capa de Infraestructura (`infrastructure/`)
- **Implementaciones**: Código específico de tecnología (HTTP, LocalStorage, etc.)
- **Repositorios**: Implementaciones concretas que acceden a APIs o almacenamiento
- **Servicios**: Implementaciones de servicios usando librerías específicas
- **DI**: Configuración de inyección de dependencias

### 4. Capa de Presentación (`presentation/`)
- **Componentes**: Interfaz de usuario usando Angular
- **Formularios**: Manejo de entrada de datos del usuario
- **Navegación**: Routing y navegación entre vistas

## Principios Implementados

### Inversión de Dependencias
- Las capas internas no dependen de las externas
- Se usan interfaces para definir contratos
- La inyección de dependencias resuelve las implementaciones

### Separación de Responsabilidades
- Cada capa tiene una responsabilidad específica
- El dominio contiene la lógica de negocio pura
- La infraestructura maneja detalles técnicos

### Independencia de Frameworks
- El dominio y aplicación no dependen de Angular
- Se puede cambiar la UI o la infraestructura sin afectar la lógica de negocio

## Casos de Uso Implementados

1. **Login**: Autenticación de usuarios con credenciales
2. **Register**: Registro de nuevos usuarios
3. **Logout**: Cierre de sesión y limpieza de tokens
4. **Refresh Token**: Renovación automática de tokens

## Configuración de Dependencias

El archivo `infrastructure/di/providers.ts` configura la inyección de dependencias:

```typescript
export const infrastructureProviders: Provider[] = [
  { provide: UserRepository, useClass: HttpUserRepository },
  { provide: AuthRepository, useClass: LocalStorageAuthRepository },
  { provide: PasswordService, useClass: BcryptPasswordService }
];
```

## Beneficios de esta Arquitectura

1. **Testabilidad**: Fácil creación de mocks para testing
2. **Mantenibilidad**: Código organizado y fácil de modificar
3. **Escalabilidad**: Fácil agregar nuevas funcionalidades
4. **Flexibilidad**: Cambiar implementaciones sin afectar otras capas
5. **Reutilización**: Los casos de uso pueden reutilizarse en diferentes interfaces

## Próximos Pasos

Para extender esta arquitectura:

1. Agregar más entidades del dominio
2. Implementar nuevos casos de uso
3. Crear diferentes implementaciones de repositorios (ej: Firebase, GraphQL)
4. Agregar middleware para logging, caching, etc.
5. Implementar guards y interceptors en la capa de presentación