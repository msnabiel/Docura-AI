# 🧩 nabiel-ui

A beautiful, commerce-focused React component library built on **Tailwind CSS** and **Radix UI**, inspired by ShadCN, optimized for fast development and delightful user experiences.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?logo=next.js)
![NPM](https://img.shields.io/npm/v/@nabiel/ui)
[![GitHub Stars](https://img.shields.io/github/stars/msnabiel/nabiel-ui.svg?style=social)](https://github.com/msnabiel/nabiel-ui)


## ✨ Features

- 🎨 **Prebuilt UI components** for e-commerce (e.g., product cards, checkout forms, variant pickers)
- 💨 Built with **Tailwind CSS** and **ShadCN components**
- 🧱 Powered by **Radix UI** primitives
- ⚙️ Supports **theme customization** and utility class overrides
- 📦 **Tree-shakable**, optimized for performance
- 🌗 Light & dark mode support
- 🧑‍💻 TypeScript-ready


## 📦 Installation

```bash
npm install @nabiel/ui
# or
pnpm add @nabiel/ui
````

> ⚠️ Tailwind CSS and Radix UI should be set up in your project. See [Setup](#setup).


## 🛠️ Setup

1. **Tailwind Config**

```js
// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@nabiel/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

2. **Add Theme Styles**

```tsx
// app/layout.tsx or root entry
import "@/styles/globals.css"
```

3. **Done!** You're ready to use `@nabiel/ui` components in your app.


## 📚 Components

| Component             | Description                                      |
| --------------------- | ------------------------------------------------ |
| `<ProductCard />`     | Showcases product with images, name, price, etc. |
| `<VariantSelector />` | Dropdown or swatch selector for product variants |
| `<CartButton />`      | Add-to-cart button with animation                |
| `<CheckoutForm />`    | Minimal checkout form UI                         |
| `<RatingStars />`     | Star rating display or input                     |
| ...and many more!     |                                                  |

👉 View full documentation: [https://nabiel-ui.vercel.app](https://nabiel-ui.vercel.app)


## 🧑‍💻 Local Development

```bash
git clone https://github.com/msnabiel/nabiel-ui.git
cd nabiel-ui
pnpm install
pnpm dev
```


## 📈 Roadmap

* [x] Component Documentation
* [x] Dark Mode Support
* [ ] CLI to scaffold new components
* [ ] ShadCN-compatible theme tokens
* [ ] Marketplace starter templates


## 🤝 Contributing

PRs, feedback, and issues are very welcome!
If you're using this in a project, feel free to share your showcase or use case!


## 📄 License

MIT © [Nabiel M.](https://github.com/msnabiel)


## 🛍️ Built for Commerce

`nabiel-ui` is not just another design system — it’s handcrafted for modern online stores, freelance platforms, and product-driven apps. Inspired by Shopify. Built with love.

