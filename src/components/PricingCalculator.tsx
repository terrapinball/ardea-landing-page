import { useState } from 'react';

// Card brand icons - these need to be imported from App.tsx or recreated
// For now, using simple SVG placeholders that match the original design
const VisaIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="4" fill="#1A1F71"/>
    <path d="M19.5 21H17L18.9 11H21.4L19.5 21ZM15.3 11L13 18.2L12.7 16.8L11.8 12.2C11.8 12.2 11.7 11 10.1 11H6.1L6 11.2C6 11.2 7.8 11.6 9.9 12.9L12 21H14.6L18 11H15.3ZM35 21H37.3L35.3 11H33.3C32.9 11 32.5 11.2 32.3 11.6L28.6 21H31.2L31.7 19.5H34.9L35 21ZM32.4 17.5L33.7 13.7L34.4 17.5H32.4ZM29 14.1L29.4 11.7C29.4 11.7 27.7 11 25.9 11C24 11 20.5 11.8 20.5 15C20.5 18 24.6 18 24.6 19.5C24.6 21 21 20.7 19.5 19.6L19 22.1C19 22.1 20.7 22.9 23.1 22.9C25.5 22.9 28.9 21.5 28.9 18.6C28.9 15.6 24.7 15.3 24.7 14.1C24.7 12.9 27.5 13.1 29 14.1Z" fill="white"/>
  </svg>
);

const MastercardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="4" fill="#F9F9F9"/>
    <circle cx="19" cy="16" r="10" fill="#EB001B"/>
    <circle cx="29" cy="16" r="10" fill="#F79E1B"/>
    <path d="M24 8.5C26.1 10.1 27.5 12.9 27.5 16C27.5 19.1 26.1 21.9 24 23.5C21.9 21.9 20.5 19.1 20.5 16C20.5 12.9 21.9 10.1 24 8.5Z" fill="#FF5F00"/>
  </svg>
);

const DiscoverIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="4" fill="#F9F9F9"/>
    <path d="M8 16C8 11.6 11.6 8 16 8H32C36.4 8 40 11.6 40 16C40 20.4 36.4 24 32 24H16C11.6 24 8 20.4 8 16Z" fill="#FF6600"/>
    <text x="24" y="18" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">DISCOVER</text>
  </svg>
);

const AmexIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="4" fill="#006FCF"/>
    <text x="24" y="18" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">AMEX</text>
  </svg>
);

const PinDebitIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none">
    <rect width="48" height="32" rx="4" fill="#4CAF50"/>
    <text x="24" y="18" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">PIN DEBIT</text>
  </svg>
);

