# PG Studio

A simple **graphical interface for PostgreSQL**, built with Next.js.

## 🚀 Usage

You don't need to install anything globally. Just run:

```bash
npx pg-studio
```

This will start the PG Studio server and open the UI in your browser.

## ⚙️ Requirements

Make sure you have a `.env` file in the directory where you run the command. At least one of the following environment variables must be set with your database connection string:

```env
DB_URL=postgres://user:password@localhost:5432/mydb
# or
DATABASE_URL=...
# or
PG_URL=...
# or
POSTGRES_URL=...
# or
PG_CONNECTION=...
# or
CONNECTION_STRING=...
```

## 🖥️ Development

If you want to run the project locally:

```bash
git clone https://github.com/your-username/pg-studio.git
cd pg-studio
npm install
npm run dev
```

The app will be available at http://localhost:3000.

## 📦 Deployment

You can deploy this project like any other Next.js application. For example, using Vercel or Docker.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions to PG Studio! Here's how you can help:

### Getting Started

1. Fork the repository
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/pg-studio.git
   cd pg-studio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly before submitting
- Update documentation if you're adding new features

### Setting up Development Environment

1. Copy `.env.example` to `.env` and configure your database connection
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Submitting Changes

1. Push your changes to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Create a Pull Request with:
   - A clear title and description
   - Screenshots if UI changes are involved
   - Any relevant issue numbers

### Reporting Issues

- Use GitHub Issues to report bugs or request features
- Provide as much detail as possible, including:
  - Steps to reproduce
  - Expected vs actual behavior
  - Your environment (OS, Node.js version, etc.)

### Code of Conduct

Please be respectful and constructive in all interactions. We're here to build something great together!