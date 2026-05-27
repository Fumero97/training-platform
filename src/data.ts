import {
  Activity,
  Truck,
  Calendar,
  Shield,
  Users,
  Clock,
  Map,
  Utensils,
  MessageCircle,
  AlertTriangle,
  Coffee,
} from "lucide-react";

export interface Section {
  title: string;
  content: string; // HTML-like string
  isAccordion?: boolean;
  isSectionHeader?: boolean;
}

export interface SubModule {
  id: string; // "1.1"
  title: string;
  description?: string;
  sections: Section[];
}

export interface Module {
  id: string; // "1.0"
  title: string;
  description: string;
  color: string;
  icon: any;
  subModules: SubModule[];
}

export const modules: Module[] = [
  {
    id: "1.0",
    title: "1.0 Key Operations",
    description: "Essential operational guidelines and procedures.",
    color: "var(--color-accent-blue)",
    icon: Activity,
    subModules: [
      {
        id: "1.1",
        title: "1.1 Tours, Excursions & Activities",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>This section covers everything you need to know about the activities and excursions you will run at your centre. This includes ticketing and bookings, travel arrangements, problem solving, and expectations.</p><p>Tours are typically run by Tour Guides, and offer educational walking tours and trips to museums, galleries.</p><p>Excursions are run by both Tour Guides and Campus Leaders and include trips to Madame Tussauds, sports activities, and By Night trips into the city.</p><p>Activities are typically run by the Campus team, and offer games and activities every evening Monday - Friday.</p><p>As a member of the management team it is crucial that you read and understand all aspects of this training guide, including sections that are focused more towards a different team to yours.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The tours, activities and excursions make up the majority of the student’s time and can make the difference between an ok summer experience and an unforgettable one. Student experience and student safety are your top priorities, and both play an important role in delivering the wide range of activities and excursions we offer.</p>",
          },
          {
            title: "Planning",
            content:
              "<p>For managers, all tours, excursions and activities start long before the students’ arrival. Each one is planned out, with agreements in place for tickets, arrival times, transport and more. It is important that you familiarise yourself with all available plans for the upcoming week to ensure that you have all the information you need to deliver the programme well.</p><p>You'll hold regular meetings with your team to discuss the upcoming excursions. Focus on timings, travel plans, tickets, location details (which entrance etc). Remember: your team will have had a long, busy week. Keep your meetings short and to the point.</p>",
          },
          {
            title: "Tickets and Bookings",
            isAccordion: true,
            content:
              '<p><strong>Responsible Manager: Tour Coordinator</strong></p><p>Depending on the size and scale of the activity or excursion, the Head Office team may have pre-purchased tickets, and pre-arranged bookings for venues on your timetable (both free and paid activities). These will be communicated with you through your Programme Manager. If you have not received anything for an upcoming event, you must ask your Programme Manager for more details.</p><p>Typically, pre-booked details will be sent to you by email, and you can share this information with the relevant team. On occasion, you may be required to print a physical copy of the ticket or booking, so please check.</p><p>For smaller activities and excursions, and for public transport including mainly trains, but also buses and taxis, it is your responsibility to arrange tickets and make the required bookings. Keep in mind that a lot of free attractions (like The British Museum or the National Gallery) require prior bookings, and it is always a priority to check availability and book your slot in advance, especially for large groups. If you are in doubt, speak to your Programme Manager for guidance.</p><hr style="margin: 32px 0; border: 0; border-top: 1px solid var(--color-border);" /><p>When arranging travel or tickets for events and activities, where needed, payment is made in advance, through your Programme Manager. This can be done by requesting payment from the supplier/venue by invoice either prior to the event or after the event. Some companies will require payment before the event, so this option is only viable with a good amount of notice. If this option is available, contact your Programme Manager to arrange payment.</p><p>For bookings to standard activities, for which online ticketing is bookable, payment can be made using the Pleo card on site. Confirm with your Programme Manager if you are unsure.</p><p>When booking, you should always check to see if you can get group discounts, or early booking discounts. Often this might mean going through their sales channels rather than just booking online.</p><hr style="margin: 32px 0; border: 0; border-top: 1px solid var(--color-border);" /><p>There are a large amount of excursions that are booked through a third party contact, for which payment does not need to be arranged on-site, but actual bookings (time/date/numbers) do. These must be booked 10 days in advance, and all emails should be CC\'d to your Programme Manager.</p><p>If payment is not available by invoice, a Pleo payment is possible (see <a href="/contents/1.0/1.5">1.5 Budgeting & Finance</a> section). The Pleo card (physical or app based) can be used to make payments over the phone or in person. Wherever possible, these payments should be made in advance of the activity/excursion. Any payments for group excursions must be approved by your Programme Manager.</p><p>Only in extreme circumstances, and only when approved by your Programme Manager, should students set off on an activity or excursion without confirmation emails or bookings and payments.</p>',
          },
          {
            title: "Travel Cost",
            isAccordion: true,
            content:
              "<p>Your main modes of transport for students will include the Underground (London) or tram network (Manchester), public buses (Manchester, Canterbury and Liverpool), and private coaches. In the event of an emergency, and with approval from the Programme Manager, taxis may need to be arranged for student transfer or transport.</p>",
          },
          {
            title: "London Underground",
            isAccordion: true,
            content:
              "<p><strong>Responsible Manager: Tour Coordinator & Campus Coordinator</strong></p><p>For London centres, Underground tickets are pre-purchased. These are physical paper tickets and require a stamped date on each ticket before use. Language in Action pay per stamped ticket, and as such any errors in stamping, or lost tickets can cause unnecessary costs which will negatively affect your centre’s budget. It is important to ensure that the team members you delegate this task to understand the requirement to be accurate and precise with the stamps.</p><p>Stamping tickets takes a lot of time. This workload is detailed on the Daily Planner for each centre, and is done several days in advance.</p><p>You must be organised with the storage, labelling and distribution of tickets (particularly in larger centres, where you could be handling several hundred tickets each day)</p><h3>Travel Card Swap</h3><p>In order to maximise the use of a daily travel card, all tickets used for AM tours and excursions must be returned to the office at lunchtime, and collected again for the PM tours and excursions. Each Tour Guide should collect only the tickets they require for their group, and should not hand out the tickets to any of the students or group leaders in their group. It is the responsibility of the morning Tour Guide to stamp the correct number of tickets for their groups.</p><p>NOTE: There are some agencies that have purchased full day travel cards, these will be highlighted by your Programme Manager, and will be handed tickets each day, rather than collecting them back in.</p>",
          },
          {
            title: "Tour Notes",
            isAccordion: true,
            content:
              '<p><strong>Responsible Manager: Tour Coordinator</strong></p><p>For each tour there is a set of Tour Notes. These are educational notes that are used as the building blocks of a guided tour and outline key information including dates, times, locations, maps and trivia, interesting points, and facts about the location. You must encourage the Tour Guides to expand upon these notes with their own research or knowledge.</p><p>These Tour Notes should be sent to the the tour guide assigned that shift by 6pm the day before the tour is scheduled.  It is important to ensure that the team members are familiar with the document before the activity begins.</p><p>There may be an occasion for which there is no excursion sheet available. You can create a new one using the template in the staff documents drive.</p><p>For more see the next section - <a href="/contents/1.0/1.2">1.2 Excursion Sheets</a></p>',
          },
          {
            title: "On the day",
            content: "",
            isSectionHeader: true,
          },
          {
            title: "Communication",
            isAccordion: true,
            content:
              "<p>Your team must remain in contact with the managers WhatsApp group chat throughout the day, communicating any problems that may occur, as well as their successful departure and return. Knowing which groups are in the school, and which groups are on tours/excursions is an important part of fire safety.</p><p>Message should be short and concise, e.g. “Travelling Fox on way to British Library”, “Travelling Fox are back”, and should not turn into a conversation about how fun the trip was. It is important to keep the management group as clear as possible so that information can be parsed quickly and easily in an emergency.</p><p>*Travelling Fox is the name of one of our groups/agencies</p>",
          },
          {
            title: "Problems on arrival",
            isAccordion: true,
            content:
              '<p>Should your team contact you during an tour/excursion, it is your responsibility to ensure that the problem gets resolved – if something goes wrong, your team member will be busy looking after the students and may not be experienced enough to solve the problem alone.</p><p>Each problem must be assessed individually, however there are some key things to remember;</p><ul style="list-style-type: none; padding-left: 0;"><li><div style="background: rgba(255, 0, 0, 0.1); padding: 10px; border-left: 4px solid red; margin-bottom: 20px;"><strong>The safety and welfare of the students is paramount.</strong><br/>If you feel there is a risk to this, you must act immediately. This might mean arranging transport, food, shelter, emergency protocol activation, or sending out additional team members to assist. <br/>See section <a href="/contents/2.0/2.4">2.4 Emergency Plan of Action</a> for more information.</div></li><li><strong>The student experience should not suffer.</strong><br/>Problems with travel, bookings, activities, or problems within the group can all have a negative effect on the student experience. If the activity cannot go ahead for any reason, you will need to make arrangements for the students to do something else. Contact your Programme manager, as some activities can easily be moved around, whilst others cannot be rearranged, and other options may need to be assessed.</li></ul><hr style="margin: 32px 0; border: 0; border-top: 1px solid var(--color-border);" /><p>Travelling across the city can often cause problems due to slow or overcrowded public transport, cancellations, or strikes. Delays are often unavoidable; however, they are usually not cause for concern. If the welfare and safety of the students are affected, you may need to act. For example, if students are delayed returning to the school, you might need to liaise with the catering team to ensure meals are still available on their return. If an outbound journey is delayed, you might need to contact the destination to ensure tickets will still be valid or to change the booking time. If you are not sure what to do, contact your Programme manager. You should alert the group leaders to the problems that public transport can bring in both the day one meeting, and daily excursion meetings.</p>',
          },
        ],
      },
      {
        id: "1.2",
        title: "1.2 Excursion Sheets",
        sections: [
          {
            title: "What they cover",
            content:
              "<p>A step by step set of tour notes to assist the Tour Guide in delivery of any walking tour or tour venue, including a logistical breakdown of planned routes, covering transport, location information, and timings.</p>",
          },
          {
            title: "Why it is important",
            content:
              '<p>Tour Notes give all the essential information about a trip to your team, ensuring everyone is on the same page before leaving the centre. They allow for any questions to be answered before setting off and mean that the tour guide doesn\'t need to be coached through each activity in the days leading up to the trip.</p><br/><p>You can see a sample Tour Notes document <a href="https://drive.google.com/file/d/1fVX50L3g64TgFmvzS9bIZ9yuVyWzgHbQ/view?usp=sharing" target="_blank">here</a></p><br/><p><strong>IMPORTANT:</strong> During each turn, managers are expected to go on tour observations with each tour guide. This is an important part of understanding the business, monitoring team performance, and integrating yourself with the team and business operations. Your programme manager will ask for feedback on your excursions. The Manager Daily Planner will help you organise this.</p>',
          },
          {
            title: "Creating Tour Notes",
            isAccordion: true,
            content:
              '<p>Tour Notes for most planned activities will be available on the Staff Drive, however you must make sure the details are correct to the specific trip planned on that day (accounting for travel changes, public events etc.), so there may be times you need to create or amend a sheet.</p><p>Each Tour Notes must contain the following information:</p><ul style="padding-left: 20px; margin-top: 10px;"><li><strong>Title:</strong> Wording matching the timetable</li><li><strong>Gathering Time:</strong> Time and place for students to meet (Format: 0730 – Room 4)</li><li><strong>Departure Time:</strong> ~15 Minutes after the gathering time (group size dependant)</li><li><strong>Tour Guide:</strong> The first name of the guide and their phone number</li><li><strong>Emergency Phone number:</strong> held by the Language in Action manager on duty at the centre.</li><li><strong>Summary:</strong> a short summary of the plan and trip highlights</li><li><strong>Details:</strong> a detailed walkthrough of the plan including times and travel details. Details should include screenshots of notable google map directions (sometimes all directions), as well as any other information they may require (train timetables, photos of entrances etc). You should clearly outline when students will get free-roam time, how long it lasts and where they split and meet. It is also important to consider the location of gathering points and how long it may take to gather larger groups. Provisions for an alternative route or situations should be noted here.</li><li><strong>Information:</strong> facts, trivia, and any other information about the destination that might help the activity leader provide some sort of guided tour and increase engagement within the group. This could also include quizzes for long journeys, worksheets for museum visits and more.</li></ul><br/><p>You can see a sample set of notes <a href="https://drive.google.com/file/d/1fVX50L3g64TgFmvzS9bIZ9yuVyWzgHbQ/view?usp=sharing" target="_blank">here</a></p>',
          },
          {
            title: "Using Tour Notes",
            isAccordion: true,
            content:
              "<p>Tour Notes should be digital as they will contain live links to Google Maps, venue websites and more. Paper versions can be printed from the staff drive if required. Please make sure that tour guides download the documents onto their phone in the event that they have no service on their phone (tube rides etc).</p><p>If you feel the tour can be enhanced in any way, you are encouraged to amend the tour notes. If you do this, make sure to clear it with the Programme Manager, as agency agreements and risk assessments need to be met. No changes to the routes should be made after the group leader meeting unless essential and communicated fully.</p>",
          },
        ],
      },
      {
        id: "1.3",
        title: "1.3 Risk Assessments",
        sections: [
          {
            title: "What it is",
            content:
              "<p>A risk assessment is an assessment of any potential risks or dangers that may occur at any time during the summer programme. They range from excursions through to bathroom fittings and are created by either Language in Action or an external group/contractor.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Risk assessments show due diligence, planning, and provide evidence of our procedures. It also provides a framework for the organisation and running of excursions and activities.</p>",
          },
          {
            title: "What it looks like",
            isAccordion: true,
            content:
              '<p>The risk assessment is broken down into five sections as follows;</p><ul style="padding-left: 20px; list-style-type: disc; margin-top: 10px;"><li><strong>Identified Hazard / Risk:</strong> A basic description of the hazard/risk</li><li><strong>Risk Rating:</strong> Rated as Low, Medium or High and gauged on the risk prior to action. L = Likelihood, S = Severity (1-5)</li><li><strong>Control Measures:</strong> A detailed summary of each step taken to minimise the risk of the hazard/risk/situation taking place</li><li><strong>Revised Risk Rating:</strong> Rated as Low, Medium or High, and gauged on the risk after all action points are complete</li><li><strong>Action to be Taken:</strong> The steps that must be taken by the present member of staff if the risk affects a member of the group.</li></ul><p style="margin-top: 10px;"><strong>NOTE:</strong> The safety rating is determined using a formula that assesses likelihood of the risk against the severity of the risk.</p><p>Below you can see the first risk identified for travelling on public transport in London. Each document can list any number of risks identified, and there is no limit – but it must contain all potential risks and hazards that may occur in any given situation.</p><img src="/risk-assessment-example.png" style="width: 100%; border-radius: var(--radius-md); margin-top: var(--spacing-md); display: block;" alt="Risk Assessment Example" />',
          },
          {
            title: "When we use it",
            isAccordion: true,
            content:
              "<p>The risk assessment folder should be shared with each member of the team, who should familiarise themselves with any relevant documents pertaining to their role. For any specific tours, example, if a Tour Guide is scheduled to lead a group to the London Eye, they should read and sign the risk assessment for the London Eye the day before the tour, as well as the risk assessment for using public transport.</p>",
          },
          {
            title: "Creating a Risk Assessment",
            isAccordion: true,
            content:
              "<p>All risk assessments must be reviewed before being used, and amended to account for any changes or variations to that specific day’s activities. E.g. changes in travel plans or locations need fully reassessing.</p><p>From time to time, you might have to create a risk assessment for an activity at the centre or an excursion off site. In the Staff Drive there is a template of a risk assessment, and your Programme Manager will help you create it.</p><p><strong>NOTE:</strong> when visiting public attractions, restaurants, or other bookable events the venue will be able to provide you with a generic risk assessment for visitors, you should contact them with plenty of notice to get the document sent to you. You can then make a smaller risk assessment accounting for specifics that affect Language in Action that are absent from the external risk assessment i.e. young children, action procedures etc.</p>",
          },
        ],
      },
      {
        id: "1.4",
        title: "1.4 Catering",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Key aspects of managing the catering contract in place at your centre.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The catering manager and catering team are important parts of the daily running of the business from an operational perspective, but they are also important parts of our business relationship with centres. Catering for large numbers requires a lot of planning and preparation from all sides and must be managed daily to ensure there are no problems.</p><p>The lead for this area of the business is the Centre Manager/Welfare Manager, however all managers will need to take responsibility when on shift.</p>",
          },
          {
            title: "Key Communication",
            isAccordion: true,
            content:
              "<p>You must ensure the catering manager is aware of your timings and deadlines for food provisions, and you must make yourself aware of their deadlines – they will need more time than you to arrange additional food or changes. Packed lunch provisions are often dealt with externally, and delivered each day, so it is crucial to check arrangements well in advance.</p><p>The Centre Manager should hold regular meetings with the catering manager of the campus to ensure all required actions are taken and all concerns managed.</p>",
          },
          {
            title: "Allergies",
            isAccordion: true,
            content:
              "<p>You will have a list of student and group leader allergies prior to their arrival, which you must communicate with the catering manager at the earliest possible opportunity, so that plans can be put in place for meals on day one.</p><p>When groups arrive, the Welfare Manager must speak to those listed as having allergies to discuss any extra measures, medication, or procedures that need to be put in place for their stay, including what to do in an emergency.</p><p>This information needs to be communicated to all managers and team members. Make sure that the group leader is present for these conversations, it is important that everyone knows the same information.</p><p>All this information must be shared and discussed in detail with the Catering Manager.</p>",
          },
          {
            title: "Dietary Requirements",
            isAccordion: true,
            content:
              "<p>You will need to be aware of the potential dietary requirements of your students and team members, and must communicate this to the catering team. It is also important that in the first couple of days, the meal service is checked to ensure that provisions have been made to meet the requirements.</p><p>Of particular note is the requirement for Halal food options for our Muslim guests and team members. The term Halal refers to the manner in which the food is prepared – in particular, how animals are slaughtered before consumption. This also includes the prohibition of Haram foods, which include pork, alcohol, and the meat of carnivores.</p><p>You will also need to be aware of the difference between gluten free and Celiac meals – Celiac being a disease that requires us to provide food with no contamination from gluten, meaning the food must be labelled as suitable for Celiacs, not just labelled gluten free. These meals may need to be arranged through a separate supplier.</p><p>All items prepared for those with dietary requirements must be clearly labelled or separated form the rest of the food so that it can be clearly identified by non-native speakers. It is advisable to label Halal food with appropriate signage in Arabic if you have Arabic students in your school.</p><p>All this information must be shared and discussed in detail with the Catering Manager.</p>",
          },
          {
            title: "Confirming Numbers",
            isAccordion: true,
            content:
              "<p>The catering manager will have confirmed numbers well before arrival date, however things can and do change quickly. When the students have all arrived, you must contact the Catering Manager to confirm total numbers of students, dietary requirements, and allergies.</p><p>The procedure for packed meals delivery and provision vary depending on the centre so you need to discuss this with your Programme Manager.</p><p>Before each turn, you must meet with the Catering Manager to confirm total arrivals and options for the next turn.</p>",
          },
          {
            title: "Day Zero Meeting",
            isAccordion: true,
            content:
              '<p>You should arrange a short meeting with the Catering Manager on your first day at the centre. You will have to liaise with them and their team regularly throughout the summer programme, and it is important to build a good working relationship form the outset.</p><p>In your initial meeting, you should explain how the management system works, share contact details, and confirm plans for the programme. You need to discuss what to do if there is a change of plans, who to contact when the catering manager is not available, how meal service operates and what assistance they expect from the Campus Leaders on duty, and when, where and how packed lunches will be arranged, along with confirmation of allergies etc as noted above.</p><p>When meeting with the Catering Manager you must discuss how food is labelled and displayed, ensuring that all relevant allergens are labelled, as well as dietary restrictions such as Halal food. This information must then be passed to all team members and group leaders.</p><p>For more information see <a href="/contents/3.0">3.0 Daily Operations</a></p>',
          },
          {
            title: "Daily Tasks",
            isAccordion: true,
            content:
              "<p>The Campus Team are required to sit, engage with, and eat with students during lunch and dinner service each day. This is an important part of the day as it allows us to gather feedback directly from students, as well as build excitement for upcoming activities. From a welfare perspective, it is useful time to monitor student behaviour and identify any areas of concern.  The Tour team are not required to sit with the students.</p><p>The Campus Coordinator must ensure Campus Leader supervision is provided for each mealtime. These shifts should be designated on the weekly rota. They have two tasks; monitor that students are behaving and clearing their own plates away, and controlling the service queue.</p><p>During each meal service, as a manager you must touch base with the catering manager or supervisor on duty. This is not an arranged meeting, but more of a quick check to see everything is going ok. When the catering team see you around, and being proactive in your management style, it instils in them a confidence of your abilities, as well as giving them an opportunity to raise any issues or questions they may have.</p><p>On days that students collect a packed lunch for a full day tour, provisions should be available during or just after the breakfast service. On days that students collect a packed lunch for an evening excursion, provisions should be available during or just after lunch service. A campus leader and tour guide must be present for this, and it is their job to ensure all meals are collected by the correct people – special care must be taken to accommodate allergies and dietary requirements.</p>",
          },
        ],
      },
      {
        id: "1.5",
        title: "1.5 Budgeting & Finance",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Each centre has a budget which must be controlled by all members of the management team. The budget covers everything from office supplies to excursions and accommodation.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>As a manager it is your responsibility to ensure that expenditure falls within the budget set out by your Programme Manager at the start of the summer. Managing a budget is about balance, planning and organisation.</p>",
          },
          {
            title: "Expenses",
            isAccordion: true,
            content:
              "<p>Your main source for expenses will be your Pleo card. This is a bank card for you to spend money on any small items, emergency items or unforeseen costs. Your Programme Manager may need to authorise payments made using the Pleo at the time of payment. You will, therefore, need to ensure that you have pre-approved your spending, and the Programme manager is ready to accept the payment request at the time of purchase.</p><p>You must always know who is carrying the Pleo, and it must never be left lying around the office, or left with a team member who is not on shift.</p><p>In most situations, the Pleo payment is only ever to be made by a member of the management team. Pleo payments are your responsibility, which means any payments made by team members on your behalf, are also your responsibility.</p><p><strong>NOTE:</strong> Under normal circumstances you should not withdraw money form an ATM using the Pleo card. If this is required, you must speak to you Programme Manager first.</p>",
          },
          {
            title: "Examples of Pleo use",
            isAccordion: true,
            content:
              "<ul><li>✔️ You need some stationary for a student activity the following day or sooner.</li><li>✔️ You need to take a student to the hospital by taxi.</li><li>✔️ Unforeseen staff travel expenses (e.g. airport transfers, not commuting to work)</li><li>✔️ You have pre-arranged 20 meals for a group lunch, only to realise upon arrival that you missed one student in planning.</li><li>✔️ You need to buy food and/or drink supplies for the office, or student or staff party.</li></ul>",
          },
          {
            title: "Examples of when Pleo is NOT to be used",
            isAccordion: true,
            content:
              "<ul><li>❌ You have a hard shift and want to end the day with a trip to the pub.</li><li>❌ You realise that you need some items for a student activity next week.</li><li>❌ You are on an activity and get hungry.</li><li>❌ A student wants to buy a drink or souvenir whilst on an excursion but doesn’t have their wallet with them.</li></ul>",
          },
          {
            title: "Claiming back expenses",
            isAccordion: true,
            content:
              "<p>All expenses should be paid for using the Pleo, and NOT through an team member’s own money. You must therefore plan ahead and consider what may need to be paid for (supplies, food/drink, tickets etc.).</p><p>Only in extreme circumstances can payments be made without the Pleo, and these must be approved by the Programme Manager beforehand. In these situations, your Programme Manager will talk you through the reimbursement process.</p>",
          },
          {
            title: "Record Keeping",
            isAccordion: true,
            content:
              "<p>As part of your daily tasks, you must upload all of your Pleo expenses onto the Pleo app, including a copy of the receipt. If you have any problems or questions, speak to your Programme Manager. By the end of each week, all expenses for that week must be fully documented and signed off by the Programme Manager.</p>",
          },
          {
            title: "Other budgeting",
            isAccordion: true,
            content:
              '<p>Everything that goes into operating a centre comes with a cost. It is the responsibility of the managers at the site to ensure that the facilities and services are utilised to maximise their value. This includes such things as;</p><ul><li>ensuring rooms are ready on time so as not to incur additional charges.</li><li>monitoring students to ensure no fines or penalties are added to the cost of rental for equipment or property.</li><li>accurate briefings and excursion planning to ensure all bookings go ahead at the planned times.</li></ul><p>Perhaps the area with the largest risk of error is in the organisation and handling of tickets for public transport – for more see <a href="/contents/1.0">1.0 Key Operations</a></p>',
          },
        ],
      },
      {
        id: "1.6",
        title: "1.6 Team Rotas",
        sections: [
          {
            title: "What it is",
            content:
              "<p>A schedule of working hours for all members of the team (Management, Campus and Tour Team)</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Creating a well-designed rota is essential for creating a cohesive, happy, focused team. It is the backbone from which your entire week will operate and must be curated with care and attention.</p><p>To ensure the wellbeing of the team, knowing their own shift patterns in advance, and more importantly their down time, is crucial. Knowing when their next break is, or knowing what kind of situations they are going to be dealing with this week allows team members to adjust their approach, outlook, and efforts to suit business and the role.</p>",
          },
          {
            title: "How to create a rota",
            content:
              "<p>Rota creation will be part of your in person training session on site. Your Programme Manager will show you the system we use and the most efficient ways to prepare the schedule for your team.</p><p>The Campus Coordinator is responsible for the Campus Leader rotas, and Tour Coordinator for the Tour Guide ones.</p><p>The Centre Manager is expected to sense check the work done by the Coordinators and report any issues with the schedule.</p>",
          },
          {
            title: "Note",
            content:
              "<p>The rota should be published with a minimum of 4 days’ notice, and its creation is something that should be a focus for the start of each week. It is important to ensure the timetable is correct before publishing, and that after publishing no changes are made without first discussing it with those involved in the changes, and only in extreme circumstances.</p>",
          },
        ],
      },
      {
        id: "1.7",
        title: "1.7 Transfers",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Meeting students at the airport when they land and orchestrating their journey to the campus. The majority of students will transfer to the campus by private coach hired by Language in Action, however some will provide their own transport. It is important to find this out before their arrival.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>This is the first impression the group leaders and students have of our summer programme and its organisation. It needs plenty or prior planning, a strict coordination throughout the day. Communication with your team is key here. You Programme Manager or a member of the head office team will be on-site to help you on each turnover day.</p><p>Airport transfers are primarily orchestrated by the Centre Manager and Tour Coordinator.</p>",
          },
          {
            title: "Planning",
            isAccordion: true,
            content:
              '<p>Your Programme Manager will provide you with details for each group including the number of students, flight details and group leader details, as well as coach booking details and driver contact details. From this you will need to create a schedule for the day, allocating Tour Guides to be stationed at each airport for arrivals.</p><p>Tour Guides should remain at the airport in shifts, covering more than one arrival wherever possible.</p><p>When creating the schedule, you should allow for 30 minutes prior to the team members first group arrival time to allow them to familiarise themselves with the layout, the coach parking area, and to contact the driver for confirmation.</p><p>For more information on the procedure at the airport, see the relevant Tour Guide Online Training Document</p><p>Your team should maintain frequent contact with the Tour Coordinator throughout the day, particularly at group meetup and coach departure.</p><p>The schedule should allow, where possible, for the team member to travel back with the final group of their shift, and the team member must engage with the group on the journey. The must not sit on the coach with their headphones in as if their shift is over.</p><p>Other areas of scheduling include an allocation of team members or managers to greeting students when the coaches arrive on campus - this is orchestrated by the Campus Coordinator.</p><p>Key steps to producing the transfers chart are as follows:</p><ol style="margin-left: 20px; box-sizing: border-box;"><li style="margin-bottom: 10px; padding-left: 5px;">Your Programme Manager will send you a link to a platform containing group names and flight times which you must sense check with numbers provided in your centre Mastersheet. Any discrepancies must be investigated immediately as transfer bookings are likely to be already in place. This is true for both arrivals and departures.</li><li style="margin-bottom: 10px; padding-left: 5px;">Allocate each group arrival/departure on the spreadsheet in flight arrival/departure time order</li><li style="margin-bottom: 10px; padding-left: 5px;">Allocate a team member for each reasonable chunk of time for arrivals. Team members will stay at the airport for as long as is reasonable to cover as many arrivals as possible. In the example below, team member 1 is assigned to stay at the airport for 3 arrivals, then return to the centre on the coach with the third arrival group.</li><li style="margin-bottom: 10px; padding-left: 5px;">Ensure each team member arrives at least 30 minutes before the flight arrival time of their slot, to allow them time to locate the coach area, contact the coach driver and find the arrivals gate.</li></ol><p style="margin-top: 15px;">Please note that Tour Guides are responsible for accompanying groups during airport transfers for arrivals only.</p><p>For departures, no Language in Action staff are required to accompany groups to the airport. Our role during departures is limited to overseeing the departure process from the centre and coordinating coach arrangements to ensure groups leave on schedule.</p><p style="margin-top: 15px;">A more detailed overview of what the team member must do when at the airport can be found in the Tour Guide and Campus Leader Online Training Manuals</p><p style="margin-top: 20px;"><a href="https://drive.google.com/file/d/1kYh9MtArUFi0zSzyYZE7ZBZXLLQgAnVF/view" target="_blank" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading);">Transfer Sample</a></p>',
          },
          {
            title: "On the day",
            isAccordion: true,
            content:
              "<p>Team member must check in with the Tour Coordinator before leaving for the airport, confirming all information one final time. It is important for you to keep an eye on travel information throughout the day, and any possible disruptions that may affect your plans.</p><p>When groups arrive at the centre, their time is then managed by the Campus Coordinator.</p><p>When arriving at the centre, the groups should be met by a member of the Campus Team at the coach drop-off point.</p><p>Groups should be led to the luggage storage area, given a chance to use the restrooms.</p><p>Next up, the groups should be given a guided tour of the available spaces in the campus.</p><p>After the tour, groups should be allocated rooms keys and, if 6pm or after, handed a packed meal, then taken to their rooms.</p><p><strong>NOTE:</strong> groups who arrive particularly early will need lunch providing at around 12.00-2.00pm - this usually requires the Campus Coordinator to arrange a pizza delivery. All groups get packed dinners at or after 6pm.</p><p><strong>NOTE:</strong> It is a good idea to assign roles to the campus team so that one conducts guided tours, one does the meet and greet, and one does check-in and keys, for example.</p><p>More information about the arrivals process can be found in the Tour Guide or Campus Leader online training.</p>",
          },
        ],
      },
      {
        id: "1.8",
        title: "1.8 The Zig Zag",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>The Zig Zag refers to the alternating schedule students have during their stay. They will study English in classes in either the AM slot or the PM slot and take part in tours and excursions on the other. The Zig Zag allows for an efficient management of large numbers of students at each centre.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The Zig Zag is a crucial part of planning for both academic and activity purposes. The Director of Studies needs to know the exact numbers, and those numbers must align with the availability of classrooms and teachers. Likewise, you will need to know exact numbers for each tour and excursion for rota creation and ticket booking purposes.</p><p>The Zig Zag will usually be created by your Programme Manager, but there may be an occasion where you need to create or adjust it.</p>",
          },
          {
            title: "Creating the Zig Zag",
            isAccordion: true,
            content:
              '<p>Follow along: If you want to follow along and see what the Zig Zag spreadsheet looks like, click <a href="https://docs.google.com/spreadsheets/d/110HcW5TcC3E0Rj_MSCjRYAHZSXyzcSvR/edit?usp=sharing&ouid=104926484654452004383&rtpof=true&sd=true" target="_blank">here</a></p><p style="margin-top: 24px;"><strong>Step 1:</strong> Check / Add all group names and numbers in the yellow box at the top of the spreadsheet</p><img src="/zigzag-step-1.png" style="width: 100%; border-radius: var(--radius-md); margin-top: var(--spacing-md); display: block;" /><p style="margin-top: 32px;"><strong>Step 2:</strong> Allocate groups to either AM or PM slots in the WEEK ONE chart, following these rules:</p><ul style="margin-left: 20px; box-sizing: border-box;"><li style="margin-bottom: 10px; padding-left: 5px;">Groups larger than 50 may need to be split evenly between AM and PM. This is to ensure that no group is too large for particular activities or excursions.</li><li style="margin-bottom: 10px; padding-left: 5px;">Nationalities in both slots should be as mixed as possible. This is to try to provide a wide mix of nationalities in the classrooms.</li><li style="margin-bottom: 10px; padding-left: 5px;">The total number for each slot should be as balanced as possible.</li><li style="margin-bottom: 10px; padding-left: 5px;">You must always consider group or agency requests and requirements - you Area Manager will have more information on this for you.</li></ul><p>For planning and operations smoothness, and logistical ease, the number of total students in the AM slot and PM slot should be as close to the same as possible.</p><p>Below is an example of a completed chart:</p><p>We can see here that the groups studying English in the AM slot are BEX, Ki Study, Aces, GEC and OL. Half of Travelling Fox are studying in the AM slot, and three quarters of Accademia Garden are too. This means they will go on excursions in the afternoons.</p><img src="/zigzag-step-2.png" style="width: 100%; border-radius: var(--radius-md); margin-top: var(--spacing-md); display: block;" /><p style="margin-top: 32px;"><strong>Step 3:</strong> Complete WEEK TWO by reversing the numbers for AM and PM slots from WEEK ONE so they are the opposite of WEEK ONE.</p><img src="/zigzag-step-3.png" style="width: 100%; border-radius: var(--radius-md); margin-top: var(--spacing-md); display: block;" /><p style="margin-top: 32px;"><strong>Step 4:</strong> Next up is to adjust the timetables on each tab of this spreadsheet so they accurately display which week is AM classes and which week is PM classes. These timetables should then be sent to each respective group leader as confirmation of the final timetable for their stay.</p><p>Wherever possible, you should aim to match smaller groups onto the same excursion on the same day. This not only increases the nationality mix on an excursion but allows for better allocation of team.</p><p>Remember, if you have any concerns, questions of doubts please call your Programme manager, they are here to help</p>',
          },
        ],
      },

      {
        id: "1.9",
        title: "Section 1.0 Complete",
        sections: [
          {
            title: "That's the end of the Operations section!",
            content:
              '<p>Click below to return to the contents page when you\'re ready to begin the next section - 2.0 Logistics</p><p><a href="/contents" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading); margin-top: 20px; margin-bottom: 20px;">Back to contents</a></p><p>If there is anything you have read that you are unsure about, don\'t worry! You will have plenty of opportunities to ask about it in your online and in-person training sessions before you open your centre.</p>',
          },
        ],
      },
    ],
  },
  {
    id: "2.0",
    title: "2.0 Logistics",
    description: "Transportation, transfers, and equipment management.",
    color: "var(--color-accent-peach)",
    icon: Truck,
    subModules: [
      {
        id: "2.1",
        title: "2.1 Communication",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Communication ranges from hosting meetings with group leaders and facilities managers, to how you present yourself to your team. Talking to students, clients, Language in Action management, your team members, and members of the public (e.g. attraction workers, emergency services).</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Communication weaves every aspect of the business together, and as a member of the management team it is vital that you can communicate effectively, efficiently, and professionally. You will communicate through a variety of channels, and it is important to know what avenue to utilise, when, and how to do it.</p>",
          },
          {
            title: "Emergency Phone",
            isAccordion: true,
            content:
              "<p>Each centre will have an emergency phone, the number of which must be shared with all students, group leaders and team members. They must all be briefed on the importance of the phone, and that it is for phone calls only, not for texting, and it does not have WhatsApp.</p><p>The emergency phone must be held by the most senior team member on shift at all times, and rotated between managers at night. Under no circumstances must the emergency phone be left in the office overnight, or switched to silent or vibrate only modes.</p>",
          },
          {
            title: "Students",
            isAccordion: true,
            content:
              "<p>In most situations, all communication with students must be done in person. Never through WhatsApp or other online methods. Whenever possible, any welfare issues or discussions with a student must be conducted with their group leader present.</p><p>This is not only for safeguarding, but to ensure that all parties involved are aware of any discussions. If this is not possible, another member of the LiA team must be present. Refer to the Safeguarding Policy in the Staff Handbook (available on the HR Portal) for dealing with sensitive situations or situations where you are a solo member of staff.</p><p>Any conversations you have with the student must be documented at minimum in the Handover diary, and where necessary, in the Welfare documents found in the staff drive.</p><p>The exception to this rule is in situations where individually booked students are participating in the summer programme, for which an Campus Leader will be assigned as a de-facto group leader. In this situation, the student, campus leader and welfare manager/Centre Manager should be in the same WhatsApp group, and the team member and student can communicate meeting times, plans, etc.</p><h3>Welfare Manager</h3><p>The Welfare Manager role is held by the Centre Manager, and in centres with no centre manager, it is held by the Campus Coordinator. A key responsibility of the Welfare Manager is to present the Welcome Induction to all new students each arrivals day. This induction covers rules, health and safety, what to expect, emergency procedures and more. It is important that the Welfare Manager is confident, loud and clear in their presentation. Remember, the students are English language learners, so clear, slow speech that follows the presentation slides exactly is important in this meeting.</p><p>Your student welfare induction presentation will be available at your centre.</p><p>Additionally, on each arrival day, the Welfare Manager must hold a welfare meeting with all students that have stated allergies, medical conditions, or any other information that the Language in Action team, and facilities team should know. This includes special educational needs (e.g. dyslexia, autism spectrum disorder). This information must be then communicated to all relevant teams including the Catering Manager and the Academics team.</p>",
          },
          {
            title: "Centre Management Team",
            isAccordion: true,
            content:
              "<p>This means you, the Centre Manager, Tour Coordinator and Campus Coordinator, and the academic management team. Effective communication is crucial. You must always complete the following tasks each day:</p><h3>Start of Day</h3><p>First task of the day after opening up the office is to check the handover diary email. Aside from catching up on the activities from the day before, it could contain important information of changes to your day that you are unaware of.</p><p>This email is also where you start building your to-do list for the day. Your to-do list should be written on a whiteboard in the office, not on a scrap of paper or a computer file that can be minimised or closed. It must be available for you to quickly look at whenever in the office.</p><h3>End of Day Handover</h3><p>At the end of every shift, the very last thing to do before locking up the office is to complete the handover diary. Be detailed and specific in your notes, as the next morning, the incoming manager might not be able to ask you what you mean.</p><p>Leave a list of important tasks, and state any changes, problems, reminders, or new information.</p><p>This diary is to be emailed to the centre email address, and replied to at the end of each day so all the information is kept in one email thread.</p>",
          },
          {
            title: "Academic Team",
            isAccordion: true,
            content:
              "<p>You will need to liaise with the Director of Studies or Senior Teacher at several key stages throughout each turn regarding welfare concerns, sickness and absence reporting, leaving ceremony details and class lists. How and when you speak with this team will vary, but you must always ensure they are provided with enough time and information to fully complete their job.</p><h3>Welfare Concerns</h3><p>Allergies, special educational needs, behavioural or emotional concerns, requirements or requests from group leaders or parents on behalf of the student, and any other concerns that are pertinent to the running of the academic department and classroom management.</p><h3>Sickness and Absences</h3><p>You will likely be the first department to hear of sickness or absence, particularly for students studying in the afternoon. These must be communicated to the Senior Teacher or Director of Studies (you will need to find out who at your centre) immediately, and always before classes start. Failure to pass on this information can result in student’s being assumed missing, and can activate emergency protocols, affecting a large number of people within the organisation.</p><p>Every centre will have a WhatsApp group set up for Student Absences, which include all teachers, the ST or DoS, and the Welfare Manager. This is where you will report student sickness and absences so teachers are aware. Likewise, teachers will report student absences in the group chat after taking class attendance. Any students reported as absent from class must be investigated immediately by the Centre Manager or Welfare Manager.</p><h3>Leaving Ceremony</h3><p>You will need to liaise with the academic team to arrange the leaving ceremony for your students. In some of the larger schools, certificates may be handed out in class, however in the smaller schools it may be suitable to provide a lecture theatre or large space for a whole group graduation ceremony. As this is the student’s final day on the programme, you must say a few farewell words to each leaving group – this could be stopping in during the final class or speaking at the ceremony along with the Director of Studies or Senior Teacher.</p><h3>Class Lists</h3><p>Typically, any last-minute changes to student arrivals, departures or numbers will be fed through you. You must relay any relevant information to the academic team as soon as possible.</p><p>Keeping an open dialogue with the academic team is important for all managers, and you must try to touch base with either the Senior Teacher or Director of Studies periodically throughout the turn.</p>",
          },
          {
            title: "Your Team",
            isAccordion: true,
            content:
              "<h3>WhatsApp</h3><p>One of your first tasks on the first day the Centre Manager must set up WhatsApp groups for the Tour team and the Campus team, then one final group for all team members.</p><p>The last group in that list is to be called Lia Main. It is important that all team members are aware that this is solely for important information including management announcements, and emergency contact. Examples of use for this group include traffic alerts, management announcements, injuries, delays, departure and return notification. This group is not for requesting swapped shifts, complaining about the weather or for asking someone to grab something for you from the shop.</p><p>The division specific chats for Campus and Tour teams is for information shared between the coordinator and their team, typically involving information pertinent to their job only - such as discussing plans for the evening activity etc. This group is also for everyone to talk, discuss advice, plan time off, whatever they want. It is important that you participate in this group when appropriate, as building a cohesive working environment come from everyone feeling part of the same team, rather than separating team from managers.</p><p>You are encouraged to engage in this group so as to be considered part of the team rather than just a manager. This is a great place to praise team members, celebrate great days, and motivate the team after a tough day.</p><p>Each day, one of the first tasks for the office-opening manager to do is to send out a summary of the day ahead. This should include which manager is on shift and when, a short summary of activities, and any other news that activity leaders might find useful to start their day with. Everyone needs to be up-to-speed as quickly as possible each day. Note: making this message too long will only result in people not reading it properly. Keep it concise, to the point, and positive and motivational.</p><h3>Office</h3><p>Your office is the hub of the operation at your centre. Here you need to make sure there is room for your team to gather, and that it is organised in such a way that information can be easily seen, found, or collected. The office is not a hangout spot for those who are not on an activity, as there may be someone (team, students, or group leader) who wants to speak to you but is uncomfortable asking in front of lots of people.</p><p>Key information to have at hand in the office, clearly accessible for the team, include the rota, back up Tour Notes, client timetables, group leader names, Language in Action Organogram, facilities personnel names and the Emergency Plan of Action poster.</p><h3>Meetings</h3><p>You must hold a full team meeting once per week. For this meeting, an agenda must be created and shared with the team and Programme Manager at least 12 hours before the meeting. These meetings are an important part of creating a fully cohesive team that are all on the same page and working towards the same goal.</p><p>The purpose of the meeting is twofold; discuss the plan for the week ahead, discuss how to improve on the week just finished. This will include any problems that occurred, and any notices, changes, or alerts for the coming week. It will also be the time to discuss student feedback from the previous week, and what plans you have to improve feedback for the following week.</p><p>In the event that a meeting cannot be held, all information must be passed along in the group’s WhatsApp group chat – this should not happen more than once before another in-person meeting.</p><p>There will be times when the team will begin to discuss gripes, annoyances etc from their week, which is important and worth noting, however as manager it is your role to keep the meeting on track and on time. Work through the agenda, then allocate time at the end for further questions. The meeting agenda template is found on the staff drive.</p><p>At several points throughout the summer, it is important for the welfare manager to arrange one-to-one meetings with your team. These do not need to be long meetings, and act as more of a catch up. This is an opportunity to hear any concerns the team member may have, and for you to provide feedback on their current performance. If you have any concerns before going into a one-to-one meeting, please speak to your area manager who will provide advice and guidance for you to manage the situation effectively.</p>",
          },
          {
            title: "Group Leaders",
            isAccordion: true,
            content:
              '<p>Group Leaders should be informed in advance of which Tour Guide is scheduled to accompany their group the following day. This information should be communicated in the WhatsApp message sent by the Tour Coordinator on the previous afternoon.</p><p>Please note that guide allocations may occasionally change. In these cases, updates should be communicated promptly either via WhatsApp or in person.</p><p>The message sent to Group Leaders must include:</p><ul style="padding-left: 20px; margin-top: 10px;"><li>The meeting/gathering time</li><li>The departure time</li><li>The excursion destination</li><li>A brief overview of the travel route and transport arrangements</li></ul><p><strong>Example message:</strong></p><div style="background: var(--color-bg-soft); border-radius: var(--radius-md); padding: 1rem 1.25rem; margin-top: 0.75rem; border-left: 4px solid var(--color-accent-blue);"><p style="margin: 0 0 0.5rem 0;">Hi everyone!</p><p style="margin: 0 0 0.5rem 0;">Tomorrow morning you will be going shopping on Oxford Street with Jasmin ☀️</p><p style="margin: 0 0 0.25rem 0;">🕙 Meeting time: 9:15am at the school entrance</p><p style="margin: 0;">🚇 Route: Jubilee Line from Wembley Park to Bond Street (10 stops, approximately 28 minutes)</p></div>',
          },
          {
            title: "Day 0 & Day 1 Meetings",
            isAccordion: true,
            content:
              "<p>Each Day 0 (Turnover/Arrivals Day), the Manager welcoming the group on site must hold a brief safety meeting with the group leaders, in which you'll discuss safety procedures (fire exits, evacuations etc), and share the Welcome Pack containing contact details, group leader declarations, timetable, allocation, and Language in Action Group Leader Handbook and details of operations such as meal times and who to contact for different situations.</p><p>The Centre Manager must also hold individual group leader meetings on Day 1 when the students are undertaking their Welcome Induction (with Campus and Tour Coordinator), with each client to discuss the timetable for that week, and any other logistical and procedural details specific to each individual group including confirming allergies, dietary and educational needs. Some meetings may be very short, but some of the larger groups may take a lot of time to get through everything. Plan accordingly.</p>",
          },
          {
            title: "Programme Manager & Head Office",
            isAccordion: true,
            content:
              "<h3>WhatsApp</h3><p>You Programme Manager will always be available on WhatsApp for you to contact with any queries. It is better to ask than not be sure and make a mistake, they are here to help you.</p><p>Programme Managers are your first point of contact for all situations, however if for any reason you cannot contact them and it is an emergency, you can call or message the Operations team in Head Office.</p><h3>Email</h3><p>During daily operations, WhatsApp is by far the fastest method of communication, however if the need arises, you can email any member of the management team. It is important to periodically check your emails, as tickets, bookings and communications may come through this channel.</p><p>Your Programme Manager will provide you with a list of email addresses, and will give you login details for a Gmail account set up specifically for your centre</p><h3>Meetings</h3><p>Throughout the summer your Programme Manager will visit your centre to help with organisation, planning and to ensure that you are comfortable completing your tasks. They will schedule meetings to which the entire management team will need to attend, and during which an overview of recent events, and a breakdown of future events will be discussed. There may be times when the Programme manager attends your team meetings or group leader meetings, but these meetings are yours to run, and the Programme manager is there for support, to answer any questions or discuss additional agenda points.</p>",
          },
          {
            title: "Clients & Facilities Management",
            isAccordion: true,
            content:
              '<ul style="padding-left: 20px; margin-top: 10px;"><li>Meeting with the catering manager to confirm meal numbers for the following week</li><li>Liaising with residential managers and/or maintenance teams to resolve room problems</li><li>Liaising with the residential manager / cleaning team about arrival times and numbers to ensure rooms are ready in chunks set by known arrival time</li><li>Speaking and liaising with external suppliers for tickets, bookings, or, in most centres, packed meal providers</li></ul>',
          },
        ],
      },
      {
        id: "2.2",
        title: "2.2 Facilities",
        sections: [
          {
            title: "What it is",
            content:
              "<p>You will have to work closely with the facilities teams at your centre. Exactly who will depend on your centre, but it is likely to include the catering manager and catering team, the maintenance team, building managers, reception team, and the cleaning manager and team.</p><p>Before your centre opens you will have access to a full list of contacts on the Staff Drive. This list breaks down the key contacts you will have to liaise with as a manager.</p><p>Remember: The teams at the university and residential sites are working their regular jobs and are not employed to work an 8-week summer programme. Their timeframes and work hours are likely to be very different to yours, and you are likely not their only client on any given day. In particular, weekend working hours for key staff and cleaning teams may vary - check at your centre.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The summer programme cannot function without the full cooperation of the facilities teams at each centre. We are in their venues, working together is an imperative. Lead responsibility for stakeholder management lies with the Centre Manager.</p>",
          },
          {
            title: "Catering",
            isAccordion: true,
            content:
              "<p>There are four main categories of catering that we provide to the students: breakfast, lunch, dinner, and packed meals. Depending on the site and day of the week, different plans apply. You can familiarise yourself with the key information below, however your specific site may have variations which your Area Manager will discuss with you.</p><p>No matter the service style, you must always liaise with the correct service provider to ensure that the total number of meals (staff, group leaders and students combined) are accounted for, as well as all service times, allergies and dietary requirements covered. You will also need to arrange what expectations the catering team have with respects to student supervision etc.</p><p>Meal service is usually provided in the campus canteen, which may be the same building as the classrooms, or a nearby building. There are some centres in which meals are provided in the residential building, you will need to check this information as it can vary by centre or group.</p><p>Typically, catering is provided by the centre, however some locations have external catering suppliers. In all situations, you need to build good communication avenues with all areas of the catering to convey important information such as times, dietary requirements etc.</p><p>Providing food for the students is a key safeguarding area, and something that should be maintained with upmost priority.</p><h3>Breakfast</h3><p>The Campus Team are responsible for managing queues and having students clear their trays away, and Campus Leaders should be shcedules on the rota accordingly.</p><p><strong>Fully Catered</strong></p><p>Breakfast is served in the main canteen area for all students, group leaders and Language in Action team members. Time vary by centre and meals are served in a buffet style for hot and/or continental style breakfast.</p><h3>Lunch</h3><p>As with Breakfast, the Campus Team are responsible for managing student queues and behaviour during lunch service.</p><p>In addition, all Campus team members are required to sit and eat with the students, engaging in conversation with the students.</p><p>As a member of the management team you should spend your mealtimes eating with the group leaders to build a positive working rapport with them.</p><p><strong>Fully Catered</strong></p><p>Lunch is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary depending on the centre, and it is served in a buffet style of hot food.</p><p><strong>Packed Lunch</strong></p><p>Packed lunches consist of a sandwich/wrap/baguette, crisps, fruit and water.</p><p>Packed lunches are used on all weekend excursions and tours, and the canteen service does not run at those times. This means all members of the team need to collect a packed meal, whether they are scheduled to work over lunch or not.</p><p>Lunches are to be collected by the students at breakfast service, as the students do not return to the campus after their morning activity. As a manager, you must confirm with the packed meal supplier (or catering manager) all numbers and allergy/dietary requirements at least 3 days before meals are required.</p><p>You must allocate tour guides and campus leaders to take responsibility for the collection of packed lunches (typically they will liaise with the relevant group leader, and it is the group leader who will instruct the students).</p><p>___________________________</p><p>On sites where packed lunches are supplied by an external contractor, delivery times must be confirmed, contact details shared, and an campus leader scheduled to be available to accept the delivery. Meals will then need to be stored in a refrigerated area if they are not being consumed by the next mealtime.</p><p>For example, meals delivered at 7am must be prepared for collection at breakfast service around 8am, for consumption at lunch. If the meals aren’t due to be consumed until dinner, they must be stored in a refrigerated area until collection at lunchtime.</p><p>NOTE: Packed meals are the responsibility of the Campus Coordinator, however you must liaise with the Tour Coordinator for collection each day.</p><h3>Dinner</h3><p><strong>Fully Catered</strong></p><p>Dinner is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary and it is served in a buffet style of hot food. Depending on your centre, some dinners are served in the residential building. You must liaise with the catering manager to discuss specifics for your site.</p><p><strong>Packed Dinner</strong></p><p>Packed dinners are identical to packed lunches in contents and are used for the midweek evening London/Manchester by Night activities of which there are between one and two per week.</p><p>Packed dinners are to be collected by the students at lunch service, as groups will not return to the campus after an afternoon activity. This remains true even for group that have an afternoon class on campus.</p><p>You must allocate activity leaders to take responsibility for the collection of packed lunches (typically they will liaise with the relevant group leader, and it is the group leader who will instruct the students).</p><p><strong>Excursion / Special Dinners</strong></p><p>On occasion, and depending on the site and group bookings, there will be certain evenings where the canteen is closed, or the group have booked to eat in a restaurant. Dinners in a restaurant will need to be booked in advance and will vary by location – see your Programme Manager. Other options include special mealtimes such as Pizza/Takeaway Night, for which you will pre-order food from a reputable, local takeaway. These will be paid on the Pleo by the Campus Coordinator with the Centre Manager's approval.</p>",
          },
          {
            title: "Building Management",
            isAccordion: true,
            content:
              "<p>This may include members of the management team at your centre but will include many of their team including reception staff, facilities teams and IT departments/events teams and student support officers.</p><p>You should make an effort to introduce yourself to all on shift staff in a day and build a good rapport throughout the summer. You will need to rely on their services many times, and the better the relationship you have with them, the more responsive they are likely to be.</p><h3>Campus</h3><p>On your first day you must meet with the designated member of management at your campus. This is likely to be an events manager or facilities manager. These are your main point of contact for all planning, and changes you may make throughout the summer, including room bookings, movement of facilities or equipment and much more. You should find out what the best way to contact each specific manager is and ensure that you maintain a professional approach at all times.</p><p><strong>Reception team and Student Support Officers</strong></p><p>The reception team on campus typically have little power to make last minute changes, which is why you will need to plan in advance. They are there to help with questions you may have, and to help with minor issues like locked doors, missing equipment, reporting cleaning issues etc.</p><h3>Residential</h3><p>The residential manager and their team will play an integral role to the success of your centre, as providing rooms for such large amounts of students requires a lot of planning and effort. You must ensure you maintain a good relationship with the entire residential team.</p><p>Your main communications with this team will be room allocations and small items such as additional toiletries. They will also be your first contact in any issues or emergencies that arise when in the residence. This includes any instances where you must call the police or ambulance service.</p><p>Room allocations take a long time to plan and can take even longer for room keys to be created. You must give the residential team plenty of time to organise this and should check in with them regularly to ensure it is being done.</p><h3>Maintenance and Cleaning</h3><p>Depending on your site, you may have direct contact with the management of these departments, or you may have to go through other channels. You should aim to have direct contact with the management team of each department where possible.</p><p>In your first on-site meeting you must meet with whoever is responsible and talk about what days they operate (some cleaning teams don’t work weekends or finish early some days for example). You must also discuss what to do in their out of office hours for minor issues (e.g. no toilet roll), and who to contact in an emergency (e.g. leak).</p><p>Maintenance will cover things such as faulty plugs, lights, or bathroom appliances, and the cleaning department are responsible for things such as bedding, towels and room cleanliness.</p>",
          },
        ],
      },
      {
        id: "2.3",
        title: "2.3 Academics",
        sections: [
          {
            title: "What it is",
            content:
              "<p>The communication and relationship you have with the academic division of the summer programme</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>There are several key events throughout each turn that are integral to the running of the academic department, that are managed or worked on in tandem with you.</p><p>The academic team on site consists of a Director of Studies, Senior Teacher, and teaching team.</p>",
          },
          {
            title: "The Zig Zag",
            isAccordion: true,
            content:
              '<p>The Academic team organise their classes according to student numbers provided by the Zig Zag – a document that splits students into morning and afternoon groups for their classes and activities. It is of utmost importance that the Zig Zag is completed, and numbers are discussed with the Director of Studies before arrivals day.</p><p>Groups are divided into AM or PM academic slots based on group numbers, student requirements, availability and a programme called "Travel With", which allows students to name a buddy student to be grouped with for excursions - this has a knock on effect to what side of the Zig Zag they are in.</p><p>For more information on the Zig Zag, see <a href="/contents/1-0/1-8">1.8 The Zig Zag</a></p>',
          },
          {
            title: "Absences",
            isAccordion: true,
            content:
              "<p>You will need to set up group WhatsApp with the Centre Manager, Director of Studies, Senior Teacher, and all teachers.</p><p>If a student is absent from class, they will message that group and it is your responsibility to investigate and report back in the group. For more on absences, see the Language in Action Staff Handbook.</p>",
          },
          {
            title: "Certificates & Leaving Ceremonies",
            isAccordion: true,
            content:
              "<p>Depending on the size of the centre, students will either receive their certificates in the classroom, or as a larger group in a lecture theatre. The Tour Coordinator and or Campus Coordinator must be present at the leaving ceremony or must visit each classroom on the final day to say goodbye to the students and wish them good luck in the future.</p><p>Certificates will be created by the Academic team, and the certificates will be printed off site and delivered before the final day. Do not let the certificates sit in boxes forgotten about. Make sure you alert the Director of Studies about their delivery.</p><p>In the event that a certificate is incorrect or missing information, you will have access to a certificate template and white card to reprint it yourself. This can be found in the Staff Drive.</p>",
          },
          {
            title: "Concerns",
            isAccordion: true,
            content:
              '<p>If there are any concerns about a student’s behaviour or welfare in the classroom, the teacher will speak to the Centre Manager, who will need to investigate the concern. For more information see section <a href="/contents/4.0">4.0 Safeguarding & Welfare</a>, and the Language in Action Employee Handbook</p>',
          },
        ],
      },
      {
        id: "2.4",
        title: "2.4 Emergency Plan of Action",
        sections: [
          {
            title: "What it is",
            content:
              "<p>The company procedure for managing and resolving emergency situations during the summer.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The summer programme accepts more than four thousand students and group leaders, and their safety and security, as well as the safety and security of the Language in Action Team is the main priority of all Language in Action employees.</p><p>Knowing what to do and how to do it ensures that every precaution and action is taken in an effort to protect those in our care whilst maintaining high standards of business practice.</p><p>As a member of the management team it is important that in the event of an emergency, you are able to orchestrate the response appropriately. There is always a more senior manager to liaise with, should you need to. If there is a situation you feel uncomfortable dealing with, or the situation is serious enough to warrant it, you should alert people in the following order: Coordinators > Centre Manager > Programme Manager > Deputy Head of Juniors > Head of Juniors</p>",
          },
          {
            title: "What the Employee Handbook says",
            content:
              "<p>The following is taken verbatim from the Language in Action Employee Handbook. You have access to the full handbook via your HR Portal at my-malvern.com.</p><p><strong>Emergency Plan of Action:</strong> This EPoA is to be executed by the designated Activity Leader, appointed by the Activity Manager. In the event of an emergency:</p><ul><li>Establish nature and extent of the emergency.</li><li>If there are injuries, establish their extent and have first aid administered (if you, or another member of the group, have been trained or feel capable – but be aware of consequences that might follow were you to give incorrect treatment).</li><li>Telephone relevant emergency services- 999 or launch 112 app.</li><li>Establish names of the injured and ensure that all other members of the group are accounted for and safe.</li><li>Advise other staff and Group Leaders of the incident and that emergency procedures are in operation.</li><li>Ensure that an adult from the group (agency Group Leader or LIA staff members) accompanies casualties to hospital or if on your own you go with the injured student(s) or staff members; the Emergency Services will look after the rest of the party until another member of staff arrives.</li><li>Ensure that the remainder of the group are adequately supervised by Group Leaders and any other LIA staff throughout and arrange for their early return to accommodation, accompanied by Group Leaders.</li><li>Arrange for one adult (LIA staff member or Group Leader) to remain at the incident site to liaise with emergency services until the incident is over and all students, Group Leaders and staff are accounted for.</li><li>Control access to telephones until contact is made with the Centre Manager and until they have had time to contact those directly involved. Pass full details of the incident (name, nature, date and time of incident, location of incident, details of injuries, names and telephone numbers of those involved, action taken so far).</li><li>Identify alternate telephone numbers in case telephone lines become jammed.</li><li>The Company will arrange to contact the parents or next of kin of those involved. In serious incidents the parents or next of kin of all party members should be informed.</li><li>Write down accurately and as soon as possible all relevant facts and witness details and preserve any vital evidence.</li><li>Complete an accident report form as soon as possible.</li><li>No one in the group should speak to the media. Names of those involved in the incident should not be given to the media as this could cause distress to their families.</li><li>No one in the group should discuss legal liability with other parties.</li></ul>",
          },
          {
            title: "Emergency Plan of Action Flow Chart",
            content:
              '<p>The below flow chart provides a step-by-step guide on executing the Emergency Plan of Action. This chart should be displayed clearly in the Language in Action Office and available for all team members to read. It is also included in the Activity Leader Online Training package.</p><p>You can click <a href="https://drive.google.com/file/d/1w27tLTtvbkzc3VO9tqDKMJuj1Nj7rSBa/view?usp=sharing" target="_blank">here</a> to open the document in a new tab</p><p>Remember: If you are ever in doubt, contact your Programme Manager.</p>',
          },
        ],
      },
      {
        id: "2.5",
        title: "Section 2.0 Complete",
        sections: [
          {
            title: "That's the end of the Logistics section!",
            content:
              '<p>Click below to return to the contents page when you\'re ready to begin the next section - 3.0 Daily Operations</p><p><a href="/contents" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading); margin-top: 20px; margin-bottom: 20px;">Back to contents</a></p><p>If there is anything you have read that you are unsure about, don\'t worry! You will have plenty of opportunities to ask about it in your online and in-person training sessions before you open your centre.</p>',
          },
        ],
      },
    ],
  },
  {
    id: "3.0",
    title: "3.0 Daily Operations",
    description: "Day-to-day schedules, activities, and routines.",
    color: "var(--color-accent-purple)",
    icon: Calendar,
    subModules: [
      {
        id: "3.1",
        title: "3.1 Daily Planning",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Organising your day to maximise efficiency and reduce problems.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Due to the dynamic nature of the job, having a solid structure to your day allows for you to time manage effectively, schedule meetings and events properly, and lead from the front with confidence and knowledge of the business.</p><p>The effective tracking of tasks and knowing what to prioritise throughout the day is essential for the efficient and smooth running of the business.</p>",
          },
          {
            title: "Prioritising",
            content:
              '<p>It is important to create and stick to a plan of action for the day, whilst allowing for flexibility to account for emerging problems and situations as the day progresses.</p><p>In general, tasks should be prioritised to ensure that the student experience, and student safety and welfare are always achieved. Tasks can be grouped into several areas and prioritised as outlined below.</p><div style="width: 100%; max-width: 500px; margin: 32px auto; aspect-ratio: 1.6; background: linear-gradient(180deg, var(--color-accent-purple) 0%, #4a1d96 100%); clip-path: polygon(0 0, 100% 0, 50% 100%); display: flex; flex-direction: column; align-items: center; padding-top: 30px; gap: 6px; color: white; font-weight: 600; font-size: 14px; text-align: center;"><div>Immediate Student Safety and Welfare</div><div>Student Experience</div><div>Group Leaders & Clients</div><div>Team Welfare</div><div>Management</div><div>Team requests</div><div>Other</div></div><p>The business is dynamic, and the tasks you may encounter throughout the day vary massively throughout the programme. Below is a non-exhaustive list of tasks and to which category they might apply. Remember, students\' safety, welfare and experience are the primary focus of everything you do.</p>',
          },
          {
            title: "Immediate Student Safety and Welfare",
            isAccordion: true,
            content:
              "<p>Is there a risk of danger?</p><p>Fighting, risk of injury due to damaged equipment, public threats including terrorism and protests, missing or unaccounted for student.</p><p>Is there a welfare issue of high concern?</p><p>Catering not supplied, board insufficient, student injury or risk of injury including self-harm and harm to others, drug or alcohol use, negative mental health concerns, student sickness or absence.</p>",
          },
          {
            title: "Student Experience",
            isAccordion: true,
            content:
              "<p>Is there a risk of an activity or event not proceeding as planned?</p><p>Strikes, closures, insufficient staff/student ratio, ticketing errors, booking errors, severe weather, team rotas.</p>",
          },
          {
            title: "Team Welfare and Other Student Welfare",
            isAccordion: true,
            content:
              "<p>Are any students experiencing welfare issues?</p><p>Feeling homesick, falling out with other students, student isolation, poor attendance, repeated illness, hygiene issues, self-care and cleanliness, conflict with group leaders, Language in Action team members, facilities staff, or a member of the public.</p><p>Are any team members experiencing welfare issues?</p><p>Feeling homesick, overworked, sickness, absence, unhappy, poor work attitude, lack of enthusiasm.</p><p>Do all team members know the plan for the day?</p><p>Accurate, clear, and easy-to-read scheduling and events plan, attend the office to check in with management before event, and again after each event, is the WhatsApp group succinct and not diluted with general chat.</p>",
          },
          {
            title: "Client and Group Leaders",
            isAccordion: true,
            content:
              "<p>Are the Group Leaders fully informed of the schedule for the day?</p><p>Aware of who has been assigned to them for each activity, familiar with the excursion sheet (provided day before)</p><p>Are there any concerns from clients/facilities teams?</p><p>Complaints from residential staff or cleaners, complaints from members of the public, changes to plans previously agreed for catering or other facilities, booked equipment and rooms etc.</p>",
          },
          {
            title: "Management",
            isAccordion: true,
            content:
              "<p>Are there any requests from the Programme Manager or the rest of the Head Office team?</p><p>Next week’s rota for review, weekly summary of events, response to emails, tickets and catering bookings complete, one-to-ones arranges/completed.</p>",
          },
          {
            title: "Programme Managers and Head Office",
            isAccordion: true,
            content:
              "<h3>WhatsApp</h3><p>You Programme Manager will always be available on WhatsApp for you to contact with any queries. It is better to ask than not be sure and make a mistake, they are here to help you.</p><p>Programme Managers are your first point of contact for all situations, however if for any reason you cannot contact them and it is an emergency, you can call or message the Operations team in Head Office.</p><h3>Email</h3><p>During daily operations, WhatsApp is by far the fastest method of communication, however if the need arises, you can email any member of the management team. It is important to periodically check your emails, as tickets, bookings and communications may come through this channel.</p><p>Your Programme Manager will provide you with a list of email addresses, and will give you login details for a Gmail account set up specifically for your centre</p><h3>Meetings</h3><p>Throughout the summer your Programme Manager will visit your centre to help with organisation, planning and to ensure that you are comfortable completing your tasks. Your programme manager will schedule meetings to which all on-site management need to attend, and during which an overview of recent events, and a breakdown of future events will be discussed. There may be times when the programme manager attends your team meetings or group leader meetings, but these meetings are yours to run, and the programme manager is there for support, to answer any questions or discuss additional agenda points.</p>",
          },
          {
            title: "Team Requests",
            isAccordion: true,
            content:
              "<p>Are there any requests from team members?</p><p>Changes to rota, scheduling or working groups, day off requests, suitable uniforms, further detail on job role, tasks or excursions.</p>",
          },
        ],
      },
      {
        id: "3.2",
        title: "3.2 A Typical Day",
        sections: [
          {
            title: "What it looks like",
            content:
              "<p>Centre Manager: As a centre manager, your day will be primarily focused around admin and client relations. It is your role to ensure that not only are the coordinators' fully able to complete their tasks, but also that the group leaders, stakeholders and students have everything they need and expect from the programme.</p><p>Coordinator: Your management days, as either Tour or Campus Coordinator will look mostly similar, with one or two key differences. In the breakdown below, job specific tasks are highlighted. On days you are scheduled to participate in tours or activities you must still ensure you are in the office to support your teams before you begin your activity.</p><p>It is important to have a set time each day that at least one member of the management team is guaranteed to be in the office. This is part of our Open Door policy and provides a time for group leaders or students to come to the office with issues, questions or concerns about activities, safeguarding and welfare, or anything else they might want to speak about. This should be communicated to the group leaders and students in the inductions.</p><p>In addition to the typical daily tasks below you will also have site specific duties that must be completed each day. These may include travel ticket allocation, packed lunch delivery and allocation, ticket/excursion booking and more. Your Programme Manager will discuss these with you.</p><p>NOTE: This “typical day” does not account for the unplanned interruptions to your day. Never assume you will have free time later to do something that you could do in that moment.</p>",
          },
          {
            title: "Centre Manager",
            isAccordion: true,
            content:
              "<p>Your day should start at 8.30am with a quick briefing with your Tour Coordinator to ensure they have everything in place for the day's tours and excursions.</p><p>You will also need to have a quick catch up with your DoS or Senior Teacher to make sure everything is running smoothly on the academic side before the students begin class.</p><p>By 9.00am all students should be either be on tours or in class. This is a crucial time in the day, as there will be student absences, technical problems, travel problems or delayed groups, all of which you will need to play a hand in managing.</p><p>Once the above is all in hand you will want to start with your other duties, these will vary day to day but can include:</p><ul><li>Group leader meetings: Agency directors, senior group leaders or teacher leaders for example</li><li>Stakeholder meetings: facilities and catering teams, reception managers etc.</li><li>Team meetings:<ul><li>Rota checks</li><li>Coordinator 1-1</li><li>Budget control: bank account management</li><li>Meal plan review</li><li>DoS Meetings</li><li>Academic support tasks</li><li>Travel Cards</li><li>Student Welfare</li></ul></li></ul><p>You will learn more about these in detail later.</p>",
          },
          {
            title: "Tour Coordinator",
            isAccordion: true,
            content:
              "<p>In your allocated office days, your day will look something like this:</p><p>At around 8.30am, you must have your Tour Team check in with you to confirm all final details for their tours. This will be a final check, as the main briefing will have happened the day before. You'll need to confirm everyone has their travel cards too.</p><p>Next step is to ensure all groups have set off on time. Groups should have left the campus by 9.15am at the latest.</p><p>Once all of your groups are off campus, you can begin with your other management duties. These may include:</p><ul><li>Packed meal orchestration</li><li>Rota creation</li><li>Management meetings</li><li>Group leader meetings</li><li>Ticket printing, booking, or confirmation</li><li>Travel card processing</li><li>Risk assessments</li></ul><p>You will learn more about these in detail later.</p><p>Your groups will return anytime after 12.30pm and you must be ready to have a quick debrief on the excursion before the team go for lunch.</p><p>After lunch, the process will repeat for the second tour of the day.</p><p>At the end of the day, your groups will return to campus anytime after 5.30pm, but this time you must schedule a full team meeting for 6pm. At this meeting you should discuss plans for the following day, going through the required tour notes, travel cards and any changes, in as much detail as possible.</p><p>All team members should have access to the tour notes so they can prep overnight for their next tour.</p><p>Meeting with your team is key to a smooth, successful operation. For this reason, you must commit to your meeting times, keeping them short and to the point. Your team will quickly fall into the routine of the meetings, and come to expect them daily.</p><p>You will typically work two management days per week, and your other days will be working with the team to deliver the tours and excursions. For more on those, see the Tour Guide training guide. Don't forget, you are still the manager, so you might need to start earlier than your team to make sure things are in place and you are ready to brief them.</p>",
          },
          {
            title: "Campus Coordinator",
            isAccordion: true,
            content:
              "<p>In your allocated office days, your day will look something like this:</p><p>Your day will start at 9am, at which time you'll have a brief meeting with your centre manager to discuss the past few days, any feedback and and important notes for the day.</p><p>Your team will typically start later in the day, so your office time will be spent organising and planning ahead of the evening activities. Your duties will include the following:</p><ul><li>Packed meal orchestration</li><li>Rota creation</li><li>Management meetings</li><li>Group leader meetings</li><li>Canteen and packed meal confirmation</li><li>Team 1-1 chats</li><li>Evening event planning</li></ul><p>You will learn more about these in detail later.</p><p>During lunch and dinner service each day, you must make sure you and your team are sitting and eating with the students. It is an important part of student welfare, feedback and integration. For breakfast service, your team should sit with you and not the student, to informally discuss the prior night's activities.</p><p>Your team will start anywhere between 4pm and 5pm depending on the activity that evening.</p><p>When your team start, the first thing to do is sit and brief them on the evening's activity. You should explain exactly how to run the event and work together with the team to ensure that they fully understand the processes involved. This could be routes across the city for By Night excursions, what the prizes are for the talent contest, or how to make sure the laptop connects to the projector for movie night.</p><p>Depending on the evening activity, you may want to schedule your management shift to start later in the day, and work from midday until 7pm to oversee the start of the evening activity.</p><p>You will typically work two management days per week, and your other days will be working with the team to deliver the games and activities. For more on those, see the Campus Leader training guide. Don't forget, you are still the manager, so you might need to start earlier than your team to make sure things are in place and you are ready to brief them.</p>",
          },
        ],
      },
      {
        id: "3.3",
        title: "3.3 Day 0 / Turnover",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Day Zero, or Turnover Day is the day all the students leave and are replaced that evening by an entirely new group. The Centre Manager will take the lead on orchestrating Day Zero and the preparations beforehand, however it requires the full attention and efforts of the full management team as everyone has an important and distinct role to play.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Each group of students typically studies with us for a two-week period. At the end of their stay, they check out in the morning (confirm checkout times with residential manager), and the rooms must be fully cleaned and prepared for the new arrivals that evening. With centres of almost 500 students, Turnover Days are a monumental task that require exceptional planning and orchestration, and a full commitment from the entire team.</p><p>The key responsibilities are as follows:</p><ul><li>Centre Manager: Overseeing every aspect of the operation</li><li>Tour Coordinator: Managing airport transfers and pickups</li><li>Campus Coordinator: Managing check-in and welcome tours</li></ul>",
          },
          {
            title: "Before the turnover",
            isAccordion: true,
            content:
              '<p>4 days before the turnover, you must liaise with various members of the centres operations as follows:</p><p>These meetings will be led by the Centre Manager, but it is important that the entire management team attend so that everyone knows what has been confirmed and agreed.</p><h3>Facilities and Accommodation teams</h3><p>You need to communicate all the relevant information and discuss a plan of action for the day.</p><p>The key details are as follows:</p><ul><li>Exact number of students checking out and their room numbers</li><li>Exact number of student arrivals and arrival times</li><li>A cleaning schedule outlining the order in which rooms are to be cleaned (determined by group arrival times)</li><li>Who is responsible on the day (manager or supervisor) and what hours they are available</li></ul><h3>Catering</h3><p>You must send the dietary requirements and allergen information for the new arrivals, along with confirmed total numbers to the catering team (and packed lunch supplier). Don’t forget to include group leaders and Language in Action team members into the total numbers for catering.</p><h3>Arrivals</h3><p>You must also check arrival times and arrange a transfer schedule for each team member. This schedule will be produced by the Tour Coordinator, independently from the weekly rota and will focus on placing Tour Guides at the various airports across the city to greet the new students at the arrivals gate. For more information see <a href="/contents/1-0/1-7" target="_blank">Section 1.7 Transfers</a></p><h3>Student Key and ID</h3><p>The Campus Coordinator will need to organise team members to collect, sort and categorise new room keys, student ID badges and student lanyards into piles sorted by arrival group. Each pile should be clearly labelled, and contain only the students arriving at that time, ready to be handed out as the students arrive at the campus. The Room Allocations list (provided by your Programme Manager) is used to assign rooms to students.</p><h3>Language in Action Team</h3><p>The team must be briefed on the schedule and plan, including timings, groups, student numbers, and any special requirements including disabilities or other special needs. Everyone needs to be clear of their role for the day. This must be in in-person meeting to allow for questions and discussion to ensure clarity.</p>',
          },
          {
            title: "Day Zero on campus",
            isAccordion: true,
            content:
              "<p>The day will run differently each turnover depending on departure and arrival times, but typically students will start departing around breakfast, and start arriving after lunch. Expect students to have been travelling all day and some on several different flights - they will be tired and hungry.</p><p>It is vital that the turnover day is well organised, and that the team understand that their appearance and attitude on these days must be exceptional.</p><p>Let's start with the primary roles of the Campus Coordinator and Campus Team</p><ul><li>The first thing to do is check in with the facilities and reception teams to ensure everything you have planned is still in place, and that everyone is ready. The two main areas are room cleaning and room key production/availability. You will also have all team members working, and you should ensure that everyone knows their task, times, and cleaning schedules.</li><li>You can preassign roles to your team and keep them in their roles throughout the day if possible. Roles can include things like: check-in desk with meet & greet, room checks and maintenance, or campus tours.</li><li>Each departure should be allocated a team member to see the group off, and importantly, collect their room keys. Once keys are collected, they can be sorted and reassigned for the new arrivals as per your plan.</li><li>As student groups leave, you need to communicate this information to the cleaning team, so they know which rooms are ready to be turned over. As the rooms get cleaned you will need to send Campus Leaders to check the rooms to ensure they meet the standards Language in Action expect. There is a checklist on the Staff Drive that can be used.</li></ul><p>When the groups arrive, and before they begin their tour, the Centre Manager will sit with the group leader to confirm some essential information. This meeting will last no more than 10 minutes. There is a Group Leader Agenda in the staff drive which covers:</p><ul><li>Who’s who in the centre</li><li>Emergency procedures</li><li>How the room allocation will work</li><li>A detailed Itinerary for the following day (placement tests and inductions, timetable confirmation)</li><li>Confirmation of dietary requirements, allergies, disabilities, and other special needs</li></ul><p>All groups are given a packed dinner on arrivals day. They should be handed from no earlier than 6pm and groups that arrive earlier must be informed of the plan when they arrive.</p><p>ARRIVALS:</p><ul><li>Lunch : included ONLY if their landing time in the UK is scheduled for not later than 11.00 AM - Lunch will typically mean you will have to order pizza delivery for that group.</li><li>Dinner: always included as a packed meal from 6pm</li></ul><p>DEPARTURE:</p><ul><li>Breakfast : always included (packed if the students depart before the service starting time)</li><li>Lunch : included (packed, except special cases) only if the students’ departure flight is scheduled for not earlier than 12.00 PM</li></ul><p>If a group leaves earlier than that, we’re not responsible for the students anymore as the they are not in the UK at lunchtime, and do not pay for their meal while travelling.</p><p>All the other meals outside those deadlines will be considered as extra.</p><p>In case of changes on flight departure/arrival times that affect the meal plan the deadline will be 2 days before the starting date of the study vacation (for instance: your original arrival time was 1.30 PM, so the lunch wasn’t included, and the new arrival time is 10.30 AM: If the change is communicated 2 days in advance no charge will be applied, if the communication arrives late, the meals may be not guaranteed and a charge may be applied).</p><p>This process will repeat for most of the day, and it is important to maintain a high level of concentration and organisation throughout. The later into the day, the more tired your team will become, and checking in on them is important. Ensure that everyone gets food, and sufficient breaks.</p><p>Only when all the students are in their rooms is the day over, and you must maintain a sufficient level of staffing until everything is complete.</p><p>Your Programme Manager will be on site to support and provide instruction where needed, so you will not be alone, but remember, your team will look to you for the same.</p>",
          },
          {
            title: "Day Zero off campus",
            isAccordion: true,
            content:
              '<p>Day Zero off campus primarily applies to Tour Coordinators and Tour Guides doing airport pick-ups.</p><ul style="padding-left: 20px; margin-top: 10px;"><li style="margin-bottom: 10px;">The first thing to do is remind all tour guides to monitor live flight updates to ensure that all arrival flights are proceeding as scheduled. The tour team should keep each other informed of any flight changes, such as delays or early arrivals.</li><li style="margin-bottom: 10px;">You should brief each tour guide on their assigned pick-up(s) before they leave campus and ensure that all tour guides arrive at the airport at least 30 minutes before the flight\'s scheduled arrival time.</li><li style="margin-bottom: 10px;">The Tour Coordinator must ensure that all tour guides have the correct transportation tickets for their assigned pick-ups. Please note that not all airports accept travel cards. If the airport is located outside Zone 6, tickets must be purchased at the station in the morning.</li></ul><p>For more details of Day Zero off Campus, please see <a href="/contents/1.0/1.7">1.7 Transfers</a></p>',
          },
        ],
      },
      {
        id: "3.4",
        title: "3.4 Day 1",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Day One – the first full day at the centre for the students.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Day 1 is when students and group leaders are given all the information they need for their stay. The students get level tested for their classes and receive a school induction, whilst the group leaders review the timetable and school rules.</p>",
          },
          {
            title: "Students",
            content:
              '<p>After breakfast, students will be split into two groups according to The Zig Zag (See section <a href="/contents/1-0/1-8">1.8 The Zig Zag</a>).</p><p>One group will be taken by the academic team for level placement tests for which you will need to liaise with the academic team in advance to see if you need to allocate a large room like a lecture theatre, which may need booking with the facilities team.</p><p>The other group will be given a Summer Centre Induction by the Coordinators. This induction includes fire safety, rules and expectations, and a basic overview of what they will experience over the summer. It is important to deliver the induction with a welcoming, positive, and energetic approach as it will set up the atmosphere for their entire summer. The induction PowerPoint can be found on the Staff Drive. You will need to make sure you have access to a projector and screen, and a laptop to run the presentation for the students.</p><p>After lunch, students will swap activities, and you will repeat the same process.</p>',
          },
          {
            title: "Group Leaders",
            content:
              "<p>The Centre Manager will need to meet with the group leaders individually, to discuss their specific timetables, answer any questions, and make any amendments to the programme as required. These meetings should be arranged on Day 1, and all timings should be kept. This is an important step for displaying the professionalism and organisation of the company to our clients, and ensures that you are regarded as a competent, responsible, reliable manager for their stay.</p><p>Key things to cover are:</p><ul><li>Timetable review and confirmation</li><li>Group Leader declaration forms to be signed (available on the Staff Drive)</li><li>Code of Conduct, Safeguarding Policy, Statement of Responsibility</li></ul>",
          },
          {
            title: "In the evening",
            content:
              "<p>After dinner service, students will take part in the first activity, the Welcome Party.</p><p>The campus team should sit down to plan the welcome party after the Student Inductions in the afternoon. This should include deciding what ice breaker games to include, who is leading and purchasing any refreshments needed. Typically a welcome party includes a mix of games and social time with music.</p><p>Campus Coordinators must be present and leading the activities, then supervising the rest of the evening.</p><p>The next day is the first full day of programming for the centre, so the Centre Manager must liaise with their entire team, and all other departments including academics to ensure everyone has everything they need for the day to run smoothly.</p>",
          },
        ],
      },
      {
        id: "3.5",
        title: "Section 3.0 Complete",
        sections: [
          {
            title: "That's the end of the Daily Operations section!",
            content:
              '<p>Click below to return to the contents page when you\'re ready to begin the next section - 4.0 Safeguarding & Welfare</p><p><a href="/contents" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading); margin-top: 20px; margin-bottom: 20px;">Back to contents</a></p><p>If there is anything you have read that you are unsure about, don\'t worry! You will have plenty of opportunities to ask about it in your online and in-person training sessions before you open your centre.</p>',
          },
        ],
      },
    ],
  },
  {
    id: "4.0",
    title: "4.0 Student Welfare",
    description: "Safeguarding, welfare, and student support.",
    color: "var(--color-accent-green)",
    icon: Shield,
    subModules: [
      {
        id: "4.1",
        title: "4.1 Safeguarding Policy",
        sections: [
          {
            title: "Safeguarding & Welfare",
            content:
              '<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--radius-md); margin-bottom: 20px;"><iframe src="https://www.youtube.com/embed/Et1yEwK3K-w" title="Safeguarding Policy Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"></iframe></div>',
          },
          {
            title: "What it covers",
            content:
              "<p>Safeguarding and child protection refer to measures to protect the health, well-being, and human rights of individuals, which allow people - especially children, young people, and vulnerable adults - to live free from neglect, and physical, emotional and sexual abuse.</p><p>Child Welfare is about the physical, social, and psychological well-being of children, particularly children suffering from the lack of normal parental care and supervision. It deals with such problems as personality development, vocational guidance, and use of leisure time.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Everyone involved in a Language in Action summer programme must be considered in such a way that their safety, well-being and human rights are paramount. Particular attention must be paid to the students in our care.</p><p>Students under the age of 18 are legally considered children, and fall under all safeguarding law and policy for minors. Students aged 18 and over fall under the category of Vulnerable Adult due to a number of factors, the primary being their language skills whilst in England. Throughout your time at Language in Action, all Vulnerable Adults and all minors are considered the same for all aspects of Safeguarding, Welfare, and Child Protection policy.</p>",
          },
          {
            title: "The Number One Rule",
            isAccordion: true,
            content:
              "<p>If in any of your onboarding, training, or experiences across the summer programme, you are unsure of procedure or policy, or you are unsure about any situation, feel uneasy or have any doubts about a student, client, or colleague, you must speak to your Safeguarding & Welfare Manager.</p><h3>You should never act alone in situations about which you have any uncertainties.</h3><p>Each centre has a Welfare Manager on site in a full-time capacity. All Programme Managers and many Head Office team members are trained in Safeguarding and can help in any situation at any time. See our Company Structure for a fully detailed list of Safeguarding and Welfare roles within the company.</p>",
          },
          {
            title: "The Policy",
            isAccordion: true,
            content:
              '<p>Everything you need to know to meet the high standards set out by Language in Action are detailed in the Language in Action Safeguarding and Child Protection Policy which can be accessed <a href="https://languageinactionltd.co.uk/policies/safeguarding-and-child-protection-policy/" target="_blank">on our website</a> and is also available from any of your management team.</p><p>You must read this policy before the first day of student arrivals.</p>',
          },
          {
            title: "Training",
            isAccordion: true,
            content:
              '<p>Below you will find the links to read and complete essential documents and training.</p><p>You cannot work over the summer until you have completed this training.</p><p>The essential training and documentation is as follows:</p><ul><li><a href="#">Language in Action Safeguarding Policy</a></li><li>British Council Accreditation UK Safeguarding Training (Online Course)</li><li>UK Government PREVENT Training (Online Course)</li></ul><p>Language in Action Centre Managers and Welfare Managers are all trained to Specialist Safeguarding Level 3, and all Coordinators to at least Advanced Safeguarding Level 2. You will be provided this training if you do not hold the required level.</p>',
          },
        ],
      },
      {
        id: "4.2",
        title: "4.2 Allergies and Special Needs",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>Allergies, dietary requirements, disability assistance and educational needs, and other special needs.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Awareness of the needs of our guests is a vital process in our summer programme. Allergy requirements relate to student safety, Dietary needs to religious and emotional understanding, disability assistance can affect every aspect of their stay, and special educational needs must be considered for all classroom activities.</p>",
          },
          {
            title: "Allergies",
            isAccordion: true,
            content:
              "<p>Providing a suitable menu that is safe from any allergies listed by students, group leaders and team members is of paramount importance. All agencies will provide us with a list of allergies for each student, and it is your responsibility to ensure that meals free from these allergens is provided at each mealtime. Remember, students will be unfamiliar with British food, and possibly unable to read labels in English, they are relying on you to provide the correct food.</p><p>You may encounter a wide range of allergies throughout the summer, but the most common will be food-born allergies.</p><p>All allergy lists must be given to the catering manager and food suppliers (including restaurants and packed meal suppliers) in advance of the student’s arrival.</p><p>Part of the activity leader’s role during mealtime supervision is to check that there are options available free from the listed allergens, and where necessary, to point out each option to the student.</p><p>The UK Government lists the following allergies as necessary to list in the ingredients of any meal, but Language in Action will cater for more if required.</p><p>The allergens are; celery, cereals containing gluten (such as wheat, barley and oats), crustaceans (such as prawns, crabs and lobsters), eggs, fish, lupin, milk, molluscs (such as mussels and oysters), mustard, peanuts, sesame, soybeans, sulphur dioxide and sulphites (if the sulphur dioxide and sulphites are at a concentration of more than ten parts per million) and tree nuts (such as almonds, hazelnuts, walnuts, Brazil nuts, cashews, pecans, pistachios and macadamia nuts).</p><p>Within the first 24 hours of a student’s arrival, the Welfare Manager should meet with any student that has a severe allergy, along with their group leader, to discuss what to do in an emergency situation and to confirm details (e.g. that suitable meals are planned). Some students will carry medication, for example an Epinephrine autoinjector (EpiPen) – you must speak with them about storage, use, who has knowledge and who is responsible (usually the student and their group leader)</p>",
          },
          {
            title: "Dietary Requirements",
            isAccordion: true,
            content:
              '<p>Aside from the above allergy requirements, other dietary requirements are likely to be for medical reasons (e.g. diabetic students), or for religious reasons. You should speak with the group leaders to fully understand what is and is not suitable for a student to eat, and maintain an open dialogue about it throughout their stay.</p><p>Confidence in areas such as this grow from communication – they need to know you are working hard to ensure their needs are met.</p><p>The largest non-allergy related dietary requirement you are likely to encounter is a request for a Halal diet from practising Muslims. Some key factors to note are that all meat and poultry must be labelled as Halal, and no pork or food containing alcohol is permitted. You can read more about a Halal diet <a href="https://www.muslim.org.au/uploads/1/3/7/8/13783065/a_guide_to_halal_food_2020.pdf" target="_blank">here</a>. The Welfare Manager must check with the catering team to ensure food is correctly labelled.</p>',
          },
          {
            title: "Disabilities and Other Special Needs",
            isAccordion: true,
            content:
              "<p>For more information on disability management and policies, see the Language in Action Staff Handbook.</p>",
          },
        ],
      },

      {
        id: "4.3",
        title: "4.3 Student Disciplinary Procedure",
        sections: [
          {
            title: "What it covers",
            content:
              "<p>A guideline for how and when to enact disciplinary procedures against a student.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The safety and welfare of all students is paramount, and as such, behaviour that goes against the rules put in place to ensure student safety and welfare must be treated seriously.</p><p>Wherever possible, the situation should be resolved in a way that improves the situation, minimises the risk of further disruption and must always abide by the law and company policy.</p><p><strong>NOTE:</strong> The situation may become a student safeguarding and welfare issue, and all cases must be considered on an individual basis. If in doubt, speak to your manager.</p>",
          },
          {
            title: "The Procedure",
            content:
              "<p>There are 4 main stages to the disciplinary procedure for students, however depending on the severity of the situation one or more stages may be skipped. You should speak to you Programme Manager before taking action on Stages 3 and 4.</p><p>At all stages, the process to follow when dealing with a situation of disciplinary nature is as follows:</p>",
          },
          {
            title: "Investigate",
            isAccordion: true,
            content:
              "<p>Where appropriate, and in a way that does not cause further distress to anyone involved, speak to the following people in the following order:</p><ol><li>The complainant (teacher, activity leader, group leader, other student) – find out exactly what happened in their own words. In more serious situations, you must make notes as you talk about it.</li><li>The Group Leader of the student involved (if there is a suggested victim, speak to the victim’s group leader first)</li><li>The student accused of misconduct (If there is a suggested victim, speak to the victim first)</li></ol><p><strong>Note:</strong> When investigating what has happened do not promise any particular outcome, or imply guilt (particularly in hearsay and he said/she said scenarios). You should always tell the group leaders and students that you are taking it seriously, that you will investigate it fully, and you will return with an outcome in due course.</p>",
          },
          {
            title: "Consult",
            isAccordion: true,
            content:
              "<p>Look through the Disciplinary Procedures, Student Handbook and Company Policies to ensure that you are fully aware of any procedures you may need to follow. Take a plan of action to your Programme Manager – they will help you finalise the plan.</p>",
          },
          {
            title: "Act",
            isAccordion: true,
            content:
              "<p>Arrange a meeting between the Welfare Manager, the student, and their group leader. Explain what the investigation was caused by (the incident) and explain the outcome. You should not explain the details of the investigation.</p><p>If there is a victim involved, you must ensure that you speak to them at a different time to the disciplined student, so that they do not meet in the process.</p><p>Formal Verbal Warnings should be documented by a signed attendance letter, signed by the student, group leader and Welfare Manager.</p><p>Written warnings should be printed three times. One handed to the student, one to the group leader, and one signed by both and the Welfare Manager, and stored on file. A digital copy should be forwarded to the Area Manager who will contact the student’s guardians accordingly.</p>",
          },
          {
            title: "Stage 1: Informal Verbal Warning",
            isAccordion: true,
            content:
              "<p>Although used for minor instances of misconduct, these must be reported to the Welfare Manager and recorded in the designated section of the staff drive. It may come to nothing, but will need to be evidenced if further stages are taken.</p><p>Example: a student makes an inappropriate comment during class or whilst on an excursion (e.g. swearing or poor classroom behaviour)</p>",
          },
          {
            title: "Stage 2: Formal Verbal Warning",
            isAccordion: true,
            content:
              "<p>Most commonly used for repeated action from Stage 1. These warnings are to be given by the Welfare Manager to the student, in the presence of their group leader. The group leader should be told about what will be said in the meeting.</p><p>It is common for the group leader to suggest punitive measures as a form of punishment (e.g. missing out on an activity), however you cannot condone these at this stage, and it is not your place to suggest anything to the group leader. It is important to note that at no point must a group leader allow for a student to miss classes, mealtimes or sleep as a form of punishment. Group Leaders may wish to remove students from activities or excursions, but it must be made clear that the student would be the responsibility of the group leader for the duration and must be monitored by them at all times.</p><p>Example: two students decide to skip class and return to the residence, walking there unaccompanied.</p>",
          },
          {
            title: "Stage 3: Written Warning",
            isAccordion: true,
            content:
              "<p>If a situation is more serious than that which warrants a verbal warning, or the student continues to display poor behaviour after a verbal warning, a letter can be drawn up.</p><p><strong>First Written Warning</strong></p><p>A letter that is written outlining the conduct, the fact an investigation has taken place, and the outcome of that investigation. A clear warning that further misbehaviour of any kind will result in a Final Written Warning.</p><p><strong>Final Written Warning</strong></p><p>A letter outlining all prior misconduct, the fact an investigation has taken place, and the outcome of all current and previous investigations pertaining to that particular student. A clear warning that any further misbehaviour of any kind will result in expulsion from the summer programme, and the policies and requirements that entails.</p><p>Example: a student is caught fighting or displaying extreme violent behaviour at any time during the summer programme – including throwing chairs, fighting another student, or putting any person (clients, group leaders, teachers, activity leaders etc.) at harm or risk of injury</p><p>You can find templates for all disciplinary letters in the Staff Drive</p>",
          },
          {
            title: "Stage 4: Expulsion",
            isAccordion: true,
            content:
              "<p>Expelling a student is an absolute last resort and can only be done with authorisation from the Head or Deputy Head of the juniors’ department.</p><p>Students who are expelled from the programme will have transport and accommodation provided in discussion with the group leaders and agency. The student remains the responsibility of Language in Action until passing through airport security for their homeward flight, however most logistics will be arranged by the group leaders.</p><p>This procedure will be dealt with by higher level management, and your involvement at a centre level will be liaison only.</p>",
          },
        ],
      },
      {
        id: "4.4",
        title: "Section 4.0 Complete",
        sections: [
          {
            title: "That's the end of the Safeguarding & Welfare section!",
            content:
              '<p>Click below to return to the contents page when you\'re ready to begin the next section - 5.0 Management</p><p><a href="/contents" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading); margin-top: 20px; margin-bottom: 20px;">Back to contents</a></p><p>If there is anything you have read that you are unsure about, don\'t worry! You will have plenty of opportunities to ask about it in your online and in-person training sessions before you open your centre.</p>',
          },
        ],
      },
    ],
  },
  {
    id: "5.0",
    title: "5.0 Management",
    description: "Leadership resources, HR, and staff management.",
    color: "var(--color-accent-orange)",
    icon: Users,
    subModules: [
      {
        id: "5.1",
        title: "5.1 Complaint Management",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Successfully resolving complaints and problems from students, clients, group leaders or team members.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The primary focus is to resolve the situation so that where possible, all involved are satisfied with the outcome. It must be remembered that Language in Action cannot exist without its clients, and therefore resolutions must be found that further improve the relationship with the client.</p>",
          },
          {
            title: "Managing a complaint",
            isAccordion: true,
            content:
              '<p>Follow this step-by-step guide when dealing with a complain of any size.</p><ol><li><strong>Complaint received - Assess the severity of the complaint</strong><ol type="i"><li>Who is making the complaint?</li><li>Who or what is the complaint about?</li><li>What happened?</li><li>How has this affected the business?</li><li>How has this affected the students, group leaders, team, external staff?</li></ol></li><li><strong>Assess the urgency of the complaint</strong><ol type="i"><li>How quick does the response need to be?</li><li>Is this something you personally can resolve?</li><li>Do you need to raise it to the area manager?</li></ol></li><li><strong>Resolve the matter in the most appropriate way, and inform the complainant of the action taken</strong><ol type="i"><li>Informally in person – minor issues and passing complaints – this is the optimum and preferred way to resolve most complaints not outlined in ii – iv below.</li><li>Formally in person (either private or with both involved parties) - welfare/severe situations</li><li>Via email – external clients</li><li>Via formal letter - welfare / severe situations</li></ol><p>For 3i, the area manager can be updated after resolution. For items 3ii – 3iv you should speak to your Area Manager before investigation or resolution.</p></li><li><strong>Assess the risk of the complaint repeating in the future?</strong><ol type="i"><li>Is the problem preventable?</li><li>What steps can we take to prevent the problem from reoccurring?</li></ol></li><li><strong>Ensure the resolution satisfies all of the following:</strong><ol type="i"><li>The complainant – are they happy with the outcome?</li><li>The business – does it improve our reputation?</li><li>The client – does it improve business relations and client experience?</li></ol></li><li><strong>Document the complaint in the handover diary, in an email to the Programme Manager, and in the Record of Feedback and Complaints spreadsheet available on the Staff Drive.</strong></li></ol>',
          },
          {
            title: "Key things to remember",
            isAccordion: true,
            content:
              "<ul><li>Always listen without judgement or argument</li><li>Assure them that you take the matter seriously and that you will investigate the complaint.</li><li>Assure the complainant that you will let them know more information when you have addressed the complaint – this must happen within 48 hours.</li><li>The students, their parents, the group leaders, and the clients are all to be kept as happy as possible. If you think your resolution is not satisfactory for any of these groups, speak to your area manager before resolving the issue.</li><li>Follow up every complaint with a resolution meeting/letter/email. This shows that you have listened, that you acted on their complaint, and that you have resolved the situation professionally – this must happen within 5 days, sooner rather than later.</li><li>A complaint is a negative trait, and in order to satisfy the complainant, it is often not enough to return to the status quo, but to exceed their expectations or improve their experience further. This may be directly related to the complaint or added as an addition to their experience at a later date. Either way, they must be informed at the resolution meeting.</li><li>Never promise anything when the complaint is made, it may not be possible to fulfil that promise, which would then only make things worse. Tell them that you understand their concern and will contact them when you have investigated.</li></ul>",
          },
          {
            title: "What sort of complaints might I face?",
            content:
              "<p>Below is a breakdown of the types of complaints you may come across, and from whom they come.</p>",
          },
          {
            title: "Students",
            isAccordion: true,
            content:
              "<p>All complaints from students should be dealt with, where possible, by the Welfare Manager. However, it is the responsibility of all managers to ensure that problems are dealt with in a timely manner.</p><p>Student complaints may cover a wide range of problems including complaints about activities and how they are operated, other students, their room, Language in Action staff members including the teaching team, their group leaders, the facilities team or their overall experience.</p><p>When handling a complaint from a student it is important to ensure that you stick to the safeguarding rules in place at all times. This includes speaking to students in an open room or in the company of another, as well as speaking to them in an appropriate, professional manner. Best practice is to have their group leader present for all discussion, no matter how small.</p>",
          },
          {
            title: "Group Leaders",
            isAccordion: true,
            content:
              "<p>Group leaders are likely to complain about many aspects of their experience that are out of your control including their perception about an excursion, travel times, members of the public. This does not mean that there is nothing you can do to improve the situation. Listen to their concerns and tell them that you will endeavour to ensure that the situation is improved for future groups. Remember, this might not be possible for the same week, programme or year.</p><p>Other complaints may be similar to those of the students and may relate to your team or the facilities team at the school or accommodation.</p>",
          },
          {
            title: "Facilities and external contractors",
            isAccordion: true,
            content:
              "<p>Complaints may include unruly students, damage to property, disruption to their other clients, and unacceptable working conditions as a result of Language in Action services. Complaints from external clients, and therefore people you may have little day-to-day contact with, can be difficult to manage, but remember that your Programme Manager is always available, and will often have an established business relationship with the client.</p>",
          },
          {
            title: "Team members",
            isAccordion: true,
            content:
              "<p>Your team work long hours, and often work in difficult, stressful, or unfamiliar situations, and with unfamiliar people. During the summer programme you are likely to hear informal complaints about other team members, either in passing or during down time. It is important to allow team members to vent frustrations or release stress in their time off without feeling like it will become an in-work issue. Your team won’t share with you if they feel they are always on watch.</p><p>That said, your team need to understand that they can come to you at any time to speak to you about a problem.</p><p>Most common problems that arise involve personality clashes between team members, or the perception of one that another is overstepping their authority, under working or underperforming. These situations, particularly if you have not previously noticed any issues, require monitoring so that you can make your own assessment. It may turn out that the complainant has a valid issue, but it may also turn out that they had just had a particularly problematic shift, and they were stressed or upset. If this is the case, the resolution may be different.</p><p>Resolving team complaints takes a certain level of sensitivity, as losing a team member for any reason in the middle of the programme creates a large number of problems for the remainder of the summer. All resolutions should aim to improve the summer programme, its operations and success.</p><p>As a manager you must balance the line of friendship and support, and leadership and professionalism in order to get the best out of your team.</p>",
          },
          {
            title: "Examples",
            isAccordion: true,
            content:
              "<p><strong>A student complains that a tour guide shouted at them for swearing at a member of the public when on an excursion.</strong></p><p>Action:</p><ol><li>Welfare Officer to conduct investigation</li><li>Formal meeting between manager and tour guide to discuss the inappropriate manner in which the situation was dealt with.</li><li>Tour guide tasked with refreshing their safeguarding and welfare training.</li><li>Meeting with the group leader responsible for the student, to discuss their behaviour and the Language in Action stance. The group leader then assumes responsibility for student reprimand. Group leader is also to be informed that the team leader has been spoken to separately.</li><li>Depending on how the situation has been received, the Tour guide should be removed from all activities and avenues of interaction with the student until the end of their stay.</li></ol><p>In this situation, the group leader is the best intermediary as they are ultimately responsible for the actions of a student. When dealing with the team member, the outcome, and any discussion does not need to be shared with external clients, other than to say it has been managed internally.</p><p>Because the situation involves a Tour Guide, this would be noted in your next catch up with your Programme Manager. For more serious situations, the Programme Manager must be contacted before any resolution is made.</p><hr /><p><strong>A senior group leader complains about the quality of the package and excursions planned for their students.</strong></p><p>Action:</p><ol><li>Listen to the group leader’s complaint and any possible suggestions they may have in an informal meeting (usually the moment they raise the complaint).</li><li>Explain that you will look at the current timetable issues, and will look into the proposed solutions, and any other options that may be available.</li><li>A) If suggested changes are viable, and do not come with additional costs or cancellations, and do not adversely affect other groups, you can make changes to the timetable and team rota to reflect the group’s wishes. <br />Or<br /> B) If the suggested changes are more complex, require additional costs, external bookings or will disrupt other groups, contact your Programme manager with a plan and seek authorisation to make the changes.</li></ol>",
          },
        ],
      },
      {
        id: "5.2",
        title: "5.2 Team Management",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Knowing your team well enough to manage their time, skills and personalities to get the best out of them</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>The summer is a non-stop, intensive period of long days and high pressure for everyone. However, with the right management, the summer programme can be a highly rewarding and ultimately enjoyable time for all involved. Looking after your team is as important as looking after the students, group leaders, clients, and yourself.</p>",
          },
          {
            title: "Leading a team",
            isAccordion: true,
            content:
              "<p>The key is people management. A skill that finely balances a friendly, fun working environment with enough authority to ensure tasks are completed fully, promptly and to a high standard.</p><p>There is no one method to successful people management, but below are some tips to get you started:</p><ul><li><strong>Think about who your team are.</strong> Most Campus leaders and Tour Guides are students, and therefore your team are likely young and inexperienced in the workplace. They are, however, adults. You should speak to them in a way that demonstrates you are aware of all these factors. Do not expect inherent knowledge based on experience, from a team who may have never held a job before. Your role as a manager of young people is to build the maturity, confidence and intuition that comes with working under a strong manager.</li><li><strong>Show respect.</strong> Speak to your team and manage your team as you would like to be spoken to and managed yourself.</li><li><strong>Be fair and consistent.</strong> Special treatment often does more harm than good and should be avoided. All team members should be treated fairly, and all workloads, tasks, reprimands, or praise should be consistent throughout the summer. There is nothing worse than being criticised or punished for something that the day before another team member was laughing and joking with the manager about.</li><li><strong>Lead by example.</strong> A Language in Action summer management role is not the role for an office manager who sits and barks orders at people. You should lead your team from the front, displaying a positive attitude and a willingness to get stuck in. Never ask your team to do something you wouldn’t be willing to do yourself.  You should demonstrate in your efforts, the work ethic you expect from your team. Leaders Eat Last'. A phrase that summarises what your approach to work should be. Ensure that your team are fully equipped to fulfil their tasks before you begin your own tasks, take breaks, or days off. If you have a task to complete, demonstrate to the team that you don't stop until that task is completed</li><li><strong>Demonstrate Trust.</strong> Assign tasks and delegate duties as required, putting trust in the abilities of your team. You cannot run the summer programme alone, nor can you rely on micro management. Set clear goals and tasks, review progress and expect results. Your team will grow stronger if you trust in their ability to complete the tasks you set. If they fail at a task, review with them team member, set clearer instructions and outline how to succeed next time.</li><li><strong>Give praise and feedback.</strong> Let your team members know they are doing a good job, that their work is appreciated, and if necessary, where they can improve for next time. Again, your team are young and inexperienced in the workplace, praising their actions will go a long way to building their confidence as the summer progresses.</li><li><strong>Thank your team.</strong> Every single day. When they leave for the day, when the work is done and everyone is going back to the residence, let them know that their work is appreciated with a simple thank you. It really goes a long way after a long, challenging day. Try to be specific, pick out a task they achieved, or something you think they did well at.</li><li><strong>Remember we are a family.</strong> Family look out for each other, work together and help each other. They support each other and aim to get the best out of each other. Your team are your family, and you just lead by example in everything you do.</li></ul>",
          },
          {
            title: "Problem Solving",
            isAccordion: true,
            content:
              "<p>In any workplace, there can be problems that need to be dealt with by the management team. In a summer programme the necessity to fix problems quickly and efficiently is even higher as most team members and management will be living in residence together, as well as working together every day.</p><p>As a manager you must be able to identify problems before they arise, and wherever possible, work at reducing the risk of a problem.</p><p>You and your team will all work long hours, in a city they are unfamiliar with, away from their friends and family, whilst having to live with complete strangers and trying to do a completely new job with a lot of responsibility for student safety. You must always be aware of this, and try your best to mitigate these burdens wherever possible.</p><p>If you do encounter problems within your team, speak to them. Ask them what the problem is and how they think the problem can be solved. Perhaps it might mean adjusting the rota, or maybe moving people to other group supervision. It might mean shifting tasks around or swapping someone’s day off. Often just listening and offering words of support is enough to reduce tension levels.</p>",
          },
          {
            title: "Socialising",
            isAccordion: true,
            content:
              "<p>The summer programme is too enclosed, and too intense to be a manager that comes to work, does the job, then goes home, keeping a distance from their employees. Be approachable and maintain an open dialogue with your team. Don’t lock yourself in your office all day, then head straight to your room, but instead try to find the time to socialise with your team.</p><p>You should arrange team social events for each turn, providing an opportunity for the entire team to relax, you included. Karaoke, family meals, pizza nights, game nights, whatever you and the team would like to keep morale high, and tension low. There is a budget available for team social events, speak to your Programme manager for more information.</p>",
          },
          {
            title: "Meetings and Feedback",
            isAccordion: true,
            content:
              "<p>It is important to arrange regular (minimum weekly) team meetings, and more importantly to stick to scheduled meeting times. You should demonstrate the importance of professionalism and punctuality through your behaviour and approach to team communication.</p><p>Meetings should be concise, useful, and informative. They should be planned in advance with an agenda, so the meeting stays on focus and doesn’t just turn into a big group discussion or last for hours. Everyone is working hard over the summer; meetings need to be used for discussing important information and feedback only.</p><p>A typical meeting should cover the following points, but each meeting will have its own dynamic points that are date or site specific.</p><ul><li>student concerns</li><li>feedback on activities/excursions</li><li>upcoming excursion schedules</li><li>team rota</li><li>group timetables</li><li>information about turnover days</li><li>pack lunch delivery information</li><li>updates from Programme Manager</li></ul>",
          },
          {
            title: "One-to-Ones",
            isAccordion: true,
            content:
              "<p>Managers should allocate times for one-to-one meetings with each activity leader to discuss their performance, progress and any questions or concerns they have. It is often all too easy to be ‘too busy’ to conduct one-to-ones, particularly with stronger, more competent members of the team, where it seems ok to say “hey, you’re doing fine, we can probably skip the one-to-one”. This is not good management. Each team member deserves their chance at a one-to-one, and fairness and openness are important. If the team member is doing great, sit them down and tell them exactly what you though they did well at – be specific, and show them that you have noticed their hard work, that they are doing well, and set them goals for further improvement.</p><p>For more information on what should be in the meeting see the Team One-to-One template on the Staff Drive.</p>",
          },
          {
            title: "Skill and Ability Recognition",
            isAccordion: true,
            content:
              "<p>A strong manager is one who is able to identify the strengths and weaknesses of their team and can adapt the workload to get the best out of each of them.</p><p>If you notice that one particular team member is particularly confident with larger groups, speak to them, give them the positive feedback and tell them that you are going to focus their work more in that area. Likewise, if you have a team member who is quieter and more reserved, and is better suited to smaller, more well-behaved groups, start by focusing their role in that area.</p><p>You will notice that some team member are more skilled in organisation and logistical planning than others. You can utilise these skills by asking them to help around the office one or two shifts a week – this could be checking excursion plans, tickets organisation, transfer scheduling. Meanwhile, the team member than is no good at logistical planning might be great at getting students interested in an activity, or might have a background in theatre and performance, so they could run the Karaoke night.</p><p>As team member become more comfortable with their role, you might want to give them new challenges or tasks to help develop their skills on the summer programme. Invest the time to explain and monitor team members, and coordinators should support the teams.</p><p>If you notice anyone who stands out as a potential future manager, speak to your Programme Manager sooner rather than later. There might be an opportunity to train them in management roles as they work.</p><p>Remember: If you think things are getting out of hand, or you are not sure how to approach a situation, speak to your programme manager, they are there to help.</p>",
          },
        ],
      },
      {
        id: "5.3",
        title: "5.3 Cultural Differences",
        sections: [
          {
            title: "What it is",
            content:
              "<p>The differences you may experience when dealing with students, clients and team members from different countries, religions, and socio-economic backgrounds.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Being aware of your students cultural background ensures that each student feels welcome, safe and included, and reduces the risk of problems rising from insensitivity or perceived lack of respect. There are several key areas of cultural awareness outlined below.</p>",
          },
          {
            title: "Cultural Awareness",
            isAccordion: true,
            content:
              "<p><strong>Diversity and Inclusion</strong></p><p>Language in Action fosters a fully inclusive summer programme with students from all over the world. Understanding the cultural differences within a student group contributes towards the learning experience of the students.</p><p><strong>Solving conflict</strong></p><p>Cultural differences can sometimes lead to misunderstandings or conflict. A culturally sensitive manager is better equipped to navigate these problems, and find a peaceful, positive resolution.</p><p><strong>Client and business relationships</strong></p><p>It is important to remember that the group leaders, those who most frequently provide direct feedback to global agents, are also from around the world. Sometimes you will need to manage situations with or for the group leaders in a way that respects their cultures and values, whilst also promoting Language in Action and the summer programme.</p><p><strong>Legal and Ethical considerations</strong></p><p>Discrimination based on a person's race or religious belief is against the law in the U.K. All Language in Action team members must ensure the protection of themselves and the company by making sure students, group leaders, clients and team members are all treated fairly, and with respect. Discrimination and bias based on cultural differences can lead to legal consequences and can damage an organisations reputation.</p>",
          },
          {
            title: "Important Notes",
            isAccordion: true,
            content:
              "<p><strong>NOTE:</strong> It is important to remember that although this document does not state facts about entire cultures or ethnicities, nor does it imply that any behaviour displayed is a result of one's cultural or ethnic background. Any given behaviour displayed by an individual may be the result of a wide number of factors, for example; reserved of quiet interaction may be the signs of a welfare concern pertaining to homesickness, illness or due to a lack of communication skills (language barrier). It is therefore important to treat each person you interact with as an individual. For each preconception you may have of an individual, you must always remember that they too will have preconceptions relating to your behaviour.</p><p><strong>NOTE:</strong> All team members must be reminded that Language in Action is not a platform for voicing their opinions on political or culturally sensitive topics, and all team members should refrain from criticising or enacting prejudice based on their own personal beliefs. All students must adhere to UK Law on discrimination whilst in the UK, but employees should not comment on the governance of client countries to group leaders or students.</p><p>Below there are detailed analyses of some of the major groups that book with Language in Action.</p><p>Remember: These are not the only groups with cultural differences, and your approach to all students, clients and guests must be respectful and mindful at all times.</p>",
          },
          {
            title: "Arabic Guests",
            isAccordion: true,
            content:
              "<p>Cultural differences between a British person and an Arabic person can manifest in various aspects of life, including communication styles, social norms, and personal values. It's important to note that cultural differences can be diverse and individual experiences may vary. Here are some potential cultural differences that a British person might encounter when interacting with an Arabic person.</p><p><strong>Communication Style:</strong> British communication is often considered more direct, while Arabic communication may be more indirect, relying on implicit or non-verbal cues. Being direct may be seen as impolite in some situations.</p><p><strong>Politeness:</strong> Arabic cultures may place a strong emphasis on politeness and formalities, with courteous language and extensive use of greetings.</p><p><strong>Social Customs:</strong> Arabic cultures often place a high value on hospitality, and hosts may go to great lengths to make guests feel comfortable and welcomed, this may also include the giving of gifts. For our gift policy, please see the company handbook.</p><p><strong>Time Perception:</strong> British culture tends to emphasize punctuality, while some Arabic cultures may have a more relaxed approach to time, with events starting later than scheduled.</p><p><strong>Non-Verbal Communication:</strong> Non-verbal communication cues, such as gestures and facial expressions, may have different meanings in British and Arabic cultures. Preferences for personal space may vary, with some Arabic cultures having a closer proximity during conversations compared to British cultural norms.</p><p><strong>Religious Observance:</strong> The most common religion in Arabic countries in Islam. Many Muslims may observe religious practices, and aspects of daily life, such as work schedules and dietary habits, may be influenced by religious beliefs. Of particular note is the need to pray at specific times throughout the day, and for gender-segregated prayer rooms.</p><p><strong>Dietary Requirements:</strong> Many Muslims follow a strict Halal diet, which refers to the manner in which the food is prepared – in particular, how animals are slaughtered before consumption. This also includes the prohibition of Haram foods, which include pork, alcohol, and the meat of carnivores.</p><p><strong>Gender Roles:</strong> In some Arabic cultures, there may be more noticeable gender segregation in certain social settings or places of education compared to Western norms.</p><p><strong>Modesty:</strong> Concepts of modesty in dress and behaviour may differ, with Arabic cultures often emphasizing modest attire for both men and women.</p><p><strong>Business Etiquette:</strong> Business negotiations may involve different styles, with Arabic cultures often valuing relationship-building and personal connections in addition to the formal aspects of a deal.</p><p>It's important to approach cultural differences with an open mind, curiosity, and a willingness to learn. Building cross-cultural understanding and adapting to diverse perspectives contribute to effective communication and positive relationships between individuals from different cultural backgrounds.</p>",
          },
          {
            title: "Chinese Guests",
            isAccordion: true,
            content:
              '<p>Cultural differences between a British person and a Chinese person can also manifest in various aspects of life. Again, it\'s crucial to remember that cultural diversity exists within each country, and individual experiences may vary. Here are some potential cultural differences that a British person might encounter when interacting with a Chinese person:</p><p><strong>Communication Style:</strong> Chinese communication may often be more indirect than the direct style commonly found in British communication. Chinese communication may involve more reliance on non-verbal cues, such as facial expressions and gestures.</p><p><strong>Social Customs:</strong> Chinese culture often places a strong emphasis on hierarchy and respect for elders or authority figures.</p><p><strong>Time Perception:</strong> While urban areas in China often follow strict punctuality, there may be more flexibility in some settings, and the importance of punctuality can vary. Chinese culture may have a longer-term perspective on relationships and planning.</p><p><strong>Non-Verbal Communication:</strong> Chinese people may have different interpretations of certain body language gestures, so awareness of these differences is essential.</p><p><strong>Relationships and Networking:</strong> Building relationships is crucial in Chinese culture, and personal connections often play a significant role in both social and business contexts.</p><p><strong>Formality:</strong> Initial interactions may involve a higher level of formality until a relationship is established.</p><p><strong>Face-saving:</strong> The concept of "face" is significant in Chinese culture, and individuals may go to lengths to avoid causing embarrassment or loss of face for themselves or others.</p><p>Approaching cross-cultural interactions with respect, and a willingness to understand and adapt helps build positive relationships and fosters effective communication between individuals from different cultural backgrounds.</p>',
          },
          {
            title: "Taiwanese Guests",
            isAccordion: true,
            content:
              '<p>The relationship between China and Taiwan is complex and rooted in historical and political factors. Mainland China views Taiwan as a part of its territory, while Taiwan operates as a separate entity with its own government, economy, and military. The United Kingdom follows a "One China" policy, recognizing the People\'s Republic of China (PRC) as the sole legal government of China, which includes Taiwan as part of its territory.</p><p><strong>Political and Historical Perspectives:</strong> Taiwanese people often identify themselves as Taiwanese, while people from mainland China primarily identify as Chinese. Taiwan has a democratic government, while China has a single-party Communist system. This can influence perspectives on governance and individual freedoms.</p><p><strong>Language:</strong> Both Taiwan and Mainland China primarily speak Mandarin, but there may be differences in accent, vocabulary, and expressions.</p>',
          },
          {
            title: "Italian Guests",
            isAccordion: true,
            content:
              "<p>Below are some potential cultural differences that a British person might encounter when interacting with an Italian person:</p><p><strong>Communication Style:</strong> Italians are known for their expressive communication style, often using gestures, facial expressions, and lively body language to convey emotions. Communication can be more direct compared to the indirect communication style often found in British culture.</p><p><strong>Social Customs:</strong> Italians generally enjoy socializing and may engage in more informal conversations, even in professional settings.</p><p><strong>Time Perception:</strong> Events might start later than scheduled, or arrival may be delayed, particularly in social settings, due to a more relaxed approach to time. There may be more flexibility in work hours.</p><p><strong>Non-Verbal Communication:</strong> In conversation, Italians may be more comfortable with close proximity, and physical touch is more common in greetings.</p><p><strong>Relationships and Networking:</strong> Personal connections and relationships are vital in Italian culture, both in social and business contexts. Building trust and rapport may take precedence before engaging in business matters.</p><p><strong>Open Emotion:</strong> Italians are generally comfortable expressing emotions openly, whether positive or negative. This direct approach is often in contrast to typical British norms that tend to be more reserved in their approach to situations.</p><p><strong>Formal Language:</strong> While Italian can be formal, informal forms of address are often used even in professional settings, especially when there is a sense of familiarity.</p><p>Cultural awareness and adaptability are key when interacting with individuals from different cultural backgrounds. Approaching these differences with an open mind and respect for diversity enhances effective communication and fosters positive relationships.</p>",
          },
        ],
      },
      {
        id: "5.4",
        title: "5.4 Down Time",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Time off, and all non-student facing time whilst on campus.</p>",
          },
          {
            title: "Why it is important",
            content:
              "<p>Both you and your team will sometimes work long, challenging and demanding days. Depending on scheduling requirements, managing down time is essential for the wellbeing of you and your team. It can reduce the risk of conflict, stress, absences, and on-shift mistakes.</p>",
          },
          {
            title: "Team Rota",
            isAccordion: true,
            content:
              "<p>Rotas are to be completed by the Coordinators for their respective teams. They are to be done at least 4 days in advance.</p>",
          },
          {
            title: "Social Events",
            isAccordion: true,
            content:
              "<p>Language in action look to reward team members for their hard work throughout the summer programme. This may include social events outside of work hours, which are your responsibility to organise. These social events (e.g. karaoke, family dinner etc.) are the perfect opportunity for everyone to let off a bit of steam, get things off their chest, enjoy their time in the summer programme and relax.</p><p>As a manager you should pay attention to conversations without turning it into a meeting, and without criticising the programme or the clients. It is a good time to pick up on any low-lying concerns or problems that you might want to address during work hours.</p><p><strong>NOTE:</strong> Being part of the team and showing the team that you can have fun, manage effectively, and be considerate of their experience, is a key trait of a good manager.</p><p>Once each turn, you will need to organise a welcome social on campus for the full team and all group leaders. Your programme manager will speak to you about this in more detail before the start of the programme. You should invite all team members, group leaders and senior management team.</p><p><strong>NOTE:</strong> at all times, you must ensure that students are supervised, and curfew is being monitored by either group leaders or campus leaders. There will be more than one social event, so you will have to rotate who is not at the social event.</p><p><strong>Alcohol and Drug Use</strong></p><p>Smoking tobacco and vaping are not permitted within school or residential grounds and should only be done out of sight of students and clients. You should designate a smoking area for your team.</p><p><strong>NOTE:</strong> Drug use is strictly forbidden at any time during employment with Language in Action, this includes days off. The possession, use or distribution of drugs for non-medical purposes on our premises is strictly forbidden. If you have any concerns about a team member, speak to your Area Manager immediately.</p><p><strong>NOTE:</strong> Alcohol is permitted at certain business and social events, and team members are not prohibited from consuming alcohol on their days off. However, all employees must remember that for the entirety of their employment, whether on shift or not, they are representatives of the company, and must behave in such a way that does not negatively affect the company, its reputation, or its stakeholders.</p><p>Alcohol consumption is permitted on the following basis:</p><ul><li>The employee is not on shift</li><li>The employee is not due to be on shift at any time later that day</li><li>It is consumed in moderation.</li><li>It is not consumed within 12 hours of starting a shift</li><li>It is not consumed in view of students, group leaders and clients</li><li>It is not consumed within the school campus grounds</li></ul>",
          },
        ],
      },
      {
        id: "5.5",
        title: "5.5 Section 5.0 Complete",
        sections: [
          {
            title: "That's the end of the Management section!",
            content:
              '<p>If there are any sections you have not yet read, click below to return to the contents page and carry on.</p><p>If you have worked through in order, Section 5.0 is the last section, and you have completed the first steps of your Language in Action Training!</p><p>But before you go, we just want to check how much you have learnt, so click the Take Quiz button at the bottom to test your knowledge. And don\'t worry, you can always come back here to check and correct your answers.</p><p>Your next stop is online training with your Programme Manager. Here you will get the opportunity to meet the rest of the management team, your centre management partner, your Programme Managers and members of Head Office.</p><p>You will have the opportunity to ask any questions you have about what you have read, as well as learn more about the running of a centre, and practice in some live scenario training.</p><p>All this before you arrive at your centre in the summer, at which point you will have a full day induction and training on your specific centre and prepare your school for Day 0!</p><p>Thank you for taking the time to read through this Management Training Guide. This preparation is an important part of your understanding of the role and the business. Remember, if you have any questions or there is anything you are unsure of, your Programme Manager is always available to help.</p><p>See you in the summer!</p><p><a href="https://forms.gle/KCb6GwTBcXUzSb5BA" style="display: inline-block; background-color: var(--color-primary); color: white; padding: 12px 24px; border-radius: var(--radius-full); text-decoration: none; font-weight: 600; font-family: var(--font-heading); margin-top: 20px; margin-bottom: 20px;">Take Quiz</a></p>',
          },
        ],
      },
    ],
  },
];

