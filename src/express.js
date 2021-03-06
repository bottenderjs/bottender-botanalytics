import _botanalytics from 'botanalytics';

import setInterceptors from './setInterceptors';

export default function botanalyticsMiddleware(bot, { apiKey }) {
  const botanalytics = _botanalytics(apiKey);

  setInterceptors(bot, botanalytics);

  return (req, res, next) => {
    botanalytics.logIncomingMessage(req.body);

    next();
  };
}
