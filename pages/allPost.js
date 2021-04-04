import Layout from "./layout";
import Link from "next/link";
import { useRouter } from 'next/router'

const AllPost = (props) => {
	const router = useRouter()
	
	return <Layout>
		<main>
			{
				props.posts.map(post => <Link key={post.id} href={`/posts/[id]`} as={`/posts/${post.id}`}>
					<div className="main-div">
						<div style={{marginRight:5}}> {post.id} </div>
						<div>{post.title}</div>
					</div>
				</Link>)
			}
		</main>
		
		<style jsx>{`
      main {
        width: 1200px;
        margin: 0px auto;
        background: #f3f3f3;
        padding: 20px;
      }

      .main-div {
        color: #333;
        padding: 5px;
        display: flex;
        cursor: pointer;
      }
      .main-div:hover {
      	text-decoration:underline;
      	background: #f9f9f9;
      }
      .main-div:first-of-type {
      	margin-right:20px;
      }
		`}</style>
	</Layout>
}

export async function getServerSideProps() {
	
	const _fetch = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await _fetch.json()
	return {
		props: {
			posts: data
		}
	}
}

export default AllPost;
