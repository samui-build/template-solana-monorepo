export function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flexGrow: 1 }}>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: '1.6', margin: 0 }}>
                    <span style={{ fontFamily: 'monospace' }}>[samui-build]</span> React App
                </h1>
            </div>
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <a href="https://github.com/samui-build/template-solana-monorepo" target="_blank" rel="noreferrer">
                    <img
                        src="https://img.shields.io/github/stars/samui-build/template-solana-monorepo?style=social"
                        alt="GitHub Repo stars"
                    />
                </a>
            </div>
        </header>
    );
}
