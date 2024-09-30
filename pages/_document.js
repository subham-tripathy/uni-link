import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="backdrop-filter backdrop-blur-md backdrop-brightness-50 pb-20"
                style={{
                    backgroundImage: "url('/images/bg.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    minHeight: "100vh",
                }}
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
