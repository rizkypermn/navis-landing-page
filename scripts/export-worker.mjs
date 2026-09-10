// Vinext exits immediately after prerendering. Give Windows a moment to close
// its asynchronous server handles before exiting (avoids UV_HANDLE_CLOSING).
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  process.exit = (code = 0) => {
    setTimeout(() => exit(code), 500);
  };
}
process.argv = [process.execPath, 'vinext', 'build'];
await import(new URL('./cli.js', import.meta.resolve('vinext')).href);
