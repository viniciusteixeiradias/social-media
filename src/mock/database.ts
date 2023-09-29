import type { Follow } from '@/models/follow';
import type { Post } from '@/models/post';
import type { User } from '@/models/user';
import type { UserPostInteraction } from '@/models/user-post-interaction';

interface MockDatabase {
  User: User[];
  Post: Post[];
  UserPostInteraction: UserPostInteraction[];
  Follow: Follow[];
}

const db: MockDatabase = {
  User: [
    {
      id: '1',
      uuid: 'a6e7d2c5-1f3d-45a8-8f91-3c74d56a5a8e',
      name: 'John Doe',
      tag_name: 'johndoe',
      email: 'john@example.com',
      password_hash: 'hashed_password_1',
      created_at: '2023-09-28T10:00:00Z'
    },
    {
      id: '2',
      uuid: 'b51c087b-731a-4d0f-849b-2e75e7a5d1c5',
      name: 'Jane Smith',
      tag_name: 'janesmith',
      email: 'jane@example.com',
      password_hash: 'hashed_password_2',
      created_at: '2023-09-28T11:30:00Z'
    },
    {
      id: '3',
      uuid: 'c8e6f4d7-63ab-4e8c-a9c3-9b5f3e7c1e2d',
      name: 'Alice Johnson',
      tag_name: 'alicej',
      email: 'alice@example.com',
      password_hash: 'hashed_password_3',
      created_at: '2023-09-29T09:45:00Z'
    },
    {
      id: '4',
      uuid: 'f5d9a6c3-8b1e-4991-b9f7-0a87c2d99f76',
      name: 'Bob Wilson',
      tag_name: 'bobw',
      email: 'bob@example.com',
      password_hash: 'hashed_password_4',
      created_at: '2023-09-29T10:30:00Z'
    },
    {
      id: '5',
      uuid: 'e1a9b6d2-4fc9-42b5-87ce-1f62e59c3c8a',
      name: 'Ella Davis',
      tag_name: 'ellad',
      email: 'ella@example.com',
      password_hash: 'hashed_password_5',
      created_at: '2023-09-29T11:15:00Z'
    },
    {
      id: '6',
      uuid: '9d3f8a7b-6a9b-4c2f-91d4-7b9e8a1c3d5e',
      name: 'Michael Johnson',
      tag_name: 'michaelj',
      email: 'michael@example.com',
      password_hash: 'hashed_password_6',
      created_at: '2023-09-29T11:45:00Z'
    },
    {
      id: '7',
      uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a',
      name: 'Olivia Parker',
      tag_name: 'oliviap',
      email: 'olivia@example.com',
      password_hash: 'hashed_password_7',
      created_at: '2023-09-29T12:30:00Z'
    },
    {
      id: '8',
      uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d',
      name: 'William Adams',
      tag_name: 'williama',
      email: 'william@example.com',
      password_hash: 'hashed_password_8',
      created_at: '2023-09-29T13:15:00Z'
    },
    {
      id: '9',
      uuid: 'b6d4e1a2-5d7f-41a1-9b8d-3e9d7f8a2c5b',
      name: 'Sophia Lee',
      tag_name: 'sophial',
      email: 'sophia@example.com',
      password_hash: 'hashed_password_9',
      created_at: '2023-09-29T13:45:00Z'
    },
    {
      id: '10',
      uuid: '7b8a9e6d-4c5a-47f0-9d9b-4b7a6d5a1c7b',
      name: 'James Brown',
      tag_name: 'jamesb',
      email: 'james@example.com',
      password_hash: 'hashed_password_10',
      created_at: '2023-09-29T14:30:00Z'
    }
  ],
  Post: [
    {
      id: '1',
      uuid: 'f2e6a1b8-9c35-4f16-81b8-3c38b71e9174',
      content: 'This is the first post by John Doe.',
      created_at: '2023-09-28T12:15:00Z',
      author_uuid: 'a6e7d2c5-1f3d-45a8-8f91-3c74d56a5a8e'
    },
    {
      id: '2',
      uuid: 'd84179e1-1bb9-47d9-b8d3-0a62e8efcd91',
      content: 'Jane Smith\'s first post.',
      created_at: '2023-09-28T13:45:00Z',
      author_uuid: 'b51c087b-731a-4d0f-849b-2e75e7a5d1c5'
    },
    {
      id: '3',
      uuid: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      content: 'Alice Johnson\'s debut post.',
      created_at: '2023-09-29T15:00:00Z',
      author_uuid: 'c8e6f4d7-63ab-4e8c-a9c3-9b5f3e7c1e2d'
    },
    {
      id: '4',
      uuid: 'b2d3f4a5-6b7c-8d9e-1f2a-3b4c5d6e7f8a',
      content: 'Bob Wilson\'s first post.',
      created_at: '2023-09-29T15:45:00Z',
      author_uuid: 'f5d9a6c3-8b1e-4991-b9f7-0a87c2d99f76'
    },
    {
      id: '5',
      uuid: 'e3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c',
      content: 'Ella Davis\'s introductory post.',
      created_at: '2023-09-29T16:30:00Z',
      author_uuid: 'e1a9b6d2-4fc9-42b5-87ce-1f62e59c3c8a'
    },
    {
      id: '6',
      uuid: '9c8f7a6b-5a4b-4c2f-9d6a-7b8c9f0a1e2f',
      content: 'Michael Johnson\'s opening post.',
      created_at: '2023-09-29T17:15:00Z',
      author_uuid: '9d3f8a7b-6a9b-4c2f-91d4-7b9e8a1c3d5e'
    },
    {
      id: '7',
      uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a',
      content: 'Olivia Parker\'s first post.',
      created_at: '2023-09-29T18:00:00Z',
      author_uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a'
    },
    {
      id: '8',
      uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d',
      content: 'William Adams\'s initial post.',
      created_at: '2023-09-29T18:45:00Z',
      author_uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d'
    },
    {
      id: '9',
      uuid: 'b6d4e1a2-5d7f-41a1-9b8d-3e9d7f8a2c5b',
      content: 'Sophia Lee\'s first post.',
      created_at: '2023-09-29T19:30:00Z',
      author_uuid: 'b6d4e1a2-5d7f-41a1-9b8d-3e9d7f8a2c5b'
    },
    {
      id: '10',
      uuid: '7b8a9e6d-4c5a-47f0-9d9b-4b7a6d5a1c7b',
      content: 'James Brown\'s debut post.',
      created_at: '2023-09-29T20:15:00Z',
      author_uuid: '7b8a9e6d-4c5a-47f0-9d9b-4b7a6d5a1c7b'
    }
  ],
  UserPostInteraction: [
    {
      id: '1',
      user_uuid: 'a6e7d2c5-1f3d-45a8-8f91-3c74d56a5a8e',
      post_uuid: 'f2e6a1b8-9c35-4f16-81b8-3c38b71e9174',
      interaction_type: 'like',
      interaction_date: '2023-09-28T14:30:00Z'
    },
    {
      id: '2',
      user_uuid: 'b51c087b-731a-4d0f-849b-2e75e7a5d1c5',
      post_uuid: 'f2e6a1b8-9c35-4f16-81b8-3c38b71e9174',
      interaction_type: 'comment',
      interaction_date: '2023-09-28T14:45:00Z'
    },
    {
      id: '3',
      user_uuid: 'a6e7d2c5-1f3d-45a8-8f91-3c74d56a5a8e',
      post_uuid: 'd84179e1-1bb9-47d9-b8d3-0a62e8efcd91',
      interaction_type: 'dislike',
      interaction_date: '2023-09-28T15:00:00Z'
    },
    {
      id: '4',
      user_uuid: 'c8e6f4d7-63ab-4e8c-a9c3-9b5f3e7c1e2d',
      post_uuid: 'a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d',
      interaction_type: 'like',
      interaction_date: '2023-09-29T16:30:00Z'
    },
    {
      id: '5',
      user_uuid: 'f5d9a6c3-8b1e-4991-b9f7-0a87c2d99f76',
      post_uuid: 'b2d3f4a5-6b7c-8d9e-1f2a-3b4c5d6e7f8a',
      interaction_type: 'comment',
      interaction_date: '2023-09-29T17:00:00Z'
    },
    {
      id: '6',
      user_uuid: 'e1a9b6d2-4fc9-42b5-87ce-1f62e59c3c8a',
      post_uuid: 'e3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c',
      interaction_type: 'like',
      interaction_date: '2023-09-29T18:15:00Z'
    },
    {
      id: '7',
      user_uuid: '9d3f8a7b-6a9b-4c2f-91d4-7b9e8a1c3d5e',
      post_uuid: '9c8f7a6b-5a4b-4c2f-9d6a-7b8c9f0a1e2f',
      interaction_type: 'dislike',
      interaction_date: '2023-09-29T19:00:00Z'
    },
    {
      id: '8',
      user_uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a',
      post_uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a',
      interaction_type: 'like',
      interaction_date: '2023-09-29T20:30:00Z'
    },
    {
      id: '9',
      user_uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d',
      post_uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d',
      interaction_type: 'comment',
      interaction_date: '2023-09-29T21:15:00Z'
    },
    {
      id: '10',
      user_uuid: 'b6d4e1a2-5d7f-41a1-9b8d-3e9d7f8a2c5b',
      post_uuid: '7b8a9e6d-4c5a-47f0-9d9b-4b7a6d5a1c7b',
      interaction_type: 'like',
      interaction_date: '2023-09-29T21:45:00Z'
    }
  ],
  Follow: [
    {
      id: '1',
      follower_uuid: 'a6e7d2c5-1f3d-45a8-8f91-3c74d56a5a8e',
      following_uuid: 'b51c087b-731a-4d0f-849b-2e75e7a5d1c5',
      follow_date: '2023-09-28T15:30:00Z'
    },
    {
      id: '2',
      follower_uuid: 'c8e6f4d7-63ab-4e8c-a9c3-9b5f3e7c1e2d',
      following_uuid: 'f5d9a6c3-8b1e-4991-b9f7-0a87c2d99f76',
      follow_date: '2023-09-29T16:00:00Z'
    },
    {
      id: '3',
      follower_uuid: 'e1a9b6d2-4fc9-42b5-87ce-1f62e59c3c8a',
      following_uuid: '9d3f8a7b-6a9b-4c2f-91d4-7b9e8a1c3d5e',
      follow_date: '2023-09-29T16:45:00Z'
    },
    {
      id: '4',
      follower_uuid: 'f2c1e9a6-6d53-49d9-8a8c-4b3c9a8c6b4a',
      following_uuid: '8d2e4b7f-5d9e-41f2-8f5e-8c1d4f2e6b8d',
      follow_date: '2023-09-29T17:30:00Z'
    },
    {
      id: '5',
      follower_uuid: 'b6d4e1a2-5d7f-41a1-9b8d-3e9d7f8a2c5b',
      following_uuid: '7b8a9e6d-4c5a-47f0-9d9b-4b7a6d5a1c7b',
      follow_date: '2023-09-29T18:15:00Z'
    }
  ]
};

export { db };