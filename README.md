# HTML, CSS, JS (Auto Refresh)

This project is created as a proof of concept to see if I can use it as a boilerplate for "The Learning Feed", a testimonial app for students and coaches for accelerated learning.

This project is based on a template, used as a starter for building a website with HTML, CSS and JS, powered by [Vite](https://vitejs.dev/). HTML provides the basic structure, CSS controls formatting, and JavaScript controls the behavior of different elements.

## Database and backend logic
For the database and backend logic, this project utilizes PostgreSQL, backed by [Neon](https://neon.tech/docs/connect/connect-from-any-app#connection-examples).

## Disable Auto Refresh

If you find the auto refresh getting in your way, go to [vite.config.js](./vite.config.js) and update it set `hmr` to false to disable hot module reloading (HMR). The full config will look like this:

```js
export default defineConfig({
  plugins: [],
  server: {
    host: '0.0.0.0',
    hmr: false, // Change this line to `false` disable auto-refreshing.
  }
})
```

## Packages

Because this template uses Vite to build your code, you can add install and use npm packages. Simply open the Packager tool to search and manage your packages.

## Learn More

Check out [the vite docs](https://vitejs.dev) to learn more about configuring a frontend application.