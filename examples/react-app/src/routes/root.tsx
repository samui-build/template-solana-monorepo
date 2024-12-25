import { foo as coreFoo } from '@samui-build/core';
import { SolanaGetVersion, useFoo } from '@samui-build/react';

export function Root() {
    const foo = useFoo();
    const coreFooResult = coreFoo();

    return (
        <div>
            <pre>{JSON.stringify({ coreFooResult, foo }, null, 4)}</pre>
            <SolanaGetVersion />
        </div>
    );
}
