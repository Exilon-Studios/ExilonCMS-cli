# @exiloncms/cli

Interactive CLI to create new [ExilonCMS](https://github.com/Exilon-Studios/ExilonCMS) projects.

## Installation

### Using npm (global)

```bash
npm install -g @exiloncms/cli
```

### Using pnpm (global)

```bash
pnpm add -g @exiloncms/cli
```

### Using yarn (global)

```bash
yarn global add @exiloncms/cli
```

### Using npx (without installing)

```bash
npx @exiloncms/cli create my-project
```

### Using pnpm dlx (without installing)

```bash
pnpm dlx @exiloncms/cli create my-project
```

## Usage

### Interactive Mode (Recommended)

```bash
# Create a new project with interactive prompts
exiloncms create my-project

# or using the alias
exiloncms new my-project

# or using create-exiloncms
create-exiloncms my-project
```

The CLI will prompt you for:
- Project name
- Database type (SQLite, PostgreSQL, MySQL)
- Theme selection
- Plugins to install
- Site configuration (name, admin email, password)
- Installation options

### Command-Line Options

```bash
exiloncms create my-project \
  --database sqlite \
  --theme default \
  --plugins shop,discord \
  --site-name "My Awesome Site" \
  --admin-email admin@example.com \
  --admin-password secret123 \
  --no-install-deps \
  --no-run-migrations
```

#### Available Options

| Option | Description | Default |
|--------|-------------|---------|
| `-d, --database <type>` | Database type (sqlite, postgresql, mysql) | `sqlite` |
| `-t, --theme <name>` | Theme name | `default` |
| `-p, --plugins <list>` | Comma-separated list of plugins | - |
| `--site-name <name>` | Site name | - |
| `--admin-name <name>` | Admin name | - |
| `--admin-email <email>` | Admin email | - |
| `--admin-password <password>` | Admin password | - |
| `--no-install-deps` | Skip installing dependencies | - |
| `--no-run-migrations` | Skip running migrations | - |

## What Gets Installed

The CLI creates a new ExilonCMS project with:

- ✅ Latest ExilonCMS code from GitHub
- ✅ Configured database (SQLite by default, no setup needed)
- ✅ Selected theme and plugins
- ✅ All dependencies installed (PHP and Node.js)
- ✅ Database migrated and seeded
- ✅ Admin user created
- ✅ Built frontend assets

## Next Steps

After creating your project:

```bash
cd my-project

# Start the development server
php artisan serve

# Visit http://localhost:8000
```

## Default Credentials

After installation, you can login with:

- **Email:** `admin@example.com` (or your custom email)
- **Password:** `password` (or your custom password)

## Database Options

### SQLite (Recommended)
- No configuration required
- File-based database
- Perfect for development and small projects

### PostgreSQL
- Best for production
- Requires PostgreSQL server
- Configure in `.env` file

### MySQL
- Good alternative for production
- Requires MySQL/MariaDB server
- Configure in `.env` file

## Available Plugins

- **shop** - Full e-commerce system with cart, payments, and orders
- **discord** - Discord authentication and notifications
- **analytics** - Statistics and analytics tracking

More plugins coming soon!

## Development

```bash
# Clone the repository
git clone https://github.com/Exilon-Studios/exiloncms-cli.git
cd exiloncms-cli

# Install dependencies
npm install

# Run in development mode
npm run dev -- create test-project

# Build
npm run build

# Test locally
npm link
exiloncms create test-project
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Exilon Studios](https://github.com/Exilon-Studios)

## Links

- [ExilonCMS Documentation](https://github.com/Exilon-Studios/ExilonCMS/wiki)
- [ExilonCMS Repository](https://github.com/Exilon-Studios/ExilonCMS)
- [Issue Tracker](https://github.com/Exilon-Studios/exiloncms-cli/issues)
