import linkedIn from "./../assets/linkedin.webp";
import github from "./../assets/github.webp";
import mail from "./../assets/mail.webp";
import cv from "./../assets/cv.webp";
import Resume from "./../assets/Resume.pdf";
export const Home = () => {
  return (
    <section className="w-screen h-screen p-5 space-y-5 flex flex-col min-[832px]:flex-row justify-center items-center gap-5">
      <div className="flex gap-1 flex-col">
        <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter">
          Hello there <span className="inline-block animate-wave"> 👋</span>
          <br />
          I’m Eric Chhour{" "}
        </h1>
        <h3 className="text-[min(4vw,16px)] font-semibold">
          Chhay Than Eric Chhour
        </h3>

        <div className="flex gap-2 pt-2">
          <div className="tooltip tooltip-bottom" data-tip="LinkedIn">
            <a
              href="https://www.linkedin.com/in/chhay-than-chhour"
              target="_blank"
            >
              <img src={linkedIn} alt="LinkedIn Icon" className="icon" />
            </a>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Github">
            <a href="https://github.com/ChhayThan" target="_blank">
              <img src={github} alt="Github Icon" className="icon" />
            </a>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Email">
            <a
              href="mailto:chhaythan.eric@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="Mail Icon" className="icon" />
            </a>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Resume">
            <a href={Resume} download>
              <img src={cv} alt="Resume Icon" className="icon" />
            </a>
          </div>
        </div>

        <div className="min-[832px]:hidden pt-2">
          <h2 className="font-bold text-base text-[min(4vw,16px)]">
            SOFTWARE ENGINEERING STUDENT
            <br />@ UNIVERSITY OF OTTAWA
          </h2>

          <h2 className="pt-2 text-[min(4vw,16px)]">
            Welcome to my portfolio website Scroll! <br />
            down for more...
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-max pb-12 max-[832px]:hidden">
        <h2 className="font-bold text-base">
          SOFTWARE ENGINEERING STUDENT
          <br />@ UNIVERSITY OF OTTAWA
        </h2>

        <h2>
          Welcome to my portfolio website! <br />
          Scroll down for more...
        </h2>
      </div>
    </section>
  );
};
