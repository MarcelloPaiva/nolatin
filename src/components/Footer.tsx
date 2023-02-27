export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <h2>Under the hood</h2>
      <p>
        Learn more about the motives and people that gave life to this
        initiative.
      </p>
      <nav aria-label="Secondary">
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/credits">Credits</a>
          </li>
          <li>
            <a href="/accessibility">Accessibility</a>
          </li>
          <li>
            <a href="https://github.com/MarcelloPaiva/nolatin/issues/new/choose">
              Make a comment
            </a>
          </li>
        </ul>
      </nav>
      <hr className="una" aria-hidden="true" />

      <div className="post-footer">
        <p>
          Made with <span aria-label="love">❤️</span> by a{" "}
          <a href="/credits">bunch of folks</a> that{" "}
          <a href="https://github.com/MarcelloPaiva/nolatin/issues/new/choose">
            give a damn
          </a>
          , and licensed under a<br />{" "}
          <a rel="license" href="http://creativecommons.org/licenses/by/2.0/">
            Creative Commons Attribution 2.0 Generic License
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
