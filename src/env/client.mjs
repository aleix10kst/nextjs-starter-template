import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  },
});
