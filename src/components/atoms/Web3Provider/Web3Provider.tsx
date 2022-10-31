import React, { ReactNode } from 'react';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import defaultWagmiClient from './wagmiClient';
import { chains as defaultChains } from './chains';

/** RainbowKit provider */

interface Web3ProviderProps {
  wagmiClient?: any;
  chains?: any;
  children: ReactNode;
}

const Web3Provider: React.FC<Web3ProviderProps> = ({
  wagmiClient,
  chains,
  children,
}: Web3ProviderProps) => {
  return (
    <WagmiConfig client={wagmiClient || defaultWagmiClient}>
      <RainbowKitProvider chains={chains || defaultChains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Web3Provider;
