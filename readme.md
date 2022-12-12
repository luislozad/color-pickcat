![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Color Pickcat

<img height='100%' src="https://github.com/luislozad/color-pickcat/raw/main/cover.png" />

A elegant JavaScript Color Picker written in StencilJS, can be used with vanilla JS, React, Vue, Etc..
It is built with web technologies components

# Features
- Very easy to use
- Opacity support
- Multiple color formats (RGB, HSL, HEX)
- Eyedropper support (Only Chrome, Edge)
- Works on all modern browsers (no IE support)
- Multiple instances support
- Fast rendering
- more features coming soon...

# Codepen Demos
- [Basic introduction](https://codepen.io/LuisLzdev/pen/OJEqMMR)

## Getting Started

### Basic usage

Use it with plain html
```html
<!-- HEAD -->
<script type='module' src='https://cdn.jsdelivr.net/npm/color-pickcat@latest/dist/color-pickcat/color-pickcat.esm.js'></script>

<!-- BODY -->
<color-pickcat></color-pickcat>

<!-- SCRIPT -->
<script>
    const colorPickcat = document.querySelector('color-pickcat');
    colorPickcat.addEventListener('color', ({ detail }) => console.log('Color selected: ', detail.value));
    colorPickcat.addEventListener('alpha', ({ detail }) => console.log('Value of alpha: ', detail.value));
</script>
```

Set default properties in plain HTML:
```html
<color-pickcat color='#FFFFFF' colorArea='#FF0000' alpha='50'></color-pickcat>
```

# Package installation

```bash
git clone https://github.com/luislozad/color-pickcat.git
cd color-pickcat
```

To build the component for production, run:

```bash
npm run build
```

To run the component, run:

```bash
npm run start
```

## Using this component

There are three strategies we recommend for using web components built with Stencil.

### Script tag

- Put a script tag similar to this `<script type='module' src='https://cdn.jsdelivr.net/npm/color-pickcat@latest/dist/color-pickcat/color-pickcat.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install color-pickcat --save`
- Put a script tag similar to this `<script type='module' src='node_modules/color-pickcat/dist/color-pickcat/color-pickcat.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install color-pickcat --save`
- Add an import to the npm packages `import color-pickcat;`
- Then you can use the element anywhere in your template, JSX, html etc

## Show your support
<a href="https://www.buymeacoffee.com/luislzdev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height= "60px" width= "217px" ></a>