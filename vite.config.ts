// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // axeumai.com deploys to Vercel, not Cloudflare. Nitro's default preset here is
  // cloudflare-module, which emits a Worker bundle Vercel cannot run. Pin the target so a
  // local `bun run build` produces byte-identical output to the Vercel build.
  // Lovable's own builds set LOVABLE_NITRO_PRESET, which still wins inside the sandbox —
  // so the Lovable preview keeps working on Cloudflare.
  nitro: { preset: "vercel" },
});
