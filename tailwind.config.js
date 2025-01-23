/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B19276',
        // primary shade colos
        'shade-9': '#120F0C',
        'shade-8': '#231D18',
        'shade-7': '#352C23',
        'shade-6': '#473A2F',
        'shade-5': '#59493B',
        'shade-4': '#6A5847',
        'shade-3': '#7C6653',
        'shade-2': '#8E755E',
        'shade-1': '#9F836A',
        // primary tints colors
        'tint-9': '#B99D84',
        'tint-8': '#C1A891',
        'tint-7': '#C8B39F',
        'tint-6': '#D0BEAD',
        'tint-5': '#D8C8BB',
        'tint-4': '#E0D3C8',
        'tint-3': '#E8DED6',
        'tint-2': '#EFE9E4',
        'tint-1': '#F7F4F1',
        // neutral colors
        'gray-13': '#23242E',
        'gray-12': '#2E2F39',
        'gray-11': '#3C3D45',
        'gray-10': '#54555D',
        'gray-9': '#6D6D74',
        'gray-8': '#85858B',
        'gray-7': '#9D9EA2',
        'gray-6': '#B6B6B9',
        'gray-5': '#CECED1',
        'gray-4': '#E7E7E8',
        'gray-3': '#F2F2F3',
        'gray-2': '#F7F7F8',
        'gray-1': '#FAFAFA',
        // state colors
        error: '#FF6666',
        succes: '#32CD32',
        warning: '#FFC107',
        info: '#1E90FF',
      },
    },
  },
  plugins: [],
};
