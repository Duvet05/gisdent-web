# Web de Gisdent

Sitio estático listo para desplegar en **Vercel**.

## Cómo probar en local

```bash
cd /Users/duvet05/Desarrollo/Repos/gisdent-web
python3 -m http.server 4173
```

Luego abre `http://localhost:4173`.

## Desplegar en Vercel

1. Entra al proyecto:
   ```bash
   cd /Users/duvet05/Desarrollo/Repos/gisdent-web
   ```
2. Haz login en Vercel si no lo hiciste:
   ```bash
   vercel login
   ```
3. Despliega:
   ```bash
   vercel
   ```
4. (Opcional) Publica en producción:
   ```bash
   vercel --prod
   ```

## Editar datos

Reemplaza estos valores en `index.html` y `script.js`:

- Número de WhatsApp
- Dirección
- Horarios
- Servicios destacados

