export default function Footer() {
  return (
    <footer aria-label="Footer">
      <section className="site-footer">
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

        <hr aria-hidden="true" />

        <div>
          <p>
            Made with love by a <a href="/credits">bunch of folks</a> that give
            a damn.
            <br />
            All Rights Reserved ©
            <a href="https://www.linkedin.com/in/mtpaiva/">Marcelo Paiva</a>
          </p>
        </div>
      </section>
    </footer>
  )
}
