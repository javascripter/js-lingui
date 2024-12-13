'use client'

import React from 'react'
import { I18nProvider as LinguiI18nProvider } from '@lingui/react'
import { Locale, type Messages, setupI18n } from '@lingui/core'
import { useState } from 'react'

export function I18nProvider({
  children,
  initialLocale,
  initialMessages
}: {
  children: React.ReactNode
  initialLocale: Locale
  initialMessages: Messages
}) {
  const [i18n] = useState(() => {
    return setupI18n({
      locale: initialLocale,
      messages: { [initialLocale]: initialMessages }
    })
  })
  return <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>
}
