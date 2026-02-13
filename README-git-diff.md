🎯 Comando #13: git diff - El Detective de Cambios

🔍 El problema de los "cambios invisibles":

```text
Has estado editando archivos...
❌ ¿Qué líneas exactamente cambié?
❌ ¿En qué se diferencia mi código del último commit?
❌ ¿Qué diferencias hay entre dos versiones?
❌ ¿Qué voy a commitear realmente?
```

🔬 La solución del "microscopio de código":

```bash
# Ver cambios no preparados (working directory vs staging)
git diff

# Ver cambios preparados (staging vs último commit)
git diff --staged
# o
git diff --cached

# Salida típica:
diff --git a/archivo.js b/archivo.js
index abc123..def456 100644
--- a/archivo.js
+++ b/archivo.js
@@ -1,5 +1,5 @@
 function saludar() {
-    return "Hola";
+    return "¡Hola Mundo!";
 }
```

🧠 ¿Qué muestra realmente git diff?

**git diff te muestra:**

- Líneas eliminadas (marcadas con - y en rojo)
- Líneas añadidas (marcadas con + y en verde)
- Contexto (líneas alrededor para entender el cambio)
- Ubicación exacta (número de línea y función)

**Es como tener rayos X para tu código:**

```text
ANTES:                 DESPUÉS:
function suma(a, b) {  function suma(a, b) {
    return a + b;          return a + b + c;
}                       }
```

**git diff te muestra:**

```diff
-    return a + b;
+    return a + b + c;
```

🧪 Modos principales de git diff:

**1. Cambios no preparados (Working Directory)**

```bash
# Ver qué has modificado pero NO has agregado con git add
git diff

# Ver cambios en archivo específico
git diff archivo.js

# Ver cambios en directorio específico
git diff src/
```

**2. Cambios preparados (Staging Area)**

```bash
# Ver qué vas a commitear (ya agregado con git add)
git diff --staged
git diff --cached  # alias

# Ver cambios preparados de un archivo
git diff --staged archivo.js
```

**3. Comparar commits**

```bash
# Comparar dos commits específicos
git diff abc123 def456

# Comparar con el commit anterior
git diff HEAD~1 HEAD

# Ver qué cambió en el último commit
git diff HEAD~1

# Comparar ramas
git diff main..feature/nueva
git diff main...feature/nueva  # Cambios desde que divergieron
```

**4. Comparar con remoto**

```bash
# Ver diferencias con remoto
git diff origin/main

# Ver qué tienes local que el remoto no
git diff origin/main..HEAD

# Ver qué tiene el remoto que tú no
git diff HEAD..origin/main
```

🎨 Formatos de salida:

**Formato unificado (default)**

```diff
--- a/archivo.js
+++ b/archivo.js
@@ -10,7 +10,7 @@ function procesar() {
     const datos = obtenerDatos();
     
     // Procesamiento
-    const resultado = datos.filter(x => x > 0);
+    const resultado = datos.filter(x => x !== null);
     
     return resultado;
 }
```

**Formato estadísticas**

```bash
git diff --stat
# archivo.js  | 4 +++-
# utils.py    | 2 +-
# README.md   | 6 ++++++
# 3 files changed, 10 insertions(+), 2 deletions(-)
```

**Formato palabra por palabra**

```bash
git diff --word-diff
# Más legible para cambios pequeños en texto
```

**Formato lateral (side-by-side)**

```bash
git diff --color-words
# o con herramientas externas
git difftool
```

💡 Ejemplos prácticos:

**Caso 1: Revisar cambios antes de commit**

```bash
# Editas varios archivos...
vim app.js
vim styles.css

# Ver QUÉ cambió exactamente
git diff
# Revisas los cambios línea por línea

# Decides qué incluir
git add app.js  # Solo app.js por ahora

# Ver qué vas a commitear
git diff --staged
# Confirma que solo están los cambios deseados

git commit -m "feat: mejorar lógica de app.js"
```

**Caso 2: Investigar bug introducido**

