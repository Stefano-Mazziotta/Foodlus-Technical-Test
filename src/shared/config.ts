export const SERVER_CONFIG = {
    APP: {
        HOST: process.env.HOST || "localhost",
        PORT: process.env.PORT || 0,
        ENV: process.env.NODE_ENV || "development"
    },
    SERVER: {
        PREFIX: "/api",
        SIZE_LIMIT: "1mb",
        SECRET_TOKEN: process.env.SECRET_TOKEN || ""
    },
    REVO: {
        BASE_URL: process.env.REVO_BASE_URL || "",
        ACCOUNT: process.env.REVO_ACCOUNT,
        THE_TOKEN: process.env.REVO_THE_TOKEN,
        CLIENT_TOKEN: process.env.REVO_CLIENT_TOKEN
    }
}
