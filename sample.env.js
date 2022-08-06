const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
     PORT: '9000',
     Meta_WA_VerifyToken: 'EAAIVyvAdtqMBANW1Gjxg70BFhUSMa5uNqSaFLRZCrwDhBb7bZAjZCTxTLPerNuZCZATi2i1PwhZCWpZAjIg8QvRX8h8F3XF6RoX1jMO0zdLmEWI5peZBQ2ZB9bCDhjKxc0Uu87ZAdsrDZC3yA3AwGkOASsLnRHHBHz3kBsyXmFsDTpZAZBWIkn0lWawyF8YFlFPiwWOW0tqMgFtu9ZAgZDZD',
     Meta_WA_accessToken: 'EAAIVyvAdtqMBANW1Gjxg70BFhUSMa5uNqSaFLRZCrwDhBb7bZAjZCTxTLPerNuZCZATi2i1PwhZCWpZAjIg8QvRX8h8F3XF6RoX1jMO0zdLmEWI5peZBQ2ZB9bCDhjKxc0Uu87ZAdsrDZC3yA3AwGkOASsLnRHHBHz3kBsyXmFsDTpZAZBWIkn0lWawyF8YFlFPiwWOW0tqMgFtu9ZAgZDZD',
     Meta_WA_SenderPhoneNumberId: '109130491897980',
     Meta_WA_wabaId: '109987735145549',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};
