import { VitePWAOptions } from "vite-plugin-pwa";

export const manifestForPlugin: Partial<VitePWAOptions> = {
registerType: "prompt",
includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
manifest: {
        "theme_color": "#8936FF",
        "background_color": "#2EC6FE",
        "icons": [
            {
                "purpose": "maskable",
                "sizes": "512x512",
                "src": "icon512_maskable.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "512x512",
                "src": "icon512_rounded.png",
                "type": "image/png"
            }
        ],
        "orientation": "any",
        "display": "standalone",
        "lang": "pt-BR",
        "name": "PWA",
        "short_name": "pwa",
        "description": "Aplicação teste PWA",
        "id": "a2c95dd2-a6c0-4d1f-b32c-f21e6694161e",
        "scope": "/",
        "start_url": "https://pwa-tg37.vercel.app/"
    }
}