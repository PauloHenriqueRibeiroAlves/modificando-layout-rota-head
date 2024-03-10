import { posts } from "@/types/posts"


type Props = {
    params: {
        postId: string
    }
}
export const generateMetadata = async ({ params }: Props) => {
  const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
  const post: posts = await postRequest.json();
  if(!post.id) return <div>Post não encontrado</div>;
  return {
    title: post.title
  }
}

const Page = async ({params}: Props) => {
    const postRequest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post: posts = await postRequest.json();
    return(
      <div className="text-center">
        <div>Post: {params.postId}</div>
        <h1 className="text-5xl mb-5 my-3 text-black">{post.title}</h1>
        <p className="text-3xl mb-3 text-black">{post.body}</p>
      </div>
    );
  }
  
  export default Page

  export const generateStaticParams = async () => {
    const postsReq = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: posts[] = await postsReq.json();

    return posts.map(posts => ({
      postId: posts.id.toString()
    }))
  }