## Apuntes Victor Navarro sobre Mejoras para escalar

**Cambios en la estructura de carperas**

*src*
  - UI
  - Shared
  - Pages
  - Components
  - Services
  - Routes
  - Utils
  - Store
  - Translators
  - Contracts
  - Types
  - Hooks
  -__tests__
  
*UI*

  - button
  - header
  - image
  - title

*Shared*
 - header
 - footer

*Pages*

  - user
  - products

*Components*
 - user
 - products

*Services* 

 - requestService
 - userService
 - productService


*Store*
  - user
  - products  

*Translators*
 - userTranslator
 - productTranslator

*Contracts*
- userContract
- productContract

*Hooks*

- user
- products

**Otras mejoras**

- crear archivos .env para poder manejar temas de diferentes entornos.
- crear un archivo config que permita extraer las variables de entorno y no tener que llamar process.env desde cada componente donde se use.
- utilizar Tanstack Query para manejo de data y temas de cache, ademas de poder utizar su devtool.
- utilizar lazy y suspense para temas de lazy loading.
- utilizar patrones como composition o context para compartir logica entre componentes.
- para los estilos usaria SASS con BEM

