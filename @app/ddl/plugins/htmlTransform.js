function htmlTransform(env) {
  return {
    name: 'html-transform',
    transformIndexHtml: {
      enforce: 'pre',
      transform: (html) =>
        html.replace(/<%=(.*?)%>/g, (match, p1) => env[p1] ?? match),
    },
  };
}

export default htmlTransform;
