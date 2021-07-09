import { MenuEntry } from '@pancakeswap-libs/uikit'
import { getCakeAddress } from '../../utils/addressHelpers'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/craters',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool'
      }
    ]
  },
  {
    label: 'Referrals',
    icon: 'GroupsIcon',
    href: '/referrals',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/automatic-liquidity',
      },
      {
        label: 'Automatic Burning',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/automatic-burn',
      },
      {
        label: 'Referral Program',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/anti-whale',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://polygonscan.com/address/'.concat(getCakeAddress()),
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/mumuswap/',
      },
      {
        label: 'Docs',
        href: 'https://mumuswapfinance.gitbook.io/mumuswap/',
      },
      {
        label: 'Roadmap',
        href: 'https://mumuswapfinance.gitbook.io/roadmap/',
      },
      {
        label: 'Blog',
        href: 'https://mumuswap.medium.com',
      },
    ],
  },
]

export default config
