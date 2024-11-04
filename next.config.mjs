/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: "dist",
    images:{
        unoptimized: true,
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 's.gravatar.com',
                port: '',
                pathname: '/**',
            },
        ]

    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        AUTH0_SECRET: process.env.AUTH0_SECRET,
        AUTH0_BASE_URL: process.env.AUTH0_BASE_URL,
        AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL,
        AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
        AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
        MONGODB_URI: process.env.MONGODB_URI,
        NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY,
        STRIPE_TEST_SECRET_KEY: process.env.STRIPE_TEST_SECRET_KEY,
        STRIPE_PRODUCT_PRICE_ID: process.env.STRIPE_PRODUCT_PRICE_ID,
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                    { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
};

export default nextConfig;
