import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'Mumu-BUSD LP',
    lpAddresses: {
      97: '0x8acEe19Fa508f9Bfded71e55d457cC9AE05Ad116',
      56: '0xb3fed4405d8131e38a9101537ced45853aad4621',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x9E0d46143303dE7296e68F38936564ce195FF04f',
      56: '0x8dbc30110397b6f764cc6621e6b183c6412b4f34',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'Mumu-BNB LP',
    lpAddresses: {
      97: '0xf40800a2303606c01eb08086ed479b87ac9c34e1',
      56: '0x6a7c132af4a5f592f970a21ad29d2ccc2ba40150',
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x9E0d46143303dE7296e68F38936564ce195FF04f',
      56: '0x8dbc30110397b6f764cc6621e6b183c6412b4f34',
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
  }, /*
  {
    pid: 4,
    risk: 4,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 4,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: contracts.wbnb,
  }, */
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'Mumu',
    lpAddresses: {
      97: '0x8acEe19Fa508f9Bfded71e55d457cC9AE05Ad116',
      56: '0xb3fed4405d8131e38a9101537ced45853aad4621', // EGG-BUSD LP
    },
    tokenSymbol: 'Mumu',
    tokenAddresses: {
      97: '0x9E0d46143303dE7296e68F38936564ce195FF04f',
      56: '0x8dbc30110397b6f764cc6621e6b183c6412b4f34',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },/*
  {
    pid: 11,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },  
  {
    pid: 7,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xf8593167D7ccc1Dc6e99Ab1C3792032F40093bBf', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  // {
  //   pid: 6,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf8593167D7ccc1Dc6e99Ab1C3792032F40093bBf', // BTCB-BUSD LP
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAddresses: contracts.busd,
  // },  
  {
    pid: 8,
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
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: contracts.busd,
  },
  */
]

export default farms
