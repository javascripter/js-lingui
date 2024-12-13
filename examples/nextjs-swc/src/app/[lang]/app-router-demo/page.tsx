import { HomePage } from '../../../components/HomePage'
import { setRequestLocale } from '../../../lib/lingui/app-router/server'

export default async function Home({
  params: { lang }
}: {
  params: {
    lang: string
  }
}) {
  await setRequestLocale(lang)
  return <HomePage />
}
