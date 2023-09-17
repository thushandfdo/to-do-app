## Configure Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Add following code to the `tailwind.config.js` file

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: { },
    },
    plugins: [],
};
```

### Add main Tailwind bases to the `src/index.css` file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now you can use Tailwind CSS in your project.

## To set the `Poppins` as the base font, add the following code to the `tailwind.config.js` file

```js
/* Import the Popins font */
@import url('https://fonts.google.com/specimen/Poppins');

/* Set Popins as the base font */
html {
  font-family: 'Poppins', sans-serif;
}
```