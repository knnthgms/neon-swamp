import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const WindowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WindowElement = styled.div`
  background-color: #2e2e2e;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  font-family: "Menlo", monospace;
  flex: 1;
  margin-top: 10vh;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
  background-color: #3b3b3b;
  color: #aaaaaa;
  user-select: none;
`;

const TrafficLights = styled.div`
  display: flex;
  gap: 6px;
`;

const TrafficLight = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;

const Content = styled.div`
  padding: 16px;
`;

const Line = styled.div<{ indent?: boolean }>`
  display: flex;
  align-items: center;
  margin-left: ${({ indent }) => (indent ? "16px" : "0")};
`;

const Caret = styled.span`
  margin-right: 8px;
  color: #f3f3f3;
`;

const Key = styled.span`
  color: #f3f3f3;
`;

const Link = styled.a`
  color: #befcae;
  text-decoration: underline;
`;

const Value = styled.span`
  color: #4fc1ff;
`;

const LineSpacer = styled.div`
  height: 12px;
`;

const Window: React.FC = () => {
  return (
    <WindowContainer>
      <WindowElement>
        <TitleBar>
          <TrafficLights>
            <TrafficLight color="#FF605C" />
            <TrafficLight color="#FFBD44" />
            <TrafficLight color="#00CA4E" />
          </TrafficLights>
        </TitleBar>
        <Content>
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.currentRole</Key>
          </Line>
          <Line indent>
            <Value>"Senior Software Engineer @ Okta"</Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.experience</Key>
          </Line>
          <Line indent>
            <Value>
              ["SE @ Okta", "SMTS @ Aviatrix", "Staff Eng @ OmniRetail", "FE @
              YouPlus", "SDE @ TotalCloud"]
            </Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.currentLocation</Key>
          </Line>
          <Line indent>
            <Value>Bangalore, India</Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.contactInfo</Key>
          </Line>
          <Line indent>
            <Value>
              ["
              <Link target="_blank" href="mailto:knnthgms@gmail.com">
                knnthgms@gmail.com
              </Link>
              ", "
              <Link target="_blank" href="https://linkedin.com/in/knnthgms">
                LinkedIn
              </Link>
              ", "
              <Link target="_blank" href="https://github.com/knnthgms">
                Github
              </Link>
              "]
            </Value>
          </Line>
          <LineSpacer />

          <Line>
            <Caret>&gt;</Caret> <Key>Ken.resume</Key>
          </Line>
          <Line indent>
            <Value>
              "
              <Link target="_blank" href="assets/KENNETH_GOMES_CV.pdf">
                ken_gomes_resume.pdf
              </Link>
              "
            </Value>
          </Line>
          <LineSpacer />

          <Line>
            <Caret>&gt;</Caret> <Key>Ken.education</Key>
          </Line>
          <Line indent>
            <Value>
              ["BE in Information Science", "MSc in Management Information
              Systems "]
            </Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.certifications</Key>
          </Line>
          <Line indent>
            <Value>
              ["Multicloud Network Associate", "Multicloud Network
              Professional", "Section x Okta ProfAI: AI Proficiency"]
            </Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.languages</Key>
          </Line>
          <Line indent>
            <Value>
              ["JavaScript (ES2023+)", "TypeScript", "Node.js", "Python", "Go",
              "C++", "SQL", "HTML5", "CSS3", "SASS"]
            </Value>
          </Line>
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.frameworks</Key>
          </Line>
          <Line indent>
            <Value>
              ["React", "React Native", "Next.js","Vue.js", "Express", "Redux",
              "Tailwind CSS", "styled-components"]
            </Value>
          </Line>
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.tools</Key>
          </Line>
          <Line indent>
            <Value>
              ["Node.js", "Nx", "Vite", "Webpack", "Docker", "Git", "AWS",
              "Azure DevOps", "AppCenter", "PostgreSQL", "MongoDB"]
            </Value>
          </Line>
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.ai</Key>
          </Line>
          <Line indent>
            <Value>
              ["Claude Code", "GitHub Copilot", "ChatGPT", "OpenAI API", "prompt
              engineering"]
            </Value>
          </Line>
          <Line>
            <Caret>&gt;</Caret> <Key>Ken.design</Key>
          </Line>
          <Line indent>
            <Value>
              ["Figma", "Antd", "Tailwind CSS", "styled-components", "UI/UX"]
            </Value>
          </Line>
          <LineSpacer />
          <Line>
            <Caret>&gt;</Caret>
            <Typewriter
              options={{
                strings: [
                  "Ken.hobbies",
                  "Ken.openSourceContributions",
                  "Ken.currentlyReading",
                  "Ken.favorites",
                  "Ken.techPhilosophy",
                  "Ken.mentorships",
                  "Ken.sideProjects",
                  "Ken.weeklyPicks",
                  "Ken.futureGoals",
                ],
                autoStart: true,
                delay: 35,
              }}
            />
          </Line>
        </Content>
      </WindowElement>
    </WindowContainer>
  );
};

export default Window;
