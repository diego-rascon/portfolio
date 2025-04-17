<script lang="ts">
  import ContactLink from "../components/ContactLink.svelte";
</script>

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
      <ContactLink href="mailto:contact@drascon.com">
        contact@drascon.com
      </ContactLink>
      <ContactLink href="https://github.com/diego-rascon">GitHub</ContactLink>
      <ContactLink href="https://www.linkedin.com/in/diegorascon/">
        LinkedIn
      </ContactLink>
    </div>
  </main>
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #01295f;
  }

  #credits {
    display: none;
  }

  #root-container {
    height: 100vh;
    width: 100vw;
    place-content: center center;
    text-align: center;
    padding: 2rem;
    background-color: #f4eded;
    /* F9DB6D */
  }

  #title {
    margin-bottom: 0.5rem;
  }

  #links-container {
    display: flex;
    max-width: 800px;
    justify-content: center;
    margin: 2rem auto 0 auto;
    gap: 1rem;
  }

  @media (max-width: 780px) {
    #links-container {
      flex-direction: column;
    }
  }
</style>
