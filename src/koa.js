import _botanalytics from 'botanalytics';

import setInterceptors from './setInterceptors';

export default function botanalyticsMiddleware(bot, { apiKey }) {
  const botanalytics = _botanalytics(apiKey);

  setInterceptors(bot, botanalytics);

  return ({ request }, next) => {
    botanalytics.logIncomingMessage(request.body);

    next();
  };
}
