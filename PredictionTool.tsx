import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign } from "lucide-react";

const TOP_20_CRYPTOS = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", color: "bg-crypto-bitcoin", icon: "₿" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", color: "bg-crypto-ethereum", icon: "Ξ" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", color: "bg-crypto-binance", icon: "BNB" },
  { id: "solana", name: "Solana", symbol: "SOL", color: "bg-crypto-solana", icon: "◎" },
  { id: "cardano", name: "Cardano", symbol: "ADA", color: "bg-crypto-cardano", icon: "₳" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT", color: "bg-crypto-polkadot", icon: "●" },
  { id: "chainlink", name: "Chainlink", symbol: "LINK", color: "bg-crypto-chainlink", icon: "⬢" },
  { id: "litecoin", name: "Litecoin", symbol: "LTC", color: "bg-crypto-litecoin", icon: "Ł" },
  { id: "bitcoin-cash", name: "Bitcoin Cash", symbol: "BCH", color: "bg-success", icon: "₿" },
  { id: "stellar", name: "Stellar", symbol: "XLM", color: "bg-crypto-stellar", icon: "★" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", color: "bg-crypto-binance", icon: "Ð" },
  { id: "matic-network", name: "Polygon", symbol: "MATIC", color: "bg-crypto-polygon", icon: "⬟" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX", color: "bg-crypto-avalanche", icon: "▲" },
  { id: "uniswap", name: "Uniswap", symbol: "UNI", color: "bg-crypto-uniswap", icon: "🦄" },
  { id: "cosmos", name: "Cosmos", symbol: "ATOM", color: "bg-crypto-cosmos", icon: "⚛" },
  { id: "algorand", name: "Algorand", symbol: "ALGO", color: "bg-crypto-algorand", icon: "△" },
  { id: "near", name: "NEAR Protocol", symbol: "NEAR", color: "bg-crypto-near", icon: "N" },
  { id: "fantom", name: "Fantom", symbol: "FTM", color: "bg-crypto-fantom", icon: "👻" },
  { id: "sandbox", name: "The Sandbox", symbol: "SAND", color: "bg-accent", icon: "🏖" },
  { id: "decentraland", name: "Decentraland", symbol: "MANA", color: "bg-warning", icon: "🌐" }
];

const TIME_PERIODS = [
  { value: "1h", label: "1 Hour" },
  { value: "24h", label: "24 Hours" },
  { value: "7d", label: "7 Days" },
  { value: "30d", label: "30 Days" }
];

const PredictionTool = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<typeof TOP_20_CRYPTOS[0] | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generatePrediction = () => {
    if (!selectedCrypto || !selectedPeriod) return;
    
    setIsLoading(true);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const currentPrice = Math.random() * 50000 + 1000;
      const changePercent = (Math.random() - 0.5) * 20; // -10% to +10%
      const predictedPrice = currentPrice * (1 + changePercent / 100);
      
      setPrediction({
        crypto: selectedCrypto,
        period: selectedPeriod,
        currentPrice: currentPrice.toFixed(2),
        predictedPrice: predictedPrice.toFixed(2),
        changePercent: changePercent.toFixed(2),
        confidence: Math.random() * 30 + 70, // 70-100%
        factors: [
          "Market sentiment analysis",
          "Technical indicators",
          "Trading volume patterns",
          "Historical price movements"
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="glass-card rounded-lg p-6 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-semibold">Crypto Price Prediction</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Select Cryptocurrency</label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between h-12 bg-background/50 hover:bg-background/80 transition-all duration-200">
                {selectedCrypto ? (
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${selectedCrypto.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                      {selectedCrypto.icon}
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{selectedCrypto.name}</span>
                      <span className="text-xs text-muted-foreground">{selectedCrypto.symbol}</span>
                    </div>
                  </div>
                ) : (
                  "Choose cryptocurrency"
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 max-h-80 overflow-y-auto bg-background/95 backdrop-blur-sm border border-border shadow-2xl z-50">
              <div className="p-2">
                <div className="text-xs font-medium text-muted-foreground mb-3 px-2">
                  Popular Cryptocurrencies
                </div>
                {TOP_20_CRYPTOS.map((crypto) => (
                  <DropdownMenuItem 
                    key={crypto.id} 
                    onClick={() => setSelectedCrypto(crypto)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 cursor-pointer transition-all duration-200 group"
                  >
                    <div className={`w-10 h-10 rounded-full ${crypto.color} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                      {crypto.icon}
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="font-medium text-foreground">{crypto.name}</span>
                      <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-success opacity-60"></div>
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Time Period</label>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="bg-secondary/50 border-secondary">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent className="bg-secondary border-secondary">
              {TIME_PERIODS.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button 
            onClick={generatePrediction}
            disabled={!selectedCrypto || !selectedPeriod || isLoading}
            className="w-full"
          >
            {isLoading ? "Analyzing..." : "Get Prediction"}
          </Button>
        </div>
      </div>
      
      {prediction && (
        <Card className="bg-secondary/30 border-secondary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5" />
              Prediction for {prediction.crypto.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Price:</span>
                  <span className="font-medium">${prediction.currentPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Predicted Price:</span>
                  <span className="font-medium">${prediction.predictedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Expected Change:</span>
                  <span className={`font-medium ${parseFloat(prediction.changePercent) >= 0 ? 'text-success' : 'text-warning'}`}>
                    {prediction.changePercent}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confidence:</span>
                  <span className="font-medium">{prediction.confidence.toFixed(0)}%</span>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Analysis Factors:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {prediction.factors.map((factor, index) => (
                    <li key={index}>• {factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PredictionTool;