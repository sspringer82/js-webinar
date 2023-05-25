# Fehler und Performanceprobleme finden und beheben

# IDEs
- https://www.jetbrains.com/de-de/webstorm/
  - https://www.jetbrains.com/help/webstorm/running-and-debugging-node-js.html
- https://code.visualstudio.com/
  - https://code.visualstudio.com/docs/nodejs/nodejs-debugging

# Links
- https://developer.mozilla.org/
- https://web.dev/critical-rendering-path-render-tree-construction/
- https://v8.dev/docs/hidden-classes
- https://v8.dev/blog/orinoco-parallel-scavenger
- https://github.com/thlorenz/v8-perf
- Secure Context: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
- Chrome Dev Tools: https://developer.chrome.com/docs/devtools/
- Lighthouse (Analyse): https://www.npmjs.com/package/lighthouse
  - https://developer.chrome.com/docs/lighthouse/

# JS Verarbeitung
1. Datei einlesen
2. In Bytecode umwandeln
3. Ausführen

# Performance
- Zugriff auf Eigenschaften in der gleichen Reihenfolge für gleiche Objekte
- Langlebige Objekte
- Keine Mikrooptimierungen auf Lowlevel-Basis (z.B. Operatoren)
- Lesbarkeit > Performance
- Netzwerk
  - Parallele Requests pro Subdomain (6)
  - CDN (Content delivery network): räumliche Nähe der Ressourcen zu den Usern
  - Serverseitiges Caching
  - Response verkleinern (Content Download optimieren) - Komprimierung