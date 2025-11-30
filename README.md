# Trading PWA

Eine Progressive Web App für Trading-Tools.

## Entwicklung

### Installation
```bash
npm install
```

### Development Server starten
```bash
npm run dev
```

### Tests ausführen
```bash
npm test
```

## Deployment

Um Änderungen auf GitHub Pages zu deployen:

### 1. Build erstellen
```bash
npm run build
```

### 2. Build-Dateien in docs/ Ordner kopieren

**Windows (CMD):**
```bash
xcopy /E /I /Y dist docs
```

**Windows (PowerShell):**
```bash
Copy-Item -Path "dist\*" -Destination "docs\" -Recurse -Force
```

**Linux/Mac:**
```bash
cp -r dist/* docs/
```

### 3. Änderungen committen und pushen
```bash
git add .
git commit -m "Update deployment"
git push origin main
```

### 4. Deployment überprüfen
- Gehe zu: https://github.com/k-stef/trading-pwa/actions
- Warte bis der "pages build and deployment" Workflow erfolgreich durchgelaufen ist (grüner Haken)
- Die App ist dann verfügbar unter: https://k-stef.github.io/trading-pwa/

## Projekt-Struktur

- `src/` - Source Code
  - `components/` - React Komponenten
  - `types/` - TypeScript Type Definitionen
  - `utils/` - Utility Funktionen
- `public/` - Statische Assets
- `docs/` - Production Build für GitHub Pages
- `dist/` - Lokaler Build Output (wird nach docs/ kopiert)

## Technologien

- React 18
- TypeScript
- Vite
- Material-UI (MUI)
- Vite PWA Plugin