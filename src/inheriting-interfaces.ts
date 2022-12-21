/**
 * Here, the id property is shared between all three
 * interfaces. Can you find a way to refactor this to
 * make it more DRY?
 */

// problem
// interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
// }

// interface Post {
//   id: string;
//   title: string;
//   body: string;
// }

// interface Comment {
//   id: string;
//   comment: string;
// }

// solution
interface Identifiable {
  id: string;
}
interface User extends Identifiable {
  firstName: string;
  lastName: string;
}

interface Post extends Identifiable {
  title: string;
  body: string;
}

interface Comment extends Identifiable {
  comment: string;
}
