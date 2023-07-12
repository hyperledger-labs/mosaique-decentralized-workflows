Mosaique: Decentralized Workflows

# Problem

## Decentralized enterprise business workflows

Currently, organizations have robust internal systems for their staff and clients, but when external organizations need to be involved in a workflow, it becomes challenging. Trust is essential, but involving third parties like banks or insurance companies increases costs and slows down processes. Direct integration between organizations is resource-intensive and prone to complications. For example, in car insurance, multiple steps involving drivers, insurance companies, and the police require inputs, reports, and signoffs, leading to inefficiencies and the need for trust. We lack a technical solution that automates workflows between organizations while ensuring security and trust. Although we could have a direct integration between organizations, it is still highly complex and resource intensive.

Let's dive deeper on the example of car insurance. Let's
consider a vehicular accident claim. After an accident, an accident
record needs to be created. This may include information from the two
drivers, their insurance companies, and the police. That information is
used to generate an insurance claim. An appraiser is consulted to
determine the cost of repair and an adjuster recommends the coverage by
the insurance company. Inputs, reports, and sign-offs are required from
the different parties during the multiple steps involved and all parties
want to assure that fraud is not being committed on them. Each step
requires inputs and sign-offs. When these are passed as documents, the
chain of custody requires parties to just trust each other.
Verifications and validations are an expensive addition to the process
and are only undertaken when there is significant distrust to warrant
it.

While this process is not optimal, it is what we have due to the
fractional nature of each organization running their own internal
systems. Companies only trust their own systems and end up using paper
when moving data between organizations or individuals. We have not had a
technical solution that can handle the automation of workflows between
organizations and individuals that retains the level of security and
trust that each participant requires. That is, until now.

### Introduction to Mosaique

Mosaique decentralized workflows is a platform that uses Hyperledger Fabric blockchain which aims to provide interoperability between multiple organizations, while still maintaining the trust and security expected from such actions. On top of maintaining trust and security, Mosaique also provides added benefits such as increased productivity, increased security, and adaptability. There are many use cases that Mosaique can provide the solution to such as car insurance, supply chains, house ownership, manufacturing, concert tours, etc. The common denominator among all these use cases is that multiple organizations are sending inputs back and forth amongst one another. 

Normally the flow of information between multiple organizations would be done using paper which can lead to information getting lost, fraud being committed, inaccuracies, slow processes, and increased expenses due to the number of third parties involved. A lot of the pitfalls associated with the traditional methods of handling business workflows between numerous corporations can be solved using decentralized automated workflows. Mosaique handles decentralized workflows by using the Hyperledger Fabric blockchain in conjunction with data-driven state machines. To put it simply, Mosaique’s data-driven state machine would represent the steps in a workflow. The steps would be represented through various states and determining which state to move to next would be based on inputs and transition logic.

Mosaique provides a visual editor that allows stakeholders to create steps in a workflow process by simply dragging and dropping nodes on the screen. Each node represents a step in the workflow process. A template representing the workflow is constantly being updated whenever the user of the visual editor adds, deletes, or edits nodes. In technical terms, this template is represented by a JSON template that has all the necessary keys and values required to make up a particular workflow. The beauty of the visual editor is that the stakeholders do not have to understand the technical details of the template. This means that stakeholders can be involved in the development process as opposed to normally having to communicate with programmers for clarification on technical details that they lack.

During each step in the workflow process the stakeholders can provide content that the users will see such as images, text inputs, display text, buttons, etc. Going back to the car insurance example, the user of the visual editor would provide different content for different roles in the system. For example, a claims adjuster would need to have an input box where they can insert a dollar amount, another input box for a description, and a button to go to the next state. This means the user of the visual editor would need to provide all the necessary display content that gets rendered to each user, during each state. The display content from the templates will be able to be rendered by multiple different interfaces, both web and mobile. At that point organizations can customize the styling of the display content to their liking, without needing any knowledge of front-end programming.


#### Getting to automated decentralized workflows

There are a number of impediments to building decentralized workflows
using traditional approaches. However, there are a variety of current
techniques that can make decentralized workflows feasible.

#### Smart contracts missing native support for workflows

