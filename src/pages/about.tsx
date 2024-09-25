const About = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex gap-5 flex-col">
          <h2 className="text-5xl md:text-7xl ">About me</h2>
          <a
            href="https://resume-beta-rho.vercel.app/"
            target="_blank"
            className="text-xl link"
          >
            View my resume &#8599;
          </a>
          <p className="text-2xl md:text-3xl">
            Born in Turkey in 2002. My interest in software began in high school
            when I started changing the HTML content of my class notes on the
            school's website. I wish I could say I've been coding ever since,
            but it wasn't until I was studying Agricultural Machinery and
            Technology at Ege University that I realized I could do this
            professionally. In January 2023, I dropped out of university, and
            since then, I've been coding.
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <h2 className="text-3xl  md:text-4xl ">Projects</h2>
          <p className="text-2xl md:text-3xl">
            I'm currently working on a story website for kids.
            <span className="text-accent">
              <br />
              <br />
              You can find my projects on{" "}
              <a href="/projects" className="text-highlight underline">
                Projects
              </a>{" "}
              page.
            </span>
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <h2 className="text-3xl  md:text-4xl ">Offline</h2>
          <p className="text-2xl md:text-3xl">
            When I'm not coding or writing, I'm probably do painting, scrolling
            on apps, watching movies or improving my English.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
