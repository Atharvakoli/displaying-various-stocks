const express = require('express');
let cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Assignment_2');
});

let stocks = [
  {
    id: 1,
    name: 'reliance industries',
    price: 2500,
    growth: 3.5,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 2,
    name: 'hdfc bank',
    price: 1800,
    growth: 4.2,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 3,
    name: 'icici bank',
    price: 1600,
    growth: 5.1,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 4,
    name: 'tata consultancy services',
    price: 3200,
    growth: 2.9,
    industry: 'finance',
    exchange: 'bse',
    price: 1900,
  },
  {
    id: 5,
    name: 'infosys',
    price: 2900,
    growth: 3.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 6,
    name: "dr. reddy's laboratories",
    price: 2100,
    growth: 4.7,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 7,
    name: 'sun pharmaceutical',
    price: 2300,
    growth: 3.2,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 8,
    name: 'cipla',
    growth: 2.6,
    price: 2100,
    exchange: 'bse',
    industry: 'pharma',
  },
  {
    id: 9,
    name: 'ntpc',
    price: 1200,
    growth: 4.1,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 10,
    name: 'power grid corporation',
    price: 1500,
    growth: 3.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 11,
    name: 'adani power',
    price: 2200,
    growth: 5.3,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 12,
    name: 'lupin',
    price: 2000,
    growth: 4.5,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 13,
    name: 'axis bank',
    price: 1750,
    growth: 2.8,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 14,
    name: 'state bank of india',
    price: 1450,
    growth: 3.6,
    industry: 'finance',
    exchange: 'bse',
  },
  {
    id: 15,
    name: 'bajaj finance',
    price: 2650,
    growth: -2.9,
    industry: 'finance',
    exchange: 'nse',
  },
  {
    id: 16,
    name: "dr. reddy's laboratories",
    price: 1950,
    growth: 4.3,
    industry: 'pharma',
    exchange: 'bse',
  },
  {
    id: 17,
    name: 'biocon',
    price: 1850,
    growth: 3.9,
    industry: 'pharma',
    exchange: 'nse',
  },
  {
    id: 18,
    name: 'torrent power',
    price: 1600,
    growth: 2.4,
    industry: 'power',
    exchange: 'bse',
  },
  {
    id: 19,
    name: 'tata power',
    price: 1750,
    growth: 4.0,
    industry: 'power',
    exchange: 'nse',
  },
  {
    id: 20,
    name: 'jsw energy',
    price: 1450,
    growth: 3.1,
    industry: 'power',
    exchange: 'bse',
  },
];

function getAllStocks(req, res) {
  res.json(stocks);
}

function getStocksByPricing(req, res) {
  let stocksCopy = stocks.slice();
  let pricing = req.query.pricing;
  if (pricing.toLowerCase() === 'low-to-high') {
    stocksCopy.sort((a, b) => a.price - b.price);
  }
  if (pricing.toLowrCase() === 'high-to-low') {
    stocksCopy.sort((a, b) => a.price - b.price);
  }
  res.json(stocksCopy);
}

function getSortedWithGrowthRate(req, res) {
  let stocksCopy = stocks.slice();
  let growth = req.params.growth;
  if (growth.toLowerCase() === 'low-to-high') {
    stocksCopy.sort((a, b) => a.growth - b.growth);
  } else {
    stocksCopy.sort((a, b) => b.growth - a.growth);
  }
  res.json(stocksCopy);
}

function filterByExchange(req, res) {
  let exchange = req.query.exchange;
  let stocksExchange = stocks.filter(
    (stock) => stock.exchange.toLowerCase() === exchange.toLowerCase()
  );
  res.json(stocksExchange);
}

function filterByIndustry(req, res) {
  let industry = req.query.industry;
  let industrySector = stocks.filter(
    (stock) => stock.industry.toLowerCase() === industry.toLowerCase()
  );
  res.json(industrySector);
}

app.get('/stocks', getAllStocks);
app.get('/stocks/sort/pricing', getStocksByPricing);
app.get('/stocks/sort/growth', getSortedWithGrowthRate);
app.get('/stocks/filter/exchange', filterByExchange);
app.get('/stocks/filter/industry', filterByIndustry);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
