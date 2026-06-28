import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Fallback if locale is undefined
  if (!locale || !["ar", "en"].includes(locale)) {
    locale = "ar";
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
