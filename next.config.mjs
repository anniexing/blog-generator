/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images:{
        domains:[]
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;
