import { Poppins, Roboto_Mono } from 'next/font/google';

/**
 * The Poppins font instance with specific subsets and weights.
 * @type {import('next/font').FontFace}
 */
export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

/**
 * The Roboto Mono font instance with specific subsets, display, and weights.
 * @type {import('next/font').FontFace}
 */
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
