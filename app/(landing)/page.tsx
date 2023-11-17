import AppFeatures from "@/components/AppFeatures";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

import { CheckCircle, Shapes } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="">
      <LandingNavbar />
      <LandingHero />
      <AppFeatures
        left={true}
        icon={Shapes}
        iconColor="#54a0ff"
        text="PromptFusion is a versatile and dynamic platform that offers a wide range of creative and practical tools for users."
        points={[
          "Users can generate code snippets for various programming languages ",
          "Generate customized email content quickly and easily ",
          "Create video and music content effortlessly",
          "Generate names for characters, businesses, products, and more",
        ]}
      />

      <AppFeatures
        left={false}
        icon={CheckCircle}
        iconColor="#54a0ff"
        text="This all-in-one platform empowers users to simplify tasks, enhance their communication, and unlock their creative potential."
        points={[
          " Craft compelling job applications with ease",
          "Condense lengthy text into concise summaries",
          "Reword and rephrase text for improved clarity and originality",
          "Engage in meaningful conversations for personalized interactions",
        ]}
      />
    </div>
  );
};

export default LandingPage;
