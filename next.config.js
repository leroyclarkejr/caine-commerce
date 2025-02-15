/** @type {import('next').NextConfig} */

const loaderUtils = require('loader-utils');

/**
 * Generate context-aware class names when developing locally
 */
const localIdent = (loaderContext, localIdentName, localName, options) => {
  return (
    loaderUtils
      .interpolateName(loaderContext, `[folder]_[name]__${localName}`, options)
      // Webpack name interpolation returns `about_about.module__root` for
      // `.root {}` inside a file named `about/about.module.css`. Let's simplify
      // this.
      .replace(/\.module_/, '_')
      // Replace invalid symbols with underscores instead of escaping
      // https://mathiasbynens.be/notes/css-escapes#identifiers-strings
      .replace(/[^a-zA-Z0-9-_]/g, '_')
      // "they cannot start with a digit, two hyphens, or a hyphen followed by a digit [sic]"
      // https://www.w3.org/TR/CSS21/syndata.html#characters
      .replace(/^(\d|--|-\d)/, '__$1')
  );
};

const regexEqual = (x, y) => {
  return (
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline
  );
};

// Overrides for css-loader plugin
function cssLoaderOptions(modules) {
  const isProd = process.env.NODE_ENV === 'production';
  const { getLocalIdent, ...others } = modules;
  return {
    ...others,
    getLocalIdent: isProd ? getLocalIdent : localIdent,
    exportLocalsConvention: 'camelCaseOnly',
    mode: 'local'
  };
}

module.exports = {
  webpack: (config) => {
    const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === 'object');

    if (oneOf) {
      // Find the module which targets *.css files
      const moduleCssRule = oneOf.oneOf.find((rule) => regexEqual(rule.test, /\.module\.(css)$/));

      if (moduleCssRule) {
        // Get the config object for css-loader plugin
        const cssLoader = moduleCssRule.use.find(({ loader }) => loader.includes('css-loader'));
        if (cssLoader) {
          cssLoader.options = {
            ...cssLoader.options,
            modules: cssLoaderOptions(cssLoader.options.modules)
          };
        }
      }
    }

    return config;
  },
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/password',
        destination: '/',
        permanent: true
      }
    ];
  }
};
