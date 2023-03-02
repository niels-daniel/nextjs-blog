import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>Second Post</title>
        </Head>
        <h1>First Post</h1>
        <p>Terug <Link href="/">naar home</Link></p>
    </Layout>
  )
}
