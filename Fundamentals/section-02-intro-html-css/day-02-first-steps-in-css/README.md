### Exercise 1

Change the size of h1 to 65 pixels;

Change the h1 text color to orange;

Modify the background color of the unordered list;

Create a class to modify the background color of p and ul tag at the same time.

```<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Frutas</h1>
    <p>Qual é a sua fruta favorita?</p>
    <ul>
      <li>Maçã</li>
      <li>Banana</li>
      <li>Goiaba</li>
    </ul>
  </body>
</html>
```

### Exercise 2

Change the h1 font-family to sans-serif;

Set the paragraph with font-weight 600;

Change the font-size of the body to 16px;

Set the paragraph size to 3 times the default body size;

Explore the font-style, line-height, text-align and text-decoration properties;

Change the background color of each list item to the color corresponding to the text.

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>HTML</title>
    <style></style>
  </head>
  <body>
    <h1>Cores</h1>
    <p>Qual é a sua cor favorita?</p>
    <ul>
      <li>Amarelo</li>
      <li>Vermelho</li>
      <li>Marrom</li>
    </ul>
  </body>
</html>
```

### Exercise 3

Put all the style tag CSS in an external file.

```
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8">
    <title>Trybe</title>
    <style>
      h1 {
        color: seagreen;
        font-size: 65px;
        font-family: sans-serif, Helvetica; 
      }

      .cor-de-fundo {
        background-color: whitesmoke;
      }

      p {
        font-weight: 600;
      }

      body {
        font-size: 16px;
      }

      li {
        font-style: italic;
        line-height: 60px;
        text-align: center;
        text-decoration: underline;
        font-size: 2em;
      }

      #verde {
        background-color: green;
      }

      #verde-escuro {
        background-color: seagreen;
      }

      #azul {
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <h1>Trybe</h1>
    <h2 class="cor-de-fundo">Um novo curso para sua vida</h2>
    <p class="cor-de-fundo">A porta de entrada para a sua carreira em tecnologia</p>
    <ul>
      <li id="verde">Ensinamos a programar</li>
      <li id="verde-escuro">Ensinamos a aprender</li>
      <li id="azul">Ensinamos a trabalhar</li>
    </ul>
  </body>
</html>
```
