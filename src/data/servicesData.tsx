import React from 'react';

export const mockServices = [
  { 
    id: 'bisq', 
    name: 'Bisq', 
    image: 'https://kycnot.me/files/services/pictures/4e9860b2e0.svg', 
    verified: true, 
    type: 'Exchange', 
    description: "Buy and sell bitcoin for fiat (or other cryptocurrencies) privately and securely using Bisq's peer-to-peer network and open-source desktop software. No registration required.", 
    score: 10, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc', 'btc-ln', 'fiat', 'cash'] 
  },
  { 
    id: 'basicswap-beta', 
    name: 'BasicSwap', 
    image: 'https://kycnot.me/files/services/pictures/1b20f0fb7c.png', 
    verified: true, 
    type: 'Exchange', 
    description: "Cross-chain trading exchange (DEX) peer-to-peer trading of cryptocurrencies like Bitcoin and Monero. It uses Particl's network, atomic swaps, and scriptless scripts for transactions without third-party involvement.", 
    score: 10, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc'] 
  },
  { 
    id: 'unstoppable-swap', 
    name: 'UnstoppableSwap', 
    image: 'https://kycnot.me/files/services/pictures/099ee3694f.png', 
    verified: true, 
    type: 'Exchange', 
    description: "Bitcoin -> Monero atomic swaps, securely and in a decentralized manner using a state-of-the-art cryptographic protocol and open-source desktop software.", 
    score: 10, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc'] 
  },
  { 
    id: 'robosats', 
    name: 'RoboSats', 
    image: 'https://kycnot.me/files/services/pictures/f03af1889a.png', 
    verified: true, 
    type: 'Exchange', 
    description: "P2P exchange bitcoin for national currencies. Robosats simplifies the peer-to-peer user experience.", 
    score: 10, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc', 'btc-ln', 'fiat', 'cash'] 
  },
  { 
    id: 'majestic-bank', 
    name: 'Majestic Bank', 
    image: 'https://kycnot.me/files/services/pictures/b6fa2f00d3.png', 
    verified: true, 
    type: 'Exchange', 
    description: "Anonymous exchange: Exchange Bitcoin to Monero and vice versa.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc'] 
  },
  { 
    id: 'haveno', 
    name: 'Haveno', 
    image: 'https://kycnot.me/files/services/pictures/9443d65d24.png', 
    verified: false, 
    type: 'Exchange', 
    description: "Private, non-custodial P2P exchange for seamless crypto and fiat trading. Built on Tor and Monero for maximum privacy and security.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['xmr', 'fiat', 'cash'] 
  },
  { 
    id: 'ivpn', 
    name: 'IVPN', 
    image: 'https://kycnot.me/files/services/pictures/3e3cb66f67.png', 
    verified: true, 
    type: 'VPN', 
    description: "No logs, fully anonymous VPN. Resist Online Surveillance.", 
    score: 9, 
    kycLevel: 1, 
    currencies: ['xmr', 'btc', 'btc-ln', 'fiat', 'cash'] 
  },
  { 
    id: 'cryptostorm', 
    name: 'cryptostorm', 
    image: 'https://kycnot.me/files/services/pictures/e47f809dea.png', 
    verified: true, 
    type: 'VPN', 
    description: "Privacy-friendly VPN with strong cryptography, no logs, anonymous payment methods, and Tor and I2P access. They support OpenVPN and WireGuard.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc', 'btc-ln', 'fiat'] 
  },
  { 
    id: 'lnp2pbot', 
    name: 'lnp2pBot', 
    image: 'https://kycnot.me/files/services/pictures/edac45dd8e.png', 
    verified: false, 
    type: 'Exchange', 
    description: "A Telegram bot for buying and selling bitcoin on the Lightning Network, in a peer-to-peer manner, using your local currency without requiring KYC or providing personal data.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['btc-ln', 'fiat', 'cash'] 
  },
  { 
    id: 'sms4sats', 
    name: 'sms4sats', 
    image: 'https://kycnot.me/files/services/pictures/5691cdd9b3.png', 
    verified: true, 
    type: 'SMS', 
    description: "SMS verification numbers online, pay using the Lightning Network. Cheap, easy, fast and anonymous.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['btc-ln'] 
  },
  { 
    id: 'orangefren', 
    name: 'OrangeFren', 
    image: 'https://kycnot.me/files/services/pictures/5721c0cadf.png', 
    verified: true, 
    type: 'Aggregator', 
    description: "Allows you to check and compare rates for non-kyc exchanges.", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc', 'btc-ln', 'fiat'] 
  },
  { 
    id: 'cyphergoat', 
    name: 'CypherGoat', 
    image: 'https://kycnot.me/files/services/pictures/930c69b918.png', 
    verified: false, 
    type: 'Aggregator', 
    description: "Swap your crypto at the beeest rate on the market! Fast, private, open source!", 
    score: 9, 
    kycLevel: 0, 
    currencies: ['xmr', 'btc', 'btc-ln'] 
  },
];