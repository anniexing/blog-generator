import { withMiddlewareAuthRequired } from "@auth0/nextjs-auth0/edge";

export default withMiddlewareAuthRequired();

export const config = {
    matcher: ["/post/new", "/post/[postId]", "/token-topup", "/token-topup/success"],
};
