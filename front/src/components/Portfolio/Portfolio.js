import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <main className="portfolio section" id="portfolio">
      <div className="title">
        <h1>Portfolio</h1>
      </div>

      <div className="grid-container">
        <div className="column">
          <img src="/images/project4.jpg" height={630} alt="" />
          <img src="/images/project2.jpg" height={270} alt="" />
          <img src="/images/project3.jpg" alt="" height={400} />
        </div>

        <div className="column">
          <img src="/images/home.jpg" alt="" height={270} />
          <img src="/images/projec54.jpg" alt="" height={570} />
          <img src="/images/sarska.jpg" alt="" height={460} />
        </div>

        <div className="column item-3">
          <img src="/images/project1.jpg" alt="" height={450} />
          <img src="/images/landing.jpg" alt="" height={270} />
          <img src="/images/home.jpg" alt="" height={580} />
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
