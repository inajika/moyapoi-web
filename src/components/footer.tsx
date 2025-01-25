import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

/**
 * 共通フッター
 */
export default function Footer() {
  return (
    <footer className="h-[16vh] p-1 bg-gray-300">
      <ul className="flex flex-col gap-1">
        <li>
          &copy;&nbsp;2025&nbsp;
          <a
            href="https://inajika.com"
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            inajika
          </a>
        </li>
        <li>
          <a
            href="https://github.com/inajika/moyapoi-web"
            target="_blank"
            rel="noreferrer"
            className="underline hover:no-underline"
          >
            <FontAwesomeIcon
              icon={faGithub}
              height={'1.2em'}
              className="inline-block mr-0.5"
            />
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
