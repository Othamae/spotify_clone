/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
    readonly CLIENT_ID: string
    readonly CLIENT_SECRET: string
    readonly REDIRECT_URI: string
    readonly SCOPE: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

