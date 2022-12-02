import { extendTheme } from '@chakra-ui/react';
import '@fontsource/caveat';

export const theme = extendTheme({

  fonts: { body: `"Caveat", cursive`, heading: `"Caveat", cursive` },

  styles: {
    global: {
      body: {
        bg: 'teal.200',
        color: 'black',
        fontSize: '2xl',
      },
      h2: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },

    },
  },
});
