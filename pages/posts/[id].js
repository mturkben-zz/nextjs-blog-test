import React from 'react'
import Layout from "../layout";
import Head from "next/head";

const Post = ({item}) => {
	
	console.log(item)
	
	return (
		<Layout>
			<Head>
				<title> {item.title} </title>
			</Head>
			
			
			<main>
				
				<div className="title"> {item.title} </div>
				
				<div className="body"> {item.body} </div>
			
			</main>
			<style jsx>{`
        main {
          width: 1200px;
          margin: 0 auto;
          background: #f6f6f6;
          padding: 10px;
          height: 90vh
        }

        .title {
          font-size: 20px;
          line-height: 30px;
          color: #333;
          font-weight: 500;
        }

        .title:before {
          content: ">";
          color: #000;
          opacity: .5;
        }

        .body {
          text-indent: 30px;
          font-size: 18px;
          line-height: 25px;
          color: #333;
        }
			`}</style>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
	const data = await res.json();
	
	return {
		props: {
			item: data
		}
	}
}

export default Post;
