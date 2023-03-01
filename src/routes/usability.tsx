import Layout from "../components/Layout"
import styled from "styled-components"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 0 1rem;
`

export default function Credits() {
  return (
    <Layout>
      <Main className="usability">
        <h1>User Testing Guidelines</h1>
        <p>If you're a UX designer looking to test your digital design solutions with people with disabilities, it's important to consider the needs of assistive technology users. 
        </p>

        <h2>Recruiting Participants</h2>
        <ul>
	        <li>Be clear and specific about the types of disabilities you are looking to include in your study.</li>
	        <li>Ensure that your recruitment process is accessible, for example, by providing alternative ways for potential participants to get in touch with you, such as via email or phone.</li>
	        <li>Consider partnering with disability advocacy groups to help identify potential participants and ensure that your study is inclusive.</li>
        </ul>
       <h2>Preparing for the Study</h2>
      <ul>
        <li>Ensure that your study materials and facilities are accessible to all participants. Offer your study materials in alternative formats, such as Braille or large print. If you're conducting your study in a physical research facility, make sure that the facility is accessible to people with disabilities. This includes providing wheelchair accessibility, accessible restrooms, and accessible parking.</li>
        <li>Consider using assistive technology tools yourself to better understand the needs of your participants and to identify potential accessibility issues with your designs.</li>
        <li>Be aware of potential sensory issues that your participants may experience, such as sensitivity to bright lights or loud noises. Make adjustments to your study environment as needed to accommodate these needs.</li>
      </ul>
      <h2>Conducting Your Usability Study</h2>
          <p>When conducting your usability study, make sure to follow best practices for working with people with disabilities. This includes:</p>
          <ul>
          <li>Using person-first language to refer to participants with disabilities (e.g., "person with a disability" instead of "disabled person"). Ask the person the language that they prefer.</li>
            <li>Allow participants to use their own assistive technology devices during the study.</li>
	          <li>Be patient and flexible with participants who may need extra time or assistance to complete tasks.</li>
	          <li>Provide clear instructions and allow participants to ask questions if they are unsure about what to do.</li>
	          <li>Consider providing alternative ways for participants to provide feedback, such as using voice recognition software or allowing participants to write down their responses.</li>
          </ul>
          <p>During the study, make sure to observe how participants interact with your digital designs and any assistive technology they may be using. Ask for their feedback and suggestions for improving the accessibility of your designs.</p>
          <h2>Post-Study Follow-Up</h2>
          <ul>
	          <li>Compensate participants fairly. Verify that rewards platforms/tools are accessible before study begins​. Check for preferred payment methods.</li>
	          <li>Consider providing participants with a summary of the study findings and any changes you plan to make to your design based on their feedback.</li>
	          <li>Use the feedback from your study to improve the accessibility of your designs for all users.</li>
          </ul>
          <h2>Conclusion</h2>
          <p>Testing your digital designs with people with disabilities is an important part of ensuring that your designs are accessible to all users. By following these guidelines and best practices, you can help make your usability studies more inclusive and effective.</p>
      </Main>
    </Layout>
  )
}
