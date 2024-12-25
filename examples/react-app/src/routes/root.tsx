import { Container } from '@radix-ui/themes';
import { foo as coreFoo } from '@samui-build/core';
import { useFoo, useSolanaClient } from '@samui-build/react';
import { useState } from 'react';

function Root() {
    const foo = useFoo();
    const coreFooResult = coreFoo();
    const [version, setVersion] = useState('');
    const client = useSolanaClient();

    return (
        <Container mx={{ initial: '3', xs: '6' }}>
            <pre>{JSON.stringify({ coreFooResult, foo }, null, 4)}</pre>
            <button
                onClick={async () => {
                    setVersion('Loading...');
                    return await client.rpc
                        .getVersion()
                        .send()
                        .then(res => {
                            setVersion(res['solana-core']);
                        });
                }}
            >
                Get Solana Version
            </button>
            <pre>{version}</pre>
        </Container>
    );
}

export default Root;
