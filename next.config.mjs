// ESM Next.js config with explicit semicolon to avoid parser issues in some environments
export default {
  experimental: { serverActions: { bodySizeLimit: "8mb" } },
  output: "standalone",
};
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/laymans-terms.git
git push -u origin main

