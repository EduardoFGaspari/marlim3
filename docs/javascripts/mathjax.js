window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    tags: "all"
  }
};

document$.subscribe(() => {
  MathJax.texReset();
  MathJax.typesetClear();
  MathJax.typesetPromise();
});