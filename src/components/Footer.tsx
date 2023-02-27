export default function Footer() {
  return (
    <footer aria-label="Footer">
      <section className="hero">
        <h2>
          We are presenting at the 38th Annual CSUN Assistive Technology
          Conference
        </h2>
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
          " to introduce this free tool to help designers bringing people with
          disabilities early in the design process.
        </p>
        <p>
          Join us at the "Grand GH" room on March 14, 2023, at 10:20 AM PDT.
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
        <hr className="una" aria-hidden="true" />

        <div className="post-footer">
          <p>
            Made with love by a <a href="/credits">bunch of folks</a> that{" "}
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
      </section>
    </footer>
  )
}
