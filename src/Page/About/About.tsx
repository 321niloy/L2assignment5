import ContactInformation from "../../Component/aboutContact/AboutContactIn";
import Milestone from "../../Component/Milestone/Milestone";
import MissionStatement from "../../Component/MissionStatement/MissionStatement";
import Teamsection from "../../Component/TeamSection/Teamsection";

const About = () => {
  return (
    <div>
      <MissionStatement></MissionStatement>
      <Teamsection></Teamsection>
      <Milestone></Milestone>
      <ContactInformation></ContactInformation>
    </div>
  );
};

export default About;
