# CryptoPredict

A modern cryptocurrency analysis and prediction platform built with React, TypeScript, and Vite.

## Features

- 📈 **Real-time Crypto Charts** - Interactive TradingView charts
- 🧮 **Crypto Calculator** - Calculate investment costs and fees
- 📊 **Market Analysis** - Comprehensive crypto market statistics
- 🔮 **Prediction Tools** - AI-powered price prediction insights
- 📱 **Responsive Design** - Works on all devices
- 🌙 **Dark Theme** - Beautiful dark mode interface

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Charts**: TradingView Widget, Recharts
- **Build Tool**: Vite
- **Routing**: React Router DOM

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cryptopredict
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Access your site at `https://yourusername.github.io/repository-name`

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CryptoChart.tsx # Trading chart component
│   ├── CryptoCalculator.tsx # Investment calculator
│   └── ...
├── pages/              # Page components
├── lib/                # Utilities and helpers
└── index.css          # Global styles and theme
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This application is for educational and informational purposes only. Cryptocurrency investments carry significant risk. Always do your own research and consult with financial advisors before making investment decisions.