export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#07090B',
          900: '#0A0D10',
          800: '#0F1317',
          700: '#161B21',
        },
        fg: {
          DEFAULT: '#E9EDF0',
          muted: '#98A2AB',
          subtle: '#646E77',
        },
        signal: {
          DEFAULT: '#3FCF9F',
          dim: '#2B8F6F',
        },
        aqua: '#5BC4D6',
        steel: '#6D97E8',
        threat: '#E0A04E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
}