Blockchain smart contracts grew as an extension to basic value transfer
ledger transactions. The motivation was to provide rules around when the
transfers could happen and how they were calculated. The focus of the
smart contract\'s functions were to facilitate atomic transactions - the
sale of a token, a payout of an escrow, the calculation of a royalty.
Multi-step workflows were not envisioned. Smart contracts on public
blockchains have limitations on execution cycles due to their running on
a world computer. All smart contract function calls have to share the
same computing resources as every single node on the blockchain needs to
run the function to keep the ledgers in sync. This puts a limit on how
many cycles a single function can take before it becomes a bottleneck
for other functions called by other users. The focus on single steps and
the limitations on execution resources has limited the types of problems
that blockchain system architects attempt to solve.

#### The state machine pattern

The state machine is an existing software design pattern that is well
understood that is useful for breaking processes down into individual
steps. Individual steps work well with smart contract functions. The
state data that represents the current state can be stored in data in
the blockchain smart contract. An example of a simple state machine
would be a set of traffic lights. The state changes from red to green to
yellow and back to red. The functions would be the transition from one
colour to the next. The state data would be the colours themselves.
Built-in would be the order that the colours change. In this example a
timer could be used to trigger the transitions. A more involved
organizational workflow would have many states, multiple users or roles,
a variety of inputs, and multiple transitions in and out of each state.

#### Data-driven state machine

In many situations, workflows need to be changed. This could happen
based on user feedback, error corrections, legislative requirements, or
new business models. For centralized software, there is a lot of
expertise around rolling out new software versions. In a decentralized
system, this is more difficult. At the very least, a majority of
participants in the system need to approve the changes to the code. This
requires a lot of communication, reviews, audits, and the coordination
of teams to switch to the new software. This is very resource intensive
and requires a high level of coordination. An approach to reducing the
resources required is to make the state machines data-driven. There has
been great success in modeling business processes for centralized
systems using tools like Business Process Modeling Language (BPML). By
representing the state machine states, transitions and logic as data,
and developing a base of code to parse that data, a large amount of
resources that would be required to review and audit changes is reduced.
At this point it allows processes to be reused, and to be composed of
multiple other processes. The data-driven state machine processes are
now templates that can be used in composing larger systems.

#### Coding by stakeholders

One of the difficulties in software development is undertaking the
exercise to build up the requirements and to verify that the code that
has been developed matches those requirements. There is a translation
required from the system stakeholders to the developers and then back
again. Custom coding in a computer language requires a specific set of
knowledge that most stakeholders do not have the time or desire to
achieve. Changing a dataset in a template requires a lower barrier to
entry to the stakeholders. The existing work in modeling business
processes has provided visual interpretations of the processes that
stakeholders can grasp. By providing a visual editor for the templates
that matches existing UML-style process design, the stakeholders are now
able to design their own templates and verify how they will operate.
This greatly reduces the amount of developer time required and assures
the stakeholders that the process they are receiving matches their
requirements.

#### Governance is dissociated from code changes

In a decentralized system, the parties involved with the system need to
agree upon changes. They do this through a human governance process. Any
changes need to be proposed, debated, modified, and accepted or
rejected. At this point there is a disconnect. Most software development
is done by individuals or teams. The software as a whole is what is
presented back to the governance body for approval. The governance body
approves and then it is back to an individual or a team to deploy the
changes. The amount of overhead that this requires in coordination,
individual organizations doing reviews and audits, and verifications
that what was approved is what was posted makes this a slow and costly
approach. The combination of data-driven state machines and a visual
editor now gives the option of making the changes as part of the
governance process. Proposed changes can be viewed in the editor, votes
can take place to accept or reject, and the changes can be deployed
using the multiple signatures of the governance body participants. This
allows for changes that can happen as fast as the governance group can
meet and approve them. It also provides an audit trail of changes and
who authorized the changes, including the debates around the changes.

#### Who can transition states?

Many organizational processes depend on experts to provide inputs that
can transition states. In most processes people just trust that an
appraiser is certified, that the person who writes the police report is
an active duty police officer, or that the mechanic doing the repairs
has received the training to do so. For automated decentralized systems,
there must be a high level of assurance that the parties involved are
who they say they are and have the authority or designation to provide
the inputs that can transition a state. The solution to this is another
decentralized technology called Self Sovereign Identity (SSI). This
incorporates Verifiable Credentials (VCs) that have been issued by an
authoritative body and can be used by the holder to prove a claim made
about them by the issuer. Any party can verify the claim at any point.
VCs can prove that someone is a licensed lawyer, they are the employee
of a company, or that they have the authority to bind an organization to
an agreement. This allows the steps of a process to proceed without
having to contact the original authority. It allows for the process to
be audited to make sure that a participant was authorized to make the
changes at the time that they did.

