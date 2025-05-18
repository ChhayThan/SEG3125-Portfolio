import comingSoonSign from "./../assets/comingsoonsign.png";
export const CaseStudy = () => {
  return (
    <section className="w-screen min-h-[80vh] p-5 space-y-5 flex flex-col  justify-center items-center gap-20">
      <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter text-left">
        CASE STUDY 🧑‍🎨
      </h1>

      <div className="carousel carousel-center bg-stone-100 rounded-box  max-w-70  min-[500px]:max-w-[85vw] space-x-4 p-4 gap-5 shadow-md">
        <div className="carousel-item">
          <div className="card w-60 min-[832px]:w-96 shadow-md">
            <figure>
              <img src={comingSoonSign} alt="Coming soon image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 1: Service site</h2>
              <p>
                Description of this case study. A site for some kind of service
                (e.g. dentist, bike repair, hairdresser)
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">React/JavaScript</div>
                <div className="badge badge-outline">HTML/CSS</div>
                <div className="badge badge-outline">Figma</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card w-60 min-[832px]:w-96 shadow-md">
            <figure>
              <img src={comingSoonSign} alt="Coming soon image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 2: A small game</h2>
              <p>Description of this case study. A small game of some kind.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">React/JavaScript</div>
                <div className="badge badge-outline">HTML/CSS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card w-60 min-[832px]:w-96 shadow-md">
            <figure>
              <img src={comingSoonSign} alt="Coming soon image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 3: An E-commerce Website</h2>
              <p>
                Description of this case study. Designing and developing an
                e-commerce website.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">React/JavaScript</div>
                <div className="badge badge-outline">HTML/CSS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className="card w-60 min-[832px]:w-96 shadow-md">
            <figure>
              <img src={comingSoonSign} alt="Coming soon image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 4: An Analytical Site</h2>
              <p>
                Description of this case study. Designing and developing an
                analytics site (BI, sport, anything with visualization)
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Data Plotting/Graph</div>
                <div className="badge badge-outline">JavaScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
