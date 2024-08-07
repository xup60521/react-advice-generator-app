import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "./utils";

export default function App() {
    const query = useQuery({
        queryKey: ["get_advice"],
        queryFn: getAdvice,
    });
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-c_Dark_Blue">
            <div className="rounded-lg bg-c_Dark_Grayish_Blue text-white flex flex-col items-center">
                <span>{JSON.stringify(query.data)}</span>
            </div>
        </main>
    );
}
