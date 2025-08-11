export default {
  async fetch(request, env, ctx) {
    // const url = new URL(request.url);

    // // /dynamic/:id → /dynamic/[id]/index.html にリライト
    // const match = url.pathname.match(/^\/dynamic\/([^/]+)\/?$/);
    // if (match) {
    //   url.pathname = `/dynamic/[${match[1]}]/index.html`;
    //   return env.ASSETS.fetch(new Request(url, request));
    // }

    // デフォルトは静的アセット返す
    return env.ASSETS.fetch(request);
  },
};
