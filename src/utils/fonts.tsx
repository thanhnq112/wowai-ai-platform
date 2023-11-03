import { Quicksand, Montserrat } from 'next/font/google'

export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--quicksand-font',
})

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
    variable: '--montserrat-font',
})