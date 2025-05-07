// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docusaurus Tailwind Shadcn/ui',
  tagline: 'Templates Docusaurus with Tailwind CSS and Shadcn/ui',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'nguyenhaiha269',
  projectName: 'ahaihadayroi',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'en', locales: ['en'] },

  future: { experimental_faster: true },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nguyenhaiha269/ahaihadayroi/tree/main',
          docItemComponent: '@theme/ApiItem'
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' }
      })
    ]
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Docusaurus Tailwind Shadcn/ui',
      logo: { alt: 'Docusaurus Tailwind Shadcn/ui Logo', src: 'img/logo.svg' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { label: 'Petstore API', position: 'left', to: '/docs/category/petstore-versioned-api' },
        {
          href: 'https://github.com/nguyenhaiha269/ahaihadayroi',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository'
        }
      ]
    },
    docs: { sidebar: { autoCollapseCategories: true, hideable: true } },
    footer: {
      style: 'dark',
      links: [
        { title: 'Docs', items: [{ label: 'Tutorial', to: '/docs/intro' }] },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' }
          ]
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/facebook/docusaurus' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Docusaurus Tailwind Shadcn. Templates by <a href="https://github.com/nguyenhaiha269" style="font-weight: bold;" target="_blank">Nguyen Hai Ha</a>`
    },
    prism: {
      additionalLanguages: [
        'ruby', 'csharp', 'php', 'java', 'powershell',
        'json', 'bash', 'dart', 'objectivec', 'r'
      ]
    },
    languageTabs: [
      { highlight: 'python', language: 'python', logoClass: 'python' },
      { highlight: 'bash', language: 'curl', logoClass: 'curl' },
      { highlight: 'csharp', language: 'csharp', logoClass: 'csharp' },
      { highlight: 'go', language: 'go', logoClass: 'go' },
      { highlight: 'javascript', language: 'nodejs', logoClass: 'nodejs' },
      { highlight: 'ruby', language: 'ruby', logoClass: 'ruby' },
      { highlight: 'php', language: 'php', logoClass: 'php' },
      { highlight: 'java', language: 'java', logoClass: 'java', variant: 'unirest' },
      { highlight: 'powershell', language: 'powershell', logoClass: 'powershell' },
      { highlight: 'dart', language: 'dart', logoClass: 'dart' },
      { highlight: 'javascript', language: 'javascript', logoClass: 'javascript' },
      { highlight: 'c', language: 'c', logoClass: 'c' },
      { highlight: 'objective-c', language: 'objective-c', logoClass: 'objective-c' },
      { highlight: 'ocaml', language: 'ocaml', logoClass: 'ocaml' },
      { highlight: 'r', language: 'r', logoClass: 'r' },
      { highlight: 'swift', language: 'swift', logoClass: 'swift' },
      { highlight: 'kotlin', language: 'kotlin', logoClass: 'kotlin' },
      { highlight: 'rust', language: 'rust', logoClass: 'rust' }
    ]
  }),

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexPages: true,
        docsRouteBasePath: '/docs',
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: false,
        searchResultContextMaxLength: 50,
        searchResultLimits: 8,
        searchBarShortcut: true,
        searchBarShortcutHint: true
      }
    ],
    'docusaurus-theme-openapi-docs'
  ],
  plugins: [
    ['./src/plugins/tailwind-config.js', {}],
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          petstore_versioned: {
            specPath: 'api-swagger/petstore.yaml',
            outputDir: 'docs/petstore_versioned',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            },
            version: '2.0.0',
            label: 'v2.0.0',
            baseUrl: '/docs/petstore_versioned/swagger-petstore-yaml',
            downloadUrl: 'https://raw.githubusercontent.com/nguyenhaiha269/ahaihadayroi/main/api-swagger/petstore.yaml',
            versions: {
              '1.0.0': {
                specPath: 'api-swagger/petstore-1.0.0.yaml',
                outputDir: 'docs/petstore_versioned/1.0.0',
                label: 'v1.0.0',
                baseUrl: '/docs/petstore_versioned/1.0.0/swagger-petstore-yaml',
                downloadUrl: 'https://raw.githubusercontent.com/nguyenhaiha269/ahaihadayroi/main/api-swagger/petstore-1.0.0.yaml'
              }
            }
          }
        }
      }
    ],
    [
      'ideal-image',
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true
      })
    ],
    [
      './src/plugins/blog-plugin',
      {
        path: 'blog',
        editLocalizedFiles: false,
        blogTitle: 'Blog',
        blogDescription: 'Blog description is here ...',
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'List blog',
        routeBasePath: 'blog',
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**'
        ],
        postsPerPage: 6,
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        showReadingTime: true,
        onUntruncatedBlogPosts: 'ignore',
        editUrl: 'https://github.com/nguyenhaiha269/ahaihadayroi/tree/main/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]]
      }
    ]
  ]
}

export default config;
