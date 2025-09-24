# 💰 Control de Gastos - Planificador Personal

Una aplicación web moderna y elegante para la gestión personal de gastos y presupuestos, construida con **React 19**, **TypeScript** y **Tailwind CSS**. Permite a los usuarios establecer un presupuesto, registrar gastos por categorías y monitorear su situación financiera en tiempo real con visualizaciones interactivas.

## 🚀 Características Principales

✨ **Gestión de Presupuesto**
- Definición de presupuesto inicial personalizado
- Visualización en tiempo real del progreso de gastos
- Cálculo automático de presupuesto disponible

📊 **Seguimiento Visual**
- Gráfico circular de progreso con indicadores de color
- Resumen visual de presupuesto, gastado y disponible
- Interfaz responsiva y moderna

💸 **Gestión de Gastos**
- Registro de gastos con fecha personalizable
- Categorización por tipos (Ahorro, Comida, Casa, Salud, etc.)
- Edición y eliminación de gastos existentes
- Filtrado por categorías

🗂️ **Categorías Predefinidas**
- 7 categorías con iconos personalizados
- Ahorro, Comida, Casa, Gastos Varios, Ocio, Salud, Suscripciones

💾 **Persistencia de Datos**
- Almacenamiento local automático
- Conservación de datos entre sesiones

## 🛠️ Tecnologías Utilizadas

### Frontend & UI
- **React**: `^19.1.1` - Framework principal
- **TypeScript**: `~5.8.3` - Tipado estático
- **Tailwind CSS**: `^4.1.11` - Framework CSS utility-first
- **@headlessui/react**: `^2.2.7` - Componentes UI accesibles
- **@heroicons/react**: `^2.2.0` - Biblioteca de iconos

### Componentes Especializados
- **react-circular-progressbar**: `^2.2.0` - Gráfico de progreso circular
- **react-date-picker**: `^12.0.1` - Selector de fechas
- **react-calendar**: `^6.0.0` - Calendario interactivo
- **react-swipeable-list**: `^1.10.0` - Listas con gestos táctiles

### Herramientas de Desarrollo
- **Vite**: `^7.1.2` - Build tool y dev server
- **ESLint**: `^9.33.0` - Linter de código
- **@vitejs/plugin-react-swc**: `^4.0.0` - Plugin React con SWC
- **UUID**: `^11.1.0` - Generación de identificadores únicos

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/Chivan9406/Control-gastos-React.git
cd Control-gastos-React
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes React reutilizables
│   ├── AmountDisplay.tsx     # Visualización de montos
│   ├── BudgetForm.tsx        # Formulario de presupuesto
│   ├── BudgetTracker.tsx     # Seguimiento visual del presupuesto
│   ├── ErrorMessage.tsx      # Manejo de errores
│   ├── ExpenseDetail.tsx     # Detalles de gastos individuales
│   ├── ExpenseForm.tsx       # Formulario de gastos
│   ├── ExpenseList.tsx       # Lista de gastos
│   ├── ExpenseModal.tsx      # Modal para agregar/editar gastos
│   └── FilterByCategory.tsx  # Filtrado por categorías
├── context/             # Context API para estado global
│   ├── Budget.context.ts     # Definición del contexto
│   └── Budget.provider.tsx   # Proveedor del contexto
├── data/               # Datos estáticos y configuración
│   └── categories.ts         # Definición de categorías
├── helpers/            # Funciones utilitarias
│   └── index.ts             # Helpers generales
├── hooks/              # Custom Hooks
│   └── use-budget.ts        # Hook para manejo del presupuesto
├── reducers/           # Gestión de estado con useReducer
│   └── budget-reducer.ts    # Reducer principal de la aplicación
├── types/              # Definiciones de TypeScript
│   └── index.ts             # Tipos e interfaces
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css          # Estilos globales
```

## 🎯 Funcionalidades Específicas

### 1. **Configuración Inicial de Presupuesto**
```typescript
// Definir presupuesto inicial
dispatch({ type: 'add-budget', payload: { budget: 5000 } })
```

### 2. **Registro de Gastos**
```typescript
// Estructura de un gasto
type Expense = {
  id: string
  expenseName: string
  amount: number
  category: string
  date: Date
}
```

### 3. **Categorías Disponibles**
- 🏦 **Ahorro** - Para metas de ahorro
- 🍔 **Comida** - Gastos de alimentación  
- 🏠 **Casa** - Gastos del hogar
- 📝 **Gastos Varios** - Otros gastos
- 🎮 **Ocio** - Entretenimiento
- 🏥 **Salud** - Gastos médicos
- 📱 **Suscripciones** - Servicios recurrentes

## 🎨 Componentes Principales

### `BudgetTracker`
Muestra el progreso visual del presupuesto con:
- Gráfico circular de progreso
- Indicadores de color (azul normal, rojo al 100%)
- Resumen de montos (Presupuesto, Disponible, Gastado)

### `ExpenseForm`
Formulario completo para gastos con:
- Validación de campos
- Selector de fechas
- Categorización
- Modo edición/creación

### `ExpenseList` 
Lista interactiva de gastos con:
- Filtrado por categorías
- Acciones de editar/eliminar
- Gestos táctiles (swipe)

## 📊 Manejo de Estado

### Context API + useReducer
La aplicación utiliza un patrón de gestión de estado centralizado:

```typescript
// Estado principal
type BudgetState = {
  budget: number
  modal: boolean
  expenses: Expense[]
  editingId: string
  currentCategory: string
}

// Acciones disponibles
type BudgetActions = 
  | { type: 'add-budget', payload: { budget: number } }
  | { type: 'add-expense', payload: { expense: DraftExpense } }
  | { type: 'remove-expense', payload: { id: string } }
  | { type: 'update-expense', payload: { expense: Expense } }
  // ... más acciones
```

### Persistencia Local
```typescript
// Almacenamiento automático en localStorage
useEffect(() => {
  localStorage.setItem('budget', state.budget.toString())
  localStorage.setItem('expenses', JSON.stringify(state.expenses))
}, [state])
```

## 🔧 Scripts Disponibles

```json
{
  "dev": "vite",              // Servidor de desarrollo
  "build": "tsc -b && vite build", // Build de producción
  "lint": "eslint .",         // Análisis de código
  "preview": "vite preview"   // Preview del build
}
```

### Comandos de uso

```bash
# Desarrollo
npm run dev

# Build para producción  
npm run build

# Análisis de código
npm run lint

# Preview del build
npm run preview
```

## 🌟 Características Técnicas Destacadas

### ⚡ **Rendimiento Optimizado**
- Uso de **React 19** con las últimas optimizaciones
- **SWC** para transpilación ultra-rápida
- **Vite** para desarrollo y build optimizado

### 🎨 **Diseño Moderno**
- **Tailwind CSS 4.1** con utility classes
- Diseño responsive mobile-first
- Componentes accesibles con HeadlessUI

### 🔒 **Type Safety**
- **TypeScript** completo en toda la aplicación  
- Tipado estricto para props y estado
- Interfaces bien definidas

### 📱 **Experiencia de Usuario**
- Interfaz intuitiva y moderna
- Feedback visual inmediato
- Gestos táctiles en dispositivos móviles
- Persistencia automática de datos

### 🏗️ **Arquitectura Escalable**
- Separación clara de responsabilidades
- Custom hooks reutilizables
- Context API para estado global
- Componentes modulares y reutilizables

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Iván Chirino**
- GitHub: [@Chivan9406](https://github.com/Chivan9406)
- Proyecto: [Control-gastos-React](https://github.com/Chivan9406/Control-gastos-React)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!** ⭐
