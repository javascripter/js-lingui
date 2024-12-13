import linguiConfig from '../../../lingui.config'
import React from 'react'
import { t } from '@lingui/macro'
import { I18nProvider } from '../../lib/lingui/app-router/client'
import { getI18n, setRequestLocale } from '../../lib/lingui/app-router/server'

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params: { lang }
}: {
  params: {
    lang: string
  }
}) {
  setRequestLocale(lang)
  const i18n = await getI18n(lang)

  return {
    title: t(i18n)`Translation Demo`
  }
}

export default async function RootLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode
  params: {
    lang: string
  }
}) {
  setRequestLocale(lang)
  const { messages } = await getI18n(lang)
  return (
    <I18nProvider initialLocale={lang} initialMessages={messages}>
      <html lang={lang}>
        <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col">{children}</main>
        </body>
      </html>
    </I18nProvider>
  )
}
