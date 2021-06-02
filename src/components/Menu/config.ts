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
    label: 'Craters',
    icon: 'PoolIcon',
    href: '/craters',
  },
  {
    label: 'Features',
    icon: 'PriceGuardIcon',
    items: [
      {
        label: 'Automatic LP',
        href: 'https://docs.mumuswap.net/',
      },
      {
        label: 'Automatic Burning',
        href: 'https://docs.mumuswap.net/automatic-burning',
      },
      {
        label: 'Referral Program',
        href: 'https://docs.mumuswap.net/referral-program',
      },
      {
        label: 'Anti Whale',
        href: 'https://docs.mumuswap.net/anti-whale',
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
        href: 'https://docs.mumuswap.net/',
      },
      {
        label: 'Roadmap',
        href: 'https://docs.mumuswap.net/roadmap',
      },
      {
        label: 'Blog',
        href: 'https://mumuswap.medium.com',
      },
    ],
  },
]

export default config
