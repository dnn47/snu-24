import React from "react";
import NavBar from "../components/NavBar";
import Info from "../components/Info";
import { translateThis } from "../utils/TranslateServices";
import { useTitleAnimation } from "../utils/TitleAnimation";

function Gilman() {
  const typeAnimation = useTitleAnimation("Gilman Scholarship");
  return (
    <>
      <NavBar
        nameOne={translateThis("Home").String}
        linkOne="home"
        nameTwo={translateThis("About").String}
        linkTwo="about"
      />
      <div className="container move-down p-5">
        <div className="row">
          <div className="row">{typeAnimation}</div>
        </div>
        <div className="row">
          <div className="col">
            <Info
              title={translateThis("Overview").String}
              text={
                translateThis(
                  "The Benjamin A. Gilman Scholarship is a U.S. government program that helps students with limited financial means study or intern abroad. It awards up to $5,000 for credit-bearing programs in diverse countries, focusing on critical languages and underrepresented populations. By broadening access to global experiences, the Gilman Scholarship aims to develop skills crucial for national security and economic prosperity, while fostering cultural understanding and individual growth."
                ).String
              }
            />
            <Info
              title={translateThis("How to Apply").String}
              text={
                translateThis(
                  "To apply for the Gilman Scholarship, you'll need to be a U.S. citizen or national, receive a Pell Grant or be eligible for one, and be enrolled in a credit-bearing study abroad or internship program. You'll submit essays about your study plans and community impact, along with transcripts and advisor certifications. Head to the Gilman website for full details and to start your application!"
                ).String
              }
            />
            <Info
              title={translateThis("Tips").String}
              text={
                translateThis(
                  "<ul> <li><b>Start early</b>: Give yourself plenty of time to gather materials and write strong essays.</li> <li><b>Be Detailed</b>: Research and include specific details from your study abroad program in your essays.</li> <li><b>Focus on Growth</b>: Explain how studying abroad will impact your personal and professional development.</li> <li><b>Choose an impactful service project</b>: Develop a project that addresses a specific need in your host community and ties back to your academic and career goals.</li> <li><b>Make your essays shine</b>: Write compelling essays that showcase your unique voice and experiences.</li> <li><b>Proofread everything</b>: Have someone else proofread it for any errors, and then proofread it again.</li></ul>"
                ).String
              }
            />
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            <img
              src="images/gilman_seal.png"
              className="img-fluid rounded"
              alt="Gilman Logo"
              style={{ maxWidth: "25%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gilman;
