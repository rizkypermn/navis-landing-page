import type { Metadata } from 'next';
import ArticleDetail from '../brand-crisis-detection/article-detail';
import { posts } from '../posts';
const post = posts[0];
export const dynamic = 'force-static';
export const metadata: Metadata = { title: `${post.title} | Navis`, description: post.description };
export default function Page() { return <ArticleDetail post={post}/>; }
