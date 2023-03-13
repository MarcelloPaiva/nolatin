export default function Footer() {
  return (
    <footer aria-label="Footer">
      <section className="hero">
        <h2>Join us at the CSUN Conference</h2>
        <p>
          Diego Baca, Becky Gibson, Marcelo Paiva and Claudio Luis Vera will be
          presenting the session "
          <strong>
            <a
              href="https://www.csun.edu/cod/conference/sessions/index.php/public/presentations/view/1467"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rapid Prototyping with Accessibility in Mind
            </a>
          </strong>
          " to introduce this free tool to help designers bring in people with
          disabilities early in the design process.
        </p>
        <p>
          Anaheim Marriott 700 West Convention Way, Anaheim, California 92802
          <br />
          Room: "Grand GH"
          <br />
          Date: March 14, 2023, at 10:20 AM PDT.
        </p>
      </section>

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
            Made with love by a <a href="/credits">bunch of folks</a> that{" "}
            <a href="https://github.com/MarcelloPaiva/nolatin/issues/new/choose">
              give a damn
            </a>
            , and licensed under a
            <a rel="license" href="http://creativecommons.org/licenses/by/2.0/">
              Creative Commons Attribution 2.0 Generic License
            </a>
            .
          </p>
        </div>
      </section>
    </footer>
  )
}
