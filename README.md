# Bottender Botanalytics

[![npm](https://img.shields.io/npm/v/bottender-botanalytics.svg?style=flat-square)](https://www.npmjs.com/package/bottender-botanalytics)
[![Build Status](https://travis-ci.org/bottenderjs/bottender-botanalytics.svg?branch=master)](https://travis-ci.org/bottenderjs/bottender-botanalytics)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Middleware for using [Botanalytics](https://botanalytics.co/) with
> [Bottender](https://github.com/Yoctol/bottender).

## Installation

```sh
npm install bottender-botanalytics
```

## Example

```js
const { MessengerBot } = require('bottender');
const { createServer } = require('bottender/express');
const botanalyticsMiddleware = require('bottender-botanalytics/express');

const bot = new MessengerBot({
  accessToken: '__FILL_YOUR_TOKEN_HERE__',
  appSecret: '__FILL_YOUR_SECRET_HERE__',
});

bot.onEvent(async context => {
  await context.sendText('Hello World');
});

const server = createServer(bot, {
  verifyToken: '__FILL_YOUR_VERIFY_TOKEN_HERE__',
  webhookMiddleware: botanalyticsMiddleware(bot, {
    apiKey: '__FILL_YOUR_BOTANALYTICS_TOKEN_HERE__',
  }),
});

server.listen(5000, () => {
  console.log('server is running on 5000 port...');
});
```

## Contributing

Pull Requests and issue reports are welcome. You can follow steps below to
submit your pull requests:

Fork, then clone the repo:

```sh
git clone git@github.com:your-username/bottender-botanalytics.git
```

Install the dependencies:

```sh
cd bottender-botanalytics
yarn
```

Make sure the tests pass (including eslint, flow checks and jest tests):

```sh
yarn test
```

Make your changes and tests, and make sure the tests pass.

## License

MIT © [Yoctol](https://github.com/bottenderjs/bottender-botanalytics)
