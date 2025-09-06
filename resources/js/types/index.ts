export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label?: string;
  description?: string;
  items?: NavItem[];
};

export type BreadcrumbItem = {
  title: string;
  href: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
};

export type JournalIssue = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type JournalArticle = {
  id: number;
  title: string;
  abstract: string;
  keywords: string;
  file_path: string;
  journal_issue_id: number;
  created_at: string;
  updated_at: string;
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export type Partner = {
  id: number;
  name: string;
  logo: string;
  description: string | null;
  website: string;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: number;
  title: string;
  desc: string;
  date: Date;
  time_from: string;
  time_to: string;
  place: string;
  created_at: string;
  updated_at: string;
};