export const staff = [
  {
    name: "Adam Ennis",
    role: "Head of Juniors",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/Malvern-International-head-language-i-action-adam-ennis.jpg",
    bio: "Adam holds a BA in Geography and has over 12 years of experience within global education including 9 years in China. Adam also has experience working as Operations Director and Business Development Manager within the education sector.",
  },
  {
    name: "Daniele Pluchino",
    role: "Deputy Head of Juniors / H&S Lead",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/Daniele-Pluchino-deputy-head-Juniors.jpg",
    bio: "Daniele started his career in tourism and summer schools while at University. He holds a degree in Art History from the University of Rome and he has previously worked as a summer school manager. He is currently responsible for operations and students' welfare, while being an important support for the Management Team. Health & Safety Lead, Designated Safeguarding Lead",
  },
  {
    name: "Ariosto Ponterio",
    role: "Process Dev & Marketing Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-process-dev-marketing-manager-ariosto-ponterio.jpg",
    bio: "Ariosto gained experience in the industry while at University, working for LiA summer camps since 2018. After acquiring expertise abroad in Management Engineering as an exchange student at FSU University (USA), he graduated and joined the Management Team to support development and improvement of internal processes and administrative operations. Advanced Safeguarding Level 2 Trained",
  },
  {
    name: "Beatrice Bellina",
    role: "Senior Operations Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-operation-and-hr-manager-beatrice-bellina.jpg",
    bio: "Beatrice holds a Master’s degree in English and Spanish and has had a strong connection with UK summer schools since very young. With strong experience in working as a summer school manager, she is now responsible for coordinating all summer centres and managing LiA staff, as well as being involved in summer operations with the Management Team.",
  },
  {
    name: "Don Troeger",
    role: "Academic Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-academic-manager-don-troeger.jpg",
    bio: "Don has worked in Education Management for the past 15 years in both England and China. He holds a degree in Secondary Education in German and a Diploma for English language teaching from Cambridge University. He has dual citizenship from the U.S. and the U.K. He is now responsible for the summer academic program in London, supporting the teaching teams and providing excellent learning experiences for students.",
  },
  {
    name: "Louis Gray",
    role: "Academic Programme Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-academic-programme-manager-louis-gray.jpg",
    bio: "Lou acquired a maths degree at university before immediately moving into English language teaching. He worked as an ESL teacher in Cambodia before moving into academic management in Spain. Lou began at Malvern International as a teacher before progressing to Senior teacher, and then joining Language in Action management team in 2023. He is now responsible for supporting the teachers as well as providing academic help for the students.",
  },
  {
    name: "George Bannister",
    role: "Operations Programme Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-academic-operation-programme-manager-george-bannister.jpg",
    bio: "With a degree in Business Management, George gained more than a decade of management experience before moving into the education sector. He joined Malvern International in 2017 first as a teacher, then into educational management. His expertise include training and staff development, as well as logistical planning. Over the summer George will oversee several centres across the country. Deputy Safeguarding Lead - Specialist Safeguarding Level 3 Trained",
  },
  {
    name: "Oriana D'Ortona",
    role: "Operations Programme Manager",
    image:
      "https://languageinactionltd.co.uk/wp-content/uploads/sites/9/2025/08/lia-operations-programme-manager-oriana-Dortona.jpg",
    bio: "Oriana studied Linguistic and Cultural Mediation with a focus on international relationships, and while studying secured her first role as a Logistics Manager for a talent management company. She moved into the education sector in 2018, starting with us at Language in Action as an Activity Leader. She has joined us every summer since, and has worked her way through all the roles before being appointed Area Manager. Over the summer Oriana will oversee several centres across London. Deputy Safeguarding Lead - Specialist Safeguarding Level 3 Trained",
  },
];

