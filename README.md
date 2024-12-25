# Template Solana Monorepo

A template structured after the [@solana/web3.js v2](https://l.anza.xyz/s/js-sdk-repo) monorepo.

## How to use this template

Clone a repo and remove the `.git` folder.

```shell
# Clone this repo
git clone https://github.com/samui-build/template-solana-monorepo.git my-solana-app
# Change into the directory
cd my-solana-app
# Remove the `.git` folder
rm -rf .git
# Initialize the repo
git init
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
- Enable [changeset-bot](https://github.com/apps/changeset-bot) and enable
  `Allow GitHub Actions to create and approve pull requests` for your GitHub organization.
- Enable [BundleMon](https://github.com/organizations/samui-build/settings/installations/58793890) for the repo or
  delete `.github/workflows/bundlesize.yml` and `.bundlemonrc.json`

## Commit and push

Commit and push the changes.

```shell
git add .
git commit -m "chore: initial commit"
# add the remote according to the instructions
git push origin main
```

## Support

If you have any questions about this repo, feel free to reach out to [Telegram](https://t.me/beemandev)
or [X](https://x.com/beeman_nl).
