import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  return (
    <footer className="grid place-content-center py-4.5 w-full gap-4">
      <p>
        Developed by <strong className="text-green-500">@Cesar Martinez</strong>{" "}
        <strong>{new Date().toUTCString()}</strong>
      </p>
      <div className="flex flex-row w-full items-center justify-center gap-4">
        <div>
          <a href="https://github.com/CesarMartinez7" target="_blank">
            <Icon icon="tabler:brand-github" width="30" height="30" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/cesar-martinez-castro-383943332/"
            target="_blank"
          >
            <Icon icon="tabler:brand-linkedin" width="30" height="30" />
          </a>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
