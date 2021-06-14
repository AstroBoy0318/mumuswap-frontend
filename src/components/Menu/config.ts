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
        href: 'https://trade.mumuswap.finance/#/swap'
      },
      {
        label: 'Liquidity',
        href: 'https://trade.mumuswap.finance/#/pool'
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
        href: 'https://docs.mumuswap.finance/',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.mumuswap.finance/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.mumuswap.finance/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.mumuswap.finance/anti-whale',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'BscScan',
        href: 'https://bscscan.com/address/'.concat(getCakeAddress()),
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
        href: 'https://docs.mumuswap.finance/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.mumuswap.finance/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://mumuswap.medium.com',
      },
    ],
  },
]

export default config
