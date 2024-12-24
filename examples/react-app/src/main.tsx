import './index.css';
import '@radix-ui/themes/styles.css';

import { Flex, Section, Theme } from '@radix-ui/themes';
import { SolanaClientProvider } from '@samui-build/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Nav } from './components/Nav.tsx';
import Root from './routes/root.tsx';

const rootNode = document.getElementById('root')!;
const root = createRoot(rootNode);
root.render(
    <StrictMode>
        <Theme>
            <SolanaClientProvider rpc="https://api.devnet.solana.com">
                <Flex direction="column">
                    <Nav />
                    <Section>
                        <Root />
                    </Section>
                </Flex>
            </SolanaClientProvider>
        </Theme>
    </StrictMode>,
);
