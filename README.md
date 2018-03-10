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

1. Create a file named `.env`, add the following to it, replacing the values with your API keys (no quotes):

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret

# SQL Credentials

SQL_USER=root
SQL_PASSWORD=zyxxyplugh

```

