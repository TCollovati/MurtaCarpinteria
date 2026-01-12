const products = [
  {
    "id": 1,
    "title": "Smartphone Xiaomi Redmi Note 13",
    "price": 99.9,
    "category": "xiaomi",
    "stock": 10,
    "img": "https://placehold.co/600x400/9b59b6/FFF?text=Smartphone+Xiaomi+Redmi+Note+13",
    "description": "El equilibrio perfecto entre rendimiento y precio."
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S24 Ultra",
    "price": 1299.99,
    "category": "samsung",
    "stock": 5,
    "img": "https://placehold.co/600x400/1abc9c/FFF?text=Samsung+Galaxy+S24+Ultra",
    "description": "La cúspide de la tecnología móvil con cámara Pro-Grade."
  },
  {
    "id": 3,
    "title": "iPhone 15 Pro Max",
    "price": 1399.0,
    "category": "apple",
    "stock": 7,
    "img": "https://placehold.co/600x400/f1c40f/FFF?text=iPhone+15+Pro+Max",
    "description": "Potencia inigualable y diseño sofisticado."
  },
  {
    "id": 4,
    "title": "Motorola Edge 50 Neo",
    "price": 349.5,
    "category": "motorola",
    "stock": 15,
    "img": "https://placehold.co/600x400/34495e/FFF?text=Motorola+Edge+50+Neo",
    "description": "Pantalla curva e inmersiva para el entretenimiento."
  },
  {
    "id": 5,
    "title": "Google Pixel 8",
    "price": 699.0,
    "category": "google",
    "stock": 8,
    "img": "https://placehold.co/600x400/e67e22/FFF?text=Google+Pixel+8",
    "description": "La mejor experiencia de Android con IA de Google."
  },
  {
    "id": 6,
    "title": "Xiaomi 14 Pro",
    "price": 899.99,
    "category": "xiaomi",
    "stock": 6,
    "img": "https://placehold.co/600x400/e74c3c/FFF?text=Xiaomi+14+Pro",
    "description": "Fotografía de alta gama impulsada por Leica."
  },
  {
    "id": 7,
    "title": "Samsung Galaxy A55",
    "price": 449.0,
    "category": "samsung",
    "stock": 12,
    "img": "https://placehold.co/600x400/2ecc71/FFF?text=Samsung+Galaxy+A55",
    "description": "Gran batería y pantalla vibrante para el día a día."
  },
  {
    "id": 8,
    "title": "iPhone SE (3ra Gen)",
    "price": 429.99,
    "category": "apple",
    "stock": 20,
    "img": "https://placehold.co/600x400/95a5a6/FFF?text=iPhone+SE+(3ra+Gen)",
    "description": "El chip potente de Apple en un diseño clásico."
  },
  {
    "id": 9,
    "title": "Motorola G84",
    "price": 249.0,
    "category": "motorola",
    "stock": 25,
    "img": "https://placehold.co/600x400/3498db/FFF?text=Motorola+G84",
    "description": "Rendimiento sólido a un precio accesible."
  },
  {
    "id": 10,
    "title": "Google Pixel 8 Pro",
    "price": 999.0,
    "category": "google",
    "stock": 4,
    "img": "https://placehold.co/600x400/9b59b6/FFF?text=Google+Pixel+8+Pro",
    "description": "El smartphone más inteligente de Google."
  },
  {
    "id": 11,
    "title": "Xiaomi POCO F6",
    "price": 399.0,
    "category": "xiaomi",
    "stock": 18,
    "img": "https://placehold.co/600x400/1abc9c/FFF?text=Xiaomi+POCO+F6",
    "description": "Ideal para *gaming* con refrigeración avanzada."
  },
  {
    "id": 12,
    "title": "Samsung Galaxy Z Fold 6",
    "price": 1799.99,
    "category": "samsung",
    "stock": 3,
    "img": "https://placehold.co/600x400/f1c40f/FFF?text=Samsung+Galaxy+Z+Fold+6",
    "description": "Transforma tu móvil en una tablet."
  },
  {
    "id": 13,
    "title": "iPhone 15",
    "price": 799.0,
    "category": "apple",
    "stock": 10,
    "img": "https://placehold.co/600x400/34495e/FFF?text=iPhone+15",
    "description": "Un salto adelante en fotografía y rendimiento."
  },
  {
    "id": 14,
    "title": "Motorola Razr 40 Ultra",
    "price": 999.0,
    "category": "motorola",
    "stock": 5,
    "img": "https://placehold.co/600x400/e67e22/FFF?text=Motorola+Razr+40+Ultra",
    "description": "El icónico diseño plegable renovado."
  },
  {
    "id": 15,
    "title": "OnePlus 12",
    "price": 799.0,
    "category": "oneplus",
    "stock": 9,
    "img": "https://placehold.co/600x400/e74c3c/FFF?text=OnePlus+12",
    "description": "Velocidad extrema con carga ultrarrápida."
  },
  {
    "id": 16,
    "title": "Xiaomi Redmi Note 13 Pro+",
    "price": 319.0,
    "category": "xiaomi",
    "stock": 14,
    "img": "https://placehold.co/600x400/2ecc71/FFF?text=Xiaomi+Redmi+Note+13+Pro%2B",
    "description": "Cámara principal de 200MP asequible."
  },
  {
    "id": 17,
    "title": "Samsung Galaxy S24+",
    "price": 999.99,
    "category": "samsung",
    "stock": 6,
    "img": "https://placehold.co/600x400/95a5a6/FFF?text=Samsung+Galaxy+S24%2B",
    "description": "Más pantalla y más batería que el S24 estándar."
  },
  {
    "id": 18,
    "title": "iPhone 15 Pro",
    "price": 1099.0,
    "category": "apple",
    "stock": 8,
    "img": "https://placehold.co/600x400/3498db/FFF?text=iPhone+15+Pro",
    "description": "Titanio, chip A17 Pro y botón de acción personalizable."
  },
  {
    "id": 19,
    "title": "Motorola E13",
    "price": 119.99,
    "category": "motorola",
    "stock": 30,
    "img": "https://placehold.co/600x400/9b59b6/FFF?text=Motorola+E13",
    "description": "Funcionalidad básica y gran autonomía."
  },
  {
    "id": 20,
    "title": "Google Pixel 7a",
    "price": 499.0,
    "category": "google",
    "stock": 11,
    "img": "https://placehold.co/600x400/1abc9c/FFF?text=Google+Pixel+7a",
    "description": "Cámara de alta calidad a un precio intermedio."
  },
  {
    "id": 21,
    "title": "Xiaomi 13T",
    "price": 549.0,
    "category": "xiaomi",
    "stock": 7,
    "img": "https://placehold.co/600x400/f1c40f/FFF?text=Xiaomi+13T",
    "description": "Rendimiento de flagship con HyperCharge."
  },
  {
    "id": 22,
    "title": "Samsung Galaxy Z Flip 6",
    "price": 1099.99,
    "category": "samsung",
    "stock": 4,
    "img": "https://placehold.co/600x400/34495e/FFF?text=Samsung+Galaxy+Z+Flip+6",
    "description": "Diseño compacto y elegante que cabe en cualquier bolsillo."
  },
  {
    "id": 23,
    "title": "iPhone 14 Plus",
    "price": 699.0,
    "category": "apple",
    "stock": 9,
    "img": "https://placehold.co/600x400/e67e22/FFF?text=iPhone+14+Plus",
    "description": "Pantalla grande y la mejor batería en un iPhone."
  },
  {
    "id": 24,
    "title": "Motorola G54",
    "price": 199.0,
    "category": "motorola",
    "stock": 22,
    "img": "https://placehold.co/600x400/e74c3c/FFF?text=Motorola+G54",
    "description": "Conectividad 5G al alcance de todos."
  },
  {
    "id": 25,
    "title": "OnePlus Nord 3",
    "price": 449.0,
    "category": "oneplus",
    "stock": 16,
    "img": "https://placehold.co/600x400/2ecc71/FFF?text=OnePlus+Nord+3",
    "description": "La experiencia *flagship* a precio Nord."
  },
  {
    "id": 26,
    "title": "Xiaomi POCO X6 Pro",
    "price": 289.0,
    "category": "xiaomi",
    "stock": 13,
    "img": "https://placehold.co/600x400/95a5a6/FFF?text=Xiaomi+POCO+X6+Pro",
    "description": "El rey de la gama media en rendimiento."
  },
  {
    "id": 27,
    "title": "Samsung Galaxy S23 FE",
    "price": 599.0,
    "category": "samsung",
    "stock": 10,
    "img": "https://placehold.co/600x400/3498db/FFF?text=Samsung+Galaxy+S23+FE",
    "description": "Lo esencial de la serie S, para los fans."
  },
  {
    "id": 28,
    "title": "iPhone 14",
    "price": 599.0,
    "category": "apple",
    "stock": 15,
    "img": "https://placehold.co/600x400/9b59b6/FFF?text=iPhone+14",
    "description": "Un móvil potente y seguro para el día a día."
  },
  {
    "id": 29,
    "title": "Google Pixel Fold",
    "price": 1699.0,
    "category": "google",
    "stock": 2,
    "img": "https://placehold.co/600x400/1abc9c/FFF?text=Google+Pixel+Fold",
    "description": "El primer plegable de Google con diseño único."
  },
  {
    "id": 30,
    "title": "OnePlus Open",
    "price": 1499.0,
    "category": "oneplus",
    "stock": 3,
    "img": "https://placehold.co/600x400/f1c40f/FFF?text=OnePlus+Open",
    "description": "Un plegable ultraligero con rendimiento OnePlus."
  }
]

export default products