export const glossaryTerms = [
  // The People
  { term: "LiA", definition: "Language in Action", category: "The People" },
  {
    term: "Head of Juniors",
    definition: "The head of the Language in Action Programme",
    category: "The People",
  },
  {
    term: "Deputy Head of Juniors",
    definition: "Deputy head of the Language in Action Programme",
    category: "The People",
  },
  {
    term: "Operations Manager",
    definition: "Head of all summer Operations",
    category: "The People",
  },
  {
    term: "HR Manager",
    definition: "All Human Resources and Recruitment",
    category: "The People",
  },
  {
    term: "Process Development and Marketing Manager",
    definition: "Logistics, marketing, publications, posters and more",
    category: "The People",
  },
  {
    term: "Head of Academics, Juniors",
    definition: "Head of the Academic division of Language in Action",
    category: "The People",
  },
  {
    term: "Academic Programme Manager",
    definition: "Academic division manager",
    category: "The People",
  },
  {
    term: "Programme Manager",
    definition: "Responsible for several centres and their teams",
    category: "The People",
  },
  {
    term: "DSL",
    definition: "Designated Safeguarding Lead",
    category: "The People",
  },
  {
    term: "Deputy SL",
    definition: "Deputy Safeguarding Lead",
    category: "The People",
  },
  { term: "DoS", definition: "Director of Studies", category: "The People" },
  { term: "ST", definition: "Senior Teacher", category: "The People" },
  { term: "CM", definition: "Centre Manager", category: "The People" },
  { term: "CC", definition: "Campus Coordinator", category: "The People" },
  { term: "CC", definition: "Tour Coordinator", category: "The People" },
  {
    term: "WM/WO",
    definition: "Welfare Manager/Officer",
    category: "The People",
  },
  { term: "CL", definition: "Campus Leader", category: "The People" },
  { term: "TG", definition: "Tour Guide", category: "The People" },
  { term: "HO", definition: "Head Office", category: "The People" },
  { term: "SGL", definition: "Senior Group Leader", category: "The People" },
  { term: "GL", definition: "Group Leader", category: "The People" },
  {
    term: "Agent",
    definition: "Sales Representative working for or with Language in Action",
    category: "The People",
  },
  {
    term: "Agency",
    definition:
      "The group's booking company or group leader head office (international)",
    category: "The People",
  },

  // The Places
  {
    term: "Middlesex Summer Centre",
    definition: "Middlesex University",
    category: "The Places",
  },
  {
    term: "Colindale Summer Centre",
    definition: "Barnet & Southgate College",
    category: "The Places",
  },
  {
    term: "Wembley Summer Centre",
    definition: "Lycée Français Charles de Gaulle de Londres",
    category: "The Places",
  },
  {
    term: "Bloomsbury Summer Centre",
    definition: "Bloomsbury / University of London (UoL)",
    category: "The Places",
  },
  {
    term: "Dockland Summer Centre",
    definition: "University of East London, Docklands Campus",
    category: "The Places",
  },
  {
    term: "Harrow Summer Centre",
    definition: "University of Westminster, Harrow Campus",
    category: "The Places",
  },
  {
    term: "Manchester Centre",
    definition: "University of Manchester, Dalton-Ellis Hall",
    category: "The Places",
  },
  {
    term: "Liverpool Summer Centre",
    definition: "Liverpool Hope University, Hope Park Campus",
    category: "The Places",
  },
  {
    term: "Canterbury Summer Centre",
    definition: "Canterbury Christchurch University, Canterbury Campus",
    category: "The Places",
  },

  // Residences
  {
    term: "Rusholme Place",
    definition: "Manchester",
    category: "Residences",
  },
  {
    term: "Canterbury Court",
    definition: "Manchester",
    category: "Residences",
  },
  {
    term: "Platt & Writtle Hall",
    definition: "Colindale",
    category: "Residences",
  },
  {
    term: "Garden Hall",
    definition: "Bloomsbury / UoL",
    category: "Residences",
  },
  {
    term: "Parry Hall",
    definition: "Bloomsbury / UoL",
    category: "Residences",
  },
  {
    term: "Usher Hall",
    definition: "Middlesex",
    category: "Residences",
  },
  {
    term: "Unite Student, Olympic Way",
    definition: "Wembley",
    category: "Residences",
  },
  {
    term: "Newman & Wesley Halls",
    definition: "Liverpool",
    category: "Residences",
  },
  {
    term: "St George's Centre Residence",
    definition: "Canterbury",
    category: "Residences",
  },
  {
    term: "Malvern International",
    definition: "The parent company",
    category: "Residences",
  },

  // Suppliers
  {
    term: "Southern Housing",
    definition: "Student residence company",
    category: "Suppliers",
  },
  {
    term: "Unite Student",
    definition: "Residence company",
    category: "Suppliers",
  },
  {
    term: "Lost in London / Cesar (contact)",
    definition:
      "3rd party company we source our excursion tickets through (Also Cesar)",
    category: "Suppliers",
  },
  {
    term: "Fillins / Martin (contact)",
    definition: "3rd party company for Liverpool and Manchester Packed Meals",
    category: "Suppliers",
  },
  {
    term: "FeedEasy (Contact)",
    definition:
      "3rd party company for Bloomsbury, Dockland, Wembley and Colindale Centres' packed meals",
    category: "Suppliers",
  },
  {
    term: "TFL",
    definition: "Transport for London - London Underground",
    category: "Suppliers",
  },
  {
    term: "TFGM",
    definition: "Transport for Greater Manchester - buses and trams",
    category: "Suppliers",
  },
  {
    term: "STAGECOACH",
    definition: "Bus company for Canterbury and Liverpool",
    category: "Suppliers",
  },
  {
    term: "INPS",
    definition: "The Italian Government scholarship programme for students",
    category: "Suppliers",
  },

  // Operational
  {
    term: "Turn",
    definition: "Two Week study vacation period (most students do this)",
    category: "Operational",
  },
  {
    term: "Day 0 / Turnover",
    definition: "Arrivals and Departures day (every two weeks)",
    category: "Operational",
  },
  {
    term: "Day 1",
    definition: "Student testing and Induction Day",
    category: "Operational",
  },
  {
    term: "Transfers",
    definition:
      "The process of student airport arrivals, collection and departure",
    category: "Operational",
  },
  {
    term: "Allocation",
    definition: "The list of bedrooms allocated to students",
    category: "Operational",
  },
  {
    term: "Excursion",
    definition: "Activities/trip off campus",
    category: "Operational",
  },
  { term: "Rota", definition: "The working schedule", category: "Operational" },
  {
    term: "Timetable",
    definition: "The group's itinerary for the summer programme",
    category: "Operational",
  },
  {
    term: "Lanyard",
    definition: "Branded badge holder worn around the neck",
    category: "Operational",
  },
];

