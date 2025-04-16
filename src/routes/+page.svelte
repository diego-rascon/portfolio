<span id="credits">
  Hey there! If you're wondering, I built this site using SvelteKit with
  standard CSS. It might be a bit overkill for a portfolio/landing page, this
  could've easily been done with nothing but pure HTML/CSS, but I wanted to
  setup something more scalable, just in case I want to do something cool in the
  future. I'm also using Deno, not sure why, but it's been a positive
  experience. Also, the app is hosted in Netlify and I bought this domain using
  Porkbun.
</span>
<div id="root-container">
  <header>
    <h1 id="title">Diego Rascón</h1>
    <p>Software developer</p>
  </header>
  <main>
    <div id="links-container">
      <a target="_blank" href="mailto:contact@drascon.com"
        >contact@drascon.com</a
      >
      <a target="_blank" href="https://github.com/diego-rascon">GitHub</a>
      <a target="_blank" href="https://www.linkedin.com/in/diegorascon/"
        >LinkedIn</a
      >
    </div>
  </main>
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  #credits {
    display: none;
  }

  #root-container {
    height: 100vh;
    width: 100vw;
    place-content: center center;
    background-color: aliceblue;
    text-align: center;
  }

  h1,
  p {
    color: darkslategray;
  }

  #title {
    margin-bottom: 0.5rem;
  }

  #links-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 2rem;
  }
</style>
