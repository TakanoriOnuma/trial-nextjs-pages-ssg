export default {
  async fetch(request, env, ctx) {
    // リライトの設定
    // const url = new URL(request.url);
    // const match = url.pathname.match(/^\/dynamic\/([^/]+)\/?$/);

    // if (match) {
    //   url.pathname = `/dynamic/[id]/index.html`;
    //   return env.ASSETS.fetch(new Request(url, request));
    // }

    // デフォルトは静的アセット返す
    const res = await env.ASSETS.fetch(request);

    // // リクエストされたURLが存在しない場合は404ページを返す
    // if (res.status === 404) {
    //   // 404.html を Assets から取得
    //   const notFoundRes = await env.ASSETS.fetch(
    //     new Request(new URL("/404.html", request.url), request)
    //   );

    //   // 404.html があればそれを返す
    //   if (notFoundRes.ok) {
    //     return new Response(notFoundRes.body, {
    //       status: 404,
    //       headers: notFoundRes.headers,
    //     });
    //   }

    //   // 404.html も存在しない場合はシンプルな404メッセージ
    //   return new Response("404 Not Found", { status: 404 });
    // }

    return res;
  },
};
