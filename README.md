# Veterinaria React

Aplicación web desarrollada con React para gestionar mascotas, citas y servicios en una clínica veterinaria. Ofrece una experiencia intuitiva, visualmente cálida y funcional para usuarios que desean adoptar, agendar citas o contactar al equipo veterinario.


## Instalación

1. Clona el repositorio  
2. Ejecuta `npm install`  
3. Inicia con `npm start`

## Estructura

veterinaria-app/
├── public/             # Archivos públicos accesibles por el navegador
│   ├── index.html      # HTML principal
│   ├── logo.png        # Logo de la veterinaria
│   └── veterinaria.png # Imagen decorativa o institucional

├── src/                # Código fuente de la aplicación
│   ├── components/    # Navbar y componentes reutilizables
│   ├── pages/          # Vistas: Home, Servicios, Adopciones, Contacto, Agendar Cita
│   ├── styles/         # Archivos CSS por sección

│   ├── App.jsx         # Configuración de rutas
│   ├── index.css       # Estilos base
│   └── index.js        # Punto de entrada

├── .gitignore          # Archivos ignorados por Git
├── LICENSE             # Licencia del proyecto
├── package-lock.json   # Registro exacto de dependencias
├── package.json        # Configuración del proyecto
└── README.md           # Documentación del proyecto


## Tecnologías Utilizadas
- React.js con Create React App
- CSS
- React Router
- Fetch API
- The Dog API & The Cat API

## Funcionalidades

- Navegación entre páginas con React Router
- Consumo de datos locales y APIs públicas usando Fetch
- Formularios controlados para agendar citas y contacto
- Diseño responsive adaptable a móviles y escritorio
- Galería dinámica con imágenes de mascotas usando The Cat API y The Dog API


## Demo
Puedes ver la aplicación funcionando en:
https://veterinariau.netlify.app/
