# My portfolio

Show [website](https://kuznietsova.org/)

## 📁 Project Structure


```plaintext

 📦 portfolio
 ┣ 📂 public            # Static assets (images)
 ┣ 📂 src
   ┣ 📂 app             # Next.js App Router (root of the application)
     ┣ 📂 fonts         # Custom fonts
     ┣ 📜 page.tsx      # Main page component (homepage)
     ┗ 📜 layout.tsx    # Root layout component (wrapping all pages)
   ┣ 📂 components      # Reusable UI components
   ┣ 📂 data            # Static/local data (e.g., JSON)
   ┣ 📂 lib             # Utility functions and API handlers
   ┣ 📂 sections        # Page sections (e.g., Hero, About, Contact)
   ┣ 📂 styles          # Global and shared styles
     ┣ 📜 globals.css   # Global styles
     ┗ 📜 variables.tsx # Style-related variables (e.g., theme settings)
 ┗ 📜 README.md         # Project documentation
```

 
<details>
  <summary>Next.js</summary>
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Structure of project
- About me
- Skills
- Projects
- Contacts

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</details>


## Basic Components Documentation

### Title

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `tag`     | `h2`       | `h1`, `h2`, `h3` |

### Text

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `size`    | `normal`   | `small`- 12px, <br/> `normal`- 16px, <br/> `large`- 20px,<br/> `extra-large` - 30px  |

### CustomLink

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `href`    | `undefined`| *required, string <br/> link URL |

### ScrollLink
use "react-scroll"

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `to`      | `undefined`| *required, string <br/> link anchor |

### Button 

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `tag`     | `button`   | `button`, `scrollLink`, `link` |
| `link`    | ""         | for tag `scrollLink` or `link` |
| `className`| ""        | string, add custom or additional css class you'd need | 

### Section

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `children`| `undefined`| *required, any text content |
| `id`      | ""         | string, name of section (link in data/navigation.json) |
| `title`   | ""         | string, title of section | 

### Input

| Prop      | Default    | Description    |
| --------- | ---------- | ---------------| 
| `type`    | `undefined`| *required, string, type of input |
| `name`    | `undefined`| *required, string, name of input |
| `label`   | `undefined`| *required, string, any text content  |
| `placeholder`| `undefined`| *required, string, example for input-value |
| `value`   | ""	       | string, current input value (controlled input) |
| `onChange` | `undefined` | function, event handler for input changes |

