# Template Solana Monorepo

A template structured after the [@solana/web3.js v2](https://l.anza.xyz/s/js-sdk-repo) monorepo.

## How to use this template

You can [create a new repository from this template](https://github.com/new?template_name=template-solana-monorepo) and
clone that or clone this repo.

```shell
# Clone this repo or replace it with your own
git clone https://github.com/samui-build/template-solana-monorepo.git my-solana-app
# Change into the directory
cd my-solana-app
# Open the project in your favorite IDE
```

## Rename this monorepo

In order for this monorepo to work and being able to push to NPM, you need to rename a few things.

There are a few things to rename in this monorepo.

- Delete the `CHANGELOG.md` files (run `find . -name "CHANGELOG.md"` to find them)
- Update the `LICENSE` files (run `find . -name "LICENSE"` to find them
- Update the `author` field in the `package.json` files (run `find . -name "package.json"` to find them)
- NPM scope: `@samui-build` => `@your-org-name`
- GitHub repo references: `samui-build/template-solana-monorepo` => `your-org-name/your-monorepo-name`

## Support

If you have any questions about this repo, feel free to reach out to [Telegram](https://t.me/beemandev)
or [X](https://x.com/beeman_nl).
