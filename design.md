# Trainer Refresh App - Diseño Visual

## Visión General

Aplicación móvil de entrenamiento con estilo **refresh** (limpio, moderno y fluido) utilizando **azul** como color principal. Diseñada para que entrenadores y alumnos gestionen entrenamientos, nutrición y comunicación en tiempo real.

---

## Paleta de Colores

| Elemento | Color | Uso |
|----------|-------|-----|
| **Primario** | `#0066CC` (Azul) | Botones, acciones principales, acentos |
| **Secundario** | `#E8F2FF` (Azul claro) | Fondos de tarjetas, superficies |
| **Fondo** | `#FFFFFF` (Blanco) | Fondo principal |
| **Texto Principal** | `#1A1A1A` (Gris oscuro) | Títulos y texto principal |
| **Texto Secundario** | `#666666` (Gris medio) | Subtítulos y descripciones |
| **Éxito** | `#10B981` (Verde) | Completado, validaciones |
| **Advertencia** | `#F59E0B` (Naranja) | Alertas, cambios importantes |
| **Error** | `#EF4444` (Rojo) | Errores, eliminaciones |
| **Borde** | `#E5E7EB` (Gris claro) | Divisores y bordes |

---

## Pantallas Principales

### 1. **Home / Dashboard**
- **Contenido**: Resumen del día, próximo entrenamiento, estadísticas rápidas
- **Funcionalidad**: 
  - Tarjeta con el entrenamiento del día
  - Progreso de calorías consumidas
  - Botón flotante para iniciar entrenamiento
  - Acceso rápido a secciones principales

### 2. **Entrenamientos (Workouts)**
- **Contenido**: Lista de entrenamientos programados, historial
- **Funcionalidad**:
  - Crear nuevo entrenamiento
  - Ver detalles de cada entrenamiento
  - Registrar series y repeticiones
  - Marcar como completado
  - Historial de entrenamientos pasados

### 3. **Detalle de Entrenamiento**
- **Contenido**: Ejercicios del entrenamiento con series, repeticiones y peso
- **Funcionalidad**:
  - Agregar/editar ejercicios
  - Registrar peso levantado
  - Marcar series completadas
  - Notas personales por ejercicio

### 4. **Calendario**
- **Contenido**: Vista mensual/semanal de entrenamientos programados
- **Funcionalidad**:
  - Navegar entre meses
  - Ver entrenamientos por día
  - Crear nuevos entrenamientos desde el calendario
  - Indicadores visuales de completitud

### 5. **Seguimiento Físico (Progress)**
- **Contenido**: Gráficos de peso, medidas corporales, progreso general
- **Funcionalidad**:
  - Registrar peso diario
  - Registrar medidas (pecho, cintura, cadera, brazos, muslos)
  - Gráficos de evolución
  - Estadísticas mensuales/anuales

### 6. **Nutrición**
- **Contenido**: Contador de calorías, macronutrientes, comidas del día
- **Funcionalidad**:
  - Registrar comidas
  - Base de datos de alimentos comunes
  - Contador de calorías y macros (proteína, carbohidratos, grasas)
  - Objetivo diario de calorías
  - Historial de comidas

### 7. **Chat / Mensajes**
- **Contenido**: Conversación entre entrenador y alumno
- **Funcionalidad**:
  - Enviar y recibir mensajes
  - Historial de conversaciones
  - Notificaciones de nuevos mensajes
  - Feedback del entrenador sobre entrenamientos

### 8. **Perfil**
- **Contenido**: Información del usuario, configuración
- **Funcionalidad**:
  - Editar información personal
  - Cambiar foto de perfil
  - Configurar objetivos
  - Preferencias de la app (tema, notificaciones)

---

## Flujos Principales

### Flujo 1: Registrar un Entrenamiento
1. Usuario toca el botón flotante en Home
2. Selecciona un entrenamiento de la lista o crea uno nuevo
3. Ve la pantalla de detalles con los ejercicios
4. Registra series, repeticiones y peso para cada ejercicio
5. Marca el entrenamiento como completado
6. Recibe confirmación visual y notificación de éxito

### Flujo 2: Registrar Peso y Medidas
1. Usuario navega a "Seguimiento Físico"
2. Toca el botón "Registrar Peso"
3. Ingresa el peso actual
4. Opcionalmente registra medidas corporales
5. Los datos se guardan y se actualiza el gráfico

### Flujo 3: Registrar Comida
1. Usuario navega a "Nutrición"
2. Toca el botón "Agregar Comida"
3. Busca o selecciona alimento de la base de datos
4. Ingresa la cantidad
5. El contador de calorías se actualiza automáticamente

### Flujo 4: Enviar Mensaje al Entrenador
1. Usuario navega a "Chat"
2. Toca la conversación con su entrenador
3. Escribe el mensaje
4. Envía el mensaje
5. El entrenador recibe notificación

---

## Componentes de Interfaz

### Botones
- **Primario**: Fondo azul, texto blanco, esquinas redondeadas (8px), altura 48px
- **Secundario**: Borde azul, texto azul, fondo transparente
- **Pequeño**: Para acciones menores, altura 36px

### Tarjetas
- Fondo blanco/gris claro
- Borde sutil gris claro
- Esquinas redondeadas (12px)
- Sombra suave
- Espaciado interno 16px

### Entrada de Texto
- Borde gris claro
- Esquinas redondeadas (8px)
- Altura 44px
- Placeholder en gris medio

### Iconografía
- Estilo: Líneas limpias, peso consistente
- Tamaño: 24px (acciones), 32px (navegación)
- Color: Azul primario o gris según contexto

---

## Navegación

### Tab Bar (Inferior)
- **Home**: Ícono de casa
- **Entrenamientos**: Ícono de mancuerna
- **Calendario**: Ícono de calendario
- **Nutrición**: Ícono de plato
- **Perfil**: Ícono de usuario

---

## Principios de Diseño

1. **Limpieza**: Espacios en blanco generosos, sin aglomeración
2. **Modernidad**: Tipografía clara, colores vibrantes pero no agresivos
3. **Fluidez**: Transiciones suaves, animaciones sutiles
4. **Accesibilidad**: Contraste suficiente, botones grandes para una mano
5. **Eficiencia**: Menos clics para acciones frecuentes, acceso rápido a funciones principales

---

## Tipografía

- **Títulos Principales**: 32px, peso bold
- **Títulos Secundarios**: 24px, peso semibold
- **Subtítulos**: 16px, peso semibold
- **Texto Cuerpo**: 14px, peso regular
- **Etiquetas**: 12px, peso regular
- **Fuente**: Sistema (San Francisco en iOS, Roboto en Android)

