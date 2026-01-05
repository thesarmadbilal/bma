
import { ServiceType } from './types';
import { PieChart, Briefcase, Handshake, Package, DollarSign, FileSearch } from '@/components/icons/MarketIcons';

export const services: ServiceType[] = [
  { 
    id: 'equities', 
    title: 'Equities', 
    icon: PieChart,
    description: 'Advanced trading solutions for stock market investments',
    backgroundImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    fullDescription: 'BMA Equity Sales desk ranks amongst the top in the industry by market share and offers equity execution to local as well as international clients. BMA is proud to have the largest setup of international broker-dealers in Pakistan and our desks have been the recipient of multiple awards including being ranked amongst the top 3 in Pakistan by Asia Money for local brokerage house, most improved brokerage house and best sales person. BMA Equity team has a strength of over 19 seasoned professionals with a combined equity sales experience of 225 years. Our sales traders provide constant and timely color on market moves and news flow which impact price action. We ensure best execution through our utmost emphasis on compliance, order security and the highest ethical standards. BMA follows an agency brokerage model which further minimizes risk and conflict of interest.',
    features: [
     
    ]
  },
  { 
    id: 'investment-banking', 
    title: 'Investment Banking', 
    icon: Briefcase,
    description: 'Strategic advisory and capital raising solutions',
    backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80',
    //fullDescription: 'BMA Capital ranks amongst the top Corporate Finance & \n Advisory firms in Pakistan and offers a full range of investment banking and financial advisory solutions to both the public and the private sector. BMA has successfully closed deals in excess of US$ 12 billion which include some of the landmark transactions in the country including the US$2.6 billion privatization of PTCL (the largest FDI into Pakistan till date), US$1.6 billion KAPCO privatization (largest privatization in Asia at the time), US$811 million OGDCL GDR and US$ 898 million PTCL GDR. We have recently closed the secondary public offering of Pakistan Petroleum Limited (US$153 million) and are currently mandated for the privatization of Islamabad Electric Supply Company and Lahore Electric Supply Company. BMA Capital is the recipient of many awards and commendations including the Best Investment Bank in 2010 by Euromoney, The Banker Deal of The Year for Asia Pacific in 2009 & 2010 (2nd Prize) and Best Corporate Finance & House of the Year Runner up “ Equity & Advisory (2009). We are the only Pakistani firm to be recognized in the International Mergers & Acquisitions League Tables (Bloomberg, Thomson and FactSet) alongside major bulge bracket investment banks.',
    
    fullDescription: `BMA Capital ranks amongst the top Corporate Finance & Advisory firms in Pakistan and offers a full range of investment banking and financial advisory solutions to both the public and the private sector. BMA has successfully closed deals in excess of US$ 12 billion which include some of the landmark transactions in the country including the US$2.6 billion privatization of PTCL (the largest FDI into Pakistan till date), US$1.6 billion KAPCO privatization (largest privatization in Asia at the time), US$811 million OGDCL GDR and US$ 898 million PTCL GDR.

We have recently closed the \n secondary public offering of Pakistan Petroleum Limited (US$153 million) and are currently mandated for the privatization of Islamabad Electric Supply Company and Lahore Electric Supply Company.

BMA Capital is the recipient of many awards and commendations including the Best Investment Bank in 2010 by Euromoney, The Banker Deal of The Year for Asia Pacific in 2009 & 2010 (2nd Prize) and Best Corporate Finance & House of the Year Runner up “ Equity & Advisory (2009). We are the only Pakistani firm to be recognized in the International Mergers & Acquisitions League Tables (Bloomberg, Thomson and FactSet) alongside major bulge bracket investment banks.`,
    
    features: [
      
    ]
  },
  { 
    id: 'investment-advisory', 
    title: 'Investment Advisory', 
    icon: Handshake,
    description: 'Personalized wealth management strategies',
    backgroundImage: '/lovable-uploads/advisory.png',
    // fullDescription: ' BMA Investment Advisors limited (BMA Asset Management Company) licensed to perform Investment Advisory Services as per the NBFC Rules, 2003. \n Incorporated in April 2005 and fully licensed to carry out asset management and investment advisory services in November 2005. The company began operations in June 2005. It has rapidly established a strong presence as a pioneer in asset management. BMA launched Pakistan‘s first ever open end off-shore fund, the BMA Pakistan Opportunities Fund. BMA Investment Advisors Limited (BMA Asset Management Company) is a registered member of the Mutual Funds Association of Pakistan. Company Registration No: 0049999 | National Tax No. 2469387-1 | Auditors: RSM Avais Hyder Liaquat Nauman | Legal Advisor: Khawaja & Khawaja Advocates and Legal Consultants.',
    
    fullDescription: `BMA Investment Advisors limited (BMA Asset Management Company) licensed to perform Investment Advisory Services as per the NBFC Rules, 2003. 
  Incorporated in April 2005 and fully licensed to carry out asset management and investment advisory services in November 2005. The company began operations in June 2005. It has rapidly established a strong presence as a pioneer in asset management. BMA launched Pakistan‘s first ever open end off-shore fund, the BMA Pakistan Opportunities Fund. BMA Investment Advisors Limited (BMA Asset Management Company) is a registered member of the Mutual Funds Association of Pakistan.

  Company Registration No: 0049999
  \n National Tax No: 2469387-1
  \n Auditors: RSM Avais Hyder Liaquat Nauman
  \n Legal Advisor: Khawaja & Khawaja Advocates and Legal Consultants.`,
    
    features: [
     
    ]
  },
  { 
    id: 'commodities', 
    title: 'Commodities', 
    icon: Package,
    description: 'Trade in diverse commodity markets',
    backgroundImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    fullDescription: 'BMA Capital Management provides clients with access to commodities trading through Pakistan Mercantile Exchange (PMEX), covering energy, metals, and agricultural commodities. Our services are structured to support portfolio diversification and effective risk management within a disciplined and compliant framework. Backed by market expertise, robust execution capabilities, and adherence to regulatory standards, we deliver reliable and efficient commodities trading solutions.',
    features: [
      
    ]
  },
  { 
    id: 'forex', 
    title: 'Money Market/Forex', 
    icon: DollarSign,
    description: 'Currency trading and money market operations',
    backgroundImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    fullDescription: 'BMA Fixed Income and FX group has been a leader In Pakistan Financial Markets, serving top institutions in the country since the firm`s inception. BMA ranks amongst the top three fixed income brokers in Pakistan, and conducts brokerage in Government Securities (T-bills & Pakistan Investment Bonds) as well as in Corporate Debt Securities and the Interbank Repo Market. BMA FX team deals in Rupee-US Dollar exchange in both the spot and forward interbank FX markets. BMA’s Fixed Income & FX group is actively supported by the Economic Research team and assist clients in preparing a long term strategy as well as capitalize on short term trading opportunities. Our team has a combined dealing experience of over 54 years.',
    features: [
     
    ]
  },
  { 
    id: 'research', 
    title: 'Research', 
    icon: FileSearch,
    description: 'In-depth market analysis and insights',
    backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    fullDescription: 'BMA has the widest research coverage in Pakistan and is highly ranked by clients due to the team’s consistent performance. BMA Research won the Best Analyst Award – Runner Up from Pakistan CFA Association in 2014. BMA Research comprises of 6 analysts with a combined experience of 26 years and covers 55 companies across 12 sectors that comprise 75% of the KSE-100 free float market capitalization. Our key strength is the relationships that we have developed with the companies that we cover and the clients that we serve. Our publications are available on Bloomberg and Thomson Reuters etc.',
    features: [
     
    ]
  }
];
