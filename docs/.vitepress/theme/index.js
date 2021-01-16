import DefaultTheme from 'vitepress/dist/client/theme-default';
import Acco from '@lagabu/acco';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@lagabu/theme-default';
import './style.scss';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Acco, {
      color: {
        theme: {
          primary: 'rgb(237, 109, 61)',
        },
      },
    });
  },
};
