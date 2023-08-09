first slide (Mosaique Logo):

Mosaique decentralized workflows is a platform that aims to provide interoperability between multiple organizations by decentralizing workflow processes and expediting the programming involved in such processes.  
The workflow processes can be any business operation, including the governance processes required to maintain the workflows themselves.  Automation of the workflow processes as a solution to the outdated practices we use today has not been implemented nor explored, until now.

second slide (Hyperledger Fabric Logo): 

Mosaique makes use of the Hyperledger Fabric blockchain to decentralize business workflows. If the workflows are going to be automated, they also need to be secure, transparent, and traceable.  The Hyperledger fabric network covers all these requirements which is why Mosaique has chosen Hyperledger Fabric as it's go to permissioned blockchain.  
However, changing chaincode in Hyperledger Fabric is a time consuming and expensive endeavor.  Making constant changes to chaincode is not feasible because of the many steps involved in order to be able to test your function(s) out.  For example, you have to install the chaincode and wait for approval in order to run the chaincode.

third slide (example of a state machine):

Mosaique bypasses this issue by using state machines to represent workflows.  The state machines will in turn be converted to a data template.  To put it simply, Mosaique’s data-driven state machine would represent the steps in a workflow.  The steps would be represented through various states and determining which state to move to next would be based on inputs and transition logic.  
Having a governance that is handled by workflows that are state machines, that are data driven, and that can be modified, opens up many opportunities for various industries to improve upon their day to day operations.
 
fourth slide (multiple images of various use case examples):

There are many use cases that Mosaique can provide the solution to such as car insurance, supply chains, house ownership, manufacturing, concert tours, etc.   

fifth slide (generic image of companies sending paper documents back and forth amongst eachother):

The common denominator among all these use cases is that multiple organizations are sending inputs back and forth amongst one another.  Normally the flow of information between multiple organizations would be done using paper documents which can lead to many pitfalls in the workflow processes.

sixth slide (various images related to the trial of a new drug use case, with arrows going between the pictures, showing the traditional way of handling the flow of information):

Lets take a look at a particular use case within the pharmaceutical industry.  Suppose there is a trial for a new drug.  There would be many parties involved such as the pharmaceutical company, ministry of health, hospital, doctor, patient, pharmacy, and an insurance company.  
The pharmaceutical company makes/tests their drug, the pharmaceutical company then approaches the ministry of health for approval, the pharmaceutical company also approaches a hospital to participate in their trial, the hospital selects a doctor for the trial, the doctor selects a patient for the trial, the patient's insurance company approves the patient for the trial, the various parties report their outcomes back to their ministry of health, and finally the minsitry of health approves/rejects the drug.  
As you can imagine the amount of documents going back in forth amongst these parties is immense.  The downside to passing informaion back and forth with paper or by electronic means without a blockchain, is that information can get lost, fraud can be committed, inaccuracies, slow processes, and increased expenses due to the number of third parties involved.  
The decentralized nature of Hyperledger Fabric in conjunction with the adaptability of data-driven state machines can eliminate/greatly reduce these impediments.

seventh slide (image of the visual editor showing nodes and arrows going between the nodes):

Mosaique uses a visual editor in order to build up data-driven state machines that makeup the governance for your decentralized system.  Hyperledger Fabric has an approval process, but they don't have a whole governance piece that sits on top of chaincode approvals.  Hyperledger Fabric also doesn't have a user interface or command line to handle their approval processes.  
Mosaique's visual editor is a react application that allows anyone in the governance process to build up the templates (basically creating a state machine).  In the visual editor the states are represented with nodes.  Users would be able to drag and drop transitions between the nodes, And then go in and define the logic on those transitions.  
An example of the logic for the transitions is "if someone has entered in a number, you add that number to the total and once you hit 50 you can go to the next state".  During each step in the workflow process the stakeholders can provide content that the users will see such as images, text inputs, display text, buttons, etc.  
Take car insurance as an example, the user of the visual editor would provide different content for different roles in the system.  For example, a claims adjuster would need to have an input box where they can insert a dollar amount, another input box for a description, and a button to go to the next state.  This means the user of the visual editor would need to provide all the necessary display content that gets rendered to each user, during each state.  
By using a simple drag and drop interface, no longer are you required to have an understanding of programming.  Since stakeholders now have the ability to design workflows using the visual editor, they are more aware of whether or not the processes they are receiving matches the requirements in their workflows.  Less time is being spent on clarification between different parties and individuals.  
Furthermore, Less inputs are required between the various parties and individuals as well.

eighth slide (image of the renderer):

The visual content supplied from the visual editor will eventually be parsed to a renderer where the content will be rendered to the caller.  The caller then has the ability to change the styling of the visual content to their liking, within the renderer.  For example you can change the size of an input field, the color of a header, the width of a picture, the margin between each paragraph, etc.  
There will be multiple renderers so that participants are not limited to just a few interfaces.  Mosaique plans on having both web and mobile renderers such as Vue.js, React.js, React Native, Java, and .NET.
