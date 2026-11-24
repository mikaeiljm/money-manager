import "dotenv/config"

export const env = {
    PORT: Number(process.env.PORT) || 3000,
    APP_NAME: (process.env.APP_NAME) || "Money Manager"
}