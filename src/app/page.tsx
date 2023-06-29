import Link from "next/link";


export default function Home() {
  return (
    <>
    <h1 className="h-screen">Home page</h1>
    <Link href="/Dashboard">Dashboard</Link>
    </>
  )
}
