import 'server-only'

import React from 'react'
import { I18n, setupI18n } from '@lingui/core'
import { setI18n } from '@lingui/react/server'

// optionally use a stricter union type
type SupportedLocales = string

// Load and cache i18n instance for each locale per request
export const getI18n = React.cache(
  async (locale: SupportedLocales): Promise<I18n> => {
    const { messages } = await import(`../../locales/${locale}.po`)
    const i18n = setupI18n({
      locale,
      messages: { [locale]: messages }
    })
    return i18n
  }
)

/**
 * Set the request locale for the current request.
 *
 * **This function must be called on every relevant layouts and pages.**
 */
export async function setRequestLocale(locale: SupportedLocales) {
  const i18n = await getI18n(locale)
  setI18n(i18n)
}
