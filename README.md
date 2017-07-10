# iota-AdBlock
A project to use the major benefits of IOTA (infinitesimally small nanopayments, no transaction fees, etc.) to improve the friction between website publishers and people using ad blockers.

## Demo
![Alt text](/demo.gif?raw=true "Website Demo")

## Background
Currently there is no widely adopted mechanism for users to make nanopayments to publishers when a user blocks ads on a page. By default, ad blockers typically block all ads all the time (except for a few ads that the ad blocker makers allow to be displayed) and don't compensate publishers for blocking ads. To combat this, publishers are increasingly detecting ad blockers and restricting access to site content unless the blocker whitelists the site.

The basic challenge is that there is no easy way for the user to make a nanopayment to the publisher on a per ad (or per page view) basis. Two of the major reasons this is not easy are transaction fees and scalability. Given the size of payment per ad, transaction fees generally make the nanopayment cost prohibitive. Plus, the advertising exchanges are automatically processing huge levels of transactions. Being able to scale is a big difficulty.

![alt text](https://www.centro.net/blogdev/wp-content/uploads/2017/02/1_RTB_Ecosystem_with_border.jpg "Ad Exchange")

## Current Alternatives
There are several projects which are attempting to address this challenge. The Brave browser has issued Basic Attention Tokens (BATs). BATS work in a different direction to this project: where advertisers pay users for their attention. This project works by users paying IOTA to the publisher for not showing the ad.

Other cryptocurrencies can be used as the micropayment to the publisher. Bitcoin and ethereum are certainly alternatives. Currently, these cryptocurrencies have not caught on widely for ad level based compensation. These two alternatives also have transaction fees that could make the nanopayment impractical.

## What is IOTA?
IOTA is a revolutionary new transactional settlement and data integrity layer for the Internet of Things. It's based on a new distributed ledger architecture, the Tangle, which overcomes the inefficiencies of current Blockchain designs and introduces a new way of reaching consensus in a decentralized peer-to-peer system. For the first time ever, through IOTA people can transfer money without any fees. This means that even infinitesimally small nanopayments can be made through IOTA. For more information on IOTA, see <https://www.iota.org>

## Why IOTA with ads?
The developers of IOTA have determined that the Internet of Things (IOT) is best suited for its initial adoption. However, the developers have not restricted its use to other formats (including ads). Since IOTA was developed for high volume, nano-payments, it could be a good candidate as a page level compensation mechanism between the user and publisher.

One could imagine a future service where a machine is included as an actor on the automated real-time advertising exchanges, where a bid is placed to not show the ad. The publisher's machine would then decide to not show the ad if the nanopayment was higher than the expected revenue from the advertiser.

## Developmental Roadmap
This is just a first attempt (proof of concept) to insert an IOTA nanopayment into the page level advertising flow. This project will provide code that a publisher can include on their website. It will detect if a user has an adBlocker installed, and if so, offer the ability to make a nanopayment for not showing the ad.

Future enhancements can include:
- Improved payment flow (possibly through in-browser Chrome Extension)
- QR Code instead of Receive Address string
- Better formatting of overhang text
- Different language support

## Installation Instructions for Publishers
1) Copy the src folder into your website root directory. If you already have a src folder in your directory, just copy the files into that existing folder.
2) Include the jquery, overhang.js, and iota.js links in your webpage. You can view the example.html file that shows the placement of the various links. You need to include the following 5 lines in your webpage file:
```
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="./src/overhang.min.css" />
    <script type="text/javascript" src="./src/overhang.min.js"></script>
    <script src="./src/iota.js"></script>
```    
3) Open the iota.js file within the src file and enter your Iota Receive Address and Micropayment Amount:
```javascript
    let websiteOwnerAddress = "YEZPYADNYFRKZAJGBKIHYAZDXTDZVWPCQNSYMTLKRXCVTHURTVRFQZHAXTHMGOMCKLHXOYGASTNEJMZELNPFZ9MMKN"; // receive address (not wallet seed!)
    let suggestedMicroPayment = "500"; // in iotas (not Miotas)
 ```   

Note: It is suggested that you create a new wallet and new Receive Address when you first install iota-AdBlock. Since an address becomes weakened after sending, it is suggested you accumulate IOTA and when it reaches a certain level, send all the IOTA to a new wallet and then start over from a new Receive Address.

## Support
You can support the development of this module by sending IOTA to the address:
```
YEZPYADNYFRKZAJGBKIHYAZDXTDZVWPCQNSYMTLKRXCVTHURTVRFQZHAXTHMGOMCKLHXOYGASTNEJMZELNPFZ9MMKN
```
