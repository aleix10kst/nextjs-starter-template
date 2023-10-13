# Next.js Starter Template

A robust starter template for Next.js projects bundled with best practices and popular tools like ESLint, Prettier, TailwindCSS, Shadcn components, and Drizzle. Enhanced with the App Router from Next.js 13 for efficient routing.

## 📋 Features

- **Next.js with App Router**: A lightweight framework for static and server-rendered React applications with the latest routing capabilities.
- **ESLint**: A pluggable linting utility for JavaScript to ensure code quality.
- **Prettier**: An opinionated code formatter to maintain a consistent code style.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn Components**: Reusable React components to speed up your UI building process.
- **Drizzle**: A collection of libraries that make it easier to connect your front-end to a blockchain.

## 🚀 Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/aleix10kst/nextjs-starter-template.git
   cd nextjs-starter-template
   ```

2. **Install Dependencies**

   ```bash
   yarn install
   ```

3. **Run the Development Server**

   ```bash
   yarn dev
   ```

Visit `http://localhost:3000` and you should see your Next.js app running!

## 🛠 Configuration

- **ESLint & Prettier**: Config files for ESLint and Prettier are present at the root directory as `.eslintrc.js` and `.prettierrc.js` respectively. You can modify them as per your project requirements.

- **TailwindCSS**: Configuration file `tailwind.config.js` is present at the root. Customize your utility classes and theme as needed.

- **shadcn/ui**: Configuration file `components.json` is present at the root.

- **dirzzle ORM**: Configuration file `drizzle.config.ts` for drizzle-kit is present at the root. You also have `src/db/index.ts` for drizzle-orm.

## 🧐 Folder Structure

```plaintext
.
├── src
│   │ app/
│   └── ...
│   │ components/
│   └── ui/
│   └── ...
│   │ db/
│   └── schema.ts
│   └── index.ts
├── styles/
│   └── globals.css
├── .eslintrc.cjs
├── .prettierrc.cjs
├── tailwind.config.ts
└── ...
```

## 💡 Tips

- Always run `yarn lint` to check for any linting errors in the code.
- Customize the base styles in `styles/tailwind.css` to fit the branding of your project.
- Keep the components modular and reusable for scalability.

## 📖 Documentation

For deeper insights and customization, refer to the official documentation of the respective tools:

- [Next.js](https://nextjs.org/docs)
- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/index.html)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Shadcn Components](https://shadcn-docs-url.com)
- [Drizzle](https://drizzle-url.com)

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with 💙 by [Aleix Canet](https://aleixcanet.dev).