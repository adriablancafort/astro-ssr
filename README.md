# Create Repository and publish to GitHub:

```
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/brickoram/storefront.git
git push -u origin main
```

# Clone from GitHub:

```
git clone https://github.com/brickoram/api.git
```

# Run it locally:

```
npm run dev
```

# Commit changes and publish to GitHub:

```
git add .
git commit -m "Changes Made"
git push origin main
```

# Run the build:

```
npm run build
```

*When there are new commits to the main branch, a new build is run and deployed automatically by Cloudflare Pages.