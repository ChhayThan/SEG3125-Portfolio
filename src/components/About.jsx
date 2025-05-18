import aboutPNG from "./../assets/about.png";
import workPNG from "./../assets/work.png";

export const About = () => {
  return (
    <section className="w-screen min-h-[50vh] p-5 space-y-5 flex flex-col  justify-center items-center gap-20">
      <div className="flex justify-center items-center gap-2">
        <div className="flex gap-2 flex-col ">
          <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter">
            ABOUT ME <span className="min-[832px]:hidden">🧑‍💻 </span>
          </h1>
          <p className="max-w-xl text-[min(4vw,16px)]">
            I’m a <strong>second-year Software Engineering student</strong> at
            the <strong>University of Ottawa</strong> with a deep passion for
            technology and building innovative, user-focused solutions through
            code. <br /> <br />
            What excites me most about software engineering is its power to
            bring ideas to life and solve real-world problems. <br /> <br />I am
            an experienced <strong>full-stack developer</strong>, skilled in a
            variety of web technologies and always eager to expand my toolkit.{" "}
            <br /> <br />I enjoy building scalable applications and constantly
            explore new technologies to stay current and grow as an engineer.
          </p>
        </div>
        <div className="max-[832px]:hidden">
          <img
            src={aboutPNG}
            alt="Person with a suit and a computer as their head"
            className="object-contain w-xs"
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="max-[832px]:hidden">
          <img src={workPNG} alt="Work" className="object-contain w-xs" />
        </div>
        <div className="flex gap-2 flex-col ">
          <h1 className="text-[min(10vw,70px)] leading-[0.9] font-bold tracking-tighter">
            HOW I WORK <span className="min-[832px]:hidden">💻 </span>
          </h1>
          <p className="max-w-xl text-[min(4vw,16px)]">
            I thrive in{" "}
            <strong>collaborative, team-oriented environments</strong> where
            ideas are openly shared, and everyone's strengths contribute to
            success. I bring <strong>strong communication skills</strong>, a
            willingness to share knowledge, and an open mind that helps foster
            effective collaboration.
            <br /> <br />
            I'm a <strong>quick learner</strong> who{" "}
            <strong>adapts easily</strong> to new tools, technologies, and
            workflows. My experience working in{" "}
            <strong>Agile environments</strong> has strengthened my ability to
            work iteratively, respond to feedback quickly, and deliver
            continuous value as part of a team.
          </p>
        </div>
      </div>
    </section>
  );
};
