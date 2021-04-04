import HEAD from "next/head"
import Link from "next/link"

const Layout = ({children}) => {
	
	return <div>
		<HEAD>
			<title> Anasayfam </title>
		</HEAD>
		
		<main>
			<a>
				<Link href="/"> ANASAYFA </Link>
			</a>
			<a>
				<Link href="/allPost"> BLOGLAR </Link>
			</a>
		</main>
		
		{children}
		
		<style jsx>{`

      main {
        background-color: aliceblue;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center
      }
      
      main a {
      	padding:10px
      }
		
		`}</style>
	</div>
}

export default Layout;
