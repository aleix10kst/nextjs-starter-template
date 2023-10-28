import { createEnv } from '@t3-oss/env-nextjs';
import z from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string(),
    NEXT_PUBLIC_URL: z.string().url(),
    API_SECRET: z.string().min(1),
  },
});
