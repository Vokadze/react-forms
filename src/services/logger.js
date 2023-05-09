import * as Sentry from "@sentry/react";

function init() {
    Sentry.init({
        dsn: "https://53e995cc45aa4aad90b6d085a2c6c78e@o4505144394317824.ingest.sentry.io/4505144595316736",
        integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

function log(error) {
    Sentry.captureException(error);
}

export const logger = {
    init,
    log
};