#### Who runs the user interface?

Decentralized workflows need to provide the users with a user interface.
The very nature of a decentralized system means that you can\'t have one
central application that runs the interface. Each individual or
organization needs to have the ability to integrate the workflow into
the software they use. Maybe for individuals there are multiple options
that they can choose from for mobile, desktop, or web interfaces. For
organizations, they need to embed the workflows into their existing
software. This calls for a new approach. HTML and web browsers were
created as a way to provide a presentation layer for information that
could span operating systems and display limitations. Decentralized
workflows need a similar approach. Where decentralized workflows are
different is that they cannot specify the software application that will
render them nor the design elements used to decorate them. A workflow is
only presented one state at a time. That state is based on the current
state that the user finds themselves in based on their instance, past
inputs and transitions, and their role in the process. When the workflow
is designed, the text, display variables, and input fields are known for
each role. That information can be parsed from the template and sent
across in a data structure like a simple version of the HTML Document
Object Model. This display structure can then be rendered as part of the
application that the user is running. Tube display structure holds no
prejudice towards what device type, display, OS, or design look it is
running on. An added advantage to this is that if the workflow changes
or new ones are added, all the user\'s software needs to do is to render
the new state page. It does not have to be modified to support a new
workflow. If each participant in the workflow was required to make UI
changes and coordinate them with the smart contract changes, then it
would become almost impossible to roll out changes. This same approach
can be used to render the decentralized views in multiple languages, or
to reuse a common workflow pattern but with different language specific
to the use case.

# Solution

Mosaique uses a combination of techniques to provide a platform for
decentralized workflows. Each technique is well known, it is the unique
combination that can be used to provide a solid platform for
decentralized workflows.

#### Data-driven state machine

A state machine, often referred to as a Finite State Machine, has a
fixed number of states and can have one or more starting and ending
states. Each state allows inputs and based on logic for that state and
past inputs, it can transition to another state. This is often used as
an abstract way to represent computational algorithms. Mosaique uses the
states to represent steps in a workflow process. It uses variables to
track the current state and the cumulative inputs that each step in the
workflow has gathered. Each step has its own logic that determines if
the inputs move it to another state. For Mosaique the state machine is
implemented by a smart contract and the state data are variables in the
smart contract. Mosaique uses the concept of a data-driven state
machine. Instead of all of the states being explicitly written in code.
A data structure is defined that holds all of the states, their expected
inputs, and the logic to trigger transitions. Mosaique uses a JSON data
structure to store a representation of a state machine as a template.
The JSON template is composed of the following:

1. template_id - this is a unique identifier for this specific template.

2. roles - a collection of all of the roles that participate in this state machine and how to qualify for a role.

3. machines - a collection of substate machines that are in this state machine. This


visual editor

built-in governance

display objects for state display

verifiable credentials for role based access

display instances for reuse of workflow and multilingual support

# Benefits

#### Allows easy and smooth collaboration between organisational workflows: 
The traditional methods of handling business workflows, which rely on manual document exchange and involve multiple organizations, are slow and inefficient. This can lead to delays in completing tasks and processing information. With Mosaique organizations can streamline processes, reduce manual effort, and improve productivity. It removes the need for manual document handling and increasing the speed of information exchange.

#### Increases security by reducing fraud:
In the current system, trust between organizations is crucial, but verifying the authenticity and integrity of shared information is challenging. Mosaique creates a decentralized and unchangeable ledger. All transactions and approvals are recorded there, allowing every participant to access and validate the information. This promotes transparency and reduces the risk of fraud.

#### Saves time:
Traditional systems struggle to adapt to changes, especially when multiple organizations are involved. Integrating different systems and managing dependencies becomes complex and time-consuming. Mosaique allows for more flexible integration of systems between organizations, enabling them to quickly adjust their workflows and accommodate new processes without extensive configurations.


# Technology

Templates

Template parsing

Display objects

Display rendering

Instance state data

Context data

Credential verification

# The Mosaique governance model

Governance templates

Using governance templates to modify governance templates

Use governance to build and maintain workflows

# Using Mosaique

Getting started

Bootstrapping governance

Using the visual editor for template building and maintenance

Integrating legacy systems with display rendering

# How to contribute

GIthub

Library of workflow templates

Governance translations

Library of display types and controls
