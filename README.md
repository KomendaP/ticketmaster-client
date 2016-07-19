# **[Ticketmaster Client SDK](https://www.npmjs.com/package/ticketmaster-client)  [![Build Status](https://travis-ci.org/ticketmaster-api/sdk-javascript.svg?branch=master)](https://travis-ci.org/ticketmaster-api/sdk-javascript)**
Client SDK for the **[Ticketmaster Open Platform](http://developer.ticketmaster.com/)**, based on **[Node SDK for the Ticketmaster](https://github.com/ticketmaster-api/sdk-javascript)**.

Aims to wrap the Ticketmaster API with coverage for all Open Platform endpoints, featuring:
 - API key authentication support
 - Ticketmaster OAuth2 access key support

## System Requirements for rebild source
 - [NodeJS](https://nodejs.org) (v0.10 or greater),
 - [Ticketmaster](https://www.npmjs.com/package/ticketmaster) (v0.5.0 or greater),
 - [Webpack](https://www.npmjs.com/package/webpack) (v1.13.1 or greater)
    - [json-loader](https://www.npmjs.com/package/json-loader) for webpack (v0.5.4 or greater)

## Usage
##### For usage:
1. Install npm package:

 `npm install --save ticketmaster-client`

2. Include one of two following files to your project:
    - bundle.js (raw with source-maps)
    - bundle.min.js (minified)
```html
...
<script src="ticketmaster-client-[version].js"></script>
<script src="ticketmaster-client-[version].min.js"></script>
...
```

2. Use global **TMAPI**  
```javascript
...
TMAPI(apiKey, accessToken) {method}
TMAPI.discovery.v1(apiKey, accessToken) {method}
TMAPI.discovery.v2(apiKey, accessToken) {method}
TMAPI.commerce.v2(apiKey, accessToken) {method}
...
```
##### For rebuild source:
1. Clone repository:

 `git clone git@github.com:KomendaP/ticketmaster-client.git`
 
2. Check for latest version of ticketmaster package [Node SDK for the Ticketmaster](https://github.com/ticketmaster-api/sdk-javascript) and set what you need to bundle then install dependencies:

 `npm install`

3. Run npm script:
    - for raw (with source-maps) version of client lib use: `npm run-script dev`
    - for minified version of client lib use: `npm run-script prod` or `npm run-script win-prod`

## Running Tests

 Tests are part of Node SDK package

## Status
- based on ticketmaster v0.5.0  

The goal is to implement client version of [Node SDK for the Ticketmaster](https://github.com/ticketmaster-api/sdk-javascript).
Pull Requests gladly accepted!
 
## Contact Us
[internal only] Find us in #open-platform on Ticketmaster Slack!