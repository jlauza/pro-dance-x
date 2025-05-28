# shadcn/ui monorepo template

This template is for creating a monorepo with shadcn/ui.

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button"
```

## React Icons
Adding new icons

```bash
pnpm add react-icons --filter @workspace/ui
```
Create icons.tsx file in packages/ui/src

Export the icon component in icons.tsx file

```tsx
export { FaBeer, FaGithub } from "react-icons/fa";
export { MdHome } from "react-icons/md";
```

## Usage

Call in any component file to any monorepo app like so:

```tsx
import { FaBeer } from "@workspace/ui/icons";

export default function HomePage() {
  return (
    <div>
      <h1>Enjoy a beer! <FaBeer /></h1>
    </div>
  );
}
```

The icons is global and can be used in any monorepo app in the project.

## NOTE:
When installing new package or library use ```pnpm```
