# Changelog of PrivacyWire

## 0.4.0
- Fixed: Bug during cloning allowed elements after giving consent

## 0.3.9 
- Added: Textformatter support for TextformatterVideoEmbed (Thank you @teppokoivula !)

## 0.3.8
- Fixed: Bug with ask consent window when cookies get accepted via the main banner

## 0.3.7
- Added: Config options to show alternative headline and text elements within the options banner 

## 0.3.6
- Added: Config option to prevent automatic rendering.
- Added: New methods renderHeadContent() and renderBodyContent().

## 0.3.4
- Fixed: sanitize alternative banner template path to ignore leading slash

## 0.3.3
- Added: Config option to replace the original banner template (located in site/modules/PrivacyWire/PrivacyWireBanner.php) with an alternative banner template
- Added: hookable method to get JS file
- Added: hookable method to get inline JS
- Added: hookable method to get (alternative) banner template file
- Changed: Optimized CSS (even smaller - 458 bytes instead of 554 bytes)
- Changed: Re-arranged the config options to provide better structure

## 0.3.2
- Fixed: Bug with "Accept all" Button to load elements
- Added: Config option to choose the banner header tag between `<header>` and `<div>`

## 0.3.1
- Added: Config option within Textformatter to choose open and close tag

## 0.3.0
- Added Feature: When the user hasn't given consent to a specific cookie category, show an alternative element with asking for consent. To enable this feature, add following data-attribute to the element ``` data-ask-consent="1"```. In the module configuration you can choose, what text should be in that window. Example: ``` <iframe src="" data-src="https://www.example.com/" data-category="marketing" data-ask-consent="1" frameborder="0" height="400" width="400"></iframe>```

## 0.2.7
- Fixed: Updates more attributes of elements (srcset, height, width) - important for responsive images or iFrames

## 0.2.6
- Added: Config option to show an "Accept All" instead of "Toggle" Button within the "Choose Cookies" window.

## 0.2.5
- Fixed: Changing version number now works as expected

## 0.2.4
- Fixed: Typo in consent of external_media

## 0.2.3
- Added: Config option for message timeout

## 0.2.2 
- Added: Config option to output unstyled (no css) PrivacyWire 

## 0.2.1
- Added: New cookie category "functional"

## 0.2.0
- Changed: Major rewrite of PrivacyWire.js -> now around half the size (main reason was babel with usage of js classes (ES6))
- Added: New possibility to add a custom js function name which is triggered after saving options

## 0.1.2
- Added: Config option for using ProCache minification or not

## 0.1.1 
- Fixed: Error during uninstall

## 0.1.0 
- Changed: Script detection now uses the data-category attribute instead of type="optin" (W3C validation)

## 0.0.7 
- Fixed: Multi-lang privacy & imprint link

## 0.0.6
- Fixed: CSS-Debugging for hiding unused buttons, added ProCache support for the JavaScript tag

## 0.0.5 
- Added: Multi-language support included completely (also in TextFormatter).
- Added: Possibility to async load other assets (e.g. ``<img type="optin" data-category="marketing" data-src="https://via.placeholder.com/300x300">``)

## 0.0.4 
- Added: Possibility to add an imprint link to the banner

## 0.0.3
- Added: Multi-language support for module config (still in development)

## 0.0.2
- First release

## 0.0.1
- Early development state (ALPHA)