// Pricing Calculator Component
// This component was removed from the main landing page but kept as a backup
// for potential reimplementation in the future.
export function PricingCalculator() {
  type TransactionType = 'in-person' | 'keyed-online' | 'ach' | 'pass-on';
  type CardBrand = 'combined' | 'visa' | 'mastercard' | 'discover' | 'amex' | 'pin-debit';

  const [transactionType, setTransactionType] = useState<TransactionType>('keyed-online');
  const [cardBrand, setCardBrand] = useState<CardBrand>('combined');
  const [volumeIndex, setVolumeIndex] = useState(4); // Default to 20k (index 4)

  // Volume steps (non-linear increments)
  const volumeSteps = [
    0, 5000, 10000, 15000, 20000, 25000, 30000, 40000, 55000, 70000,
    90000, 100000, 150000, 200000, 250000, 350000, 450000, 600000, 750000, 1000000
  ];

  const formatVolume = (value: number): string => {
    if (value >= 1000000) return '$1M+';
    if (value >= 1000) return `$${(value / 1000)}k`;
    return `$${value}`;
  };

  const currentVolume = volumeSteps[volumeIndex];

  // Discount tiers based on monthly volume
  const getDiscountTier = (volume: number): number => {
    if (volume < 50000) return 1;
    if (volume < 100000) return 2;
    if (volume < 500000) return 3;
    if (volume < 1000000) return 4;
    return 5;
  };

  // In-person rates by tier
  const inPersonRates: Record<number, { percentage: number; cents: number }> = {
    1: { percentage: 0.40, cents: 8 },
    2: { percentage: 0.35, cents: 7 },
    3: { percentage: 0.25, cents: 7 },
    4: { percentage: 0.20, cents: 6 },
    5: { percentage: 0.15, cents: 6 },
  };

  // Keyed & Online rates by tier
  const keyedOnlineRates: Record<number, { percentage: number; cents: number }> = {
    1: { percentage: 0.50, cents: 25 },
    2: { percentage: 0.45, cents: 20 },
    3: { percentage: 0.35, cents: 20 },
    4: { percentage: 0.25, cents: 15 },
    5: { percentage: 0.15, cents: 15 },
  };

  // Interchange rates by card brand (average rates)
  // These are configured so that at $20k volume (Tier 1: +0.40%):
  // Visa/MC/Discover show 1.88%, AmEx shows 2.67%, PIN-Debit shows 1.08%
  const interchangeRates: Record<CardBrand, number> = {
    'combined': 1.48,
    'visa': 1.48,
    'mastercard': 1.48,
    'discover': 1.48,
    'amex': 2.27,
    'pin-debit': 0.68,
  };

  const tier = getDiscountTier(currentVolume);

  // Calculate the display rate
  const calculateRate = (): { percentage: string; cents: number; description: string } | null => {
    if (transactionType === 'ach') {
      return null; // ACH has special display
    }
    if (transactionType === 'pass-on') {
      return null; // Pass-on has special display
    }

    const rates = transactionType === 'in-person' ? inPersonRates : keyedOnlineRates;
    const tierRate = rates[tier];
    const interchange = interchangeRates[cardBrand];
    const totalPercentage = interchange + tierRate.percentage;

    return {
      percentage: totalPercentage.toFixed(2),
      cents: tierRate.cents,
      description: `Interchange (${interchange.toFixed(2)}%) + ${tierRate.percentage.toFixed(2)}%`
    };
  };

  const rate = calculateRate();

  const transactionTypes: { id: TransactionType; label: string }[] = [
    { id: 'in-person', label: 'In-person' },
    { id: 'keyed-online', label: 'Keyed & Online' },
    { id: 'ach', label: 'ACH' },
    { id: 'pass-on', label: 'Pass-on fees' },
  ];

  const cardBrands: { id: CardBrand; label: string; icon?: React.ReactNode }[] = [
    { id: 'combined', label: 'Combined Average' },
    { id: 'visa', label: 'Visa', icon: <VisaIcon className="w-8 h-5" /> },
    { id: 'mastercard', label: 'Mastercard', icon: <MastercardIcon className="w-8 h-5" /> },
    { id: 'discover', label: 'Discover', icon: <DiscoverIcon className="w-8 h-5" /> },
    { id: 'amex', label: 'American Express', icon: <AmexIcon className="w-8 h-5" /> },
    { id: 'pin-debit', label: 'PIN-Debit', icon: <PinDebitIcon className="w-8 h-5" /> },
  ];

  // Render card rates for in-person/keyed-online
  const renderCardRates = () => {
    const rates = transactionType === 'in-person' ? inPersonRates : keyedOnlineRates;
    const tierRate = rates[tier];

    if (cardBrand === 'combined') {
      // Visa, Mastercard, Discover all have the same interchange rate
      const vmcDiscoverRate = interchangeRates['visa'];

      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <VisaIcon className="w-8 h-5" />
              <MastercardIcon className="w-8 h-5" />
              <DiscoverIcon className="w-8 h-5" />
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(vmcDiscoverRate + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <AmexIcon className="w-8 h-5" />
              <span className="text-sm text-slate-600">AmEx</span>
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(interchangeRates['amex'] + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
          <div className="flex items-center justify-between bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <PinDebitIcon className="w-8 h-5" />
              <span className="text-sm text-slate-600">PIN-Debit</span>
            </div>
            <span className="font-bold text-slate-800 text-lg">
              {(interchangeRates['pin-debit'] + tierRate.percentage).toFixed(2)}% + {tierRate.cents}¢
            </span>
          </div>
        </div>
      );
    } else {
      // Show single card brand
      const brandInfo = cardBrands.find(b => b.id === cardBrand);
      return (
        <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            {brandInfo?.icon}
            <span className="text-slate-600">{brandInfo?.label}</span>
          </div>
          <span className="font-bold text-slate-800 text-xl">
            {rate?.percentage}% + {rate?.cents}¢
          </span>
        </div>
      );
    }
  };

  return (
    <div className="soft-card bg-white rounded-2xl p-6 md:p-8 border border-sand-200 max-w-xl mx-auto">

      {/* Transaction Type Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {transactionTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setTransactionType(type.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              transactionType === type.id
                ? 'bg-sage-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* In-person and Keyed/Online content */}
      {(transactionType === 'in-person' || transactionType === 'keyed-online') && (
        <>
          {/* Card Brand Dropdown */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Average {transactionType === 'in-person' ? 'In-person' : 'Keyed & Online'} Cost
            </label>
            <select
              value={cardBrand}
              onChange={(e) => setCardBrand(e.target.value as CardBrand)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
            >
              {cardBrands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.label}
                </option>
              ))}
            </select>
          </div>

          {/* Volume Slider */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Monthly Sales Volume: <span className="font-bold text-sage-600">{formatVolume(currentVolume)}</span>
            </label>
            <input
              type="range"
              min="0"
              max={volumeSteps.length - 1}
              value={volumeIndex}
              onChange={(e) => setVolumeIndex(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage-500"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>$0</span>
              <span>$1M+</span>
            </div>
          </div>

          {/* Discount Tier Badge */}
          <div className="mb-6 flex items-center justify-center">
            <span className="bg-sage-100 text-sage-700 text-sm font-medium px-3 py-1 rounded-full">
              Discount Tier {tier}
            </span>
          </div>

          {/* Rate Display */}
          {renderCardRates()}

          {/* Rate breakdown note */}
          <p className="text-xs text-slate-500 mt-4 text-center">
            Rates shown include interchange + Helcim markup
          </p>
        </>
      )}

      {/* ACH Content */}
      {transactionType === 'ach' && (
        <div className="text-center space-y-4">
          <p className="text-slate-600 mb-4">
            Accept ACH and EFT/PAD direct withdrawals from your customers' bank accounts.
          </p>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-sm text-slate-500 mb-2">ACH Acceptance</p>
            <p className="text-3xl font-bold text-slate-800 mb-4">0.5% + 25¢</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <p className="font-semibold text-slate-800">Capped at $6</p>
                <p className="text-slate-500">for transactions below $25,000</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <p className="font-semibold text-slate-800">+0.05%</p>
                <p className="text-slate-500">for transactions above $25,000</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pass-on Fees Content */}
      {transactionType === 'pass-on' && (
        <div className="space-y-6">
          <p className="text-slate-600 text-center mb-4">
            Get free credit card processing. Pass the fees to your customers.
          </p>

          {/* In-person surcharging */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-3">In-person Surcharging</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Credit cards</span>
                <span className="font-bold text-sage-600 text-lg">You pay 0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Debit cards</span>
                <span className="text-slate-500 text-sm">Standard in-person rates</span>
              </div>
            </div>
          </div>

          {/* Online convenience fees */}
          <div className="bg-slate-50 rounded-xl p-6">
            <h4 className="font-semibold text-slate-800 mb-3">Online Convenience Fees</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Credit cards</span>
                <span className="font-bold text-sage-600 text-lg">You pay 0%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600">ACH payments</span>
                <span className="text-slate-500 text-sm">ACH rates when selected</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Powered by Helcim badge */}
      <div className="mt-6 pt-4 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          Powered by <span className="font-medium">Helcim</span> payment processing
        </p>
      </div>
    </div>
  );
}

export default PricingCalculator;
