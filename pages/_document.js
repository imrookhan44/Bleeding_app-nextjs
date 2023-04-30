import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the Zopim code here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
                d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
                _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
                $.src="https://v2.zopim.com/?3AlI84iZd4LhuhBDSXw0BHLFoQQx1V8a";z.t=+new Date;$.
                type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
              `,
          }}
        />

        <link rel="stylesheet" href="/bootstrap/bootstrap.min.css" />
        <script src="/bootstrap/bootstrap.bundle.min.js" defer></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
