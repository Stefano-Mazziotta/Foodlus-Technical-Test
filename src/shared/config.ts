export const SERVER_CONFIG = {
    APP: {
        HOST: process.env.HOST || "localhost",
        PORT: process.env.PORT || 0,
        ENV: process.env.NODE_ENV || "development"
    },
    SERVER: {
        PREFIX: "/api",
        SIZE_LIMIT: "1mb",
        VALID_USER_USERNAME: process.env.VALID_USER_USERNAME || "smzt",
        VALID_USER_EMAIL: process.env.VALID_USER_EMAIL || "test@gmail.com",
        VALID_USER_PASSWORD: process.env.VALID_USER_PASSWORD || "admin"
    },
    REVO: {
        BASE_URL: process.env.REVO_API_BASE_URL || "",
        TENANT: process.env.REVO_TENANT || "",
        AUTH_TOKEN: process.env.REVO_AUTH_TOKEN || "",
        CLIENT_TOKEN: process.env.REVO_CLIENT_TOKEN || ""
    },
    JWT: {
        SECRET_TOKEN: process.env.JWT_SECRET_TOKEN || "",
        EXPIRES_IN: process.env.JWT_EXPIRES_IN
    }
}
