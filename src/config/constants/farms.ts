import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Mumu-BUSD LP',
    lpAddresses: {
      97: '0x383489bD934B077Ac0b3A9325E73BF72D9835AdA',
      56: '0xE82F9466045641Df255F348C415E24Aa18b049cD',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0xAa540172005Dfa29Fe8CE67dAc8D9654C52DA499',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Mumu-BNB LP',
    lpAddresses: {
      97: '0xa40f90E8e60928eB56FEa610D0591D776ab54CC6',
      56: '0x10934D483c3C6057A132532838a63d507c0C543F',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0xAa540172005Dfa29Fe8CE67dAc8D9654C52DA499',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Mumu',
    lpAddresses: {
      97: '0x383489bD934B077Ac0b3A9325E73BF72D9835AdA',
      56: '0xE82F9466045641Df255F348C415E24Aa18b049cD', // EGG-BUSD LP
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x47572493C7DD70653940Dff6444897712a007EDC',
      56: '0xAa540172005Dfa29Fe8CE67dAc8D9654C52DA499',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'BANANA',
    lpAddresses: {
      97: '',
      56: '0x93f180636f42EFb0aD2BF7e0C945e2De652321c3', // BANANA-BUSD LP
    },
    tokenSymbol: 'BANANA',
    tokenAddresses: {
      97: '',
      56: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
]

export default farms
