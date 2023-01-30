import { z } from 'zod';

/**
 * 🕵️‍♂️ Refactor this code below to reduce the duplication,
 * while also making sure the cases don't go red!
 */

const objectWithId = z.object({
  id: z.string().uuid(),
  createdAt: z.date(),
});

const User = objectWithId.extend({
  id: z.string().uuid(),
  name: z.string(),
});

const Post = objectWithId.extend({
  id: z.string().uuid(),
  title: z.string(),
  body: z.string(),
});

const Comment = objectWithId.extend({
  id: z.string().uuid(),
  text: z.string(),
});
