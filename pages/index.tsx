import Head from "next/head"

import { Layout } from "@/components/layout"
import { AppleMusicDemo } from "@/components/main"

export default function IndexPage() {

  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hidden lg:block">
        <AppleMusicDemo />
      </section>
    </Layout>
  )
}
