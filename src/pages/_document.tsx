import { Html, Head, Main, NextScript } from 'next/document'

// Simple approach
// if (process.env.NEXT_MANUAL_SIG_HANDLE) {
//   console.log('TRUE')
//   // this should be added in your custom _document
//   process.on('SIGTERM', () => {
//     console.log('Received SIGTERM: ', 'cleaning up')
//     process.exit(0)
//   })
//
//   process.on('SIGINT', () => {
//     console.log('Received SIGINT: ', 'cleaning up')
//     process.exit(0)
//   })
// }

// Terminator Approach
const terminator = (signal: string) => {
  console.log(`Received ${signal}: ", "cleaning up`);
  setTimeout(
    (...args) => {
      console.log(...args);
      process.exit(0);
    },
    400,
    "Message"
  );
  // un-commenting this line will cause everything to just stop and kill the pending timeout
  // process.exit(0);
};

[
  "SIGHUP",
  "SIGINT",
  "SIGQUIT",
  "SIGILL",
  "SIGTRAP",
  "SIGABRT",
  "SIGBUS",
  "SIGFPE",
  "SIGUSR1",
  "SIGSEGV",
  "SIGUSR2",
  "SIGTERM",
].forEach(function (sig) {
  process.on(sig, function () {
    terminator(sig);
    console.log("signal: " + sig);
  });
});

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
