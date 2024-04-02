import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'


export const projects = [
  {
    name: 'Video API',
    description: 'A simple video API that allows you to upload, download, and manipulate multimedia with AI.',
    link: { href: 'https://github.com/mbajaj/video-api', label: 'Volunteer' },
    logo: logoCosmos,
  },
  {
    name: 'Listenbravo: ',
    description: 'Unveil Hidden Buyers to Unlock Your Business Potential ',
    link: { href: 'https://listenbravo.com/', label: 'Advisory' },
    logo: "https://listenbravo.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=48&q=75"
  },
  {
    name: 'Virtual Marketer',
    description: 'An AI marketing tool that optimizes you inbound leads generations',
    link: { href: '/notfound', label: 'Coming Soon' },
    logo: logoAnimaginary,
  },
  {
    name: 'HSR Founders Club',
    description: 'A community of 500+ founders from bangalore. We organize events, brainstorm ideas and help each other.',
    link: { href: 'https://hsrfounders.club/', label: 'Community' },
    logo: logoHelioStream,
  },
  {
    name: 'Personal Website',
    description: 'A small personal website tos showcase my profile, blogs, etc',
    link: { href: 'http://mbajaj.dev', label: 'Personal' },
    logo: logoPlanetaria,
  },
]

export const oldProjects = [
  {
    name: 'RIVI',
    description: 'A drop in google sheets replacement with support for 1m+ rows and native db connectivity',
    link: { href: '/notfound', label: 'Shutdown' },
    logo: logoOpenShuttle,
  },
]