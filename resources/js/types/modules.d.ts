type JournalIssue = {
  id: number;
  title: string;
  description: string | null;
  cover_image: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
};

type JournalArticle = {
  id: number;
  title: string;
  file_path: string;
  journal_issue_id: number;
  authors: string | null;
  created_at: string;
  updated_at: string;
};

type ArticleAuthor = {
  id: number;
  name: string;
  journal_article_id: number;
  affiliation: string | null;
  created_at: string;
  updated_at: string;
};

type Post = {
  id: number;
  title: string;
  image: string | null;
  desc: string | null;
  content: string | null;
  created_at: string;
  updated_at: string;
};

type Publication = {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  published_at: string;
  file: string;
  authors: string | null;
  created_at: string;
  updated_at: string;
};
