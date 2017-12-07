export default function setInterceptors(bot, botanalytics) {
  const { connector: { client: { accessToken, axios } } } = bot.connector;

  // Add a response interceptor
  axios.interceptors.response.use(response => {
    const { config } = response;

    if (/graph\.facebook\.com.*\/me\/messages/.test(config.url)) {
      const { recipient: { id }, message: { text } } = JSON.parse(config.data);

      botanalytics.logOutgoingMessage({ text }, id, accessToken);
    }

    return response;
  });
}
