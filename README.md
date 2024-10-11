# Registro de empleado en orange HRM 

_El caso de prueba debe considerar que no se puede tener el mismo nombre de usuario y ni el mismo login_

## Comando preliminares 🚀

_Para ejecutar el ambiete de pruebas se debe establecer los siguientes comando por consoal antes de su ejecucion._


### Pre-requisitos 📋

_Los comandos son_

```
npm init playwright@latest
```

```
npm i -D playwright-bdd
```
```
npm i -D @cucumber/cucumber@latest
```

### Ejecución 🔧

_Se ejecuta con el siguiente comando_

```
npx playwright test --ui
```
### Consideracion para mejorar 🔧

_Las siguientes observaciones pueden ser mejorables dado que se aprendió la herramienta en un plazo de 24 horas_

* [Paginacion](https://drive.google.com/file/d/1H0mjteEgfaW6r1nX9wNjF1rVh-PKe21E/view?usp=sharing) - La prueba puede funcionar dado que se ingresan nombres que aparecen en la primera paginacion de los resultados (nombres que ocmienzan con A...)
* [POM]() - Se puede aplicar el patron de Page Object Model para modularizar la aplicacion y hacerla escalable
* [Cucumber]() - Se puede integrar con Cucumber que posee el leguaje Gherkin para darme un enfoque BDD oreintado al negocio

Powered by [Joel Ramos Tanca](https://github.com/joel2064) 😊