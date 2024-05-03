import { defineConfig } from 'astro/config';

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = 'https://maigueldev.github.io/qr-generator';

let BASE_URL = LOCALHOST_URL;
let CONFIG = {};
const isProduction = process.env.DEVELOPMENT_MODE === 'PRODUCTION';

if (isProduction) {
    CONFIG = {
        site: LIVE_URL,
        base: BASE_URL,
    }
}

// https://astro.build/config
export default defineConfig(CONFIG);
