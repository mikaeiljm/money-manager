import { env } from "./config/env.js";
import app from "./app";

const PORT = 5000;

app.listen(env.PORT, () => {
    console.log(`Server is running on http://localhost:${env.PORT} [${env.NODE_ENV}]`)
});

