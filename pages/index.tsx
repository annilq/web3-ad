import Head from "next/head"
import Link from "next/link"

import { Layout } from "@/components/layout"
import { AppleMusicDemo } from "@/components/main"
import { WagmiConfig, createClient, configureChains, mainnet, goerli, sepolia } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { InjectedConnector } from 'wagmi/connectors/injected'


export default function IndexPage() {


  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet, goerli, sepolia],
    [publicProvider(), alchemyProvider({ apiKey: 'ia-Jdl4w27_daI46jNIwFNEni-6F79KH' })],
  )

  const client = createClient({
    // autoConnect: true,
    connectors: [new InjectedConnector({ chains })],
    provider,
    webSocketProvider,
  })

  return (
    <WagmiConfig client={client}>
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
    </WagmiConfig>
  )
}
