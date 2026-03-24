import "./globals.css";

export const metadata = {
  title: "Utsab Sinha | Portfolio",
  description:
    "Software Engineer & Data Analyst | Python • SQL • Tableau • AI/ML",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Loader */}
        <div id="loader">
          <svg
            className="handshake-svg"
            viewBox="0 0 400 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="hand-svg left-hand"
              x="0"
              y="80"
              width="140"
              height="40"
              rx="20"
            />
            <rect
              className="hand-svg right-hand"
              x="260"
              y="80"
              width="140"
              height="40"
              rx="20"
            />
          </svg>
        </div>

        {/* App */}
        <div id="appContent">{children}</div>

        {/* Loader logic */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener("load", () => {
                const loader = document.getElementById("loader");
                const app = document.getElementById("appContent");

                if (sessionStorage.getItem("hasSeenLoader")) {
                  loader.style.display = "none";
                  app.classList.add("show");
                  return;
                }

                sessionStorage.setItem("hasSeenLoader", "true");

                const audio = new Audio("/sounds/handshake.mp3");
                audio.volume = 0.25;
                audio.play().catch(() => {});

                if (navigator.vibrate) {
                  navigator.vibrate(30);
                }

                setTimeout(() => {
                  loader.classList.add("hide");
                  app.classList.add("show");
                }, 1800);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