```bash
# Encontraste un bug, ¿cuándo se introdujo?
git log --oneline -20  # Ver últimos 20 commits

# Comparar versiones
git diff v1.2.0 v1.3.0 -- buggy-file.js
# Buscas cambios sospechosos

# O usar git bisect (búsqueda binaria)
git bisect start
git bisect bad HEAD
git bisect good v1.2.0
# Git te lleva al commit que introdujo el bug
```

**Caso 3: Ver qué se mergeará**

```bash
# Antes de mergear una feature
git checkout main
git diff feature/nueva
# Ver TODOS los cambios que llegarán

# O solo ver resumen
git diff --stat main..feature/nueva
# 15 files changed, 300 insertions(+), 45 deletions(-)
```

🚨 Casos especiales y soluciones:

**Problema 1: Demasiada salida (archivos binarios)**

```bash
git diff
# Binary files a/image.png and b/image.png differ
# 😓 No ves cambios reales

# Solución: Configurar diff para ciertos tipos
git config diff.pdf.textconv pdftotext
echo "*.pdf diff=pdf" >> .gitattributes
```

**Problema 2: Cambios en whitespace confunden**

```bash
# Git muestra cambios en espacios/tabs
# Solución: ignorar whitespace
git diff --ignore-all-space
git diff --ignore-space-change
git diff --ignore-space-at-eol
```

**Problema 3: Difícil ver cambios en merge conflict**

```bash
# Durante merge conflict
git diff --name-only --diff-filter=U
# Muestra archivos con conflictos

git diff --ours   # Muestra cambios de nuestra rama
git diff --theirs # Muestra cambios de la otra rama
git diff --base   # Muestra ancestro común
```

🔧 Configuraciones útiles:

```bash
# 1. Colores para mejor legibilidad
git config --global color.diff auto
git config --global color.diff.commit "yellow bold"
git config --global color.diff.frag "magenta bold"
git config --global color.diff.old "red bold"
git config --global color.diff.new "green bold"

# 2. Alias para comandos comunes
git config --global alias.df "diff"
git config --global alias.dfs "diff --staged"
git config --global alias.dfl "diff HEAD~1"

# 3. Herramienta gráfica por defecto
git config --global diff.tool vscode
git config --global difftool.vscode.cmd "code --wait --diff \$LOCAL \$REMOTE"

# 4. Mostrar renames como copies (mejor tracking)
git config --global diff.renames copies

# 5. Límite de contexto (default 3 líneas)
git diff --unified=5  # Muestra 5 líneas de contexto
```

🌍 Flujo de trabajo real:

**Desarrollador haciendo code review propio:**

```bash
# 1. Después de una sesión de codificación
git status
# Modificados: app.js, utils.js, config.yaml

# 2. Revisar cada cambio cuidadosamente
git diff app.js
# ✅ Cambios en app.js parecen correctos

git diff utils.js
# ❌ Encuentro un console.log() de debug que olvidé quitar
# Lo elimino del archivo

git diff config.yaml
# ⚠️ Cambio grande, reviso línea por línea
# Decido dividirlo en dos commits

# 3. Preparar commits separados
git add app.js utils.js
git diff --staged
# Confirmo que solo están los cambios deseados
git commit -m "feat: implementar nueva API"

git add config.yaml
git diff --staged
# Solo cambios de configuración
git commit -m "chore: actualizar configuración de DB"
```

🎮 Modos avanzados:

**1. Diff interactivo (patch mode)**

```bash
git add -p  # Agregar cambios interactivamente
# Para cada "hunk" (fragmento) te pregunta:
# Stage this hunk [y,n,q,a,d,s,e,?]?
# s → split (dividir en hunks más pequeños)
# e → edit (editar manualmente el hunk)
```

**2. Ver cambios en renombres/moves**

```bash
git diff --name-status HEAD~3 HEAD
# M    app.js           # Modificado
# A    nuevo.js         # Añadido  
# D    viejo.js         # Eliminado
# R    antiguo.js -> nuevo.js  # Renombrado
```

**3. Filtrar por tipo de cambio**

```bash
git diff --diff-filter=A  # Solo archivos añadidos
git diff --diff-filter=D  # Solo archivos eliminados
git diff --diff-filter=M  # Solo archivos modificados
git diff --diff-filter=R  # Solo archivos renombrados
```

