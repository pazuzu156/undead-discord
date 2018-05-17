# Undead Discord
Undead Discord was a fork of the Undead user styles by [chrisduerr](https://github.com/chrisduerr/userstyles). Full development of this style has moved here.

Undead Discord is a dark, clean theme for Discord using JUST CSS. The use of [BeautifulDiscord](https://github.com/leovoel/BeautifulDiscord) is all that's needed to use this theme.

## Installing
Currently, you need to build the CSS to use it. To do so, using Node.JS, run `npm run build` to build a normal CSS and a compressed CSS file, which you can use BeautifulDiscord to apply: `$ beautifuldiscord --css dist/undead-discord.min.css`

## Removing
Remove the theme from Discord using BeautifulDiscord: `$ beautifuldiscord --revert`

You can clean dist files by running `npm run clean`

## Contributing
To contribute, fork the repo follow the style scheme described in CONTRIBUTING.md

### Editing
Edit the `.scss` files if you want to make changes. You can use `npm start` to run a watcher to auto-build and apply changes you make while editing to automatically reflect in Discord.
