export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505',
          900: '#090A0D',
          800: '#101217',
          700: '#191C24',
        },
        fg: {
          DEFAULT: '#FFFFFF',
          muted: '#E2E2E2',
          subtle: '#C4C4C4',
        },
        signal: {
          DEFAULT: '#FF334F',
          dim: '#A8172C',
        },
        aqua: '#75B9FF',
        steel: '#4C8DFF',
        violet: '#8D65FF',
        threat: '#FF5268',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
}
