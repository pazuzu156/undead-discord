# Undead Discord Design Scheme

## Table of Contents
 - [About](#about)
 - [General](#general)
 - [Colors](#colors)
 - [Fonts](#fonts)
 - [Buttons](#buttons)
 - [Contributing](#contributing)

## About
This is a brief design scheme overview outlining how the Undead design should be. Following this layout will ensure that the design of Undead Discord follows that of the design's original author.

## General
![](https://u.teknik.io/RiMVN.png)

The general design of the Undead themes focuses on a simple and clear design.

In short, this means:
 - No rounded corners
 - No transparency
 - No blur
 - No gradients, flat colors

## Colors
The colors used for any theme should always be modular, no color anywhere should ever be fixed and hard to change.
This allows modularity for the user and makes small tweaks incredibly easy.

To further ensure the simplicity of these themes the amount of colors used should be kept to a minimum. Instead of
making use of 10 different background colors, using just one or two and then generating the rest using brightness is
an option for example.

This is the general set of colors the Undead themes should be based on:

| Name                       | Hex     | Image                              |
|----------------------------|---------|:----------------------------------:|
| Primary Background Color   | #1b1b1b | ![](https://u.teknik.io/JKrX5.png) |
| Secondary Background Color | #262626 | ![](https://u.teknik.io/NxTsn.png) |
| Primary Foreground Color   | #9e9e9e | ![](https://u.teknik.io/reIwl.png) |
| Secondary Foreground Color | #616161 | ![](https://u.teknik.io/dHYcH.png) |
| Highlight Color            | #752a2a | ![](https://u.teknik.io/3jrH3.png) |
| Secondary Highlight Color  | #ac4142 | ![](https://u.teknik.io/DhStq.png) |

Because of the intensity of the highlight color, it should only be used for backgrounds, not for text.
For colored text like code syntax the following [base16](https://github.com/chriskempson/base16) colors should be used:

| Name    | Color   | Image                              |
|---------|---------|:----------------------------------:|
| Red     | #ac4142 | ![](https://u.teknik.io/4XZuZ.png) |
| Green   | #90a959 | ![](https://u.teknik.io/tIIAr.png) |
| Yellow  | #f4bf75 | ![](https://u.teknik.io/KRUSL.png) |
| Blue    | #6a9fb5 | ![](https://u.teknik.io/zfSfj.png) |
| Magenta | #aa759f | ![](https://u.teknik.io/Zcz7x.png) |
| Cyan    | #75b5aa | ![](https://u.teknik.io/MuPob.png) |
| White   | #616161 | ![](https://u.teknik.io/FNLM2.png) |

Note that there currently is no convention for how exactly code syntax should be colored.
As a general guideline the [vim-undead](https://github.com/chrisduerr/vim-undead) theme can be used.

## Fonts
Currently there is no standardized set of fonts for the Undead theme, but most likely candidates are the
Fira Mono + Fira Sans fonts from Mozilla.

For using glyphs instead of SVGs or Images the [Font Awesome](https://fontawesome.com/icons?m=free) icon font can be used.

## Buttons
Buttons are one of the more complicated elements of a UI, they are reused in a lot of different places with many different
styles on top of many different backgrounds. The main goal of standardizing these buttons is making it obvious what
can be clicked and what cannot, while still looking sleek and non-intrusive.

### Explicit buttons on primary background
![](https://u.teknik.io/YdEKf.png)

With buttons that are explicitly added as standalone buttons in a UI, like buttons for transmitting a form, the color
should separate itself clearly from the background color. There should also be an interaction with the mouse whenever
the user decides to hover above, or click the button.

| Name       | Color                      |
|------------|----------------------------|
| Background | Secondary Background Color |
| Foreground | Primary Foreground Color   |
| Hover      | 110% Brightness            |
| Active     | 115% Brightness            |

### Explicit buttons on secondary background
![](https://u.teknik.io/K03qb.png)

The explicit buttons on the secondary background are very similar to the buttons on the primary background color.
However since the secondary background color can't be used as a button background,
the primary background color is used instead.

| Name       | Color                    |
|------------|--------------------------|
| Background | Primary Background Color |
| Foreground | Primary Foreground Color |
| Hover      | 110% Brightness          |
| Active     | 115% Brightness          |

### Integrated buttons on primary background
![](https://u.teknik.io/QRnl9.png)

Sometimes in navigational menus or other structures there is a collection of a lot of buttons.
In this scenario it is unfit to have explicit buttons for every entry because it can look cluttered and it is already
obvious to the user that the elements can be clicked. To improve this situation the background color of the button is
transparent by default and just changes whenever the user tries to interact with it.

Here the background color is changed from primary to secondary background whenever the user hovers above it and upon click
the button's brightness increases.

| Name       | Color                                        |
|------------|----------------------------------------------|
| Background | Primary Background Color                     |
| Foreground | Primary Foreground Color                     |
| Hover      | Secondary Background Color                   |
| Active     | Secondary Background Color + 105% Brightness |

### Integrated buttons on secondary background
![](https://u.teknik.io/UIWaC.png)

The integrated buttons on the secondary background color are similar to the integrated buttons on the primary background.
However instead of the secondary background color, the primary background color is used when the user hovers above the button.

| Name       | Color                                        |
|------------|----------------------------------------------|
| Background | Secondary Background Color                   |
| Foreground | Primary Foreground Color                     |
| Hover      | Primary Background Color                     |
| Active     | Primary Background Color + 105% Brightness   |

## Contributing
While this design scheme should be used when working on the theme, it's by no means a requirement. Just as the original design scheme is subject to change, so is this. If a design change works, it might be added to this scheme. For more contributions related to the design scheme, please feel free to fill out an [issue](https://github.com/pazuzu156/userstyles/issues) and I'll take a look at it.