**4. Ver cambios entre tags**

```bash
git diff v1.0.0..v2.0.0 --stat
# Ver qué cambió entre versiones
```

🎯 Ejercicio práctico:

**Tu misión: Convertirte en detective de cambios Git**

```bash
# 1. Crear repositorio de práctica
mkdir detective-diff
cd detective-diff
git init

# 2. Crear archivo y hacer primer commit
echo "function suma(a, b) {
    return a + b;
}" > calculadora.js
git add . && git commit -m "v1: función suma"

# 3. Hacer varios cambios
echo "function resta(a, b) {
    return a - b;
}" >> calculadora.js
sed -i 's/suma/Suma/g' calculadora.js  # Cambiar nombre función

# 4. Practicar diferentes diffs
git diff  # Ver todos los cambios no preparados

git diff HEAD  # Comparar con último commit

git diff --word-diff  # Ver cambios palabra por palabra

git diff --stat  # Solo estadísticas

# 5. Preparar algunos cambios y ver staged
git add calculadora.js
git diff --staged  # Ver qué va al commit

# 6. Crear rama y comparar
git checkout -b feature/multiplicacion
echo "function multiplicacion(a, b) {
    return a * b;
}" >> calculadora.js
git add . && git commit -m "añadir multiplicación"

git checkout main
git diff main..feature/multiplicacion
```

💭 Preguntas frecuentes:

**❓ ¿Cuál es la diferencia entre git diff y git status?**

```bash
# git status: QUÉ archivos cambiaron (lista)
# git diff: CÓMO cambiaron (contenido)

# Ejemplo:
git status
# modified: app.js  (sabes que app.js cambió)

git diff app.js
# - console.log('viejo');
# + console.log('nuevo');  (ves EXACTAMENTE qué)
```

**❓ ¿Cómo ver solo cambios entre dos fechas?**

```bash
git diff HEAD@{'2 days ago'} HEAD@{'1 day ago'}
# o
git log --since="2 days ago" --until="1 day ago" -p
```

**❓ ¿git diff muestra cambios en archivos binarios?**

```bash
# Por defecto: solo dice "binary files differ"
# Para imágenes: instalar git-lfs y configurar
# Para PDFs: configurar textconv como mostré antes
# Para otros: herramientas externas
```

**❓ ¿Cómo usar diff externo/gui?**

```bash
# Configurar herramienta
git config --global diff.tool vimdiff
git config --global difftool.prompt false

# Usar:
git difftool HEAD~1  # Abre interfaz gráfica
```

📊 Tabla de opciones comunes:

| Necesitas... | Comando |
|-------------|---------|
| Ver cambios no preparados | `git diff` |
| Ver cambios preparados | `git diff --staged` |
| Ver cambios en archivo | `git diff archivo.js` |
| Comparar commits | `git diff abc123 def456` |
| Comparar ramas | `git diff main..feature` |
| Solo estadísticas | `git diff --stat` |
| Ignorar espacios | `git diff -w` |
| Ver renombres | `git diff -M` |
| Interactivo | `git add -p` (usa diff internamente) |

🎨 Visualizando git diff:

```
graph TD
    A[Working Directory<br/>Archivos editados] -->|git diff| B[Ver cambios específicos]
    C[Staging Area<br/>Archivos preparados] -->|git diff --staged| D[Ver qué se commiteará]
    E[Commit Actual<br/>HEAD] -->|git diff HEAD~1| F[Ver último commit]
    G[Commit Antiguo<br/>abc123] -->|git diff abc123..def456| H[Comparar dos puntos]
    
    B --> I[Líneas eliminadas - rojo]
    B --> J[Líneas añadidas + verde]
    
    style A fill:#e1f5fe
    style C fill:#f3e5f5
    style E fill:#e8f5e8
    style G fill:#fff3e0
```

<div align="center">

**🎯 Punto Clave de git diff:**

```diff
+ Es tu "lupa" para examinar cambios
+ Te muestra EXACTAMENTE qué cambió, línea por línea
+ Esencial para code review (propio y de otros)
+ Sin esto, trabajas a ciegas sobre el contenido
```

</div>
