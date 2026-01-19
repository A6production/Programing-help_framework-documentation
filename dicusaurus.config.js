module.exports = {
  title: "Test",
  tagline: "Simple Docusaurus Documentations",
  url: "https://A6production.github.io",
  baseUrl: "/smth/",
  projectName: "my-docs",
  organizationName: "Programing-help",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
      },
    ],
  ],
};
