interface FormatCurrencyOptions {
  currency?: string
  locale?: string
  minimumFractionDigits?: number
  maximumFractionDigits?: number
}

export const formatCurrency = (
  value: number,
  options: FormatCurrencyOptions = {}
): string => {
  const {
    currency = 'USD',
    locale = 'en-US',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
  } = options

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits
  }).format(value)
}

export const formatDate = (
  dateString: string,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
): string => {
  return new Date(dateString).toLocaleDateString('en-US', options)
}

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')  // Hapus karakter khusus
    .replace(/[\s_-]+/g, '-')  // Ganti spasi/underscore dengan dash
    .replace(/^-+|-+$/g, '')   // Hapus dash di awal/akhir
}

export const cn = (...classes: Array<string | boolean | undefined>) => {
  return classes.filter(Boolean).join(' ')
}