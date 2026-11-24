import { env } from "./config/env.js";
import app from "./app";

app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT}`)
    console.log(`${env.APP_NAME}`)
});

