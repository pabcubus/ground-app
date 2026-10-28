# Ground App

Aplicación móvil multiplataforma (iOS, Android y web) para consultar y reservar canchas deportivas. Está construida con [Expo](https://expo.dev) y React Native, y usa Expo Router para la navegación basada en archivos.

> **Estado:** proyecto en etapa temprana. La autenticación, el registro y la reserva de canchas son simulados (no hay backend) y los datos de las canchas son de ejemplo.

## Funcionalidades

- **Inicio de sesión** (`/`): formulario de correo y contraseña. Por ahora redirige a la app sin validar credenciales.
- **Registro** (`/register`): formulario con validación básica (campos obligatorios y confirmación de contraseña).
- **Canchas** (`/canchas`): listado de canchas con nombre, dirección y precio por hora.
- **Detalle de cancha** (`/canchas/[id]`): información de la cancha seleccionada y botón de reserva (marcador de posición).
- **Perfil** (`/perfil`): pantalla de ejemplo.
- Navegación por pestañas (Canchas y Perfil) una vez dentro de la aplicación.

## Tecnologías

| Tecnología | Versión |
| --- | --- |
| Expo (SDK) | ~58 |
| React Native | 0.88 |
| React | 19.3 |
| Expo Router | ~58 |
| TypeScript (modo `strict`) | ~6.0 |

## Requisitos previos

- [Node.js](https://nodejs.org) y npm.
- Para probar en dispositivo: la app Expo Go o una *development build*, o un emulador de Android / simulador de iOS.

## Instalación y ejecución

```bash
npm install
npx expo start
```

Scripts disponibles:

| Comando | Descripción |
| --- | --- |
| `npm start` | Inicia el servidor de desarrollo de Expo |
| `npm run android` | Inicia y abre en Android |
| `npm run ios` | Inicia y abre en iOS |
| `npm run web` | Inicia y abre en el navegador |
| `npm run lint` | Ejecuta ESLint (`expo lint`) |

Verificación de tipos:

```bash
npx tsc --noEmit
```

## Estructura del proyecto

```
src/
├── app/                      # Rutas (Expo Router)
│   ├── index.tsx             # Inicio de sesión
│   ├── register.tsx          # Registro
│   ├── about.tsx             # Pantalla de ejemplo
│   └── (auth)/               # Grupo de rutas con pestañas
│       ├── _layout.tsx       # Navegación por pestañas
│       ├── perfil.tsx
│       └── canchas/          # Stack anidado dentro de la pestaña Canchas
│           ├── _layout.tsx
│           ├── index.tsx     # Listado
│           └── [id].tsx      # Detalle
├── components/
│   └── shared/               # Componentes reutilizables
│       ├── Button/           # Botón con variantes: default, danger y ghost
│       ├── Input/            # Campo de texto con etiqueta
│       └── CanchaCard/       # Tarjeta de cancha
└── data/
    └── canchas.ts            # Datos de ejemplo
```

## Convenciones

- Las rutas viven en `src/app/`; los componentes, hooks y datos van fuera de ese directorio.
- Los imports desde `src/` usan el alias `@/` (por ejemplo, `@/components/shared/Button/Button`), configurado en `tsconfig.json`.
- Los nombres del dominio están en español (por ejemplo, `canchas` = canchas deportivas).
- No existen las carpetas `ios/` ni `android/`: la configuración nativa se genera a partir de `app.json` y los *config plugins*.

## Componentes compartidos

### `Button`

```tsx
<Button text="Entrar" handleLogin={onPress} />
<Button text="Eliminar" handleLogin={onDelete} variant="danger" />
<Button text="Cancelar" handleLogin={onCancel} variant="ghost" />
```

### `CanchaCard`

```tsx
<CanchaCard cancha={cancha} onPress={() => router.push(`/canchas/${cancha.id}`)} />
```

## Próximos pasos

- Autenticación real y manejo de sesión.
- Conectar las canchas a una API en lugar de los datos de ejemplo (`src/data/canchas.ts`).
- Flujo de reserva completo.

## Licencia

Consulta el archivo [LICENSE](./LICENSE).
