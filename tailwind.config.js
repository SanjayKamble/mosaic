/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  // Or if using `src` directory:
  "./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
  extend: {},
},
// plugins: [
//   // eslint-disable-next-line global-require
//   require('@tailwindcss/forms'),
//   // add custom variant for expanding sidebar
//   plugin(({ addVariant, e }) => {
//     addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
//       modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
//     });
//   }),
// ],
}
