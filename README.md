# AutoTwit

A [Vencord](https://github.com/Vendicated/Vencord) userplugin that rewrites `x.com` and
`twitter.com` links to `fxtwitter.com` when you send a message, so they embed properly.

The target domain can be changed in the plugin's settings (e.g. `vxtwitter.com`,
`fixupx.com`).

## Installation

AutoTwit is a **userplugin**, so Vencord has to be built from source. See the
[Vencord install guide](https://docs.vencord.dev/installing/).

```sh
pnpm install
pnpm sync # copies src/ into ~/Documents/Vencord/src/userplugins/AutoTwit by default
VENCORD_PATH=/path/to/Vencord pnpm sync # ...or point it somewhere else!
```

Then build Vencord as usual:

```sh
cd /path/to/Vencord
pnpm build
pnpm inject
```

## Licence

MIT - see [LICENSE.MD](LICENSE.MD).
