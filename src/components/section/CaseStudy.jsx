import comingSoonSign from "./../../assets/comingsoonsign.png";
import serviceSite from "./../../assets/ServiceSite.png";
import memoryGame from "./../../assets/MemoryGame.png";
import Ecommerce from "./../../assets/Ecommerce.png";
import Dashboard from "./../../assets/Dashboard.png";
export const CaseStudy = () => {
  return (
    <section className="w-screen min-h-[80vh] p-5 space-y-5 flex flex-col  justify-center items-center gap-10">
      <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter text-left">
        CASE STUDY 🧑‍🎨
      </h1>
      <h2 class="text-center text-lg">
        Scroll through the carousel <br />
        <br />
        <span class="inline-block text-2xl animate-bounce">↓</span>
      </h2>
      <div className="carousel carousel-center bg-stone-100 rounded-box  max-w-70  min-[500px]:max-w-[85vw] space-x-4 p-4 gap-5 shadow-md">
        <div className="carousel-item caseStudyCards">
          <div className="card w-60 min-[832px]:w-96 shadow-md bg-white">
            <figure className="basis-1/2 h-full">
              <img
                src={serviceSite}
                alt="Service Site Image"
                className="object-fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 1: Service site</h2>
              <p>
                TutoringService is dedicated to helping students succeed at
                every stage of their academic journey. Whether you're in high
                school or university, our mission is to provide personalized
                support through expert-led tutoring, mentorship, and academic
                guidance.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">React/TypeScript</div>
                <div className="badge badge-outline">TailwindCSS/DaisyUI</div>
                <div className="badge badge-outline">Figma</div>
                <div className="badge badge-outline">Git & CI/CD</div>
              </div>

              <div className="pt-2 flex">
                <a
                  href="https://tutoring-service.netlify.app/"
                  target="_blank"
                  className="caseStudyLinks font-bold"
                >
                  View case study →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item caseStudyCards">
          <div className="card w-60 min-[832px]:w-96 shadow-md bg-white">
            <figure className="basis-1/2 h-full">
              <img
                src={memoryGame}
                alt="Memory Game Screenshot"
                className="object-fill"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Design 2: Swapped! A Memory Game</h2>
              <p>
                Cup flipping memory game that tests your sharpness and mind
                abilities. The game includes a unique twist where cups will also
                swap positions at the end of the user’s turn.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">TailwindCSS/DaisyUI</div>
                <div className="badge badge-outline">Figma</div>
                <div className="badge badge-outline">FontAwesome</div>
                <div className="badge badge-outline">Motion Library</div>
                <div className="badge badge-outline">Git & CI/CD</div>
              </div>

              <div className="pt-2 flex">
                <a
                  href="https://swapped-game.netlify.app/"
                  target="_blank"
                  className="caseStudyLinks font-bold"
                >
                  View case study →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item caseStudyCards">
          <div className="card w-60 min-[832px]:w-96 shadow-md bg-white">
            <figure className="basis-1/2 h-full">
              <img src={Ecommerce} alt="Screenshot of Furniture Forest" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Design 3: Furniture Forest - Ecommerce Store
              </h2>
              <p>
                Furniture Forest was founded in 2025 with a simple mission: to
                bring high-quality, stylish, and sustainable furniture to
                Canadian homes. Our collection features handcrafted solid wood
                tables, modular sofas made with eco-friendly fabrics, and decor
                accents inspired by nature.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">NextJS</div>
                <div className="badge badge-outline">TailwindCSS/DaisyUI</div>
                <div className="badge badge-outline">Figma</div>
                <div className="badge badge-outline">FontAwesome</div>
                <div className="badge badge-outline">Git & CI/CD</div>
              </div>

              <div className="pt-2 flex">
                <a
                  href="https://furniture-forest.netlify.app/"
                  target="_blank"
                  className="caseStudyLinks font-bold"
                >
                  View case study →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item caseStudyCards">
          <div className="card w-60 min-[832px]:w-96 shadow-md bg-white">
            <figure className="basis-1/2 h-full">
              <img
                src={Dashboard}
                alt="Screenshot of MonthlyBud - a financial dashboard application"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Design 4: MonthlyBud Financial Tracker
              </h2>
              <p>
                The primary goal of ‘MonthlyBud’ dashboard is to provide users
                with a simple yet powerful tool for tracking their personal
                finances. <br /> Visualize spending habits, compare income
                against expenses, and analyze financial trends over time.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">ChartJS</div>
                <div className="badge badge-outline">ReactTypescript</div>
                <div className="badge badge-outline">TailwindCSS</div>
                <div className="badge badge-outline">DaisyUI & Vite</div>
              </div>

              <div className="pt-2 flex">
                <button
                  className="caseStudyLinks"
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <p className="font-bold">View case study →</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <dialog id="my_modal_2" className="modal text-center">
          <div className="modal-box bg-transparent shadow-none">
            <p className="py-4 text-3xl text-white font-bold">Coming soon!</p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
};
