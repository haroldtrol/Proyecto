# 📦 Migraciones con Sequelize

Las migraciones permiten versionar cambios en la base de datos (crear tablas, modificar columnas, etc.) y aplicarlos de manera controlada.

---

## ✏️ Crear una nueva migración

```bash
npm run migration:create nombre_migracion
```

📝 Genera un archivo de migración en la carpeta `src/migrations` para registrar cambios en la base de datos.

**Script en `package.json`:**

```json
"migration:create": "npx sequelize-cli migration:create --migrations-path src/migrations --name"
```

---

## 🚀 Ejecutar migraciones pendientes

```bash
npm run migrate
```

📂 Aplica todas las migraciones que aún no se han ejecutado en la base de datos.

**Script en `package.json`:**

```json
"migrate": "npx sequelize-cli db:migrate --migrations-path src/migrations"
```

---

## ↩️ Deshacer la última migración ejecutada

```bash
npm run migrate:undo
```

⏪ Revierte los cambios realizados por la última migración aplicada.

**Script en `package.json`:**

```json
"migrate:undo": "npx sequelize-cli db:migrate:undo --migrations-path src/migrations"
```

---

## 🧹 Deshacer todas las migraciones

```bash
npm run migrate:undo:all
```

🗑️ Revierte **todas** las migraciones, dejando la base de datos como estaba antes de cualquier cambio.

**Script en `package.json`:**

```json
"migrate:undo:all": "npx sequelize-cli db:migrate:undo:all --migrations-path src/migrations"
```

---

## 📜 Scripts completos para `package.json`

```json
"scripts": {
  "migrate": "npx sequelize-cli db:migrate --migrations-path src/migrations",
  "migrate:undo": "npx sequelize-cli db:migrate:undo --migrations-path src/migrations",
  "migrate:undo:all": "npx sequelize-cli db:migrate:undo:all --migrations-path src/migrations",
  "migration:create": "npx sequelize-cli migration:create --migrations-path src/migrations --name"
}
```

---

✅ **Tip:** Siempre revisa el contenido de la migración antes de ejecutarla y usa `migrate:undo` o `migrate:undo:all` para revertir cambios si es necesario.
