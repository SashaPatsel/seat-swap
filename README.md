# seat-swap

## Getting Started

To use, just clone down the repo, add your keys, and have fun.

### Prerequisites

Seat Swap was built and tested with MySQL 5.7.20 and the following nodeJS NPM packages:

| NPM Package     | Version |
| --------------- | ------- |
| dotenv          | 5.0.0   |
| node-spotify-api| 1.0.7   |
| request         | 2.83.0  |
| twitter         |1.7.1    |


You will need access tokens for Facebook, and Google to use social authentication.

To obtain Twitter keys and secrets, goto [Create an Application](https://apps.twitter.com/app/new).

You will need to install mySQL (preferably V5.7 or later).  You will want to set a password when you install it.


### Installing

1. Clone the repo to your system.

1. Run `npm install`

1. Create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes).  For LOCALDB_URL, replace the [xyz] with appropriate values.

```js
#Google API keys

GOOGLE_CLIENT_ID=103457873105-EdupXFWRNjNFa8T2pFZeVXEgAzZhe6Xnqs.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=HAkklM177zw-93Mnku2LNRE3JP

# Facebook API keys

FACEBOOK_APP_ID=8135974561357843
FACEBOOK_APP_SECRET=8751b638f915437982a06f89f0d813492

#Sport Radar API keys

SPORT_RADAR_NBA_KEY=xyz
SPORT_RADAR_MLB_KEY=abc

# SQL Credentials

LOCALDB_URL=mysql://[user]:[pass]@[sqldomain]/[db name]

```

