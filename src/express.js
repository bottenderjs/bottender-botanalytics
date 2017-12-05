import _botanalytics from 'botanalytics';

export default function botanalyticsMiddleware(bot, { apiKey }) {
  const botanalytics = _botanalytics(apiKey);

  const { client } = bot.connector;
  const accessToken = client._accessToken;
  const axios = client.axios;

  // Add a response interceptor
  axios.interceptors.response.use(response => {
    const { config } = response;
    if (/graph\.facebook\.com.*\/me\/messages/.test(config.url)) {
      const { recipient: { id }, message: { text } } = JSON.parse(config.data);

      botanalytics.logOutgoingMessage({ text }, id, accessToken);
    }
    return response;
  });

  return (req, res, next) => {
    botanalytics.logIncomingMessage(req.body);

    next();
  };
}
