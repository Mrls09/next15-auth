import { AuthProvider } from "@/contexts/AuthContext";
import { ClientCookiesProvider } from "./cookies";
import { cookies } from "next/headers";

export async function Providers({ children }: React.PropsWithChildren) {
    return (
        <ClientCookiesProvider value={(await cookies()).getAll()}>
            <AuthProvider>{children}</AuthProvider>
        </ClientCookiesProvider>
    );
}