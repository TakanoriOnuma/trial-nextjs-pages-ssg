export default {
  async fetch(request, env, ctx) {
    // デフォルトは静的アセット返す
    return env.ASSETS.fetch(request);
  },
};
