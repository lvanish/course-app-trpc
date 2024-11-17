import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});
async function main() {
  let res = await trpc.createTodo.mutate({
    title: "go gym",
    description: "hit gym",
  });
  console.log(res);
}

main();
