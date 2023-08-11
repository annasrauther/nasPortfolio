import { poppins } from '@/lib/fonts';
import { getPostArchive } from '@/services/post'
import Link from 'next/link'
import { PostArchive } from '@/interfaces/post'

const BlogArchive: React.FC = async () => {
  const posts: PostArchive[] = await getPostArchive()

  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Blog</h1>
      <div className='section_column'>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title.rendered}
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogArchive