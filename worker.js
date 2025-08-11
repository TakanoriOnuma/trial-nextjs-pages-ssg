export default {
  async fetch(request, env, ctx) {
    // デフォルトは静的アセット返す
    const res = await env.ASSETS.fetch(request);

    // リクエストされたURLが存在しない場合は404ページを返す
    if (res.status === 404) {
      return new Response(new URL("/404.html", request.url), request);
    }

    return res;
  },
};
