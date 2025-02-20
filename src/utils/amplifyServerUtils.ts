import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import outputs from "@/../amplify_outputs.json";
import { cookies } from "next/headers";
import { getCurrentUser } from "aws-amplify/auth/server";

const { runWithAmplifyServerContext } = createServerRunner({ config: outputs });

export async function isAuthenticated() {
  return await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: async (contextSpec) => {
      try {
        const user = await getCurrentUser(contextSpec);
        return !!user;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });
}
