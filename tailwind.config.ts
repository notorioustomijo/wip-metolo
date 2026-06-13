export default {
    content: ['./index.html', './src/**/*.{ts, tx}'],
    theme: {
        extend: {
            keyframes: {
                'spin-once': {
                    from: { transform: 'rotate(0deg)'},
                    to: {transform: 'rotate(360deg)'},
                },
            },
            animation: {
                'spin-once': 'spin-once 0.6s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}