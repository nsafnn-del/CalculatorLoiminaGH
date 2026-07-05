import type { NextConfig } from "next";

const repoName = "CalculatorLoimina";
const isStaticExport = process.env.GITHUB_PAGES === "true";
const basePath = isStaticExport ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: isStaticExport ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isStaticExport ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: isStaticExport ? "true" : "false",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
