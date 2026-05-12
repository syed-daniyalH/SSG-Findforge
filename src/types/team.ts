/**
 * Team Member Type
 */
export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

/**
 * Team Group Type (e.g. Visionary Team, Other Team)
 */
export interface TeamGroup {
  title: string;
  description: string;
  members: TeamMember[];
}

