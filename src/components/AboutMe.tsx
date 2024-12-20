import SectionTitle from "@/components/SectionTitle";
import Section from "@/components/Section";
import Lakers from "@/components/Lakers";

const AboutMe = () => {
  return (
    <Section id="about-me">
      <SectionTitle>About Me</SectionTitle>
      <p className="text-muted-foreground">
        From a young age, I&apos;ve had a fascination with web development and
        the idea of writing code to bring ideas to life on a screen. This
        interest of mine really took off during a Software Engineering course I
        took at Cal Poly Pomona, where I built a full-stack application as a
        final project, and I haven&apos;t looked back since.
      </p>
      <p className="text-muted-foreground">
        This project gave me my first hands-on experience with managing both
        frontend and backend code. While challenging to build, it was rewarding
        to see the final product come to life. Now, I focus on and enjoy
        building responsive, visually appealing, and intuitive web applications.
      </p>
      <p className="text-muted-foreground">
        I enjoy working with Next.js and using its powerful features to create
        great user experiences. Alongside that, I have experience using React,
        Node, and both SQL and NoSQL databases to build robust full-stack
        applications.
      </p>
      <div className="text-muted-foreground">
        Aside from that, I am a huge fan of the <Lakers /> and have been one my
        whole life. The only time I&apos;ve caught a game in person ended in a
        loss, but the experience was great either way! I&apos;m due for a win
        next time!
      </div>
    </Section>
  );
};

export default AboutMe;