import type { UserGroup } from "./contexts/UserGroupContext";

export const modulesB: Module[] = [
  {
    id: "1.0",
    title: "1.0 A Typical Day",
    description: "Your daily schedule and routines.",
    color: "var(--color-accent-blue)",
    icon: Clock,
    subModules: [
      {
        id: "1.1",
        title: "1.1 A Typical Day",
        sections: [
          {
            title: "What does a typical Campus Leader day look like?",
            content:
              "<p>Ultimately, campus leaders are the front line of Language in Action. You are the ones who will spend the most time with the students and the group leaders when they are on campus.</p><p>As a campus leader you will plan, organise and run a whole host of evening activities, assist in some weekend tours out of the city, and spend your days engaging with the students on campus. You will supervise all mealtimes, ensure curfews are kept, keep in touch with group leaders and management, be the Coordinator's ears on the ground, and much more.</p><p>Start by watching the below video to learn all about what a typical day in the life of a Campus Leader looks likes. When you have finished the video, continue through this page and the rest of your training.</p>",
          },
          {
            title: "Video: A Day in the Life",
            content:
              '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;"><iframe src="https://www.youtube.com/embed/LAtrCIdNego" title="A Day in the Life of a Campus Leader" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
          },
          {
            title: "0800 - Starting your day",
            isAccordion: true,
            content:
              "<p>At the start of each day, you must check in with the manager on shift, so they know you are there, and to find out any last-minute changes to your day. This is the very first thing you do.</p><p>You may also be scheduled to accept a delivery of packed meals, this could is typically around 7am.</p>",
          },
          {
            title: "0800 - Breakfast",
            isAccordion: true,
            content:
              "<p>If you are scheduled for breakfast duty, you must supervise the canteen area whilst the students are eating. This includes monitoring the queue to make sure nobody pushes in, making sure students clear their tables properly, and generally behave well.</p><p>The canteen staff should never have to deal with a student, you should be there first.</p><p>At breakfast service, you should sit with your team to discuss the day and talk about how the events the night before went.</p><p>If the students are away for the full day, you will also need to ensure Packed Lunches are ready for students to collect, and you must ensure that all allergy specific meal packs are handed to the correct students. The group leaders can assist you with this process.</p>",
          },
          {
            title: "0900 - Free time or Office Assistance",
            isAccordion: true,
            content:
              "<p>Typically, when the students are in class, or out with the Tour Guides, you will have free time through the day. On occasion, your Coordinator may ask for support in the office.</p>",
          },
          {
            title: "1230 - Lunch",
            isAccordion: true,
            content:
              "<p>You will supervise the canteen area whilst the students are eating. This includes monitoring the queue to make sure nobody pushes in, making sure students clear their tables properly, and generally behave well.</p><p>If the students are not set to return for dinner, you will also need to ensure Packed Lunches are ready for students to collect, and you must ensure that all allergy specific meal packs are handed to the correct students. The group leaders can assist you with this process.</p><p>You will need to sit with and engage with the students for the duration of the food service, encouraging them to speak English, and building a rapport with students and group leaders.</p>",
          },
          {
            title: "1400 - Free Time or Office Assistance",
            isAccordion: true,
            content:
              "<p>The afternoon is usually the same as the morning activities. See above.</p><p>If you are scheduled to help in the office, your coordinator will assign you some tasks. These may include stamping travel tickets for the upcoming days, organising certificates, lanyards or students IDs for the next turn, or any number of other tasks assigned by your coordinator. If you are given a task by your coordinator, you must report back to them when the task is finished, and of course if you have any problems or questions, just ask for help.</p><p>Your management team will always be available to help you if you are unsure.</p>",
          },
          {
            title: "1600 - Activity Prep",
            isAccordion: true,
            content:
              "<ul><li>At around 4pm you will start your evening duties. First up is the preparation for that night's activity.</li><li>You may have to buy supplies or prizes, or set up equipment and resources based on the type of the activity. Your Campus Coordinator will be on hand to help and to let you know what exactly is needed.</li><li>The activity needs to be fully prepared before dinner service starts.</li><li>Depending on the location of your centre, and the day, you may need to leave around now to meet your evening students in the city for their By Night excursion which are led by the campus team.</li></ul>",
          },
          {
            title: "1750 - Dinner",
            isAccordion: true,
            content:
              "<p>You will supervise the canteen area whilst the students are eating. This includes monitoring the queue to make sure nobody pushes in, making sure students clear their tables properly, and generally behave well.</p><p>If the students are due to stay in the city for a By Night excursion, you must liaise with the Tour Guide and make your way into the city to take over the supervisory role.</p><p>You will need to sit with and engage with the students for the duration of the food service, encouraging them to speak English, and building a rapport with students and group leaders.</p>",
          },
          {
            title: "1900 - Evening Activities",
            isAccordion: true,
            content:
              "<p>Most of the activities are delivered on campus, and require several campus leaders to run. Your full participation is required on all activities, and it is important that you put in maximum effort to help the students engage with the activities.</p><p>Evening activities may include excursion into the city known as London By Night (LBN) excursions, as well as organising party nights, karaoke nights, games and activities nights, talent shows and more.</p><p>We encourage our Campus Leaders to be proactive and as creative as they like when it comes to some of the evening activities, so if you have any games or fun idea that you think will work, please speak to your Campus Coordinator.</p><p>Supervision and engagement extends from dinner service through to curfew, regardless of how long the activity lasts. You should always be making an effort to socialise with the students or be present in games rooms/social rooms.</p><p>Your primary goal for the evening activities session is to make sure the students have as much fun as possible.</p>",
          },
          {
            title: "2230 - Curfew",
            isAccordion: true,
            content:
              "<p>The final role of a campus leader is to ensure that students are sent to their rooms before curfew. The responsibility throughout the night lies with the group leaders, but you should assist in ensuring the process is complete before 11pm.</p><p>Curfew is at 10:30pm Sunday–Thursday and 11:00pm on Friday and Saturday nights.</p>",
          },
          {
            title: "Additional Notes",
            isAccordion: true,
            content:
              "<p><strong>NOTE:</strong> You will typically work 6 days per week, but will often have large parts of the day free, when students are in class or on tours, to relax however you please.</p><p><strong>NOTE:</strong> There will be more tasks on specific days throughout the summer programme including room checks on turnover days, and transfers from local airports. Those are covered in other sections in the training.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "2.0",
    title: "2.0 Activity Planning",
    description: "Games, excursions, events, and student engagement.",
    color: "var(--color-accent-peach)",
    icon: Map,
    subModules: [
      {
        id: "2.1",
        title: "2.1 Activity Planning",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>Everything you need to know about the activities and excursions you will lead. This includes all the games, challenges, and on-campus events, as well as routes and excursion plans, problem solving, and expectations.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>The activities and excursions make up a major part of the student's time on campus and can make the difference between an ok summer experience and an unforgettable one. Student experience and student safety are your top priorities, and both play an important role in delivering the wide range of activities and excursions we offer.</p>",
          },
          {
            title: "Activity Planning",
            isAccordion: true,
            content:
              "<p>Your primary role is the delivery of the evening activities programme. At Language in Action, we offer a variety of social activities that give students a chance to bond and enjoy themselves. Some examples are: Welcome Night, Disco Night, Karaoke night, Masquerade Ball, Trash fashion show, and Arts and Crafts.</p><p>Each activity will require varying levels of planning. You are encouraged to come up with ideas for those evenings (particularly games nights and party nights), and to propose fun activities and challenges that focus on socialising.</p><p>Should you need any materials or equipment to deliver the social activity, speak to your campus coordinator. The university or residence team may also be able to provide equipment, and your coordinator will be able to provide a budget to buy resources to help you deliver the activity.</p><p>It is important to remember that, in many centres, we won't be the only language school present on site, so there may be other groups of students with whom common areas are shared. It is fundamental to establish a professional and friendly relationship with representatives of other groups so to ensure an easy and effortless collaboration for both parts.</p>",
          },
          {
            title: "Excursion Planning",
            isAccordion: true,
            content:
              '<p>The off-campus evening excursions are called By Night excursions. We take the students to fun or interesting places to experience the city in a different way, and these could include shopping trips, city walks or night club experiences.</p><p>For campus leaders, there is not a big amount of planning to do before a By Night excursion. Each one will be planned out by your coordinator, with tickets booked (digital or paper), set arrival and departure times, and an itinerary already mapped out on an Excursion Sheet. These will be given to you in advance via WhatsApp, as well as discussed in the weekly team meetings, so every question or doubt can be addressed. It is important that you familiarise yourself with the route you will take on each excursion, and all other available plans, the day before the excursion takes place, ensuring that you have all the information you need to deliver the programme well.</p><p>As a campus leader you may also be required to lead groups on full day excursions over the weekend. These excursions typically run from 9:00am to 5:30pm and see the students taking full day walking tours of their host city or other nearby city. Wherever possible, the tours you are asked to lead will include a dedicated external tour guide, so your main role will be supervision. On the odd occasion you are asked to deliver a tour yourself, you will get all the documents and help you need. All information is provided on an Excursion Sheet.</p><p>You can see a sample Excursion Sheet <a href="https://drive.google.com/file/d/1fVX50L3g64TgFmvzS9bIZ9yuVyWzgHbQ/view" target="_blank" rel="noopener noreferrer">here</a>.</p><p>Your main role is to ensure the smooth-running of the activity and to make sure the students have a fun and memorable experience. For many of them, this will be their first time in a foreign country or even away from home, so you should always represent a support system, especially during long tiring days, or days when something doesn\'t quite go right (e.g. delays, cancellations, bad weather). You should always maintain a positive, happy approach, and establish a friendly, welcoming relationship based on trust.</p><p>You must remain in contact with your manager on the WhatsApp group chat throughout the excursion, communicating any problems that may occur, as well as their successful departure and return. Knowing which groups are in the school, and which groups are on excursions is an important part of fire safety.</p><p>Messages should be short and concise, e.g. "Travelling Fox on way to Leicester Square", "Travelling Fox are back", and should not turn into a conversation about how fun the trip was. It is important to keep the management group as clear as possible so that information can be passed quickly and easily in an emergency.</p><p><em>*Travelling Fox is the name of one of the groups you may work with.</em></p><p>For any problems regarding an Excursion Sheet or an activity, you should always refer to your campus coordinator for more details or clarification.</p>',
          },
          {
            title: "Transportation",
            isAccordion: true,
            content:
              "<p>For By Night excursions you will need travel cards.</p><p>For London centres, Underground tickets are pre-purchased. These are physical paper tickets and require a stamped date on each ticket before using.</p><p><strong>NOTE:</strong> All travelcards should be stamped by tour guides in the morning, you will need to get them from them at dinner time. Tour and Campus coordinator will be available to assist on the day.</p><p>If you are asked to stamp new tickets, please be aware that Language in Action pay per stamped ticket, and as such, any errors in stamping, or lost tickets can cause unnecessary costs for the company. It is important to ensure that you understand the requirement to be accurate and precise with the stamps.</p><p>For Manchester, Liverpool and Canterbury centres, students have weekly bus passes. Canterbury Centre doesn't have 'By Night' activities.</p>",
          },
          {
            title: "On the day problems",
            isAccordion: true,
            content:
              '<p>Should there be a problem during an excursion, it is your responsibility to immediately call your coordinator to make them aware of the problem, and so they can assess the situation and take the appropriate action.</p><p>Each problem will be assessed by management, however there are some key things to remember:</p><p><strong>The safety and welfare of the students is paramount.</strong> If you feel there is an immediate risk to this, you must act promptly. Situations that require swift action could be: losing one or more students, any type of injury, and external dangers such as ambiguous or threatening strangers approaching the group. This might mean moving the group to a safe place, arranging food or shelter, activating the Emergency Procedure protocol, calling the police, or asking additional team members to be sent out to assist. Always call your coordinator if you feel students\' safety or welfare are at risk.</p><p><strong>NOTE:</strong> See our <a href="/contents/7.0">Emergency Procedure</a> and Risk Assessment documentation for details about potential dangers and protocols.</p><p><strong>The student experience should not suffer.</strong> Problems with travel, bookings, activities, or problems within the group can all have a negative effect on the student experience. If the activity cannot go ahead for any reason, arrangements will be made for the students to do something else. Contact your coordinator, as some activities can easily be moved around, whilst others cannot be rearranged, and other options may need to be assessed.</p><p><strong>Travelling across the city</strong> can often cause problems due to slow or overcrowded public transport, cancellations, or strikes. Delays are often unavoidable; however, they are usually not cause for concern. If any of these problems do become cause for concern, you may need to contact your manager to make them aware of it. For example, if students are delayed returning to the school for mealtime or if an outbound journey is delayed and puts the group at risk of losing their booking.</p><p>You should also reiterate possible delays and contingencies to group leaders, reassuring them that a solution will be found, and politely remind them that delays and disruptions, especially during busy summers in central London, are things out of our control.</p>',
          },
          {
            title: "Additional Notes",
            isAccordion: true,
            content:
              "<p><strong>NOTE:</strong> There will be more tasks on specific days throughout the summer programme including room checks on turnover days, and transfers from local airports. Those are covered in other sections in the training.</p>",
          },
        ],
      },
      {
        id: "2.2",
        title: "2.2 Activities in Detail",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>A more in-depth look at the activities you will run each evening.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>The activities and excursions make up a major part of the student's time on campus and can make the difference between an ok summer experience and an unforgettable one. Student experience and student safety are your top priorities, and both play an important role in delivering the wide range of activities and excursions we offer.</p>",
          },
          {
            title: "Welcome Party",
            isAccordion: true,
            content:
              '<p>The Welcome party happens on Day 1, and is for all students on campus. The aim of the night is to encourage students to meet new people and make new friends. As the first activity of their stay, it is important that the event runs with as much energy, enthusiasm and fun as possible.</p><p>You should start the night with some group activities such as Human Bingo or Simon Says. These are easy, quick and fun icebreakers that help relax the students and allow them to meet other students.</p><p><strong>Human Bingo:</strong> Students must form groups in which every criteria is met. Display a list of criteria on a large screen for all to see — the criteria could include things like "someone who has a pet cat" or "someone who plays a musical instrument". You should always include "someone of a different nationality" in the game. The aim is for students to find someone who fits the criteria, then form a group. Together they then try to find someone else to join their group, fitting a different criteria.</p><p><strong>Simon Says:</strong> Using a microphone, call out an instruction such as "Simon says hands on head" and act out the action. Follow with another "Simon says" instruction. The third time, give the instruction without "Simon says" and explain that anyone who followed that instruction will lose the game from now on. As the game progresses, your instructions should become quicker, and occasionally the verbal instructions should not match your actions, to try and catch people out. Continue the game until there is only a small group left.</p><p>After the games, you should give a short speech welcoming the students to the centre before playing music and allowing the students to mingle freely.</p><p>You should prepare soft drinks and snacks for the evening, and depending on your centre, the welcome party will either take place on campus or at a hire venue. Either way, the evening will run the same.</p>',
          },
          {
            title: "Movie Night",
            isAccordion: true,
            content:
              "<p>The movie night will either take place in a lecture theatre or classroom depending on the centre.</p><p>When it comes to movie selection you need to be aware of the religious and cultural attitudes of the groups in your centre, and pick a film that will be suitable for all. All films must be at most 12A rated, with no nudity or sexually revealing clothing or innuendo. If you have two movie rooms running, a good option is to screen something like a Marvel film in one, and a Disney Pixar film in another, for example.</p><p>You'll also need to prepare popcorn (if the venue allows it). Don't forget that you'll have to clean up after the movie too.</p>",
          },
          {
            title: "Trash Fashion Show",
            isAccordion: true,
            content:
              "<p>This event is best run in an area with tables and chairs, something like a canteen or classroom.</p><p>Each group of students will be given a collection of items including bin bags, paper plates, tape etc and will have some time to design and make their own outfit. You'll need some speakers to play music during this time.</p><p>The students will then nominate one person from their group to take part in the catwalk fashion show at the end of the session. You'll need energetic music, and where possible, lights on the catwalk or stage. You should also designate one of the Campus Leaders working to be the master of ceremonies and commentate over the microphone as the fashion show takes place.</p>",
          },
          {
            title: "Arts & Crafts Night",
            isAccordion: true,
            content:
              "<p>A relaxing night held in the classrooms or canteen of the campus. Students will have access to a range of arts and craft supplies and will spend the evening creating a model based on a topic, for example London Tourist Attractions.</p>",
          },
          {
            title: "Quiz & Bingo",
            isAccordion: true,
            content:
              "<p>The Quiz will be provided for you, but you'll need to take the role of quiz master for the night. Students will be grouped into teams, and answers should be checked throughout the night with prizes and incentives to keep energy levels high.</p><p>For both the quiz and bingo you'll need to prepare in advance by printing the relevant answer sheets/bingo cards, and organise the prizes, speakers and microphones.</p>",
          },
          {
            title: "Sports",
            isAccordion: true,
            content:
              "<p>Typically this will be a 5-aside quick fire tournament for which the Campus Leaders will referee the games and organise the matches.</p><p>You will need to make sure you have a first aider on duty, and that safety rules are clearly communicated to all students before the games play. You'll find these in the activity manual at your centre.</p>",
          },
          {
            title: "Games Night",
            isAccordion: true,
            content:
              "<p>For this activity think Squid Games meets Taskmaster! We have developed a selection of games and activities that can be played with large numbers of students, but in the largest centres you might have to run several of the same game simultaneously. Each game should last between 20 and 30 minutes, after which you can award prizes or points to the winning teams.</p><p>You'll have to carefully read the instructions and setup notes in the activities manual before you attempt to run an evening games night, as it is vital that you understand everything before you try to explain it to the students.</p><p>You should nominate one Campus Leader to be in charge of running the entire night, and the others should support by running each individual game.</p>",
          },
          {
            title: "Karaoke",
            isAccordion: true,
            content:
              "<p>We'll provide the speakers and microphones, all you need to do is encourage the students to sign up with a song of their choice!</p><p>You should encourage the students to pick English songs, as they are here to practice English, however some will only want to sing songs from their country, which is also ok.</p><p>You should be ready and willing to join student groups or even perform as a team of Campus Leaders!</p>",
          },
          {
            title: "Masquerade Ball",
            isAccordion: true,
            content:
              "<p>At the end of their stay, students enjoy a Masquerade Ball filled with music, dancing, and colourful masks. The event gives everyone a chance to celebrate friendships, make happy memories, and have fun together. Students may dress up, take part in fun activities, and celebrate with laughter and joy as they end their summer school experience. This will also be a time to say goodbye to all the students and group leaders you have spent the last two weeks with.</p><p>Students will make their masks during Arts and Crafts night.</p><p>You'll have control of the music via either a phone or laptop, just don't give direct access to the students!</p>",
          },
          {
            title: "General Information",
            isAccordion: true,
            content:
              "<p>The details about each night, including rules, set-up procedures and instructions, are available on StaffDrive. Your Campus Coordinator will have access to it and be able to help whenever you need it.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "3.0",
    title: "3.0 The First Three Days",
    description: "Arrival, orientation, and getting started.",
    color: "var(--color-accent-purple)",
    icon: Calendar,
    subModules: [
      {
        id: "3.1",
        title: "3.1 The First Three Days",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Day Minus One is the day before the centre opens, and your first day on campus.</p><p>Day Zero, or Turnover Day, is the day all the students leave and are replaced that evening by an entirely new group.</p><p>Day One includes student testing and placement, student inductions, group leader meetings and the Welcome Party.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Each group of students typically studies with us for a two-week period. At the end of their stay, they check out in the morning (confirm checkout times with residential manager), and the rooms get cleaned and prepared for the new arrivals that evening. With some centres of almost 500 students, Turnover Days can be a monumental task that require exceptional planning and orchestration, and a full commitment from the entire team.</p>",
          },
          {
            title: "Video: The First Three Days",
            content:
              '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;"><iframe src="https://www.youtube.com/embed/0olX-WHcaXw" title="The First Three Days" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><p style="margin-top:1rem;">As a Campus Leader you will be responsible for essential parts of turnover days logistics. Primarily the Campus team will cover every aspect of the students arrival on campus, however you may be asked to support the Tour Guide team and pick up a student group from an airport.</p>',
          },
          {
            title: "Day Zero - The Student Journey",
            isAccordion: true,
            content:
              "<p>As you saw in the video, Campus Leaders will be ready and waiting to greet the students as their coach arrives at the centre. Check-in is only available after 4pm, so you should have a waiting area, social space or games prepared for early arriving groups. The expected process for all arriving groups is as follows:</p><p><strong>Stage 1:</strong> Students greeted at coach drop-off point</p><p><strong>Stage 2:</strong> Students escorted to a luggage storage area</p><p><strong>Stage 3:</strong> Students are shown the nearest toilets, and given 10 minutes to rest in the waiting area</p><p><strong>Stage 4:</strong> Students are given a guided tour of the campus</p><p><strong>Stage 5:</strong> Students are allocated their room keys and ID badges, and given a short briefing on key usage and basic rules</p><p><strong>Stage 5:</strong> Students collect their packed meals (from 6pm onwards*) and luggage</p><p><strong>Stage 6:</strong> Students get access to their rooms and begin their free evening time</p><p><em>*Packed meals are available from 6pm, so students who arrive earlier will check-in to their rooms first, then collect meals later.</em></p>",
          },
          {
            title: "Day Zero - On-campus Tasks",
            isAccordion: true,
            content:
              "<p>Throughout the day, your Campus Coordinator will assign you tasks from the below list. It is important to remember that Day Zero is the students' and group leaders' first impression of your centre. You must ensure that your tasks are completed to a high standard, and that you are presentable, in uniform, and energetic and enthusiastic throughout the day.</p><p>Keep in regular contact with your Campus Coordinator, and should you ever find yourself without a task, or you finish a task early, report straight back to your coordinator to see if there is anything you can do to help.</p><p>The task list can vary by centre, but will typically include the following:</p><p><strong>Room checks:</strong> These must be completed before students are given access to their rooms. You'll be given a checklist to work through for each room to check things like cleanliness and maintenance. Report any problems to your coordinator.</p><p><strong>ID &amp; Lanyard preparation:</strong> You'll need to print, sort and create the student ID badges according to their arrival times. Group Leader ID badges should be separated alongside the students' ID, and all get attached to a lanyard. You'll work on this stage and the next stage together.</p><p><strong>Key allocation:</strong> Keys for the residence will need organising after the previous group's departure, then assigned to each student ID. Best practice is to tape the lanyard/ID badge to the room key envelope. Depending on the centre, you'll also need to ensure Wi-Fi network codes are provided with the keys.</p><p><strong>Check-in desk:</strong> Keys and lanyards are then moved to the check-in desk. Working here you will orchestrate how and when the students check-in, liaise with the group leaders on timings, and hand out key allocations when the time is right. You'll also give a quick set of instructions for key usage, rules, fire safety etc.</p><p><strong>Meet and Greet:</strong> You'll get advanced warning of their arrival, so you don't need to stand on the street all day, but you will need to be ready and waiting when the coach pulls up. The students will have been travelling all day, so big smiles, friendly faces and a helpful welcoming attitude is essential.</p><p><strong>Campus Tour:</strong> This will vary by centre, but you should provide an orientation tour of the campus for the students and group leaders. Make sure the students have stored their luggage, then show them all the key areas of the campus — the welfare office, canteen, classrooms, and any other important areas of the campus.</p><p><strong>Student room support:</strong> After the students get given their keys and packed meals they will need to be escorted to the residence. You'll likely need to spend some time at the residence ensuring all the students are in their rooms. This is the time you'll find out if there are any problems such as faulty keycards, incomplete room checks or errors in room allocation. Keep in touch with your coordinator to get any issues resolved quickly.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "4.0",
    title: "4.0 Meals and Catering",
    description: "Meal service, dietary needs, and catering arrangements.",
    color: "var(--color-accent-green)",
    icon: Utensils,
    subModules: [
      {
        id: "4.1",
        title: "4.1 Meals and Catering",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>There are four main categories of catering that we provide to the students: breakfast, lunch, dinner, and packed lunches. Depending on the site and day of the week, different plans apply. You can familiarise yourself with the key information below, however your specific site may have variations which will be discussed by the management team.</p><p>You may be assigned meal duty as part of your working day. If this is the case, you are responsible for managing the queues and ensuring students clear their plates and trays appropriately.</p>",
          },
          {
            title: "Responsibilities",
            content:
              "<p>If you are not assigned meal duty, you are still required to attend mealtimes in the canteen. As part of our student integration and welfare responsibilities, all Campus Leaders should sit with and eat with the students and group leaders each day.</p><p>Sitting with the students as you eat allows you to do the following:</p><ul><li><strong>Build a rapport with the students</strong> — make them feel welcome!</li><li><strong>Identify shy, quiet or introvert students</strong> — help forge friendships, be the ice breaker, or keep people company.</li><li><strong>Gather feedback on previous days</strong> — find out what they liked (or didn't like) to help improve the programme.</li><li><strong>Build excitement for upcoming tours and activities</strong> — a really important part of the process is to get people excited about their next adventure.</li><li><strong>Encourage signups and participation</strong> for the talent contest and other performance based evenings — find out who the confident loud ones are and get them on the signup list.</li><li><strong>Monitor for welfare concerns</strong> — identify changes in behaviour, unusual comments, student interaction and much more that could indicate a student is at risk. Perhaps they are not eating enough, hiding bruises, showing signs of crying. Informal mealtimes is a crucial time to spot areas of concern.</li></ul>",
          },
          {
            title: "Breakfast",
            isAccordion: true,
            content:
              "<p><strong>Fully Catered</strong></p><p>Breakfast is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary by centre but are typically 0745–0845 and meals are served in a buffet style for hot and/or continental style breakfast.</p><p><strong>Self-Catered Breakfast</strong></p><p>Some packages or centres include a self-catering breakfast option, for which breakfast supplies will have to be bought/delivered to the centre and placed into student kitchens. Students should never run out of available food at breakfast time.</p><p>Depending on the site and the surrounding amenities, you will have a different plan and schedule for this, which will be discussed with your managers. It will typically involve sourcing breads, condiments etc from a local supermarket.</p><p>Providing food for the students is a key safeguarding area, and something that should be maintained with upmost priority.</p>",
          },
          {
            title: "Lunch",
            isAccordion: true,
            content:
              "<p><strong>Fully Catered</strong></p><p>Lunch is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary depending on the centre, and it is served in a buffet style of hot food. Depending on your centre, some lunches are served in the residential building.</p><p><strong>Packed Lunch</strong></p><p>Packed lunches consist of a sandwich/wrap/pasta, crisps and fruit. All students will be provided with a Language in Action water bottle, therefore, water is not included in packed meals.</p><p>Students, group leaders and all team members will get a packed lunch on arrival day, departure day, and every Saturday and Sunday. During these times the canteen will not operate.</p><p>Lunches are to be collected by the students at breakfast service, as the students do not return to the campus after their morning activity. You will need to work with the Tour Guides to coordinate the collection of packed lunches (typically you'll also liaise with the relevant group leader, and it is the group leader who will instruct the students). You will also have to do a final numbers check to make sure meals match student numbers.</p><p>On sites where packed lunches are supplied by an external contractor, a Campus Leader will be scheduled to accept the delivery each applicable morning. Meals will then need to be stored in a refrigerated area if they are not being consumed by the next mealtime.</p><p>For example, meals delivered at 7am must be prepared for collection at breakfast service around 8am, for consumption at lunch. If the meals aren't due to be consumed until dinner, they must be stored in a refrigerated area until collection at lunchtime.</p>",
          },
          {
            title: "Dinner",
            isAccordion: true,
            content:
              "<p><strong>Fully Catered</strong></p><p>Dinner is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary and it is served in a buffet style of hot food. Depending on your centre, some dinners are served in the residential building.</p><p><strong>Packed Dinner</strong></p><p>Packed dinners are identical to packed lunches in contents and are used for the midweek evening By Night activities for students who are on an afternoon tour.</p><p>Packed dinners are to be collected by the students at lunch service, as groups will not return to the campus after an afternoon activity. You will need to work with the Tour Guides to coordinate the collection of packed lunches (typically you'll liaise with the relevant group leader, and it is the group leader who will instruct the students) and also for the final numbers check.</p><p><strong>Excursion / Special Dinners</strong></p><p>On occasion, and depending on the site and group bookings, there will be certain evenings where the canteen is closed, or the group have booked to eat in a restaurant. Dinners in a restaurant will be booked in advance and will vary by location. Other options include special mealtimes such as Pizza Night, for which pizzas will be pre-ordered. These takeaway nights are scheduled into most centre's timetable for either a Saturday or Sunday night. As a Campus Leader you will help your Campus Coordinator organise and orchestrate this mealtime.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "5.0",
    title: "5.0 Safeguarding & Welfare",
    description: "Student safety, welfare protocols, and compliance.",
    color: "var(--color-accent-orange)",
    icon: Shield,
    subModules: [
      {
        id: "5.1",
        title: "5.1 Safeguarding & Welfare",
        sections: [
          {
            title: "What it Covers",
            content:
              '<p>Here you will find some useful information on the safeguarding and welfare sides of the business. First watch the video, then go through the other sections to learn more about it.</p><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin-top:1rem;"><iframe src="https://www.youtube.com/embed/Et1yEwK3K-w" title="Safeguarding & Welfare" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
          },
        ],
      },
      {
        id: "5.2",
        title: "5.2 Policies",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>Safeguarding and child protection refer to measures to protect the health, well-being, and human rights of individuals, which allow people - especially children, young people, and vulnerable adults - to live free from neglect, and physical, emotional and sexual abuse.</p><p>Child Welfare is about the physical, social, and psychological well-being of children, particularly children suffering from the lack of normal parental care and supervision. It deals with such problems as personality development, vocational guidance, and use of leisure time.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Everyone involved in a Language in Action summer programme must be considered in such a way that their safety, well-being and human rights are paramount. Particular attention must be paid to the students in our care.</p><p>Students under the age of 18 are legally considered children, and fall under all safeguarding law and policy for minors. Students aged 18 and over fall under the category of Vulnerable Adult due to a number of factors, the primary being their language skills whilst in England. Throughout your time at Language in Action, all Vulnerable Adults and all minors are considered the same for all aspects of Safeguarding, Welfare, and Child Protection policy.</p>",
          },
          {
            title: "The Number One Rule",
            isAccordion: true,
            content:
              "<p>If in any of your onboarding, training, or experiences across the summer programme, you are unsure of procedure or policy, or you are unsure about any situation, feel uneasy or have any doubts about a student, client, or colleague, you must speak to your Safeguarding &amp; Welfare Manager.</p><p><strong>You should never act alone in situations about which you have any uncertainties.</strong></p><p>Each centre has a Welfare Manager on site in a full-time capacity. This role is assumed by either the Centre Manager or Campus Coordinator. Additionally, all Programme Managers and many Head Office team members are highly trained in Safeguarding and can help in any situation at any time. See our Company Structure for a fully detailed list of Safeguarding and Welfare roles within the company.</p>",
          },
          {
            title: "The Policy",
            isAccordion: true,
            content:
              '<p>Everything you need to know to meet the high standards set out by Language in Action are detailed in the Language in Action Safeguarding and Child Protection Policy which can be accessed via the <a href="https://languageinactionltd.co.uk/policies/safeguarding-and-child-protection-policy/" target="_blank" rel="noopener noreferrer">Language in Action website</a> and is also available from any of your management team.</p><p>You must read this policy before the first day of student arrivals.</p>',
          },
          {
            title: "Training",
            isAccordion: true,
            content:
              '<p>You cannot work over the summer until you have completed this training.</p><p>The essential training and documentation is as follows:</p><ul><li><a href="https://languageinactionltd.co.uk/policies/safeguarding-and-child-protection-policy/" target="_blank" rel="noopener noreferrer">Language in Action Safeguarding Policy</a></li><li>British Council Accreditation UK Safeguarding Training (Online Course)</li><li>UK Government PREVENT Training (Online Course)</li></ul><p>Language in Action Welfare Managers are all trained to Advanced Safeguarding (formerly Level 3), and all Coordinators to at least Safeguarding Level 2. You will be provided any required training if you do not hold the required level.</p>',
          },
        ],
      },
      {
        id: "5.3",
        title: "5.3 Allergies and Special Needs",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>Allergies, dietary requirements, disability assistance and educational needs, and other special needs.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Awareness of the needs of our guests is a vital process in our summer programme. Allergy requirements relate to student safety, dietary needs to religious and emotional understanding, disability assistance can affect every aspect of their stay, and special educational needs must be considered for all classroom activities.</p>",
          },
          {
            title: "Allergies",
            isAccordion: true,
            content:
              "<p>Providing a suitable menu that is safe from any allergies listed by students, group leaders and team members is of paramount importance. All agencies will provide us with a list of allergies for each student, and it is your responsibility to ensure that meals free from these allergens is provided at each mealtime. Remember, students will be unfamiliar with British food, and possibly unable to read labels in English, they are relying on you to provide the correct food.</p><p>You may encounter a wide range of allergies throughout the summer, but the most common will be food-born allergies.</p><p>Part of your role during mealtime supervision is to check that there are options available free from the listed allergens, and where necessary, to point out each option to the student.</p><p>The UK Government lists the following allergies as necessary to list in the ingredients of any meal, but Language in Action will cater for more if required.</p><p>The allergens are: celery, cereals containing gluten (such as wheat, barley and oats), crustaceans (such as prawns, crabs and lobsters), eggs, fish, lupin, milk, molluscs (such as mussels and oysters), mustard, peanuts, sesame, soybeans, sulphur dioxide and sulphites (if the sulphur dioxide and sulphites are at a concentration of more than ten parts per million) and tree nuts (such as almonds, hazelnuts, walnuts, Brazil nuts, cashews, pecans, pistachios and macadamia nuts).</p>",
          },
          {
            title: "Dietary Requirements",
            isAccordion: true,
            content:
              '<p>Aside from the above allergy requirements, other dietary requirements are likely to be for medical reasons (e.g. diabetic students), or for religious reasons. You can speak with your Welfare Manager to fully understand what is and is not suitable for a student to eat, and maintain an open dialogue about it throughout the summer.</p><p>The largest non-allergy related dietary requirement you are likely to encounter is a request for a Halal diet from practising Muslims. Some key factors to note are that all meat and poultry must be labelled as Halal, and no pork or food containing alcohol is permitted. You can read more about a Halal diet <a href="https://www.muslim.org.au/uploads/1/3/7/8/13783065/a_guide_to_halal_food_2020.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>',
          },
          {
            title: "Disabilities and Other Special Needs",
            isAccordion: true,
            content:
              '<p>Language in Action aims to support and welcome students who have a physical or learning disability and to minimise the impact that their disability has on their learning and overall experience at the school.</p><p>Your Welfare Manager will share any information you may need to know.</p><p>For more information on disability management and policies, see the <a href="https://languageinactionltd.co.uk/policies/" target="_blank" rel="noopener noreferrer">Language in Action website</a>.</p>',
          },
        ],
      },
      {
        id: "5.4",
        title: "5.4 Risk Assessment",
        sections: [
          {
            title: "What it is",
            content:
              "<p>A risk assessment is an assessment of any potential risks or dangers that may occur at any time during the summer programme. They range from excursions through to bathroom fittings and are created by either Language in Action or an external group/contractor.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Risk assessments show due diligence, planning, and provide evidence of our procedures to reduce the risk of harm and injury. It also provides a framework for the organisation and running of excursions and activities.</p>",
          },
          {
            title: "What it Looks Like",
            isAccordion: true,
            content:
              '<p>The risk assessment is broken down into five sections as follows:</p><p><strong>Identified Hazard / Risk</strong> — A basic description of the hazard/risk.</p><p><strong>Level of Risk</strong> — Rated as Low, Medium or High and gauged on the risk prior to action.</p><p><strong>Required Action to Eliminate Risk</strong> — A detailed summary of each step taken to minimise the risk of the hazard/risk/situation taking place.</p><p><strong>Revised Risk</strong> — Rated as Low, Medium or High, and gauged on the risk after all action points are complete.</p><p><strong>Action to be Taken</strong> — The steps that must be taken by the present member of staff if the risk affects a member of the group.</p><p><strong>NOTE:</strong> The safety rating is determined using a formula that assesses likelihood of the risk against the severity of the risk.</p><p>Below you can see the first risk identified for travelling on public transport in London. Each document can list any number of risks identified, and there is no limit — but it must contain all potential risks and hazards that may occur in any given situation.</p><p>Note that the action to be taken refers to the Emergency Plan of Action. This is a document Language in Action has created as a step by step guide to dealing with risks and problems. You will learn more about this in Section 7.0.</p><img src="/risk-assessment.png" alt="Risk Assessment Example" style="width:100%;border-radius:8px;margin-top:1rem;" />',
          },
          {
            title: "When We Use It",
            isAccordion: true,
            content:
              "<p>The Risk Assessment allows you to carry out any number of tasks or activities with the confidence that it is being done safely. You must use the details of the risk assessment to guide your planning and execution of tours and activities.</p><p>All team members should become familiar with the Risk Assessment in place at their centre. If you are scheduled to lead a group to the London Eye for London By Night, you should read the risk assessment for the London Eye, as well as the risk assessment for using public transport. You should then sign the Risk Assessment Acknowledgement Form the day before the excursion (this will be available in the office).</p><p>At all times you should be aware of the risk assessment and its contents, and dynamically assess your surroundings. Anything that you note has changed since the risk assessment was written, or any amendments due to incidents must be reported to your manager.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "6.0",
    title: "6.0 Communication",
    description: "Team communication, WhatsApp groups, and meetings.",
    color: "var(--color-accent-blue)",
    icon: MessageCircle,
    subModules: [
      {
        id: "6.1",
        title: "6.1 Communication",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>Communication ranges from how to present yourself as a Language in Action representative, to how to interact and communicate with students, clients, management, and members of the public (e.g. attraction workers, emergency services). You will communicate through a variety of channels, and it is important to know what avenue to utilise, when, and how to do it.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Communication weaves every aspect of the business together, and as a member of the team it is vital that you can communicate effectively, efficiently, and professionally.</p>",
          },
          {
            title: "Emergency Phone",
            isAccordion: true,
            content:
              "<p>Each centre will have an emergency phone, the number of which will be shared with the team, students, and group leaders. Everyone will be briefed on the importance of the phone, and that it is for phone calls only, not for texting, and it does not have WhatsApp.</p><p>The emergency phone will be always held by the most senior team member on shift, and rotated between managers at night, but you could occasionally be on emergency phone duty. In these cases you must always answer the phone and under no circumstances must it be left in the office overnight or switched to silent or vibrate only modes.</p>",
          },
          {
            title: "Students",
            isAccordion: true,
            content:
              "<p>In most situations, all communication with students must be done in person. Never through WhatsApp or other online methods. Whenever possible, any welfare issues or official discussions with a student must be conducted with their group leader and a manager present. This is not only for safeguarding, but to ensure that all parties involved are aware of any discussions. If this is not possible, another member of the Language in Action team must be always present. Refer to the Safeguarding policy for dealing with sensitive situations or situations where you are a solo member of staff.</p><p>Remember that in normal circumstances the Campus Leader should always refer to the Welfare Manager before entering any kind of discussion regarding students' welfare.</p><p>Where students have booked independently from groups/agencies, an activity leader will be assigned as a de-facto group leader for their stay. In these situations, the student, activity leader and welfare manager should be in the same WhatsApp group, so the activity leader and student can communicate meeting times, plans, etc.</p><p><strong>Welfare concerns:</strong> Allergies, special educational needs, behavioural or emotional concerns, requirements or requests from group leaders or parents on behalf of the student, and any other information that is pertinent to the running of operations, will be communicated to you through the management team.</p>",
          },
          {
            title: "The Language in Action Team",
            isAccordion: true,
            content:
              "<p><strong>WhatsApp</strong></p><p>On Day -1, two WhatsApp groups will be set up and they will include all Campus Leaders, Tour Guides and management.</p><p>The first group will be called <strong>LiA Main</strong>. It is important to be aware that this is solely for important information including management announcements, rotas, and emergency contact. Examples of use include rotas, traffic alerts, management announcements, injuries, delays, departure and return notification. This group is not for requesting swapped shifts, complaining about the weather or for asking someone to grab something for you from the shop.</p><p>The second group is for everyone to talk, discuss any topic, plan time off, whatever you want. It is important that you participate in this group, to help build a friendly and collaborative working environment in which everyone can exchange advice and comments about their day. Remember, you are all in this together.</p><p>Each evening, a summary of the day ahead will be sent by management. This will include which manager is on shift and when, a recap of assignments, a short summary of activities, and any other news that you might find useful to start your day with.</p><p><strong>Office</strong></p><p>At each centre, an office will be available for all team members. All relevant documents, handbooks and material will be stored in this office. It will also be available for team meetings and briefings.</p><p>It is important to remember that, although it's a place for everyone, the office cannot be a hangout spot for those who are not on an activity, as it is also the place where management conducts client and contractor meetings.</p><p>Key information that will be displayed in the office and accessible for all the team will include the rota, back up excursion sheets, client timetables, group leader names and contacts, Language in Action organogram, risk assessments etc.</p><p><strong>Meetings</strong></p><p>A full team meeting will be held once per week. These meetings are an important part of creating a fully cohesive team that are all on the same page and working towards the same goal.</p><p>The purpose of the meeting is twofold: discuss the plan for the week ahead, discuss how to improve on the week just finished. This will include any problems that occurred, and any notices, changes, or alerts for the coming week. It will also be the time to discuss student feedback from the previous week. If a meeting cannot be held, all information will be passed along in the group's WhatsApp group chat.</p><p><strong>One-to-Ones</strong></p><p>Your manager will arrange private meetings with you. Here you will have the opportunity to receive feedback on your performance, ask for guidance and support, or share your concerns. Your manager will focus on developing your skills and improving your performance for the rest of the summer, and will highlight your strengths and weaknesses to help you better structure your work.</p>",
          },
          {
            title: "Group Leaders",
            isAccordion: true,
            content:
              "<p>The most important thing to note when dealing with the group leaders is that they represent both the students and the agencies that Language in Action works with around the world. They experience everything the student does, and they also have direct contact with their home agencies. This means that careful communication with group leaders is paramount and something you should approach with attention.</p><p>Group leaders are often either not trained to Language in Action standards, or inexperienced in their role. As they come from around the world, there should be no expectation that they will be fluent in English or know how to move around the city.</p><p>For larger groups, they may bring a large team of group leaders alongside a senior/experienced group leader. In these situations, it is especially important to maintain a good working relationship with the senior group leader, as they are the ones with the responsibility of their entire group.</p><p><strong>Approach style:</strong> Depending on the size of the group, and the personality of the group leader, you will need to manage each situation on its own merit. Each group is different, and learning how to deal with them will come with experience in the role. In any case, the approach to Group Leaders should be a good balance between friendliness and professionalism. Remember, if you are ever unsure, speak to your manager.</p><p><strong>WhatsApp:</strong> Campus Leaders or Tour Guides may also be part of the WhatsApp groups between managers and group leaders. This is to ensure that there's an open and official line of contact between you and agency representatives. This group will be used to communicate all important information pertaining to group activities, ensuring everyone is on the same page. It is also where excursion sheets will be sent to group leaders at the end of each day.</p>",
          },
          {
            title: "Attraction Workers and the Public",
            isAccordion: true,
            content:
              "<p>Throughout the summer you will find yourself liaising with many people directly related to the logistics of our programme, such as attraction workers, members of the public, and also the facilities teams on our campuses.</p><p>Your communication with anyone you might come in contact with as a Language in Action representative must remain professional at all times. Being respectful, polite, and nice with people will allow for more flexibility and cooperation and will facilitate your day-to-day interactions and operations. It is important to avoid any kind of conflict, and every problem must be dealt with in a diplomatic manner.</p><p>Here is a small example of the kinds of interactions you might have over the summer:</p><ul><li>Asking the facilities team to supply equipment for a Disco Night</li><li>Speaking with Madame Tussauds staff about a problem with the booking</li><li>Talking to London Underground staff about allowing a large number of students through the gate rather than turnstiles</li><li>Liaising with coach drivers/airport coach marshals for student transfers</li><li>Dealing with local residents or business owners complaining about the large number of students you are leading</li></ul><p>In all situations, remain calm and polite, and clearly state what your objective is. Where possible, propose a solution and ask for help or support to achieve it. Being open and cooperative is essential, and ultimately you will have to follow the instructions given to you by the employee you are speaking to.</p><p>Always make sure that your conversations are held out of earshot of the group leaders or students, and that the students are not blocking entryways or footpaths whilst waiting.</p><p>If you have doubts about this, or don't know how to approach a conflict or problem, you can speak to your Coordinator or Centre Manager.</p>",
          },
        ],
      },
    ],
  },
  {
    id: "7.0",
    title: "7.0 Emergency Procedure",
    description: "Emergency protocols and escalation procedures.",
    color: "var(--color-accent-peach)",
    icon: AlertTriangle,
    subModules: [
      {
        id: "7.1",
        title: "7.1 Emergency Procedure",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Emergency procedures are the plans of action to follow if problems and/or welfare risks arise during any activity, tour or excursion.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>Emergency Procedures are paramount to ensure the safety of the group and, along with risk assessments, guarantee that all team members are ready and equipped to deal with an emergency.</p>",
          },
          {
            title: "Emergency Contacts",
            isAccordion: true,
            content:
              "<p>Your points of contact for any emergency will be your Coordinator or Centre Manager. You should always contact them for any disruption, problem or doubt you may have in an unexpected circumstance.</p><p>If there is an immediate risk of serious injury or risk to life, you must call the emergency services on <strong>999</strong> and follow the Emergency Plan of Action below.</p>",
          },
          {
            title: "Language in Action Emergency Plan of Action",
            isAccordion: true,
            content:
              "<p>This EPoA is to be executed by the designated team member, appointed by the Centre Manager. In the event of an emergency:</p><ul><li>Establish nature and extent of the emergency.</li><li>If there are injuries, establish their extent and have first aid administered (if you, or another member of the group, have been trained or feel capable).</li><li>Telephone relevant emergency services — dial <strong>999</strong>.</li><li>Establish names of the injured and ensure that all other members of the group are accounted for and safe.</li><li>Advise other staff and Group Leaders of the incident and that emergency procedures are in operation.</li><li>Ensure that an adult from the group (agency Group Leader or LIA staff members) accompanies casualties to hospital or if on your own you go with the injured student(s) or staff members; the Emergency Services will look after the rest of the party until another member of staff arrives.</li><li>Ensure that the remainder of the group are adequately supervised by Group Leaders and any other LIA staff throughout and arrange for their early return to accommodation, accompanied by Group Leaders.</li><li>Arrange for one adult (LIA staff member or Group Leader) to remain at the incident site to liaise with emergency services until the incident is over and all students, Group Leaders and staff are accounted for.</li><li>Control access to telephones until contact is made with the Centre Manager and until they have had time to contact those directly involved. Pass full details of the incident (name, nature, date and time of incident, location of incident, details of injuries, names and telephone numbers of those involved, action taken so far).</li><li>Identify alternate telephone numbers in case telephone lines become jammed.</li><li>The Company will arrange to contact the parents or next of kin of those involved. In serious incidents the parents or next of kin of all party members should be informed.</li><li>Write down accurately and as soon as possible all relevant facts and witness details and preserve any vital evidence.</li><li>Complete an accident report form as soon as possible.</li><li>No one in the group should speak to the media. Names of those involved in the incident should not be given to the media as this could cause distress to their families.</li><li>No one in the group should discuss legal liability with other parties.</li></ul>",
          },
          {
            title: "Emergency Plan of Action Flow Chart",
            isAccordion: true,
            content:
              '<p>The below flow chart provides a step-by-step guide on executing the Emergency Plan of Action. This chart should be displayed clearly in the Language in Action Office and available for all team members to read. You can also <a href="https://drive.google.com/file/d/1w27tLTtvbkzc3VO9tqDKMJuj1Nj7rSBa/view" target="_blank" rel="noopener noreferrer">click here</a> to open the document in a new tab.</p><img src="/emergency-flowchart.png" alt="Emergency Plan of Action Flow Chart" style="width:100%;border-radius:8px;margin-top:1rem;" />',
          },
        ],
      },
    ],
  },
  {
    id: "8.0",
    title: "8.0 Down Time",
    description: "Rest, social events, and time off guidance.",
    color: "var(--color-accent-purple)",
    icon: Coffee,
    subModules: [
      {
        id: "8.1",
        title: "8.1 Down Time",
        sections: [
          {
            title: "What it is",
            content:
              "<p>Time off, and all non-student facing time whilst on campus.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>You will sometimes work long, challenging and demanding days. We want you to enjoy your job, and in order to do that, we want to make sure you have enough time away from work too!</p>",
          },
          {
            title: "Team Rotas",
            isAccordion: true,
            content:
              "<p>Each week your Coordinator will send you a rota outlining your shifts for the following week. You should get this 4 days before the start of each week.</p><h3>Days Off</h3><p>As a Campus Leader you will work six days per week, and your total hours will be around 43 per week. This means that you will get one full day off per week, and your typical day's shift will be around 7 hours long, and usually in the evenings. If you are not scheduled to work through the daytime, this time is also free time for you - however you'll still need to be in the canteen at mealtimes.</p><h3>Problems or Concerns</h3><p>If you have any questions or issues with your scheduled work, you can speak to your Coordinator about it, or Centre Manager if required. If the problem persists, when your Programme Manager visits, you can speak to them about it too. We want you to be happy during your time at Language in Action, and we will always try to look after you the best we can.</p><h3>Mealtimes</h3><p>Breakfast, lunch and dinner service times are not typically considered time off, and all team members must be made aware that during these times they cannot stop their work duties to take a break when scheduled on to work.</p><p>Food is provided; however, student supervision is still a requirement and a priority. Communication is key to this; if you end up missing lunch service because of an extended task, excursion or other workload, you should alert your manager and they will arrange for the catering team to put some food aside.</p><h3>On-shift Breaks</h3><p>You will be given the opportunity to take short breaks during your shifts providing there is suitable cover for the students. This might be during mealtimes or whilst students are working on projects, watching movies or practicing their talent performance for example.</p>",
          },
          {
            title: "Social Events",
            isAccordion: true,
            content:
              "<p>Language in Action looks to reward team members for their hard work throughout the summer programme. This may include social events outside of work hours. These social events (e.g. karaoke, family dinner etc.) are the perfect opportunity for everyone to let off a bit of steam, get things off their chest, enjoy their time in the summer programme and relax.</p><p>Every two weeks you will have the chance to relax at a staff party. You can find out more about that in your live video training.</p><p>Your manager might organise a family meal, that one of the team members can cook (you, if you think you're up to it!) and the whole team can sit and enjoy a nice meal.</p><p>At least once in the summer, the plan is to throw one big Language in Action Team party, where you will get to celebrate a great summer with all the other centres.</p><h3>Alcohol and Drug Use</h3><p>Smoking cigarettes and vaping are not permitted within school or residential grounds and should only be done out of sight of students and clients.</p><p>Drug use is strictly forbidden at any time during employment with Language in Action, this includes days off. The possession, use or distribution of drugs for non-medical purposes on our premises is strictly forbidden.</p><p>Alcohol is permitted at social events, and team members are not prohibited from consuming alcohol on your days off. However, all employees must remember that for the entirety of their employment, whether on shift or not, they are representatives of the company, and must behave in such a way that does not negatively affect the company, its reputation, or its stakeholders.</p><p>Alcohol consumption is permitted on the following basis:</p><ul><li>You are not on shift</li><li>You are not due to be on shift at any time later that day</li><li>It is consumed in moderation</li><li>It is not consumed within 12 hours of starting a shift</li><li>It is not consumed in view of students, group leaders and clients</li><li>It is not consumed within the school campus grounds</li></ul>",
          },
        ],
      },
      {
        id: "8.2",
        title: "8.2 Training Complete",
        sections: [
          {
            title: "That's the end of the Campus Leader Digital Training!",
            content:
              "<p>If there are any sections you have not yet read, click below to return to the contents page and carry on.</p><p>If you have worked through in order, Section 8.0 is the last section, and you have completed the first steps of your Language in Action Training!</p><p>Your next stop is live online training. Here you will get the opportunity to meet your managers and the rest of the team from your centre, your Programme Managers and members of Head Office.</p><p>You will have the opportunity to ask any questions you have about what you have read, as well as learn more about the centre, and practice in some live scenario training.</p><p>All this before you arrive at your centre in the summer, at which point you will have a full day induction and training on your specific centre (Day -1), and prepare your school for Day Zero!</p><p>Thank you for taking the time to read through this Team Training Guide. This preparation is an important part of your understanding of the role and the business. Remember, if you have any questions or there is anything you are unsure of, your Manager is always available to help.</p><p>See you in the summer!</p>",
          },
        ],
      },
    ],
  },
];

export const modulesC: Module[] = [
  {
    ...modulesB[0],
    subModules: [
      {
        ...modulesB[0].subModules[0],
        sections: [
          {
            title: "What does a typical Tour Guide day look like?",
            content:
              "<p>Ultimately, Tour Guides are the front line of Language in Action. You are the ones who will spend the most time with the students and the group leaders when they are off campus.</p><p>As a tour guide you will plan, organise and run a wide range of tours and excursions across not only the city you are in, but surrounding areas too. You will represent our company whenever our students are out in public, so it is up to you to make sure that Language in Action is seen as a safe, responsible, respectful and fun organisation.</p><p>Start by watching the below video to learn all about what a typical day in the life of a Tour Guide looks likes. When you have finished the video, continue through this page and the rest of your training.</p>",
          },
          {
            title: "Video: A Day in the Life",
            content:
              '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;"><iframe src="https://www.youtube.com/embed/aoBnimXTH5k" title="A Day in the Life of a Tour Guide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>',
          },
          {
            title: "0830 - Starting Your Day",
            isAccordion: true,
            content:
              "<p>At the start of each day, you must check in with the manager on shift, so they know you are there, and to find out any last-minute changes to your day. This is the very first thing you do.</p><p>You should check over your tour guide notes and risk assessments one last time, and make sure that any tickets you need are ready to collect.</p><p>If you're in London you'll also need to collect your daily travel cards.</p>",
          },
          {
            title: "0900 - Setting Off",
            isAccordion: true,
            content:
              "<p>You should meet your assigned groups at 9.00am and brief them on the day ahead. Speak to the group leaders first, outlining travel routes and timings, then speak to the students about where they are going. This is also a good time to remind students about basic safety on public transport. This initial briefing must be done with as much enthusiasm as possible.</p><p>It is then time to set off. Depending on the day and type of tour you may be asked to stagger your departure so that you travel or queue at your destination separately. You should also have games, quizzes or activities in mind that you can use when waiting for the tube or bus, or whilst waiting to get into a venue - remember, it is your job to keep the students energetic and entertained from the moment you leave campus.</p>",
          },
          {
            title: "1000 - On Tour",
            isAccordion: true,
            content:
              "<p>Your tour will usually be either a walking tour of the city, or a trip to a gallery or museum. Light rain or slightly adverse weather will not usually result in a tour changing, however extreme weather such as heavy rain or excessive heat might require a last minute change. Keep in contact with your Tour Coordinator if it looks like a change might be necessary.</p><h3>Walking Tours</h3><p>If you are delivering a walking tour, make sure you are confident with the route before you set off. If you want to use Google Maps on your phone, you can, but be careful of thieves if you have your phone out.</p><p>At each stop on your tour you should find an open space and gather the students around you, and if you can, a step or somewhere you can be higher up than the students. Make sure not to block any pavements or walkways, and always stay away from the road. This is also a great time to do a quick head count and check your student numbers.</p><p>You'll be provided with notes for each stop on the tour, so the important thing to remember is to speak clearly, loudly and confidently to the group. To keep the students engaged make sure to speak to all of them, making eye contact, and including them in your speech through questions, jokes or actions.</p><h3>Venue Tours</h3><p>When you arrive at your destination you should brief the students about what they will see, whilst reminding them of some basic behavioural rules. Language in Action will take almost 4000 students to each destination, and you are clearly identifiable in your uniform. It is important that you do not cause problems at a venue, as should a venue decide to refuse future entry, it could jeopardise the entire summer programme.</p><p>If you are taking a group to a gallery, museum or attraction, the tour will be made up of two parts:</p><p>Firstly, you will have tour notes for around three or four exhibits, usually close to the entrance or on the ground floor. You should take the students to these exhibits as a group, and deliver the tour notes to the entire group.</p><p>Secondly, after you have exhausted your tour notes for that venue, you will be able to give the students some free time to explore the rest of the building.</p><ul><li>You must set up a meeting point in a large, open room with access to toilets.</li><li>You must set a meeting time for all students — it is good to encourage the students to set a timer on their phones so they don't lose track of time and delay the departure.</li><li>You must make sure all students are buddied up with a partner, and that no student explores the museum on their own.</li></ul><p>This is not free time for you or the group leaders, and you are expected to spend your time catching up with smaller groups of students and engaging with them about the exhibits they can see. Encourage the students to speak English, help with translations, and ask questions to check their understanding.</p><p>Make sure you are the first back to the meeting point when their free time is up. Do a headcount of students and check with the group leader that the students are all present and everyone is ready to go.</p>",
          },
          {
            title: "1300 - Lunch",
            isAccordion: true,
            content:
              "<p>On the midweek half-day tours, you must get the students back to campus before lunch service, which typically starts at 1:00pm. Plan your travel time in advance, and check your plans are accurate on the outbound journey. Again, for the return journey to campus you should make an effort to engage with the students through questions, quizzes or games whilst travelling. Lunch is also your break, so relax a little, get ready for the next tour, and enjoy your meal.</p><p>On full-day tours, which typically run on weekends, the students will have a packed lunch during their tour. There are a couple of important steps to ensure this happens:</p><ul><li>You must liaise with the Campus team in the morning, as you and the students will need to collect your packed meals at the end of breakfast service. Depending on your centre, the packed meals will either be provided by the canteen or an external supplier — the latter will be stored at residence.</li></ul>",
          },
          {
            title: "1400 - Back on Tour",
            isAccordion: true,
            content:
              "<p>You will typically run the same tour in the afternoon as you did in the morning, with a different group. Use this to your advantage by tweaking your delivery of the tour to improve it.</p>",
          },
          {
            title: "1750 - Back at Campus",
            isAccordion: true,
            content:
              "<p>You must get the students back to campus before dinner service, which typically starts at 6:00pm. Plan your travel time in advance, and check your plans are accurate on the outbound journey. Again, for the return journey to campus you should make an effort to engage with the students through questions, quizzes or games whilst travelling.</p><p>The final job of the day is to check in with your manager, and drop off any travel cards or notes from your day.</p>",
          },
          {
            title: "1900 - Evening Activities",
            isAccordion: true,
            content:
              "<p>On rare occasions you may be asked to support the campus team on an evening. Your rota will reflect this and your coordinator will speak to you in advance about it.</p>",
          },
          {
            title: "Additional Notes",
            isAccordion: true,
            content:
              "<p><strong>NOTE:</strong> There will be more tasks on specific days throughout the summer programme including room checks on turnover days, and transfers from local airports. Those are covered in other sections in the training.</p>",
          },
        ],
      },
    ],
  },
  {
    ...modulesB[1],
    subModules: [
      {
        id: "2.1",
        title: "2.1 Tours",
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>The basics of tour delivery from planning through to execution, as well as some hints and tips to making the best tour possible.</p>",
          },
          {
            title: "Why it is Important",
            content:
              "<p>The guided tours make up a major part of the student's time and can make the difference between an ok summer experience and an unforgettable one. Student experience and student safety are your top priorities, and both play an important role in delivering the wide range of tours and excursions we offer.</p>",
          },
          {
            title: "Tour Planning",
            isAccordion: true,
            content:
              "<p>For each tour you will be provided with Tour Notes from which you should build and develop your guided tour. You should study the tour notes in advance of your tour day, allowing time to research and adjust the tour notes as appropriate. Perhaps you know the area well, or have some useful connections to things the students might find interesting or fun.</p><p>You will also need to prepare travel cards (London) and any tickets you may need for pre-booked attractions and venues. Bookings should be ready for you, and are prepared by the Tour Coordinator. All paid attractions require tickets, and many of the free attractions such as museums also have booking requirements.</p><p>You are unlikely to be the only tour guide assigned to a particular excursion, so you should share your ideas and knowledge with the other tour guides, or ask them for help or advice in delivering a particular tour if you need it.</p><p>You should also confirm your plans with your Tour Coordinator before the day of your tour, and check over the finalised details.</p><p>The night before, and again on the morning of the tour, you should check for travel and weather disruption, and speak to your coordinator if you have any concerns.</p>",
          },
          {
            title: "Delivering a Tour",
            isAccordion: true,
            content:
              "<p>The most important thing to remember about your tour delivery is that it should be educational and entertaining. You should breathe life into your tour notes through enthusiastic delivery, culturally relevant connections, jokes, and plenty of energy. You are leading a group of teenagers around places they will have often never even heard of before, so it is up to you to build that excitement.</p><p>The same is true for travelling to and from your destination, so it is always a good idea to have some quick games, quizzes or conversation starters for the journey. Sometimes you could be on a train for an hour, or at a tube station for 10 minutes — either way, you should engage with your students to keep energy and excitement high.</p><p>For walking tours in the city, the tour notes will contain walking routes, appropriate places to stop, and educational notes on the stops along the route. They will cover the entire route.</p><p>For tours to galleries or museums, your tour notes will typically cover three to four exhibits on the ground floor, after which the students should be given free time to further explore the venue.</p><p>You can see a sample Tour Note <a href='https://drive.google.com/file/d/1fVX50L3g64TgFmvzS9bIZ9yuVyWzgHbQ/view' target='_blank' rel='noopener noreferrer'>here</a>.</p><p>Your main role is to ensure the smooth-running of the tour and to make sure the students have a fun and memorable experience. For many of them, this will be their first time in a foreign country or even away from home, so you should always represent a support system, especially during long tiring days, or days when something doesn't quite go right (e.g. delays, cancellations, bad weather). You should always maintain a positive, happy approach, and establish a friendly, welcoming relationship based on trust.</p><p>You must remain in contact with your manager on the WhatsApp group chat throughout the tour, communicating any problems that may occur, as well as their successful departure and return. Knowing which groups are in the school, and which groups are on tour is an important part of fire safety.</p><p>Messages should be short and concise, e.g. <em>\"Travelling Fox on way to Leicester Square\"</em>, <em>\"Travelling Fox are back on campus\"</em>, and should not turn into a conversation about how fun the trip was. It is important to keep the management group as clear as possible so that information can be passed quickly and easily in an emergency.</p><p><em>*Travelling Fox is the name of one of the groups you may work with.</em></p><p>For any problems regarding an Excursion Sheet or a tour, you should always refer to your Tour Coordinator for more details or clarification.</p>",
          },
          {
            title: "Underground, buses and trams",
            isAccordion: true,
            content:
              "<h3>London Underground</h3><p>For London centres, Underground tickets are pre-purchased. These are physical paper tickets and require a stamped date on each ticket before use.</p><p>The travel cards will be available from the office. You should collect as many travel cards as you need for your group, the group leaders and yourself, and you should hold on to all the tickets for the duration of the tour.</p><p>Many of the centres run what is known as a Travel Card Swap — this means that after your morning tour, you should return your tickets to the office so they can be used for the afternoon tours. There may be groups in your centre who have paid for travel card use all day; you will be notified by your coordinator which groups these are, and the tickets for these groups can be handed to their group leader.</p><p>If you are asked to stamp new tickets, please be aware that Language in Action pay per stamped ticket, and as such, any errors in stamping or lost tickets can cause unnecessary costs for the company. It is important to ensure that you understand the requirement to be accurate and precise with the stamps.</p><h3>Manchester</h3><p>For Manchester centres, students should have weekly bus passes. The students are responsible for keeping their own bus passes, but you should always stress the importance of not losing it.</p><h3>Canterbury &amp; Liverpool (Stagecoach)</h3><p>For Canterbury and Liverpool centres, students have day-bus passes on specific days. Your Tour Coordinator will communicate with you on which days bus passes are required.</p><p>Each student will be given a unique code to redeem tickets on the Stagecoach app (the local bus company). You must make sure that all students have activated their tickets before leaving the campus.</p><h3>National Rail</h3><p>For full day excursions outside of the city, you will frequently take trains to your destination. Train tickets will typically be booked in advance by your Tour Coordinator, however there are some tours on which tickets are booked at the train station on the day of the tour. In these instances you will be provided a method of payment and a list of the tickets you should book.</p><p>Train tickets are often off-peak same-day return tickets, meaning there is no set time to catch the return train. For these tickets you should plan ahead to make sure you catch a train with enough time to return to campus for dinner service in the canteen.</p>",
          },
          {
            title: "On-the-day Problems",
            isAccordion: true,
            content:
              "<p>Should there be a problem during a tour, it is your responsibility to immediately call your coordinator to make them aware of the problem so they can assess the situation and take the appropriate action.</p><p>Each problem will be assessed by management, however there are some key things to remember:</p><p><strong>The safety and welfare of the students is paramount.</strong> If you feel there is an immediate risk to this, you must act promptly. Situations that require swift action could be: losing one or more students, any type of injury, and external dangers such as ambiguous or threatening strangers approaching the group. This might mean moving the group to a safe place, arranging food or shelter, activating the Emergency Procedure protocol, calling the police, or asking additional team members to be sent out to assist. Always call your coordinator if you feel students' safety or welfare are at risk.</p><p><strong>NOTE:</strong> See our <a href='/contents/7.0/7.1'>Emergency Procedure</a> and Risk Assessment documentation for details about potential dangers and protocols.</p><p><strong>The student experience should not suffer.</strong> Problems with travel, bookings, activities, or problems within the group can all have a negative effect on the student experience. If the tour cannot go ahead for any reason, arrangements will be made for the students to do something else. Contact your coordinator, as some activities can easily be moved around, whilst others cannot be rearranged, and other options may need to be assessed.</p><p><strong>Travel disruptions.</strong> Travelling across the city can often cause problems due to slow or overcrowded public transport, cancellations, or strikes. Delays are often unavoidable; however, they are usually not cause for concern. If any of these problems do become cause for concern, you may need to contact your manager to make them aware of it. For example, if students are delayed returning to the school for mealtime or if an outbound journey is delayed and puts the group at risk of losing their booking.</p><p>You should also reiterate possible delays and contingencies to group leaders, reassuring them that a solution will be found, and politely remind them that delays and disruptions, especially during busy summers in central London, are things out of our control.</p>",
          },
          {
            title: "Additional Notes",
            isAccordion: true,
            content:
              "<p><strong>NOTE:</strong> On days when your Tour Coordinator is off campus running their own tour, you can contact the Centre Manager with any questions or concerns you have throughout your trip.</p><p><strong>NOTE:</strong> There will be more tasks on specific days throughout the summer programme including room checks on turnover days, and transfers from local airports. Those are covered in other sections in the training.</p>",
          },
        ],
      },
      {
        id: "2.2",
        title: "2.2 Tours in Detail",
        sections: [
          {
            title: "Overview",
            content:
              "<p>You should know everything about your tour, the route and the destination before you set off. Take a look below at all the tours you might be scheduled for.</p><p>In the document, you will see reference to HD or FD.</p><ul><li><strong>HD</strong> means Half Day. You will most likely run these tours for different groups in the morning and afternoon slots.</li><li><strong>FD</strong> means Full Day. These are typically on a weekend and you'll take the students out from 9am through to around 5.30pm, with a packed meal for lunch.</li></ul>",
          },
          {
            title: "London",
            isAccordion: true,
            content:
              '<p style="margin-bottom:16px;">Welcome to London! Our revamped 2026 programme has been designed to ensure that you have the most enjoyable, memorable experience possible. You\'ll spend time exploring, learning and creating with students from all over the world, and our team of tour guides and activity leaders are there to make your summer unforgettable!</p><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">HD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Camden Town</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Bloomsbury, Wembley, Middlesex &nbsp;·&nbsp; Package: Deluxe</p><p>See the bohemian side of London in this fashionable central London district. Famous for its eclectic markets, diverse music scene and vibrant street art, Camden is a great place to explore. With its range of hand-made and vintage stalls and shops, there really is treasure to be found! You\'ll get guided around the area and given some time to explore the curiosities on offer.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">The British Museum</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Spend your time exploring one of the most famous museums in the world. Egyptian mummies, artwork by Rembrandt and Michelangelo, and the Rosetta Stone are just some of the incredible pieces you\'ll see as you wander this 265-year-old museum.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Covent Garden <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Discover one of London\'s most vibrant districts, where history, culture, and entertainment come alive. From street performers and boutique shops to the historic market halls and world-class dining, Covent Garden offers something for everyone.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Natural History Museum</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Get up close to dinosaur skeletons, rare gems and interactive exhibits whilst our tour guides point out interesting exhibits in this enormous museum. Visit the main atrium for a look at a full-size blue whale skeleton, take a photo with a triceratops, or learn about the formation of the solar system.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Portobello Road &amp; Notting Hill</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>A popular location for movies, this beautiful area of London is home to the famous Portobello Markets. A lively atmosphere of street performers and market stalls sat amongst beautiful buildings makes this a great trip out. You\'ll get a guided walk through the area before having a little free time to explore the stalls and shops at your own pace.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">V &amp; A Museum</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>The Victoria and Albert Museum is a world-famous Art and Design showcase. You\'ll spend your time learning about and admiring fashion, textiles, ceramics and decorative arts from a variety of cultures and eras. This is a must for anyone with an interest in art.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Oxford Street Shopping and Oxford Circus</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>What trip to London would be complete without spending some time shopping on the world-famous Oxford Street? You\'ll get the opportunity to visit iconic shops, watch street entertainers and soak up the atmosphere of one of London\'s most visited streets. A great time to pick up some souvenirs for friends and family back home.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Madame Tussauds</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Trick your friends into believing you\'ve met Zendaya, Timothee Chalamet or even King Charles! Get close in for a selfie with incredibly lifelike waxwork models of celebrities from past and present. Our ticket gets you straight to the front of the queue, so you get more time with your favourite celebs. This excursion includes ticketed entry to Madame Tussauds.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Westfield Shopping Centre <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: UEL Docklands &nbsp;·&nbsp; Package: Deluxe</p><p>Visit the largest shopping centre in the UK and spend your time exploring more than 320 stores, restaurants, cafes and more. Retail therapy never felt so good! Treat yourself or find something nice to take back to friends and family.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">London Docklands Museum <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: UEL Docklands &nbsp;·&nbsp; Package: Deluxe</p><p>Step back in time and uncover the history of London\'s river, port, and people. Housed in a 200-year-old warehouse, the museum explores the city\'s connection to the Thames — from the days of trade and empire to the Docklands\' transformation into today\'s financial hub. With immersive galleries, stories of sailors and merchants, and a powerful look at the transatlantic slave trade, this tour offers a fascinating journey through London\'s maritime past.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sports</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: UEL Docklands, Middlesex &nbsp;·&nbsp; Package: Deluxe</p><p>Show off your football skills, try your hand at volleyball, or shoot for the hoop on the basketball courts of these state-of-the-art on-campus sports facilities. A range of sports across both indoor and outdoor pitches and courts are available.</p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">FD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sightseeing Tour 1: Westminster</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Our tour begins in leafy Green Park before arriving at the gates of Buckingham Palace, the King\'s official residence, where you\'ll get time for some great photos. You\'ll stroll through the picturesque St. James\'s Park on the way to Westminster to see Big Ben, the Houses of Parliament, and Westminster Abbey. From there you\'ll pass Downing Street, the home of the Prime Minister, and the Cenotaph before reaching the bustling Trafalgar Square. In the afternoon you\'ll get to explore the world-renowned National Gallery, home to masterpieces by Van Gogh, Da Vinci, and Turner. The tour finishes with The Royal Cavalry Horse Guard Inspection, where you\'ll get to see some of the King\'s guards and their horses come out for a march and inspection in their finest uniforms.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sightseeing Tour 2: Tower Hill and Southwark</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>On your second tour you\'ll start with views of the mighty Tower of London, where centuries of royal history and the Crown Jewels are housed. Walk alongside the castle walls and learn about the history of the Tower. You\'ll then cross the iconic Tower Bridge before wandering the bustling food stalls of Borough Market. You\'ll also get to see Shakespeare\'s Globe Theatre, a faithful reconstruction of the playwright\'s famous playhouse. We then take you across Millennium Bridge and finish at the magnificent St Paul\'s Cathedral, one of London\'s most awe-inspiring landmarks. This walk blends history, culture, and unforgettable views along the river.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sightseeing Tour 3: Greenwich</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Bloomsbury, Wembley, Middlesex &nbsp;·&nbsp; Package: Deluxe</p><p>On this fantastic full day excursion, you\'ll make your way to Greenwich along the water on a guided Thames River Cruise! Once docked, you\'ll get to browse the vibrant markets and wander through the leafy Greenwich Park, home to the world-famous Royal Observatory and the historic Meridian Line. After lunch, explore the National Maritime Museum and finish with a photo stop at the elegant 19th-century Cutty Sark, one of the fastest sailing ships of its time. <em>This tour includes ticketed entry to the Thames River Cruise.</em></p><p style="font-size:0.8rem;color:var(--color-text-light);margin-top:8px;margin-bottom:6px;">Centres: UEL Docklands &nbsp;·&nbsp; Package: Deluxe</p><p>You\'ll start by heading to Camden Town to see the more bohemian side of London in this fashionable central London district, famous for its eclectic markets, diverse music scene and vibrant street art. We\'ll then take you down the river on a guided Thames River Cruise to Greenwich to explore the National Maritime Museum and snap a photo of the Cutty Sark, a beautiful 19th century trading ship. <em>This tour includes ticketed entry to the Thames River Cruise.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Brighton</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Bloomsbury, Wembley, Middlesex &nbsp;·&nbsp; Package: Deluxe</p><p>Hop on the train to England\'s sunny south coast and discover the charm of Brighton. Wander through the maze of boutique shops and cafés in The Lanes, then head to the lively seafront. Your visit includes entry to the 125-year-old Brighton Pier, where you can stroll out over the waves, take in sweeping sea views, indulge in classic treats like candy floss, or even brave the rollercoaster for a thrill! <em>This excursion includes ticketed entry to Brighton Pier.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Oxford with Official Guided Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Spend a full day exploring the beautiful sights of Oxford on this full day walking tour of one of the world\'s oldest universities and surrounding city. You\'ll be guided by an Oxford University alumni, who will show you everything from the world-famous architectural jewels of the Bodleian Library, Radcliffe Camera and the Bridge of Sighs to the often-missed wonders hidden down small alleyways. Their first-hand knowledge of the University is unparalleled. <em>This excursion includes a ticketed guided tour and, where possible, entry into a college building.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Cambridge with Punting</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Premium Upgrade</p><p>On this full day trip, you\'ll get to explore stunning architecture, beautiful gardens and even Sir Isaac Newton\'s famous Apple Tree, all as you make your way to the launch point for your private punting boat. Here, you\'ll take a relaxing punt down the River Cam, offering you a one-of-a-kind view of the city and the famous Cambridge University. <em>This excursion includes ticketed entry to Cambridge Punting.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Thorpe Park Theme Park</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Spend the day testing your thrill-seeking limits at one of the largest theme parks in the UK. You\'ll get private coach transport to and from the park, and get an entire day of rollercoasters, rides and entertainment. The park has both extreme and more relaxed rides so there really is something for everyone. An exciting, fun day out of London. <em>This excursion includes ticketed entry to Thorpe Park.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Harry Potter Studio Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Premium Upgrade</p><p>This Warner Brothers studio tour takes you behind the scenes of the global phenomenon that is the Harry Potter movies. You\'ll walk through the main doors of Hogwarts and into the Great Hall, discover hidden secrets in the Room of Requirements and face your fears in the Forbidden Forest. Real sets, props and costumes along with interactive exhibits make this a truly memorable day for any Harry Potter fan. <em>This excursion includes ticketed entry to Warner Bros. Studio Tours.</em></p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">By Night Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">London By Night: The London Eye &amp; Southbank Evening Walk <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Take in breathtaking views of the city from one of London\'s most iconic landmarks, the London Eye, as you travel 135 metres above the city. As the sun sets, stroll along the vibrant Southbank, where twinkling lights, street performers, and cultural venues create an unforgettable atmosphere. From stunning skyline panoramas to lively riverside energy, this evening walk is the perfect way to experience London at its most magical. <em>This excursion includes ticketed entry to the London Eye.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">London by Night: Piccadilly, Leicester Square &amp; Chinatown</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>Experience the buzz of London\'s West End as you wander through its most iconic squares and streets. See the bright lights of Piccadilly Circus, soak up the energy of Leicester Square with its cinemas and street performers, then step into Chinatown to enjoy authentic restaurants, bakeries, and colourful lanterns. This lively trio of destinations is the perfect blend of culture, entertainment, and flavour at the heart of the city.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">London by Night: Popworld Disco</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: All London &nbsp;·&nbsp; Package: Deluxe</p><p>We take over an entire nightclub just for you! Meet students from all over the world and dance the night away on the light-up dancefloor at our Popworld Disco night in central London. Soft drinks are available at the bar, there is a photobooth to capture those crazy moments, and the DJ takes requests to really make your night memorable! <em>This excursion includes ticketed entry to Popworld.</em></p></div></div></details>',
          },
          {
            title: "Manchester",
            isAccordion: true,
            content:
              '<p style="margin-bottom:16px;">Welcome to Manchester! Our 2026 programme has been designed to ensure that you have the most enjoyable, memorable experience possible. You\'ll spend time exploring, learning and creating with students from all over the world, and our team of tour guides and activity leaders are there to make your summer unforgettable!</p><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">HD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Manchester Walking Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Familiarise yourself with the layout of the North\'s most vibrant city as you explore key districts of Manchester including China Town, the Northern Quarter, the Shopping District and more!</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Manchester Natural History Museum</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>The beautiful neo-gothic building houses more than 4.5 million historical objects and is one of the largest Natural History museums in the country. The museum\'s collections include significant archaeological finds, extensive zoological specimens, dinosaurs, and a renowned Egyptology collection.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sports</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Show off your football skills, try your hand at volleyball, or shoot for the hoop on the basketball courts of these state-of-the-art on-campus sports facilities. A range of sports across both indoor and outdoor pitches and courts are available.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Manchester Cathedral &amp; John Rylands Library</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Renowned for its striking architecture the John Rylands library will make you feel like you\'re at Hogwarts! It houses treasures like the St. John Fragment — the earliest known New Testament text — alongside a vast collection of rare books, manuscripts, and archives. Then it\'s on to the stunning 600-year-old Manchester Cathedral with intricate medieval woodwork, beautiful stained glass, and impressive stone architecture. The cathedral is a vibrant hub for worship, music, and community events, reflecting centuries of history and culture.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Science and Industry Museum</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Discover Manchester\'s rich industrial heritage. Housed in historic buildings, the museum offers fascinating exhibits on science, technology, and innovation, including steam engines, early computers, and space exploration. Learn about Manchester\'s pivotal role in shaping the modern world.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Manchester City FC Stadium Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Immerse yourself in the City Story on the Manchester City Stadium Tour. Visit areas of the Stadium not usually available to the public, interact with Pep Guardiola in the press room, walk out of the glass players\' tunnel, sit in the seats in the dug outs and soak up the views of the stadium from pitch side! <em>This excursion includes ticketed entry to Manchester City Stadium.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Imperial War Museum North &amp; Salford Quays</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Explore the impact of British conflict around the world, from the First World War to present day through audiovisual presentations and exhibits, then stretch your legs on a scenic walk of Salford Quays waterways and media district, home to the BBC and much more.</p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">FD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Liverpool</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Spend a full day exploring Liverpool, taking in the famous Albert Dock, the Beatles statues, and learn all about the city home to the most famous band in the world. You\'ll get a tour of the city, time for some light shopping and lunch, and a trip into the iconic Museum of Liverpool.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: North Wales</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Embark on an incredible journey incorporating stunning coastline, seaside resorts, ancient history and towering mountains — all in one day! This full day trip starts with a stroll down the pier in the pretty seaside town of Llandudno and a walk around the impressive medieval walls of Conwy and Conwy Castle. You\'ll then head into the mountains, climbing into Snowdonia National Park and driving through the stunning valleys and mountain roads, stopping for a short hike to a mountain lake, and incredible views! All led by private tour experts, this excursion is specifically designed for juniors.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Chester</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Spend a full day discovering the charming walled city of Chester, known for its rich Roman history and medieval architecture. Tour highlights include the ancient city walls, Chester Cathedral, and the unique Tudor-style "Rows" shops. With picturesque streets, historic landmarks, and a scenic riverside, it offers a perfect blend of heritage and beauty.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Leeds</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>Journey across the Pennines to Leeds and spend the day exploring this modern, bustling city. You\'ll start with a trip to the Royal Armouries Museum, home to an extensive collection of weapons, from medieval swords to modern firearms. With interactive exhibits, live combat demonstrations, and engaging displays, it offers an immersive experience guaranteed. Then it is time to head into the city centre for a chance to shop, eat and explore!</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: York</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Venture further north for a full day trip to one of the country\'s oldest cities, known for its stunning architecture, historical significance, and vibrant atmosphere. Our team will take you on a sightseeing tour of the fascinating and ancient city walls, York Minster, and the charming Shambles — a district that will make you feel like you have gone back in time. This trip is a favourite for its beauty, quirky shopping and history — bring a camera!</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: London Sightseeing Walking Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Soak up the sights of the nation\'s capital on this guided walking tour. Our tour begins in leafy Green Park before arriving at the gates of Buckingham Palace, where you\'ll get time for some great photos. You\'ll stroll through St. James\'s Park on the way to Westminster to see Big Ben, the Houses of Parliament, and Westminster Abbey. From there you\'ll pass Downing Street and the Cenotaph before reaching Trafalgar Square. You\'ll then visit one of our London centres for dinner. By the end of the day, you\'ll have ticked off all the major tourist sites from your London Bucket list, before heading back to Manchester late evening.</p><p>For an even better view of the city, add on the London Eye experience — full 360-degree views of the city from right on the River Thames gives you a chance for some incredible memories and photos.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Alton Towers Theme Park <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Spend the day at Britain\'s largest theme park where you\'ll get unlimited access to thrilling rollercoasters, wild river rapid rides and spooky haunted houses! This full day excursion is all about having fun, and there really is no better place for it. The theme park is set in 500 acres of forest and grounds surrounding Alton Castle and with over 40 rides and attractions you\'ll be sure to find something you\'ll enjoy! <em>This excursion includes ticketed entry to Alton Towers.</em></p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">By Night Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Manchester By Night: Trafford Centre</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: University of Manchester &nbsp;·&nbsp; Package: Deluxe</p><p>A true wonder of the shopping world, the Trafford Centre is a sight to behold. With a stunning architectural design, it features over 200 shops, a variety of restaurants, and entertainment options, including a cinema and bowling alley. The perfect evening trip to pick up some souvenirs for friends and family, or simply to walk around and admire the starry ceilings, marble statues, and two-storey water fountains. This excursion takes you out for the afternoon and into the evening, with dinner at the Trafford Centre. A student favourite every year!</p></div></div></details>',
          },
          {
            title: "Liverpool",
            isAccordion: true,
            content:
              '<p style="margin-bottom:16px;">Welcome to Liverpool! Our 2026 programme has been designed to ensure that you have the most enjoyable, memorable experience possible. You\'ll spend time exploring, learning and creating with students from all over the world, and our team of tour guides and activity leaders are there to make your summer unforgettable!</p><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">HD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Museum of Liverpool</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>Explore the Museum of Liverpool and discover the city\'s story through the music, football, and culture that changed the world. From the rise of the Beatles and Liverpool\'s maritime past to interactive exhibits on sports, fashion, and everyday life, there\'s something to spark everyone\'s curiosity.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sports</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>Show off your football skills, try your hand at volleyball, or shoot for the hoop on the basketball courts of these state-of-the-art on-campus sports facilities. A range of sports across both indoor and outdoor pitches and courts are available.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Anfield Stadium Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>On this trip you\'ll get to visit the home of Liverpool FC on a behind-the-scenes stadium tour. Visit the players\' dressing rooms, walk through the famous tunnel, and stand pitch side where footballing history has been made. Don\'t miss the chance to see the Kop stand, soak up the atmosphere of one of the world\'s most iconic grounds, and browse the club museum packed with trophies and memorabilia. A must for any football fan! <em>This excursion includes ticketed entry to Anfield Stadium.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sefton Park Scavenger Hunt</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>Explore one of Liverpool\'s most beautiful green spaces on a fun-filled scavenger hunt. Solve clues, crack challenges, and uncover hidden corners of this Victorian, 200-acre, UNESCO World Heritage site as you go. With its lakes, fountains, grottoes, and the stunning Palm House, Sefton Park is the perfect backdrop for an adventure that mixes teamwork with discovery.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">City Centre Shopping at Liverpool ONE</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>Time to pick up some souvenirs! Liverpool ONE is a unique shopping centre with over 170 different stores including many designer brands. We\'ll give you some free time to shop, snack and hang out with your friends.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Speke Hall Tudor House</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>We take you to this beautifully preserved Tudor manor house, filled with secret passages, oak-beamed rooms, and stories from centuries past. Wander through the stunning Victorian gardens, take in sweeping views of the River Mersey and get lost in Speke Hall\'s very own hedge maze! <em>This excursion includes ticketed entry to Speke Hall Grounds and House.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Mersey River Cruise</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>See Liverpool from the water! Hop aboard the famous Mersey Ferry for a scenic cruise along the river that shaped the city. Take in panoramic views of Liverpool\'s striking waterfront and skyline while learning about its rich maritime history. With plenty of fresh air, photo opportunities, and a chance to see both banks of the Mersey, this classic boat trip is one of the best ways to experience the city. <em>This excursion includes ticketed entry to the River Cruise.</em></p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">FD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Liverpool Walking Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>On this full-day walking tour you\'ll be taken through the city\'s must-see highlights. Starting in the lively Cavern Quarter, where the Beatles made their name, before heading to the towering Liverpool Cathedral, one of the largest in the world! You\'ll also get to explore the fascinating collections at the World Museum, then admire masterpieces at the Walker Art Gallery. It\'s the perfect way to experience Liverpool\'s culture, history, and iconic landmarks all in one day.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Manchester</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>This full-day walking tour showcases the city\'s mix of history, architecture, and culture. You\'ll get to explore the breathtaking John Rylands Library, a neo-Gothic masterpiece that feels just like Hogwarts, then visit the historic Manchester Cathedral with its beautiful stained glass and centuries of heritage. We\'ll also take you to the Manchester Art Gallery, home to an impressive collection of paintings and sculptures.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Chester</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>Spend a full day discovering the charming walled city of Chester, known for its rich Roman history and medieval architecture. Tour highlights include the ancient city walls, Chester Cathedral, and the unique Tudor-style "Rows" shops. With picturesque streets, historic landmarks, and a scenic riverside, it offers a perfect blend of heritage and beauty.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Wales Outdoor Adventure Day</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>We\'ll take you to Liverpool Hope University\'s Outdoor Education Centre in Wales, for a day of outdoor activities and teambuilding. Activities may include archery, canoeing, kayaking, and mountaineering, and are all run by fully trained professionals at the centre. <em>This excursion includes paid activities as part of the package.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Manchester Trafford Centre Shopping and Bowling</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Premium Upgrade</p><p>A true wonder of the shopping world, the Trafford Centre is a sight to behold. With a stunning architectural design, it features over 200 shops, a variety of restaurants, and entertainment options, including a cinema and bowling alley. The perfect trip to pick up some souvenirs for friends and family, or simply to walk around and admire the starry ceilings, marble statues, and two-storey water fountains. This excursion includes dinner at the Trafford Centre and a game of bowling! <em>This excursion includes paid activities as part of the upgrade package.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: London Sightseeing Walking Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Soak up the sights of the nation\'s capital on this guided walking tour. Our tour begins in leafy Green Park before arriving at the gates of Buckingham Palace, where you\'ll get time for some great photos. You\'ll stroll through St. James\'s Park on the way to Westminster to see Big Ben, the Houses of Parliament, and Westminster Abbey. From there you\'ll pass Downing Street and the Cenotaph before reaching Trafalgar Square. You\'ll then visit one of our London centres for dinner. By the end of the day, you\'ll have ticked off all the major tourist sites from your London Bucket list, before heading back to Liverpool late evening.</p><p>For an even better view of the city, add on the London Eye experience — full 360-degree views of the city from right on the River Thames gives you a chance for some incredible memories and photos.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Full Day Excursion: Alton Towers Theme Park <em>– New for 2026</em></h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Premium Upgrade</p><p>Spend the day at Britain\'s largest theme park where you\'ll get unlimited access to thrilling rollercoasters, wild river rapid rides and spooky haunted houses! This full day excursion is all about having fun, and there really is no better place for it. The theme park is set in 500 acres of forest and grounds surrounding Alton Castle and with over 40 rides and attractions you\'ll be sure to find something you\'ll enjoy!</p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">By Night Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Liverpool By Night: Albert Dock</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Centres: Liverpool Hope University &nbsp;·&nbsp; Package: Deluxe</p><p>You\'ll head over to the historic Albert Dock, where you can wander along the waterfront and take in the views across the Mersey as the lights reflect across the dock. With a bustling night atmosphere including street performers and music, it\'s the perfect mix of history, culture, and relaxed dockside vibes.</p></div></div></details>',
          },
          {
            title: "Canterbury",
            isAccordion: true,
            content:
              '<p style="margin-bottom:16px;">Welcome to Canterbury! Our 2026 programme has been designed to ensure that you have the most enjoyable, memorable experience possible. You\'ll spend time exploring, learning and creating with students from all over the world, and our team of tour guides and activity leaders are there to make your summer unforgettable!</p><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">HD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Canterbury City Walking Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Step back in time as you explore the charming cobbled streets of historic Canterbury on a guided walking tour. Discover medieval buildings, hidden alleyways, and famous landmarks while learning about the city\'s rich history, from Roman roots to literary legends. Along the way, soak up the lively atmosphere of independent shops, cafés, and traditional English architecture in one of the UK\'s most beautiful cathedral cities.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Canterbury Punting Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Sit back and relax as you glide along the peaceful River Stour on a traditional punting tour through the heart of Canterbury. Enjoy unique views of the city\'s historic buildings, picturesque bridges, and riverside gardens while your guide shares fascinating stories about Canterbury\'s past. This gentle and scenic excursion is the perfect way to experience the city from a different perspective. <em>This excursion includes ticketed entry to the punting tour.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Herne Bay Beach Experience</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Enjoy a classic British seaside experience with a visit to the charming coastal town of Herne Bay. Relax on the beach, stroll along the promenade, and take in the fresh sea air while enjoying traditional fish and chips by the waterfront. With its colourful seaside atmosphere and beautiful coastal scenery, Herne Bay is the perfect place for a relaxing afternoon by the sea. <em>This excursion includes a traditional fish and chips meal.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Kingsgate Castle &amp; Beach</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Discover the dramatic beauty of Kingsgate on this coastal excursion combining breathtaking scenery with historic charm. Visit the impressive Kingsgate Castle overlooking the cliffs before spending time on the nearby sandy beach and exploring the famous sea caves and coastal paths. Perfect for photography, relaxation, and enjoying the stunning Kent coastline, this trip offers a memorable escape from the city.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Canterbury Cathedral Visit</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Visit the world-famous Canterbury Cathedral, a UNESCO World Heritage Site and one of the most important religious buildings in England. Marvel at the stunning Gothic architecture, colourful stained-glass windows, and peaceful cloisters while learning about the cathedral\'s fascinating history and connection to Thomas Becket. Whether you\'re interested in history, architecture, or culture, this is an unforgettable experience in the heart of Canterbury. <em>This excursion includes ticketed entry to Canterbury Cathedral.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Whitstable &amp; Castle Tour</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Experience the charming seaside town of Whitstable, famous for its colourful beach huts, fresh seafood, and artistic atmosphere. Wander through the quaint streets and bustling harbour before visiting the beautiful Whitstable Castle and its peaceful gardens. With time to relax by the sea and explore local cafés and independent shops, this excursion offers the perfect mix of history, culture, and coastal charm.</p></div></div></details><details style="margin-bottom:8px;border:1px solid rgba(0,0,0,0.1);border-radius:8px;overflow:hidden;"><summary style="padding:12px 16px;cursor:pointer;font-weight:600;background:rgba(0,0,0,0.04);list-style:none;">FD Tours</summary><div style="padding:16px;display:flex;flex-direction:column;gap:20px;"><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Dover City Walk &amp; Dover Castle</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Explore the historic coastal town of Dover on a guided city walk before visiting the magnificent Dover Castle, one of Britain\'s most iconic fortresses. Discover centuries of history as you explore the castle grounds, secret wartime tunnels, and medieval towers overlooking the famous White Cliffs of Dover. With stunning sea views and fascinating stories from England\'s past, this excursion offers an unforgettable day by the coast. <em>This excursion includes ticketed entry to Dover Castle.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sightseeing Tour 1: Westminster</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Our tour begins in leafy Green Park before arriving at the gates of Buckingham Palace, the King\'s official residence, where you\'ll get time for some great photos. You\'ll stroll through the picturesque St. James\'s Park on the way to Westminster to see Big Ben, the Houses of Parliament, and Westminster Abbey. From there you\'ll pass Downing Street, the home of the Prime Minister, and the Cenotaph before reaching the bustling Trafalgar Square. In the afternoon you\'ll get to explore the world-renowned National Gallery, home to masterpieces by Van Gogh, Da Vinci, and Turner. The tour finishes with The Royal Cavalry Horse Guard Inspection, where you\'ll get to see some of the King\'s guards and their horses come out for a march and inspection in their finest uniforms. <em>This excursion includes ticketed entry to National Gallery.</em></p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Sightseeing Tour 2: Tower Hill and Southwark</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>On your second tour you\'ll start with views of the mighty Tower of London, where centuries of royal history and the Crown Jewels are housed. Walk alongside the castle walls and learn about the history of the Tower. You\'ll then cross the iconic Tower Bridge before wandering the bustling food stalls of Borough Market. You\'ll also get to see Shakespeare\'s Globe Theatre, a faithful reconstruction of the playwright\'s famous playhouse. We then take you across Millennium Bridge and finish at the magnificent St Paul\'s Cathedral, one of London\'s most awe-inspiring landmarks. This walk blends history, culture, and unforgettable views along the river.</p></div><div><h4 style="font-size:1rem;font-weight:700;margin-bottom:2px;">Canterbury City Scavenger Hunt</h4><p style="font-size:0.8rem;color:var(--color-text-light);margin-bottom:6px;">Package: Deluxe</p><p>Put your teamwork and problem-solving skills to the test on an exciting scavenger hunt through the historic streets of Canterbury. Follow clues, complete challenges, and discover hidden landmarks as you explore the city in a fun and interactive way. From medieval streets and famous monuments to quirky local spots, this adventure combines sightseeing with friendly competition, making it a fantastic activity for groups looking to experience Canterbury in a unique and memorable way.</p></div></div></details>',
          },
        ],
      },
    ],
  },
  {
    ...modulesB[2],
    subModules: [
      {
        ...modulesB[2].subModules[0],
        sections: [
          modulesB[2].subModules[0].sections[0],
          modulesB[2].subModules[0].sections[1],
          {
            title: "Video: The First Three Days",
            content:
              '<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;"><iframe src="https://www.youtube.com/embed/0olX-WHcaXw" title="The First Three Days" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div><p style="margin-top:1rem;">As a Tour Guide you will be mostly responsible for airport arrivals, however you may be asked to support the Campus Team with duties in the residence or touring the campus.</p>',
          },
          modulesB[2].subModules[0].sections[3],
          modulesB[2].subModules[0].sections[4],
          {
            title: "Day Zero - Airport Tasks",
            isAccordion: true,
            content:
              "<p>You must be at the airport 30 minutes before the landing time of the first group of the day. Your manager will give you a travel card or train tickets for your journey.</p><p><strong>Step 1:</strong> Speak to the Coach Marshal (not all airports have one) about your need for an upcoming coach pickup space. You'll also need to visit the coach pickup area and note down a pickup bay you want to use.</p><p><strong>Step 2:</strong> Contact the coach driver to confirm they are ready for pickup.</p><p><strong>Step 3:</strong> Check flight times and details, then wait at the arrivals gate.</p><p><strong>Step 4:</strong> Greet the students with enthusiasm and excitement, and introduce yourself to the students and the group leaders.</p><p><strong>Step 5:</strong> Allow for the students and group leaders to use the restroom or fill water bottles etc.</p><p><strong>Step 6:</strong> Escort the group to the coach pickup area and alert the coach marshal and coach driver that you are ready to board.</p><p><strong>Step 7:</strong> Confirm the drop-off details with the coach driver.</p><p><strong>Step 8:</strong> Hand the group leader their welcome pack and explain that someone will meet them when they arrive on campus.</p><p><strong>Step 9:</strong> Remain at the airport until your last allocated group, then return on the coach with your final group.</p>",
          },
        ],
      },
    ],
  },
  {
    ...modulesB[3],
    subModules: [
      {
        ...modulesB[3].subModules[0],
        sections: [
          {
            title: "What it Covers",
            content:
              "<p>There are four main categories of catering that we provide to the students: breakfast, lunch, dinner, and packed lunches. Depending on the site and day of the week, different plans apply. You can familiarise yourself with the key information below, however your specific site may have variations which will be discussed by the management team.</p>",
          },
          {
            title: "Responsibilities",
            content:
              "<p>As a tour guide, the only mealtimes you are required to take part in is during the full day excursions, during which students have packed meals at their destination. During these times you should sit and talk to the students and group leaders.</p><p>You will also need to liaise with the Campus team to ensure all the packed meals are ready for collection during or after breakfast service. You'll need to take your group to the packed meals for collection before setting off on your full day excursion.</p><p>Sitting with the students as you eat allows you to do the following:</p><ul><li><strong>Build a rapport with the students</strong> — make them feel welcome!</li><li><strong>Identify shy, quiet or introvert students</strong> — help forge friendships, be the ice breaker, or keep people company.</li><li><strong>Gather feedback on previous days</strong> — find out what they liked (or didn't like) to help improve the programme.</li><li><strong>Build excitement for upcoming tours and activities</strong> — a really important part of the process is to get people excited about their next adventure.</li><li><strong>Encourage signups and participation</strong> for the talent contest and other performance based evenings — find out who the confident loud ones are and get them on the signup list.</li><li><strong>Monitor for welfare concerns</strong> — identify changes in behaviour, unusual comments, student interaction and much more that could indicate a student is at risk. Perhaps they are not eating enough, hiding bruises, showing signs of crying. Informal mealtimes is a crucial time to spot areas of concern.</li></ul>",
          },
          modulesB[3].subModules[0].sections[2],
          {
            title: "Lunch",
            isAccordion: true,
            content:
              "<p><strong>Fully Catered</strong></p><p>Lunch is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary depending on the centre, and it is served in a buffet style of hot food. Depending on your centre, some lunches are served in the residential building.</p><p><strong>Packed Lunch</strong></p><p>Packed lunches consist of a sandwich/wrap/pasta, crisps and fruit. All students will be provided with a Language in Action water bottle, therefore, water is not included in packed meals.</p><p>Students, group leaders and all team members will get a packed lunch on arrival day, departure day, and every Saturday and Sunday. During these times the canteen will not operate.</p><p>Lunches are to be collected by the students at breakfast service, as the students do not return to the campus after their morning activity. The campus team will coordinate the collection of packed lunches. As tour guides you need to ensure all students and groups leaders have collected their packed meals before departure.</p><p>On sites where packed lunches are supplied by an external contractor, a Campus Leader will be scheduled to accept the delivery each applicable morning. Meals will then need to be stored in a refrigerated area if they are not being consumed by the next mealtime.</p><p>For example, meals delivered at 7am must be prepared for collection at breakfast service around 8am, for consumption at lunch. If the meals aren't due to be consumed until dinner, they must be stored in a refrigerated area until collection at lunchtime.</p>",
          },
          {
            title: "Dinner",
            isAccordion: true,
            content:
              "<p><strong>Fully Catered</strong></p><p>Dinner is served in the main canteen area for all students, group leaders and Language in Action team members. Times vary and it is served in a buffet style of hot food. Depending on your centre, some dinners are served in the residential building.</p><p><strong>Packed Dinner</strong></p><p>Packed dinners are identical to packed lunches in contents and are used for the midweek evening By Night activities for students who are on an afternoon tour.</p><p>Packed dinners are to be collected by the students at lunch service, as groups will not return to the campus after an afternoon activity. You will need to work with the campus team to coordinate the collection of packed meals (typically you'll liaise with the relevant group leader, and it is the group leader who will instruct the students) and also for the final numbers check.</p><p><strong>Excursion / Special Dinners</strong></p><p>On occasion, and depending on the site and group bookings, there will be certain evenings where the canteen is closed, or the group have booked to eat in a restaurant. Dinners in a restaurant will be booked in advance and will vary by location. Other options include special mealtimes such as Pizza Night, for which pizzas will be pre-ordered. These takeaway nights are scheduled into most centre's timetable for either a Saturday or Sunday night. This will be coordinated by the campus team.</p>",
          },
        ],
      },
    ],
  },
  ...modulesB.slice(4),
];

export const modulesByGroup: Record<UserGroup, Module[]> = {
  A: [...modules],
  B: [...modulesB],
  C: [...modulesC],
};

export const staffByGroup: Record<UserGroup, typeof staff> = {
  A: [...staff],
  B: [...staff],
  C: [...staff],
};

export const glossaryTermsByGroup: Record<UserGroup, typeof glossaryTerms> = {
  A: [...glossaryTerms],
  B: [...glossaryTerms],
  C: [...glossaryTerms],
};
