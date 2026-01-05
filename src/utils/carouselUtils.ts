
// Helper function to generate benefits based on service type
export function generateBenefits(serviceId: string): string[] {
  switch (serviceId) {
    case 'equities':
      return [
        'Advanced trading platform with real-time data',
        'Expert research and market analysis',
        'Competitive commission rates',
        'Dedicated account managers'
      ];
    case 'investment-banking':
      return [
        'Strategic M&A advisory',
        'Capital raising through debt and equity',
        'IPO management and support',
        'Corporate restructuring'
      ];
    case 'asset-management':
      return [
        'Professionally managed investment portfolios',
        'Diversified investment strategies',
        'Regular performance reporting',
        'Tax-efficient investment options'
      ];
    case 'financial-services':
      return [
        'Comprehensive financial planning',
        'Wealth management solutions',
        'Retirement planning',
        'Estate planning services'
      ];
    case 'commodities':
      return [
        'Trade across multiple commodity markets',
        'Advanced technical analysis tools',
        'Hedging strategies for businesses',
        'Market insights from commodity experts'
      ];
    case 'money-market':
      return [
        'Access to global currency markets',
        'Competitive exchange rates',
        'Risk management solutions',
        'Hedging against currency fluctuations'
      ];
    case 'research':
      return [
        'In-depth market analysis reports',
        'Company-specific research',
        'Economic forecasts and trends',
        'Investment strategy recommendations'
      ];
    default:
      return [
        'Professional support and guidance',
        'Tailored solutions for your needs',
        'Transparent fee structure',
        'Ongoing monitoring and adjustments'
      ];
  }
}
