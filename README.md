# Frontend Mentor Challenge - Advice generator app

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

-   [Overview](#overview)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
        -   [fetch data validation](#fetch-data-validation)
-   [Resources](#resources)

## Overview

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Generate a new piece of advice by clicking the dice icon

Links:

-   GitHub Repo: <https://github.com/xup60521/react-advice-generator-app>
-   Website: <https://xup60521.github.io/react-advice-generator-app/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

-   React (powered by vite)
-   TailwindCSS
-   `@tanstack/react-query`
-   zod - for data validation

### What I learned

#### fetch data validation

I used react-query to manage data returned from the API endpoint. It's a phenomenal solution when it comes to remote state management.

Besides, to make sure the data is valid (also considering the edge cases), I used `zod` to validate the data.

```tsx
// utils.ts
import { z } from "zod";

const adviceSchema = z.object({
    slip: z.object({
        id: z.number(),
        advice: z.string(),
    }),
});

export const getAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice").then((d) =>
        d.json()
    );
    return adviceSchema.parse(data);
};

// main.tsx
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

//App.tsx
import { useQuery } from "@tanstack/react-query";

const { data, refetch } = useQuery({
    queryKey: ["get_advice"],
    queryFn: getAdvice,
});
```

## Resources
- TailwindCSS Docs - https://tailwindcss.com/docs

- Google font - https://fonts.google.com

- react-query docs - https://tanstack.com/query/latest/docs/framework/react/overview

- zod docs - https://zod.dev/