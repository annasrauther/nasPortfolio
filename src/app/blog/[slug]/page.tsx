import { getPostSingle } from '@/services/post'
import Link from 'next/link'
import { poppins } from '@/lib/fonts';

const BlogSingle = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostSingle(params.slug)
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>{post.title.rendered}</h1>
      <div className='section_column'>
        {post && (
          <>
            <h2>Posted on {new Date(post.date).toLocaleDateString()}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
          </>
        )}
        {!post && (
          <>
            <h1>404</h1>
            <p>Post not found.</p>
          </>
        )}
        <Link href="/blog">Back to Archive</Link>
      </div>
    </div>
  )
}

export default BlogSingle