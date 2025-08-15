import { WorkerEntrypoint } from "cloudflare:workers";

class Worker extends WorkerEntrypoint<Env> {
  async fetch(request: Request) {
    // リライトの設定
    const url = new URL(request.url);
    const match = url.pathname.match(/^\/dynamic\/([^/]+)\/?$/);

    if (match) {
      const assetUrl = new URL("/dynamic/[id]/index.html", request.url);
      return this.env.ASSETS.fetch(assetUrl.toString());
    }

    // デフォルトは静的アセット返す
    return this.env.ASSETS.fetch(request);
  }
}

export default Worker;
