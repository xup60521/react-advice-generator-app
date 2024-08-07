import { z } from "zod";

const adviceSchema = z.object({
    slip: z.object({
        id: z.number(),
        advice: z.string(),
    }),
});

export type AdviceType = z.infer<typeof adviceSchema>;

export const getAdvice = async () => {
    const data = await fetch("https://api.adviceslip.com/advice").then((d) =>
        d.json()
    );
    return adviceSchema.parse(data);
};
