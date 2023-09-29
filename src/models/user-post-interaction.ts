interface UserPostInteraction {
  id: string;
  user_uuid: string;
  post_uuid: string;
  interaction_type: string;
  interaction_date: string;
}

export type { UserPostInteraction };
