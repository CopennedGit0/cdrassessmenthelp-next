import React from 'react'
import {  Container} from 'react-bootstrap'
import {useRouter} from "next/router"
import Head from 'next/head'
import Anz1 from '../../Components/specificanzsco/Anz1'
import Anz2 from '../../Components/specificanzsco/Anz2'
import Anz3 from '../../Components/specificanzsco/Anz3'
import Anz4 from '../../Components/specificanzsco/Anz4'
import Anz5 from '../../Components/specificanzsco/Anz5'
import Anz6 from '../../Components/specificanzsco/Anz6'

const Specificanzsco = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassessmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const anzsco=router.query.anzsco
  const allData={
    chemicalEngineer:{
        title:`Chemical and Materials 
        Engineer ANZSCO Unit 
        Group-2331.`,
        description:`Your draft of CDR may contain errors in various aspects. Our CDR 
        reviewing service suggests the best ways to present your skills, 
        knowledge, qualification and experience in writing for the approval 
        of Engineers Australia.   `,
        image: `/images/chemical.png`
        ,

        unitGroupTitle1:`ANZSCO Unit Group-2331 `,
        unitGroupTitle2:`ANZSCO Unit Group-2331 Chemical and Materials Engineer.`,
        unitGroupTitle2Description:`ANZSCO Unit Group-2331 Chemical and Materials Engineer.`,

        skillLevelTitle:`Skill level for Chemical and Materials Engineer:`,
        skillLevelDescription:`Level 1 or Equivalent`,

        skillAssessmentTitle:`Skill Assessment Authority of Chemical and Materials Engineer`,
        skillAssessmentDescription:`EA (Engineers Australia) / AIM`,

        visaProvisionTitle:`Visa Provision for Chemical and Materials Engineer ANZSCO Unit Group-2331`,
        visaProvisionDescription:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration 
        (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 
        491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer
        sponsored visas.`,


        occupationListTitle:`On the Occupation List 0f Chemical and Materials Engineer ANZSCO Unit Group-2331:`,
        occupationList:[`489 (S/T) Occupations List
        `,`482 TSS Visa Medium Term List
        `,`407 Training visa occupations List
        `,`482 TSS Visa Regional Occupation List
        `,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
        `,`190 State/Territory Sponsored 
        `,`186 ENS Visa Occupations List
        `,`187 RSMS Visa Occupations List
        `,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
        `,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
        `],

         
       



        skillLevelTitle2:`Skill Level required for Chemical and Materials Engineer ANZSCO Unit Group-2331`,
        skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years 
        of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant 
        experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


       exceptionsTitle:`Exceptions for Chemical and Materials Engineer ANZSCO Unit Group-2331.`,
       exceptionsList:[`Australian Graduate exceptions apply in some states/territories
       `,`Priority Skilled Lists may apply a specific requirement in some states
       `,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
       registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
       equivalent, whichever is higher.
            `],



      languageTitle:`ANZSCO Unit Group-2331 Chemical and Materials Engineers require a level of 
      language proficiency`,
      languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
      `,`OET result with a minimum grade B in all sections;
      `,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
      `,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
      `],
      
      occupationsTitle:`Occupations in Chemical and Materials Engineer. ANZSCO Unit Group-2331`,
      occupationsList:[`233111 Chemical Engineer
      `,`233112 Materials Engineer
      `],

      anzscoTitle:`Chemical Engineer ANZSCO-233111`,
      anzscoDescription:`Chemical Engineer designs and develops specifications for chemical process systems. Chemical engineer works on building and 
      managing commercial-scale chemical plants and oversees industrial processing and manufacture of products undergoing physical 
      and chemical changes. It is possible that registration or licensing will be required. `,
      
      tasksTitle:`Chemical Engineers are responsible for the following tasks:`,
      tasks:[`Chemical engineers design chemical process systems and planning control systems for operations such as removing and separating 
      components, effecting chemical changes, testing and evaluating fuels, transferring heat, and controlling the storage and handling of 
      solids, liquids, and gases.
      `,`Chemical engineers maintain regular communication with material producers, such as metals, ceramics, polymers, cement, and 
      elastomers, throughout the exploration and assessment of materials suited for specific product applications.
      `,`Chemical engineers met the requirement by using appropriate materials and equipment.
      `,`It’s the Chemical engineer’s duty to plan and carry out laboratory operations for the development of new materials, as well as 
      fabrication techniques for new materials to meet manufacturing cost and performance criteria.
      `,`Checking equipment operation and maintenance to ensure optimal efficiency under safe operating circumstances is the 
      responsibility of chemical engineers.
      `,`Chemical engineers ensure the proper materials and equipment are utilised and meet standards.
      `,`Chemical engineer investigates product use and pollution control issues.
      `,`Examining new product plans and giving material selection suggestions based on design criteria and considerations such as 
      strength, weight, and cost falls under civil engineering.
      `,`It’s the Chemical engineer’s duty to plan and carry out laboratory operations for the development of new materials, as well as 
      fabrication techniques for new materials to meet manufacturing cost and performance criteria.
      `,`Chemical engineers review product failure data and conduct laboratory testing to determine or rule out potential reasons and 
      provide advice on how to resolve any issues.
      `]






    },

    materialsEngineer:{
      title:`ANZSCO Unit Group-2331`,
      description:`Your draft of CDR may contain errors in various aspects. Our CDR 
      reviewing service suggests the best ways to present your skills, 
      knowledge, qualification and experience in writing for the approval 
      of Engineers Australia.   `,
      image: `/images/specificanzsco/material.png`,

      unitGroupTitle1:`ANZSCO Unit Group-2331 `,
      unitGroupTitle2:`ANZSCO Unit Group-2331 Chemical and Materials Engineer.`,
      unitGroupTitle2Description:`Chemical and Materials Engineers play an essential role in designing and preparing specifications for chemical process systems. Engineers are also responsible for constructing and operating commercial-scale chemical plants and supervising industrial processing and fabrication of products undergoing physical and chemical change.

      Another function of Chemical and Materials Engineers is to explore the characteristics of metals, ceramics, polymers, and other materials and evaluate and develop their technical and commercial applications.
      `,

      skillLevelTitle:`Skill level for Chemical and Materials Engineer:`,
      skillLevelDescription:`Level 1 or Equivalent`,

      skillAssessmentTitle:`Skill Assessment Authority of Chemical and Materials Engineer`,
      skillAssessmentDescription:`EA (Engineers Australia) / AIM`,

      visaProvisionTitle:` Visa Provision for Chemical and Materials Engineer ANZSCO Unit Group-2331 `,
      visaProvisionDescription:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration 
      (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 
      491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer
      sponsored visas.`,


      occupationListTitle:`On the Occupation List 0f Chemical and Materials Engineer ANZSCO Unit Group-2331:`,
      occupationList:[`489 (S/T) Occupations List
      `,`482 TSS Visa Medium Term List
      `,`407 Training visa occupations List
      `,`482 TSS Visa Regional Occupation List
      `,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
      `,`190 State/Territory Sponsored 
      `,`186 ENS Visa Occupations List
      `,`187 RSMS Visa Occupations List
      `,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
      `,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
      `],



      skillLevelTitle2:`Skill Level required for Chemical and Materials Engineer ANZSCO Unit Group-2331`,
      skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years 
      of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant 
      experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


     exceptionsTitle:`Exceptions for Chemical and Materials Engineer ANZSCO Unit Group-2331.`,
     exceptionsList:[`Australian Graduate exceptions apply in some states/territories
     `,`Priority Skilled Lists may apply a specific requirement in some states
     `,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
     registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
     equivalent, whichever is higher.
          `],



    languageTitle:`ANZSCO Unit Group-2331 Chemical and Materials Engineers require a level of 
    language proficiency`,
    languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
    `,`OET result with a minimum grade B in all sections;
    `,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
    `,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
    `],
    
    occupationsTitle:`Occupations in Chemical and Materials Engineer. ANZSCO Unit Group-2331`,
    occupationsList:[`233111 Chemical Engineer
    `,`233112 Materials Engineer
    `],

    anzscoTitle:`Chemical Engineer ANZSCO-233111`,
    anzscoDescription:`Chemical Engineer designs and develops specifications for chemical process systems. Chemical engineer works on building and 
    managing commercial-scale chemical plants and oversees industrial processing and manufacture of products undergoing physical 
    and chemical changes. It is possible that registration or licensing will be required. `,
    
    tasksTitle:`Materials Engineers are responsible for the following tasks:`,
    tasks:[`  Materials engineers monitor equipment operation and maintenance to ensure optimal efficiency under safe operating conditions.
    `,` Materials engineers design chemical process systems for processes such as removing and separating components, effecting chemical changes, transferring heat, transferring heat, testing and evaluating fuels. 
    `,` Materials engineers develop control systems for controlling the storage and handling of solids, liquids, and gases.
    `,` Materials engineers communicate with material manufacturers during the discovery and assessment of materials appropriate for specific product applications.
    `,` Materials engineers identify and correct flaws in chemical plants researching product utilization and pollution control issues.
    `,` Material engineers plan and carry out laboratory activities to create new materials and fabrication techniques for new materials in order to meet manufacturing cost and performance specifications
    `,` Material engineers assess new product concepts and propose material choices.
    `,` Material engineers make suggestions based on design standards and characteristics such as weight, strength and cost. 

    `]






  },

  engineeringManager:{
    title:`ANZSCO Unit Group-2331`,
    description:`Your draft of CDR may contain errors in various aspects. Our CDR 
    reviewing service suggests the best ways to present your skills, 
    knowledge, qualification and experience in writing for the approval 
    of Engineers Australia.   `,
    image: `/images/specificanzsco/manager.png`,

    unitGroupTitle1:`ANZSCO Unit Group-1332`,
    unitGroupTitle2:`ANZSCO Unit Group-1332 Engineering Manager.`,
    unitGroupTitle2Description:`Engineering managers observe performance, quality, cost, safety and timelines to ensure engineering standards. To achieve construction and production requirements engineering managers provide advice on engineering methods and procedures based on drawings, specifications and interpreting plans.
    `,

    skillLevelTitle:`Skill level for Engineering Manager:`,
    skillLevelDescription:`Level 1 or Equivalent`,

    skillAssessmentTitle:`Skill Assessment Authority of Engineering Manager`,
    skillAssessmentDescription:`EA (Engineers Australia) / AIM`,

    visaProvisionTitle:`Visa Provision for Engineering Manager ANZSCO Unit Group-1332.`,
    visaProvisionDescription:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration 
    (GSM) Program can be applied for. Visas in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 
    491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer
    sponsored visas.`,


    occupationListTitle:`On the Occupation List 0f Engineering Manager ANZSCO Unit Group-1332:`,
    occupationList:[`489 (S/T) Occupations List
    `,`482 TSS Visa Medium Term List
    `,`407 Training visa occupations List
    `,`482 TSS Visa Regional Occupation List
    `,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
    `,`190 State/Territory Sponsored 
    `,`186 ENS Visa Occupations List
    `,`187 RSMS Visa Occupations List
    `,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
    `,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
    `],

   





    skillLevelTitle2:`Skill Level required for Engineering Manager ANZSCO Unit Group-1332.`,
    skillLevelDescription2:`Most of the occupations listed in this unit group have a skill level 
    Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


   exceptionsTitle:`Exceptions for Engineering Manager ANZSCO Unit Group-1332.`,
   exceptionsList:[`Australian Graduate exceptions apply in some states/territories
   `,`Priority Skilled Lists may apply a specific requirement in some states
   `,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
   registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
   equivalent, whichever is higher.
        `],



  languageTitle:`ANZSCO Unit Group-1332 Engineering Manager requires a level of language proficiency.`,
  languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
  `,`OET result with a minimum grade B in all sections;
  `,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
  `,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
  `],
  
  occupationsTitle:`Occupations in Engineering Manager. ANZSCO Unit Group-2331.`,
  occupationsList:[`133211 Engineering Manager
  `],

  anzscoTitle:`Engineering Manager ANZSCO-133211.`,
  anzscoDescription:`Chemical Engineer designs and develops specifications for chemical process systems. Chemical engineer works on building and managing commercial-scale chemical plants and oversees industrial processing and manufacture of products undergoing physical and chemical changes. It is possible that registration or licensing will be required. `,
  
  tasksTitle:`Engineering Managers are responsible for the following tasks:`,
  tasks:[`  Engineering managers are responsible for the determination of strategies, policies and plans and monitoring them after they are implemented.
 `,`  To achieve construction and production requirements engineering managers provide advice on engineering methods and procedures based on drawings, specifications and interpreting plans.  
 `,`  Engineering managers establish project schedules and budgets.
 `,`  It’s the responsibility of the engineering manager to ensure the conformity with regulations, laws, specifications, plans and safety standards.
 `,`  Engineering managers observe performance, quality, cost, safety and timelines to ensure engineering standards.
 `,`  Engineering managers supervise maintenance requirements to optimize efficiency 
 `,`  overseeing maintenance requirements to optimise efficiency
 `,`  liaising with marketing, research and manufacturing managers regarding engineering aspects of new construction and product design
   may contribute to research and development projects


  `]






},



electricalEngineer:{
  title:`ANZSCO Unit Group-2331`,
  description:`Your draft of CDR may contain errors in various aspects. Our CDR 
  reviewing service suggests the best ways to present your skills, 
  knowledge, qualification and experience in writing for the approval 
  of Engineers Australia.   `,
  image: `/images/specificanzsco/Electrical.png`,

  unitGroupTitle1:`ANZSCO Code 233311. `,
  unitGroupTitle2:`ANZSCO 233311 Electrical Engineer.`,
  unitGroupTitle2Description:`Electrical engineers are responsible for the generation, distribution, utilization and control of electric power.  Electrical engineers design develops and supervises the manufacture, installation and operation of systems for the utilization of electric power. Electric engineers supervise the maintenance of equipment, machines and systems for the generation, distribution, utilisation and control of electric power. It is possible that registration or licensing will be required. `,

  skillLevelTitle:`Skill level for Electrical Engineer:`,
  specializationsTitle:`Specialisations of Electrical Engineer:`,
  specializationsList:[`Electrical Design Engineer`,`Railway Signaling Engineer`,`Signalling and Communications Engineer`],
  skillLevelDescription:`Level 1 or Equivalent`,

  skillAssessmentTitle:`Skill Assessment Authority of Electrical Engineer:`,
  skillAssessmentDescription:`EA (Engineers Australia) / AIM`,

  


  occupationListTitle:`On the Occupation List 0f Engineering Manager ANZSCO Unit Group-1332:`,
  occupationList:[`489 (S/T) Occupations List
  `,`482 TSS Visa Medium Term List
  `,`407 Training visa occupations List
  `,`482 TSS Visa Regional Occupation List
  `,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
  `,`190 State/Territory Sponsored 
  `,`186 ENS Visa Occupations List
  `,`187 RSMS Visa Occupations List
  `,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
  `,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
  `],

   
  visaProvisionTitle:`Visa Provision for Engineering Manager ANZSCO Unit Group-1332.`,
  visaProvisionDescription:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.


`,



  skillLevelTitle2:`Skill Level required for Electrical Engineers..`,
  skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


 exceptionsTitle:`Exceptions for Unit Group 2333.`,
 exceptionsList:[`Australian Graduate exceptions apply in some states/territories
 `,`Priority Skilled Lists may apply a specific requirement in some states
 `,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
 registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
 equivalent, whichever is higher.
      `],



languageTitle:`Required language proficiency for Electrical Engineers.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in 2333 Unit Group.`,
occupationsList:[`233311 Electrical Engineer
`],

anzscoTitle:`Engineering Manager ANZSCO-133211.`,
anzscoDescription:`Chemical Engineer designs and develops specifications for chemical process systems. Chemical engineer works on building and managing commercial-scale chemical plants and oversees industrial processing and manufacture of products undergoing physical and chemical changes. It is possible that registration or licensing will be required. `,

tasksTitle:`Electrical Engineers are responsible for the following tasks:`,
tasks:[`            Electrical engineers plan and design power generating equipment and power stations to utilize generated electric power.
`,` Electrical engineers determine the efficient type and arrangement of circuits, transformers, circuit-breakers, transmission lines and other equipment.
`,` Electrical engineers work to innovate and invent components, equipment and appliances to generate and utilize electric power.
`,` Electrical engineers interpret specifications, drawings, standards and regulations relating to electric power equipment and its use.
`,` Resources used in the supply of electrical components, machines, appliances and equipment are organized and managed by electric engineers.
`,` Electrical engineers establish delivery and installation schedules for machines, switchgear, cables and fittings.
`,` Operation and maintenance of power stations are the responsibility of electrical engineers.
`,` Electrical engineers supervise the operation of generation, transmission and distribution from industrial electric plants.
`,` Electrical engineers design, install and control signalling equipment for road, rail and air traffic.



`]






},




electronicsEngineer:{
title:`ANZSCO Code 233411. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.   `,
image: `/images/specificanzsco/Electronics.png`,

unitGroupTitle1:`ANZSCO Code 233411.  `,
unitGroupTitle2:`ANZSCO 233411 Electronics Engineer.`,
unitGroupTitle2Description:`Electronic engineer develops and maintains electronic components and system used in communication and warfare systems with various other industrial applications. Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors. Registration or licensing may be required.`,

skillLevelTitle:`Skill level for Electronics Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:`Specialisations of Electronics Engineer:`,
specializationsList:[`Combat System Engineer`],

skillAssessmentTitle:`Skill Assessment Authority of Electronics Engineer:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Electronics Engineer:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Electronics Engineer.`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Electronics Engineer.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


exceptionsTitle:`Exceptions for Unit Group 2334.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Required language proficiency for Electronics Engineer.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2334 Unit Group.`,
occupationsList:[`233411 Electronics Engineer.
`],

anzscoTitle:`Unit Group 2334: Electronics Engineers.`,
anzscoDescription:`Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors. Electronic engineer develops and maintains electronic components and system used in communication and warfare systems with various other industrial applications. Registration or licensing may be required.
`,
tasksTitle:`Electronics Engineers are responsible for the following tasks:`,
tasks:[`                Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors.
`,` Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors. 
`,` Electronic engineers design especially embedded software to be used within electronic systems.
`,` Electronic engineers develop procedures to test electronic components, circuits and systems.
`,` Electronic engineers ensure proper control and protection by supervising computer, communication, and control systems' installation and commissioning.
`,` Electronic engineers monitor performance and safety standards.
`,` Electronic engineers establish procedures for operating, modifying, maintaining, and repairing such systems.
`,` Based on wired optical fibre and wireless communication media, electronic engineers design communications bearers.
`,` Electronic engineers determine the type of installation, location, layout and transmission medium for communication analysing communication traffic and level of service.



`]






},

miningEngineer:{
title:`Mining Engineer ANZSCO 233611 CDR Sample. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.   `,
image: `/images/specificanzsco/Mining.png`,

unitGroupTitle1:`ANZSCO Code 233611.  `,
unitGroupTitle2:`ANZSCO 233611 Mining Engineer (Excluding Petroleum).`,
unitGroupTitle2Description:`Mining Engineer plans and directs the engineering aspects of locating and extracting minerals from the earth. Mining Engineers plan and coordinate the engineering elements of mineral exploration and extraction from the earth. Mining engineers plan and direct the engineering elements of identifying and extracting minerals from the ground. 
Mining Engineers undertake preliminary surveys of mineral, petroleum, and natural gas deposits with prospectors, geologists, geophysicists, other mineral scientists, and engineers to identify the available resources. It is possible that registration or licensing will be required.`,

skillLevelTitle:`Skill level for Mining Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:`Specialisationsof Mining Engineer:`,
specializationsList:[`Process Engineer (Mining)`],

skillAssessmentTitle:`Skill Assessment Authority of Mining Engineer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Mining Engineer:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Mining Engineer.`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Mining Engineer.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).`,


exceptionsTitle:`Exceptions for Unit Group 2336.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Required level of language proficiency required for Mining Engineer.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2336 Unit Group.`,
occupationsList:[`    233611 Mining Engineer (excluding Petroleum)
`,`233612 Petroleum Engineer.

`],

anzscoTitle:`Unit Group 2334: Electronics Engineers.`,
anzscoDescription:`Electronic engineers develop, design, install and test electronic circuits and systems used in computer, command, entertainment, transport, and other industrial sectors. Electronic engineer develops and maintains electronic components and system used in communication and warfare systems with various other industrial applications. Registration or licensing may be required.
`,
tasksTitle:`Mining Engineers (Excluding Petroleum) are responsible for the following tasks:`,
tasks:[`  Managing maintenance requirements to maximise efficiency.
`,`Engineering strategies, policies, and plans must be developed, implemented, and monitored.
`,`Assuring compliance with specifications and plans and laws, regulations, and safety requirements.
`,` Interpreting plans, drawings, and specifications and advising on engineering processes and procedures to meet construction and production goals.
`,` It is possible to contribute to research and development initiatives.
`,` Creating project timelines and budgets.
`,`Ensuring that engineering quality, cost, safety, timeliness, and performance criteria are met.



`]






},

aeronauticalEngineer:{
title:`Aeronautical Engineer ANZSCO 233911 CDR Sample. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.   `,
image: `/images/specificanzsco/Aeronautical.png`,

unitGroupTitle1:`ANZSCO Code 233911.   `,
unitGroupTitle2:`ANZSCO 233911 Aeronautical Engineer.`,
unitGroupTitle2Description:`Aeronautical Engineer performs engineering work concerned with the design and development of aircraft for flight. Aeronautical engineers design propulsion systems and study the aerodynamic performance of aircraft and construction materials used for the manufacture of aircraft for flight. Aeronautical engineers are responsible for the maintenance of aircraft before flight. It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Aeronautical Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:`Specialisations of Aeronautical Engineer:`,
specializationsList:[`    • Aeronautical Engineering Officer (Navy)
`,`• Aerospace Engineer
`,`• Aerospace Engineer Officer - Aeronautical (Air Force)
`,`• Aerospace Engineer Officer - Armament (Air Force)
`,`• Aerospace Engineer Officer - Electronics (Air Force)
`,`• Avionics Systems Engineer
`,`• Weapons Aeronautical Engineering Officer (Navy)

`],


skillAssessmentTitle:`Skill Assessment Authority of Aeronautical Engineer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Aeronautical Engineers:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Aeronautical Engineer. `,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Aeronautical Engineer.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).

`,

exceptionsTitle:`Exceptions for Unit Group 2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Language proficiency to be eligible for Aeronautical Engineer.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`        233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec


`],

anzscoTitle:`Unit Group 2339: Other Engineering Professionals.`,
anzscoDescription:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.

`,
tasksTitle:`Aeronautical Engineers are responsible for the following tasks:`,
tasks:[`  Aeronautical engineers prepare designs for aeronautical process systems.
`,` Aeronautical engineers remove and separate components affecting aeronautical changes.
`,` Aeronautical engineers test and evaluate fuels, transferring heat.
`,` To achieve maximum efficiency under safe operating conditions, Aeronautical engineers control the store of solids, liquids and gases.
`,` Aeronautical engineers ensure proper use and utilisation of material and equipment.
`,` Aeronautical engineers implement corrective action by researching product usage and pollution control concerns.
`,` Aeronautical engineers ensure materials and equipment meet the requirements of troubleshooting failures in aeronautical facilities.
`,` Aeronautical engineers analyse new product plans based on design standards and considerations such as strength, weight, and cost.
`,` Aeronautical engineers make material selection suggestions design standards and considerations such as strength, weight, and cost.



`]






},

agricultureEngineer:{
title:`Agriculture Engineer ANZSCO 233912 CDR Sample. `,
description:`Agricultural engineers work for the development of agricultural production and processing. Agricultural engineers perform and supervise engineering work related to the use and development of agricultural land and equipment. It is possible that registration or licensing will be required.`,
image: `/images/specificanzsco/agriculture.png`,

unitGroupTitle1:`ANZSCO Code 233912.   `,
unitGroupTitle2:`ANZSCO 233912 Agriculture Engineer.`,
unitGroupTitle2Description:`Agricultural engineers work for the development of agricultural production and processing. Agricultural engineers perform and supervise engineering work related to the use and development of agricultural land and equipment. It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Agriculture Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Alternative Title of Agriculture Engineer:",
specializationsList:["Natural Resource Engineer"],

skillAssessmentTitle:`Skill Assessment Authority of Agriculture Engineer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Agriculture Engineers:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Agriculture Engineer`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Agriculture Engineer.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Unit Group 2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Language proficiency to be eligible for Agriculture Engineer.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`           233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec

`],

anzscoTitle:`Unit Group 2339: Other Engineering Professionals.`,
anzscoDescription:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
`,
tasksTitle:`Agriculture Engineers are responsible for the following tasks:`,
tasks:[`Agricultural engineers design, develop and direct the production of mechanical equipment used on a farm.
`,` Agricultural engineers create plans for the construction of farm buildings and equipment.
`,` Agricultural engineers supervise agricultural processing plants, animal systems and animal production systems.
`,` Agricultural engineers plan and design irrigation systems, food control systems and drainage systems.
`,` Agricultural engineers design and supervise the installation of numerous pieces of equipment and instruments required to process and analyse diverse farm goods.
`,` Agricultural engineers investigate numerous environmental facts such as humidity, temperature, pressure, light, animals, plants, or the use of various pesticides.


`]






}
,
navalArchitect:{
title:`Naval Architect / Marine Designer ANZSCO 233916- CDR Sample. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.`,
unitGroupTitle1:`ANZSCO Code 233916.    `,
unitGroupTitle2:`ANZSCO 233916- Naval Architect / Marine Designer.`,
unitGroupTitle2Description:`Naval Architect / Marine Designer Designs the construction of marine craft and floating structures. Naval Architect / Marine Designer supervise the repair of marine craft and floating structures. Registration or licensing may be required It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Naval Architect / Marine Designer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Naval Architect / Marine Designer:",
specializationsList:["Shipbuilding Designer"],

skillAssessmentTitle:`Skill Assessment Authority of Naval Architect / Marine Designer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Naval Architect / Marine Designer:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Naval Architect / Marine Designer. `,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Naval Architect / Marine Designer.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).

`,

exceptionsTitle:`Exceptions for Unit Group 2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Language proficiency to be eligible for Naval Architect / Marine Designer.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`            233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec

`],

anzscoTitle:`Unit Group 2339: Other Engineering Professionals.`,
anzscoDescription:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
`,
tasksTitle:`Naval Architect / Marine Designer is responsible for the following tasks:`,
tasks:[`  Naval Architect / Marine Designer prepares the flow of the project by portraying tasks in a diagram.
`,` Naval Architect / Marine Designer carries out required calculations for the hull structure. 
`,` Naval Architect / Marine Designer develop standards and regulations for testing, modification, development, quality, control, tracking, maintenance, and inspection.
`,` Naval Architect / Marine Designer prepare the Nesting for the cutting of steel plate for generating the bills of materials by using the auto nesting software. 
`,` Naval Architect / Marine Designer develop the package of workshop document which includes the documents of drawing issued to the production departments for building the unit.
`,`aval Architect / Marine Designer creates the drawings of the working process for the fabrication of the unit by showing the plan of assembly and methods of building for the hull units.


`]






},


biomedicalEngineer:{
title:`Other Engineering Professionals ANZSCO Unit Group-2339.`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.
`,
image:`/images/specificanzsco/bio.png`,

unitGroupTitle1:`ANZSCO Unit Group-2339    `,
unitGroupTitle2:`ANZSCO Unit Group-2339 Other Engineering Professionals.`,
unitGroupTitle2Description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Biomedical Engineer`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Biomedical Engineer:",
specializationsList:[` Bioengineer
`,`   Clinical Engineer
`,` Medical Engineer`],

skillAssessmentTitle:`Skill Assessment Authority of Naval Architect / Marine Designer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Naval Architect / Marine Designer:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Naval Architect / Marine Designer. `,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Other Engineering Professionals ANZSCO Unit Group-2339.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).


`,

exceptionsTitle:`Exceptions for Other Engineering Professionals ANZSCO Unit Group-2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2339 Other Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`            233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec

`],

anzscoTitle:`Biomedical Engineer ANZSCO-233913.`,
anzscoDescription:`Biomedical engineers develop equipment for improving human health. Biomedical engineers focus on advancements in technology and medicine to create new devices for the betterment of human health. Biomedical engineers apply the knowledge and methodology of physics, engineering, mathematics, computing, and material science to treat and prevent human disease. It is possible that registration or licensing will be required.

`,
tasksTitle:`Biomedical Engineers are responsible for the following tasks:
`,
tasks:[`Biomedical engineers design and develop different medical instruments for measuring physical patterns affecting patients, particularly those in intensive care units or having surgery.
`,`Biomedical engineers are responsible for Bio-electrical examination of the brain and heart.
`,`Biomedical engineers have a solid understanding of mechanics to study the human musculoskeletal system and construct supporting devices to aid inpatient rehabilitation.
`,`Biomedical engineers create artificial organs and innovative implantable materials.

`]






},


engineeringTechnologist:{
title:`Other Engineering Professionals ANZSCO Unit Group-2339.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.  `,
image:`/images/specificanzsco/tech.png`,

unitGroupTitle1:`ANZSCO Unit Group-2339   `,
unitGroupTitle2:`ANZSCO Unit Group-2339 Other Engineering Professionals.
`,
unitGroupTitle2Description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Engineering Technologists`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Biomedical Engineer:",
specializationsList:[` Biomedical Engineering Technologist
`,` Industrial Engineering Technologist
`,` Mining Engineering Technologist
`,` Safety Engineering Technologist
`,` Structural Engineering Technologist
Eng`],

skillAssessmentTitle:`Skill Assessment Authority of Engineering Technologists`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Engineering Technologists`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Engineering Technologists `,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Other Engineering Professionals ANZSCO Unit Group-2339.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).


`,

exceptionsTitle:`Exceptions for Other Engineering Professionals ANZSCO Unit Group-2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2339 Other Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`            233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec

`],

anzscoTitle:`Engineering Technologist ANZSCO-233914.
`,
anzscoDescription:`Engineering technologists analyse and modify existing technology to create and test other engineering projects. Engineering technologist adjusts existing engineering technologies to apply them in the testing and implementation of engineering projects. It is possible that registration or licensing will be required. 


`,
tasksTitle:`Engineering Technologist are responsible for the following tasks:
`,
tasks:[` Engineering technologists inspect the plans to ensure optimum performance.
`,` Engineering technologists develop regulations for the installation of equipment in industries.
`,` Engineering technologists develop standards and regulations for testing, modification, development, quality, control, tracking, maintenance, and inspection.
`,` The pans are scheduled, and the engineering technologists detail the manufacturing operations.
`,` Engineering technologists prepare the contractors and pre-specify the plan's construction and facility purchases.
`,` Engineering technologists assist with any plan in building and equipment plans for collaborating with management needs in creating new surveys, items, and planned maintenances.

`]






},



environmentalEngineer:{
title:`Other Engineering Professionals ANZSCO Unit Group-2339.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.
`,
image:"/images/specificanzsco/en.png",

unitGroupTitle1:`ANZSCO Unit Group-2339   `,
unitGroupTitle2:`ANZSCO Unit Group-2339 Other Engineering Professionals.
`,
unitGroupTitle2Description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Environmental Engineer`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[``],

skillAssessmentTitle:`Skill Assessment Authority of Environmental Engineer`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Environmental Engineer`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Environmental Engineer`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Other Engineering Professionals ANZSCO Unit Group-2339.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).


`,

exceptionsTitle:`Exceptions for Other Engineering Professionals ANZSCO Unit Group-2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2339 Other Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`            233911 Aeronautical Engineer
`,` 233912 Agricultural Engineer
`,` 233913 Biomedical Engineer
`,` 233914 Engineering Technologist
`,` 233915 Environmental Engineer
`,` 233916 Naval Architect / Marine Designer
`,` 233999 Engineering Professionals nec

`],

anzscoTitle:`Environmental Engineer ANZSCO-233915.
`,
anzscoDescription:`Environmental engineers assess the impact on air, water, soil and noise in the vicinity of engineering projects. Environmental engineers design equipment for the treatment and safe disposal of waste materials. Environmental engineers assess the cause of long-term ecological problems. It is possible that registration or licensing will be required. 



`,
tasksTitle:`Environmental Engineers are responsible for the following tasks:
`,
tasks:[` Environmental engineers Inspect the plans to ensure optimum performance.
`,` Engineering technologists develop regulations for the installation of equipment in industries.
`,` Environmental engineers develop standards and regulations for testing, modification, development, quality, control, tracking, maintenance, and inspection.
`,` Environmental engineers schedule pans and manufacturing operations. 
`,` Environmental engineers prepare the contractors and pre-specification for the plan's construction and facility purchases.
`,` Environmental engineers assist in planning buildings and equipment to collaborate with management needs in creating new surveys, items, and maintenances.

`]






},



engineeringProfessionals:{
title:`Other Engineering Professionals ANZSCO Unit Group-2339.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.
`,
image:`/images/specificanzsco/enpro.png`,

unitGroupTitle1:`ANZSCO Unit Group-2339   `,
unitGroupTitle2:`ANZSCO Unit Group-2339 Other Engineering Professionals.
`,
unitGroupTitle2Description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Engineering Professionals`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[``],

skillAssessmentTitle:`Skill Assessment Authority of Engineering Professionals`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Engineering Professionals`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for other Engineering Professionals`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Other Engineering Professionals ANZSCO Unit Group-2339.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).


`,

exceptionsTitle:`Exceptions for Other Engineering Professionals ANZSCO Unit Group-2339.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2339 Other Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[` Acoustic Engineer
`,` Calibration Engineer
`,` Corrosion Engineer
`,` Fire Safety Engineer
`,` Mechatronics Engineer
`,` Product Design Engineer
`,` Safety Engineer
`,` Test and Activation Engineer (Naval Shipbuilding)

`],

anzscoTitle:`Engineering Professionals ANZSCO-233999.

`,
anzscoDescription:`The engineering professionals group covers occupations of engineers not elsewhere classified by ANZSCO. It is possible that registration or licensing will be required. 




`,
tasksTitle:`Engineering Professionals are responsible for the following tasks:
`,
tasks:[` Engineering professionals design, fabricate, develop and execute the engineering projects.
`,` Engineering professionals are responsible for allotting the work assignments to the supervisors and the subordinates.
`,` Engineering professionals take quick actions for fast executions.
`,` Engineering professionals provide regular updates of the work to higher management.
`,` Engineering professionals submit the assessment and reports regularly.
`,` Engineering professional controls, coordinate and direct all the resources available for engineering projects.
`]






},

civilEngineeringProfessionals:{
title:`Civil Engineering Professionals ANZSCO Unit Group-2332. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.`,
image: `/images/specificanzsco/civil.png`,

unitGroupTitle1:`ANZSCO Unit Group-2332  `,
unitGroupTitle2:`ANZSCO Unit Group-2332 Civil Engineering Professionals.`,
unitGroupTitle2Description:`A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. Civil engineering professionals manage large construction projects. Civil engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Civil Engineers develop and plan transportation networks estimating and tracking project expenditures.

`,
skillLevelTitle:`Skill level for Civil Engineering Professionals:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[""],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Professionals.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Civil Engineering Professionals:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Professionals`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2332 Civil Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`      
`,`     • 233211 Civil Engineer
`,` 233212 Geotechnical Engineer
`,` 233213 Quantity Surveyor
`,` 233214 Structural Engineer
`,` 233215 Transport Engineer
`],

anzscoTitle:`Civil Engineer ANZSCO-233211.`,
anzscoDescription:`Civil Engineers plan to design and supervise the construction of dams, bridges, and water supply schemes. Civil engineers manage large construction projects. A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. It is possible that registration or licensing will be required. 

`,
tasksTitle:`Civil Engineers are responsible for the following tasks:`,
tasks:[` Civil engineers examine architecture and engineering drawings to determine overall costs and produce thorough cost plans and forecasts to aid in budgetary management.
`,` On-site workers are managed and workflow is directed by civil engineers.
`,` Civil engineer is responsible for delivery of building supplies, plant and equipment.
`,` Civil engineers develop comprehensive strategies for site activity. 
`,` Civil engineers design and modify manufacturing variants.
`,` Observe design modifications, determine cost consequences, and quantify, value, and manage design variants.
`,` Construction techniques, materials, and quality standards are to be written by Civil engineers and 
`,` Civil engineers interpret specifications, drawings, plans, construction methods, and processes of building plants.
`,` Civil engineers evaluate soil’s safe loading after construction.
`,` Civil engineers assess the strength, and comprehensibility of soil and rock by collecting soil and rock samples at various depths throughout sites. 
`,` Civil engineers design structures that do not implode, flex, twist or hake in unfavourable ways
`,` Civil engineers have knowledge of static and dynamic load analysis of structural systems.
`,` Development of physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and terminals are done by Civil engineers.


`]






},

geotechnicalEngineer:{
title:`Civil Engineering Professionals ANZSCO Unit Group-2332. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.
`,
image: `/images/specificanzsco/geo.png`,

unitGroupTitle1:`ANZSCO Unit Group-2332  `,
unitGroupTitle2:`ANZSCO Unit Group-2332 Civil Engineering Professionals.`,
unitGroupTitle2Description:`A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. Civil engineering professionals manage large construction projects. Civil engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Civil Engineers develop and plan transportation networks estimating and tracking project expenditures.

`,
skillLevelTitle:`Skill level for Civil Engineering Professionals:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[""],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Professionals.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Civil Engineering Professionals  ANZSCO Unit Group-2332. : `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Professionals  ANZSCO Unit Group-2332.`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2332 Civil Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`      
`,` 233211 Civil Engineer
`,` 233212 Geotechnical Engineer
`,` 233213 Quantity Surveyor
`,` 233214 Structural Engineer
`,` 233215 Transport Engineer
`],

anzscoTitle:`Geotechnical Engineers ANZSCO-233212.`,
anzscoDescription:`Geotechnical engineers study of properties and behaviour of soil and rock when placed under load due to structures and design above and below ground foundations. Geotechnical engineers plan and carry out site surveys. Engineers in this field analyse the expected behaviour of soil and rock when pressure is applied by proposed structures above and below ground bases. Geotechnical engineers pursuing a career in Australia will need registration or licensing.


`,
tasksTitle:`Geotechnical Engineers are responsible for the following tasks:`,
tasks:[`  Choosing construction techniques, materials, and quality standards and writing and interpreting specifications, drawings, plans, construction methods, and processes.
`,` Managing and directing on-site workers, delivering building supplies, plant, and equipment. Geotechnical engineers develop comprehensive strategies for site activity coordination.
`,` Collecting soil or rock samples at various depths throughout sites and test samples to assess strength, comprehensibility, and other parameters that impact the activity of soil and rock when construction is applied. Geotechnical engineers evaluate the soil's safe loading.
`,` Examine architecture and engineering drawings and requirements to determine overall costs and produce thorough cost plans and forecasts to aid budgetary management.
`,` Observe design modifications, determine cost consequences, quantify, value, and manage design variants.
`,` Study of structural systems
`,`  under static and dynamic loads.
`,` Design structures that don't implode, flex, twist, or shake in negative ways.
`,` Consider current and future traffic flow mechanisms given population growth and changing requirements.
`,` Create the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and terminals.


`]






},

structuralEngineer:{
title:`Civil Engineering Professionals ANZSCO Unit Group-2332. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.
`,
image: `/images/specificanzsco/structure.png`,

unitGroupTitle1:`ANZSCO Unit Group-2332  `,
unitGroupTitle2:`ANZSCO Unit Group-2332 Civil Engineering Professionals.`,
unitGroupTitle2Description:`A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. Civil engineering professionals manage large construction projects. Civil engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Civil Engineers develop and plan transportation networks estimating and tracking project expenditures.

`,
skillLevelTitle:`Skill level for Civil Engineering Professionals:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[""],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Professionals.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Civil Engineering Professionals  ANZSCO Unit Group-2332. : `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Professionals  ANZSCO Unit Group-2332.`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2332 Civil Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`      
`,` 233211 Civil Engineer
`,` 233212 Geotechnical Engineer
`,` 233213 Quantity Surveyor
`,` 233214 Structural Engineer
`,` 233215 Transport Engineer
`],

anzscoTitle:`Structural engineers ANZSCO-233214.`,
anzscoDescription:`Structural engineering professionals are responsible for the planning, designing, organising, and supervising of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other structural engineering projects. A structural engineer is responsible for evaluating the statistical aspects of all structures, examining the behaviour and longevity of materials used during their construction, and planning and overseeing the building of all structures’ registration. It is possible that registration or licensing will be required. 


`,
tasksTitle:`Structural engineers are responsible for the following tasks:`,
tasks:[` Structural engineers choose construction techniques, materials, and quality standards and write and interpret specifications, drawings, plans, construction methods, and processes.
`,` Managing and directing on-site workers, the delivery of building supplies, plants, and equipment, and developing comprehensive strategies for site activity coordination is the responsibility of structural engineers.
`,` Structural engineers collect soil or rock samples at various depths throughout sites and test samples to assess strength, comprehensibility, and other parameters that impact the activity of soil and rock when construction is applied and evaluate the soil's safe loading.
`,` Structural engineers examine architecture and engineering drawings and requirements to determine overall costs and produce thorough cost plans and forecasts to aid budgetary management.
`,` Structural engineer observes design modifications, determine cost consequences, quantify, value, and manage design variants.
`,` Static and dynamic load analysis of structural systems.
`,` Structures must be designed such that they should not implode, flex, twist, or shake in unfavourable ways.
`,` Considering current and future traffic flow mechanisms given population growth and changing requirements.
`,` Structural engineers create the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and terminals.


`]






},

transportEngineer:{
title:`Civil Engineering Professionals ANZSCO Unit Group-2332. `,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.`,
image: `/images/specificanzsco/transport.png`,

unitGroupTitle1:`ANZSCO Unit Group-2332  `,
unitGroupTitle2:`ANZSCO Unit Group-2332 Civil Engineering Professionals.`,
unitGroupTitle2Description:`A civil engineer plans, designs, organizes and supervises the construction of dams, bridges, pipelines, gas and water supply schemes, sewage systems, airports, and other civil engineering projects. Civil engineering professionals manage large construction projects. Civil engineering professionals analyse the expected behaviour of soil and rock when subjected to pressure from planned structures and create structural foundations.
Civil engineering professionals examine the behaviour and durability of materials and statistical features of all sorts. Civil Engineers develop and plan transportation networks estimating and tracking project expenditures.

`,
skillLevelTitle:`Skill level for Civil Engineering Professionals:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"",
specializationsList:[""],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Professionals.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Civil Engineering Professionals  ANZSCO Unit Group-2332. : `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Professionals  ANZSCO Unit Group-2332.`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.
`,



skillLevelTitle2:`Skill Level required for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Professionals ANZSCO Unit Group-2332.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2332 Civil Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 2339 Unit Group.`,
occupationsList:[`      
`,` 233211 Civil Engineer
`,` 233212 Geotechnical Engineer
`,` 233213 Quantity Surveyor
`,` 233214 Structural Engineer
`,` 233215 Transport Engineer
`],

anzscoTitle:`Transport Engineer ANZSCO-233215.`,
anzscoDescription:`Transport engineers plan and develop transportation systems to increase infrastructural efficiency and cost-effective carrying of goods and people.  It is possible that registration or licensing will be required. 



`,
tasksTitle:`Transport Engineers are responsible for the following tasks:`,
tasks:[`  Transport engineers choose construction techniques, materials, and quality standards and write and interpret specifications, drawings, plans, construction methods, and processes.
`,` Manage and direct on-site workers, deliver building supplies, plant, and equipment, and develop comprehensive strategies for site activity coordination.
`,` Design samples to assess strength, comprehensibility, and other parameters that impact the activity of soil and rock when construction is applied and evaluate the soil's safe loading.
`,` Examine architecture and engineering drawings and requirements to determine overall costs and produce thorough cost plans and forecasts to aid budgetary management.
`,` Observe design modifications, determine cost consequences, quantify, value, and manage design variants.
`,` Study of structural systems -under static and dynamic loads. 
`,` Design Structures that should not implode, flex, twist, or shake in unfavourable ways.
`,` Consider current and future traffic flow mechanisms given population growth and changing requirements.
`,` Create the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and terminals.



`]






},


industrialEngineer:{
title:`Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.  `,
image: `/images/specificanzsco/industry.png`,

unitGroupTitle1:`ANZSCO Unit Group-2335 `,
unitGroupTitle2:`ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers.
`,
unitGroupTitle2Description:`Industrial engineers and Production Engineers are responsible for designing, arranging, and supervising the construction, and operation of plants.  Industrial engineers work in the maintenance and installation of mechanical and processing plants. Industrial engineering professionals establish programs to coordinate manufacturing processes and ensure cost-effective resource use. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Industrial Engineers:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Industrial Engineer:",
specializationsList:[`    • Engineering Assurance Engineer
`,`• Integrated Logistics Support Engineer
`,`• Process Engineer (Industrial)
`],

skillAssessmentTitle:`Skill Assessment Authority of Industrial Engineers:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335: `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335:`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:` ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Industrial, Mechanical and Production Engineers. 
ANZSCO Unit Group-2335.`,
occupationsList:[`      
`,`   233511 Industrial Engineer
`,`33512 Mechanical Engineer
`,`233513 Production or Plant Engineer

`],

anzscoTitle:`Industrial Engineers ANZSCO-233511.`,
anzscoDescription:`Industrial Engineer investigates and assesses the use of personnel, facilities, equipment, and resources, along with existing operational procedures and established practices. Industrial engineers suggest improvements in operations in a range of commercial, industrial, and manufacturing settings to increase efficiency. It is possible that registration or licensing will be required.




`,
tasksTitle:`Industrial engineers are responsible for the following tasks:`,
tasks:[` Examining operational statements, organisational charts, and project data to identify worker and workgroup duties with responsibilities and point out areas of overlap is a task of the Industrial Engineer. 
`,` Industrial Engineer develops labour utilisation standards by conducting work measurement programs and assessing work samples. 
`,` It is the job of an Industrial Engineer to evaluate optimum worker and equipment efficiency, and examine labour utilisation, facility architecture, operational data, and production schedules and prices. 
`,` Industrial Engineer creates mechanical equipment, machinery, components, manufacturing products, and plant and system designs. 
`,` Industrial Engineer creates manufacturing specifications and materials, equipment, pipes, material flows, capacities, and plant and system structure. 
`,` Industrial Engineer organises and oversees project labour and material, plant, and equipment shipments.
`,` Establish installation, modification, quality control, testing, inspecting, maintenance standards and policies, and understand engineering considerations and safety laws. 
`,` Industrial engineer is responsible to examine the plant to ensure that it operates at peak efficiency.
`,` Industrial engineer directs the upkeep of plant structures and equipment and manages the demand for new designs, inspections, and maintenance schedules.




`]






},

mechanicalEngineer:{
title:`Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia.`,
image: `/images/specificanzsco/mechanical.png`,

unitGroupTitle1:`ANZSCO Unit Group-2335 `,
unitGroupTitle2:`ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers.
`,
unitGroupTitle2Description:`Industrial engineers and Production Engineers are responsible for designing, arranging, and supervising the construction, and operation of plants.  Industrial engineers work in the maintenance and installation of mechanical and processing plants. Industrial engineering professionals establish programs to coordinate manufacturing processes and ensure cost-effective resource use. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Mechanical Engineers:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Mechanical Engineer:",
specializationsList:[`          • Airconditioning Engineer
`,`• Building Services Engineer
`,`• Heating and Ventilation Engineer

`],

skillAssessmentTitle:`Skill Assessment Authority of Mechanical Engineers:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335: `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335:`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:` ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Industrial, Mechanical and Production Engineers. 
ANZSCO Unit Group-2335.`,
occupationsList:[`      
`,`   233511 Industrial Engineer
`,`33512 Mechanical Engineer
`,`233513 Production or Plant Engineer

`],

anzscoTitle:`Mechanical Engineers ANZSCO-233512.`,
anzscoDescription:`The mechanical Engineer is responsible for Planning, organising, and supervising the assembly, erection, commissioning, operation, and upkeep of mechanical and process plants and installations. Registration or licensing will be required.




`,
tasksTitle:`Mechanical engineers are responsible for the following tasks:`,
tasks:[`  Mechanical engineers examine operational statements, organisational charts, and project data. Identify worker and workgroup duties and responsibilities and point out areas of overlap. 
`,` Mechanical engineers develop labour utilisation standards by developing work measurement programs and assessing work samples. 
`,` To evaluate optimum worker and equipment efficiency, examine labour utilisation, facility architecture, operational data, production schedules and prices. 
`,` Create mechanical equipment, machinery, components, manufacturing products, and plant and system designs. 
`,` Create manufacturing specifications and materials, equipment, pipes, material flows, capacities, and plant and system structure. 
`,` Organise and oversee project labour and material, plant, and equipment shipments.
`,` Mechanical engineers establish installation, modification, quality control, testing, inspecting, maintenance standards and policies, and understand engineering considerations and safety laws. 
`,` Mechanical engineers examine the plant to ensure that it operates at peak efficiency.
`,` Direct the upkeep of plant structures and equipment and manage the demand for new designs, inspections, and maintenance schedules is the responsibility of the mechanical engineer




`]






},

plantEngineer:{
title:`Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/plant.png`,

unitGroupTitle1:`ANZSCO Unit Group-2335 `,
unitGroupTitle2:`ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers.
`,
unitGroupTitle2Description:`Industrial engineers and Production Engineers are responsible for designing, arranging, and supervising the construction, and operation of plants.  Industrial engineers work in the maintenance and installation of mechanical and processing plants. Industrial engineering professionals establish programs to coordinate manufacturing processes and ensure cost-effective resource use. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Production or Plant Engineer`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Production or Plant Engineer:",
specializationsList:[`        • Automation and Control Engineer
• Maintenance Engineer (Shipbuilding)

`],

skillAssessmentTitle:`Skill Assessment Authority of Production or Plant Engineer:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335: `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335:`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Industrial, Mechanical and Production Engineers ANZSCO Unit Group-2335.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:` ANZSCO Unit Group-2335 Industrial, Mechanical and Production Engineers require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Industrial, Mechanical and Production Engineers. 
ANZSCO Unit Group-2335.`,
occupationsList:[`      
`,`   233511 Industrial Engineer
`,`33512 Mechanical Engineer
`,`233513 Production or Plant Engineer

`],

anzscoTitle:`Production or Plant Engineers ANZSCO-233513.
`,
anzscoDescription:`Production or Plant Engineer plays a vital role in planning, directing, and supervising the design of industrial plant equipment and machinery. Production engineers are responsible for the planning and management of manufacturing and services. Construction, alteration, ongoing operation, and upkeep of industrial plant equipment and machinery is the responsibility of the Production or Plant engineer. It is possible that registration or licensing will be required.





`,
tasksTitle:`Production or Plant engineers are responsible for the following tasks:`,
tasks:[`    Examining operational statements, organisational charts, and project data to identify worker and workgroup duties and responsibilities and point out areas of overlap. 
`,` Developing labour utilisation standards by developing work measurement programs and assessing work samples. 
`,` To evaluate optimum worker and equipment efficiency, examine labour utilisation, facility architecture, operational data, and production schedules and prices. 
`,` Create mechanical equipment, machinery, components, manufacturing products, and plant and system designs. 
`,` Create manufacturing specifications and materials, equipment, pipes, material flows, capacities, and plant and system structure. 
`,` Organize and oversee project labour and material, plant, and equipment shipments.
`,` Establish installation, modification, quality control, testing, inspecting, maintenance standards and policies, and understand engineering considerations and safety laws. 
`,` Examine the plant to ensure that it operates at peak efficiency.
`,` Directing the upkeep of plant structures and equipment and managing the demand for new designs, inspections, and maintenance schedules.




`]






},

computerEngineer:{
title:`Computer Network Professionals ANZSCO Unit Group-2631.

`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/computer.png`,

unitGroupTitle1:`ANZSCO Unit Group-2631  `,
unitGroupTitle2:`ANZSCO Unit Group-2331 Computer Network Professionals.
.
`,
unitGroupTitle2Description:`Computer network professionals are in charge of exploring, analysing, and suggesting network topology. Computer Network and Systems Engineer develop strategy and implement it to manage, maintain and configure network hardware and software. Computer network professionals are good at tracking and optimising performance, debugging, and offering technical assistance. It is possible that registration or licensing will be required.


`,
skillLevelTitle:`Skill level for Computer Network and Systems Engineers:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Computer Network and Systems Engineer:",
specializationsList:[` 
• Computer Network Engineer
• Computer Systems Integrator

`],

skillAssessmentTitle:`Skill Assessment Authority of Production or Plant Engineer:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Computer Network Professionals ANZSCO Unit Group-2631: `,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Computer Network Professionals ANZSCO Unit Group-2631. 
`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Computer Network Professionals ANZSCO Unit Group-2631.
`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Computer Network Professionals ANZSCO Unit Group-2631.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2631 Computer Network Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Computer Network Professionals. ANZSCO Unit Group-2631.`,
occupationsList:[`      
263111 Computer Network and Systems Engineer
`,` 263112 Network Administrator
`,`263113 Network Analyst
`],

anzscoTitle:`Computer Network and Systems Engineers ANZSCO-263111.

`,
anzscoDescription:`Computer Network and Systems Engineers are responsible for planning, developing, launching, testing, and maximising network and system services. Computer Network and Systems Engineers setup management and high operational availability of network systems, particularly in environments with various operating systems and configurations. Engineers provide debugging and fault-finding facilities for connection issues. Registration or licensing will probably be required. 






`,
tasksTitle:`Computer Network and Systems Engineers are responsible for the following tasks:`,
tasks:[`        Analyse, generate, understand, and review complex system structural and development requirements data models and diagrams in creating, configuring, and integrating computer systems.
`,` Internet infrastructure research, analysis, evaluation, and supervision, ensure connections to run at peak performance.
`,` Evaluate and suggest network functions and integrated hardware, application, communication, and software products. 
`,` Offer specialised help and debugging for connection problems and emergencies. 
`,` Install, set up, verify, and manage new and updated networks, software database applications, servers, and workstations.
`,` Offer network programming in response to particular business demands and needs.
`,`  Create and monitor network inventory processes and documentation and capture network problem diagnostics and resolution, upgrades and alterations, and maintenance instructions.
`,` Check network traffic, activity, capacity, and consumption guarantees network integrity and efficiency.







`]






},

telecommunicationsEngineer:{
title:`Computer Telecommunications Engineering Professionals ANZSCO Unit Group-2633..

`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/tele.png`,

unitGroupTitle1:`ANZSCO Unit Group-2633 `,
unitGroupTitle2:`ANZSCO Unit Group-2633 Telecommunications Engineering Professionals.
.
.
`,
unitGroupTitle2Description:`Telecommunication Engineer designs and develops telecommunications systems, devices and products. Telecommunication Engineer professionals design, construct, install, serve and support telecommunication systems, equipment and facilities. It is possible that registration or licensing will be required.


`,
skillLevelTitle:`Skill level for Telecommunications Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Specialisations of Telecommunications Engineers:",
specializationsList:[` 
Signals Officer (Army) (NZ)
`],

skillAssessmentTitle:`Skill Assessment Authority of Telecommunications Engineer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Telecommunications Engineering Professionals ANZSCO Unit Group-2633:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Telecommunications Engineering Professionals ANZSCO Unit Group-2633. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Telecommunications Engineering Professionals ANZSCO Unit Group-2633.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Telecommunications Engineering Professionals ANZSCO Unit Group-2633.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2633 Telecommunications Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Telecommunications Engineering Professionals ANZSCO Unit Group-2633.`,
occupationsList:[`      
• 263311 Telecommunications Engineer
• 263312 Telecommunications Network Engineer`],

anzscoTitle:`Telecommunications Engineer ANZSCO-263311.


`,
anzscoDescription:`Telecommunication Engineer designs and develops telecommunications systems, devices and products. Telecommunication Engineer professionals perform regular monetary and development of telecommunication devices and networks. Registration or licensing will probably be required. 





`,
tasksTitle:`Telecommunications Engineers are responsible for the following tasks:`,
tasks:[`  Telecommunication engineer professionals plan, design, develop, and maintain telecommunication devices and networks like radio, microwave, satellite, digital data systems, etc.
`,` Telecommunication engineers perform market research for new production and service.
`,` Telecommunication engineers professionals stay within the boundaries of laws, policies, responsibilities and procedures as a telecommunication engineer.
`,` Telecommunication engineers select and develop new telecommunication sites by locating sites, filing them and approving them.
`,` Telecommunication engineers are responsible for finding the best way to manage telecommunication hardware and software for desired requirements.
`,` Telecommunication engineer professionals are the ones who determine the elements of the hardware like circuits, transformers, transmission lines. 
`,` Telecommunication engineers study the problems in the present day and design hardware or software to eliminate the problem in future.
`,` Telecommunication engineers research communication issues and help improve the communication sector.
`,` Telecommunication engineers are responsible for preparing and presenting the specification and use of telecommunication equipment.
`,`Telecommunication engineers are responsible for tracing the telecommunicating devices/system's performance and maintaining it if required. 










`]






},


telnetEngineer:{
title:`Computer Telecommunications Engineering Professionals ANZSCO Unit Group-2633.

`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/telnet.png`,

unitGroupTitle1:`ANZSCO Unit Group-2633 `,
unitGroupTitle2:`ANZSCO Unit Group-2633 Telecommunications Engineering Professionals.
.
.
`,
unitGroupTitle2Description:`Telecommunication Engineer designs and develops telecommunications systems, devices and products. Telecommunication Engineer professionals design, construct, install, serve and support telecommunication systems, equipment and facilities. It is possible that registration or licensing will be required.


`,
skillLevelTitle:`Skill level for Telecommunications Network Engineer:`,
skillLevelDescription:`Level 1 or Equivalent`,

specializationsTitle:"Alternative Titles of Telecommunications Network Engineers:",
specializationsList:[` 
`,`• Communications Consultant
`,`• Communications Specialist (ICT)
`,`• Telecommunications Consultant
`,`• Telecommunications Specialist
`],

skillAssessmentTitle:`Skill Assessment Authority of Telecommunications Network Engineer:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Telecommunications Engineering Professionals ANZSCO Unit Group-2633:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Telecommunications Engineering Professionals ANZSCO Unit Group-2633. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Telecommunications Engineering Professionals ANZSCO Unit Group-2633.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Telecommunications Engineering Professionals ANZSCO Unit Group-2633.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-2633 Telecommunications Engineering Professionals require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Telecommunications Engineering Professionals ANZSCO Unit Group-2633.`,
occupationsList:[`      
263311 Telecommunications Engineer
263312 Telecommunications Network Engineer`],

anzscoTitle:`Telecommunications Network Engineer ANZSCO-263312.



`,
anzscoDescription:`Telecommunications Network Engineer plans and designs complex telecommunication networks. The Telecommunications Network Engineer is responsible to plan and monitor network associated broadcasting equipment. Registration or licensing will probably be required. 





`,
tasksTitle:`Telecommunications Network Engineers are responsible for the following tasks:`,
tasks:[` Telecommunications network engineer study the problems in present-day, and design networks to eliminate the problem in future.
`,` Telecommunications network engineers stay within the boundaries of laws, policies, responsibilities and procedures as a telecommunication network engineer
`,` Telecommunications Engineering Professionals are the ones who determine the elements of the network like circuits and transmission lines.
`,` Telecommunications network engineers are responsible to prepare and present the specification and use of telecommunication equipment. 
`,` Telecommunications Engineering Professionals are responsible for tracking the performance of telecommunicating devices/systems and maintaining it if required.
`,` Telecommunications network engineers are responsible for finding out the best way to manage telecommunication networks and software for desired requirements.



`]






},

civilDraftsperson:{
title:`Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.

`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/draft.png`,

unitGroupTitle1:`ANZSCO Unit Group-3122 `,
unitGroupTitle2:`ANZSCO Unit Group-3122 Civil Engineering Draftspersons and Technicians.

.
.
`,
unitGroupTitle2Description:`Civil engineering draftsperson and technicians help and assist civil engineers in analyzing, designing, developing, and operating engineering projects. Civil engineering draftspersons and technicians prepare a detailed plan and support engineers in the field of work. Civil Engineering draftspersons and technicians assist in civil engineering research, design and construction. It is possible that registration or licensing will be required. 


`,
skillLevelTitle:`Skill level for Civil Engineering Draftspersons:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"Specialisations of Civil Engineering Draftspersons:",
specializationsList:[` 
`,`• Civil Engineering Design Draftsperson
`,`• Plumbing Engineering Draftsperson
`,`• Road Design Draftsperson
`,`• Sewage Reticulation Drafting Officer
`,`• Structural Engineering Drafting Officer
`],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Draftspersons:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Civil Engineering Draftspersons:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.


`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-3122 Civil Engineering Draftspersons and Technicians require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Civil Engineering Draftspersons and Technicians. ANZSCO Unit Group-3122.`,
occupationsList:[`      
312211 Civil Engineering Draftsperson
`,` 312212 Civil Engineering Technician`],

anzscoTitle:`Civil Engineering Draftspersons ANZSCO-312211.



`,
anzscoDescription:`With the assistance of civil engineering professionals, Civil Engineering Draftsperson prepares precise drawings and blueprints for civil engineering projects. Civil Engineering draftspersons assist in civil engineering research and design. It is possible that registration or licensing will be required.




`,
tasksTitle:`Civil Engineering Draftspersons are responsible for the following tasks:`,
tasks:[`  Civil Engineering draftsperson interprete work assignment instructions, applies appropriate procedures and selects equipment.
`,` Civil Engineering draftsperson collecting and analysing data, and carrying out computations
`,` Civil Engineering draftsperson estimates material costs and ensures finished works are within specifications, regulations and contract provisions.
`,` Civil Engineering draftsperson are responsible to conduct field and laboratory tests of construction materials and soils and collecting data for traffic surveys.
`,` Civil Engineering draftsperson are responsible for performing and directing fieldwork and laboratory testing.
`,` Civil Engineering draftsperson inspects civil engineering works in organising and supervising maintenance.





`]






},

civilTechnicians:{
title:`Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.

`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/civiltech.png`,

unitGroupTitle1:`ANZSCO Unit Group-3122 `,
unitGroupTitle2:`ANZSCO Unit Group-3122 Civil Engineering Draftspersons and Technicians.

.
.
`,
unitGroupTitle2Description:`Civil engineering draftsperson and technicians help and assist civil engineers in analyzing, designing, developing, and operating engineering projects. Civil engineering draftspersons and technicians prepare a detailed plan and support engineers in the field of work. Civil Engineering draftspersons and technicians assist in civil engineering research, design and construction. It is possible that registration or licensing will be required. 


`,
skillLevelTitle:`Skill level for Civil Engineering Technician:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"Specialisations of Civil Engineering Technician:",
specializationsList:[` 
`,`• Civil Engineering Design Draftsperson
`,`• Plumbing Engineering Draftsperson
`,`• Road Design Draftsperson
`,`• Sewage Reticulation Drafting Officer
`,`• Structural Engineering Drafting Officer
`],

skillAssessmentTitle:`Skill Assessment Authority of Civil Engineering Technician:`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Civil Engineering Technician:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.


`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3122.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-3122 Civil Engineering Draftspersons and Technicians require a level of language proficiency.`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Civil Engineering Draftspersons and Technicians. ANZSCO Unit Group-3122.`,
occupationsList:[`      
312211 Civil Engineering Draftsperson
`,` 312212 Civil Engineering Technician`],

anzscoTitle:`Civil Engineering Technicians ANZSCO-312211.




`,
anzscoDescription:`Civil Engineering Technicians direct and carry out laboratory experiments and fieldwork. Civil Engineering Technicians collect data for traffic surveys and conduct field. It is possible that registration or licensing will be required.





`,
tasksTitle:`Civil Engineering Technicians are responsible for the following tasks:`,
tasks:[` preparing sketches, charts, tabulations, plans and designs for civil engineering works such as drainage, water supply, sewerage reticulation systems, roads, airports, dams, bridges and other structures
`,` performing and directing fieldwork and laboratory testing
`,` interpreting work assignment instructions, applying appropriate procedures and selecting equipment
`,` collecting and analysing data, and carrying out computations
`,` estimating material costs and ensuring finished works are within specifications, regulations and contract provisions
`,` inspecting civil engineering works, and organising and supervising maintenance and repair work
`,` conducting field and laboratory tests of construction materials and soils, and collecting data for traffic surveys







`]






},

electricalDraftsperson:{
title:`Electrical Engineering Draftsperson ANZSCO 312311 CDR Sample.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/electricalDraft.png`,

unitGroupTitle1:`ANZSCO Code 312311.`,
unitGroupTitle2:`ANZSCO 312311 Electrical Engineering Draftsperson.
.

.
.
`,
unitGroupTitle2Description:`Electrical engineering draftsperson assists electrical engineers and engineering technologists with the design and layout of electrical circuits. Electrical engineering draftspersons prepare electrical circuit drawings, plans and schematics. Electrical engineering draftsperson performs sophisticated computations. It is possible that registration or licensing will be required.



`,
skillLevelTitle:`Skill level for Electrical Engineering Draftsperson:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"Specialisations of Electrical Engineering Draftsperson:",
specializationsList:[` 
`,`    • Electrical Engineering Design Draftsperson
`,`• Electrical Engineering Detail Draftsperson
`,`• Electrical Engineering Drafting Officer
`,`• Relays Draftsperson
`,`• Substation Design Draftsperson

`],

skillAssessmentTitle:`Skill Assessment Authority of Electrical Engineering Draftsperson.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Electrical Engineering Draftsperson:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Electrical Engineering Draftsperson.  

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Electrical Engineering Draftspersons.


`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Civil Engineering Draftspersons and Technicians ANZSCO Unit Group-3123.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Language proficiency to be eligible for Electrical Engineering Draftsperson.
`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in  ANZSCO Unit Group-3123.`,
occupationsList:[`      
312211 ELectrical Engineering Draftsperson
`,` 312212 ELectrical Engineering Technician`],

anzscoTitle:`Unit Group 3123: Electrical Engineering Draftspersons and Technicians.




`,
anzscoDescription:`Electrical Engineering Draftspersons and Technicians collect and test data, perform sophisticated computations and evaluate graphing outcomes. Electrical Engineering Draftspersons and Technicians assist electrical engineers and engineering technologists with the design and layout of electrical circuits. Electrical Engineering Draftspersons and Technicians assist in installations on substations, switchgear, cabling systems and motor control systems. It is possible that registration or licensing will be required.

`,
tasksTitle:`Electrical Engineering Draftspersons are responsible for the following tasks:`,
tasks:[`     Electrical engineering draftsperson collect and test data.
`,` Electrical engineering draftsperson performs sophisticated computations.
`,` Electrical engineering draftsperson evaluates graphing outcomes.
`,` Electrical engineering draftsperson draw chart and prepare tabulation from collected data.
`,` Electrical engineering draftsperson assists electrical engineers and engineering technologists with the design and layout of electrical circuits.
`,`Electrical engineering draftspersons assist in installations on substations, switchgear, cabling systems and motor control systems.
`,` Electrical engineering draftspersons calculate prices and quantities of materials for electrical engineering projects.
`,` Electrical engineering draftspersons prepare electrical circuit drawings, plans and schematics.
`,` Producing electrical installation and circuits drawings, plans, and schematics.
`,` Electrical engineering draftspersons evaluate designs and completed goods for requirements and regulatory compliance.







`]






},




electricalTechnician:{
title:`Electrical Engineering Technician ANZSCO 312312 CDR Sample.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/electricalDraft.png`,

unitGroupTitle1:`ANZSCO Code 312312..`,
unitGroupTitle2:`ANZSCO 312312 Electrical Engineering Technician.


`,
unitGroupTitle2Description:`Electrical engineering Technicians collect and test data, perform sophisticated computations and evaluate graphing outcomes. Electrical engineering Technicians assist electrical engineers and engineering technologists with the design and layout of electrical circuits. It is possible that registration or licensing will be required.

`,
skillLevelTitle:`Skill level for Electrical Engineering Technician:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"Specialisations of Electrical Engineering Technician:",
specializationsList:[` 
`,`       • Electrical Engineering Laboratory Technician
`,`• Electrical Instrument Technician

`],

skillAssessmentTitle:`Skill Assessment Authority of Electrical Engineering Technician.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List of Electrical Engineering Technician:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Electrical Engineering Technician. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Electrical Engineering Technician.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Unit Group 3123.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`Language proficiency to be eligible for Electrical Engineering Technician.
`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in this 3123 Unit Group.`,
occupationsList:[`      
312311 Electrical Engineer.
`,` 312312 Electrical Network Engineer.

`],

anzscoTitle:`Unit Group 3123: Electrical Engineering Draftspersons and Technicians.



`,
anzscoDescription:`Electrical Engineering Draftspersons and Technicians collect and test data, perform sophisticated computations and evaluate graphing outcomes. Electrical Engineering Draftspersons and Technicians assist electrical engineers and engineering technologists with the design and layout of electrical circuits. Electrical Engineering Draftspersons and Technicians assist in installations on substations, switchgear, cabling systems and motor control systems. It is possible that registration or licensing will be required.


`,
tasksTitle:`Electrical Engineering Technicians are responsible for the following tasks:`,
tasks:[` preparing drawings, plans and diagrams of electrical installations and circuitry
`,`assisting Electrical Engineers and Engineering Technologists in design and layout of electrical installations and circuitry on substations, switchgear, cabling systems and motor control systems
`,` collecting data, performing tests and complex calculations, graphing results, and preparing charts and tabulations
`,` estimating materials costs and quantities
`,` inspecting designs and finished products for compliance with specifications and regulations
`,` assembling, installing, testing, calibrating, modifying and repairing electrical equipment and installations to conform with regulations and safety requirements
`,` undertaking electrical workshop functions such as installing assemblies for protection relays, metering and indicating devices
`,` assisting with research and experimentation programs





`]






},


telfieldEngineer:{
title:`Telecommunications Technical Specialists ANZSCO Unit Group-3132.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/electricalDraft.png`,

unitGroupTitle1:`ANZSCO Unit Group-3132 `,
unitGroupTitle2:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists.


`,
unitGroupTitle2Description:`Telecommunication field engineers perform complex telecommunication networking. Telecommunication field engineers solve complex problems and provide users with proper instruction and features of the network system. It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Telecommunications Field Engineer:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"",
specializationsList:[` 


`],

skillAssessmentTitle:`Skill Assessment Authority of Telecommunications Field Engineer.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Telecommunications Technical Specialists ANZSCO Unit Group-3132:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Telecommunications Technical Specialists ANZSCO Unit Group-3132. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Telecommunications Technical Specialists ANZSCO Unit Group-3132.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists require a level of language proficiency.
`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
occupationsList:[`      
313211 Radiocommunications Technician
`,` 313212 Telecommunications Field Engineer
`,` 313213 Telecommunications Network Planner
`,`313214 Telecommunications Technical Officer or Technologist

`],

anzscoTitle:`Telecommunications Field Engineer ANZSCO-313212.



`,
anzscoDescription:`Telecommunication field engineers plan, design, coordinate and evaluate telecommunications networks and used hardware. Telecommunication field engineers provide information about the network or hardware and solve complications. It is possible that registration or licensing will be required. 

`,
tasksTitle:`Telecommunications Field Engineers is responsible for the following tasks:`,
tasks:[`Telecommunication field engineers are responsible for installation, maintenance and detailed study of telecommunication systems.
`,` Telecommunication field engineers are responsible to integrate and coordinate telecommunication technology with the computer systems.
`,` Telecommunication field engineers keep detailed record about the network system.
`,` Telecommunication field engineers provides advice and details based on the evaluation.
`,` Telecommunication field engineers are responsible to create an interface through which users can interact. 
`,` Telecommunication field engineers should be able to create good relationship with resource providers.
`,` Telecommunication field engineers are responsible to provide ideas and solve problems in the ongoing telecommunication activity. 
`,` Telecommunication field engineers are responsible for tracing the telecommunicating devices/system's performance and maintaining it if required. 






`]






},


telTechnician:{
title:`Telecommunications Technical Specialists ANZSCO Unit Group-3132.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/electricalDraft.png`,

unitGroupTitle1:`ANZSCO Unit Group-3132 `,
unitGroupTitle2:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists.


`,
unitGroupTitle2Description:`Telecommunication field engineers perform complex telecommunication networking. Telecommunication field engineers solve complex problems and provide users with proper instruction and features of the network system. It is possible that registration or licensing will be required.
`,
skillLevelTitle:`Skill level for Telecommunications Technologist:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"",
specializationsList:[` 


`],

skillAssessmentTitle:`Skill Assessment Authority of Telecommunications Technologist.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Telecommunications Technical Specialists ANZSCO Unit Group-3132:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Telecommunications Technical Specialists ANZSCO Unit Group-3132. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Telecommunications Technical Specialists ANZSCO Unit Group-3132.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists require a level of language proficiency.
`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
occupationsList:[`      
313211 Radiocommunications Technician
`,` 313212 Telecommunications Field Engineer
`,` 313213 Telecommunications Network Planner
`,` 313214 Telecommunications Technical Officer or Technologist

`],

anzscoTitle:`Telecommunications Technologist ANZSCO-313214.

`,
anzscoDescription:`Telecommunications Technical Officer or Technologist carries out specialised design and support functions in telecommunications engineering including optimisation and performance monitoring of telecommunications networks, diagnosis and repair of faults, and the selection and installation of equipment. It is possible that registration or licensing will be required. 
`,
tasksTitle:`Telecommunications Technologists are responsible for the following tasks:`,
tasks:[`installing, maintaining, repairing and diagnosing malfunctions of microwave, telemetry, multiplexing, satellite and other radio and electromagnetic wave communication systems
`,` configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems
`,` developing and recording logs of the details, locations and status of inventories, parts, equipment and instruments and maintaining the documentation of communication policies, procedures, guidelines and regulations, and quality standards
`,` providing technical advice and information, and monitoring the performance of complex telecommunications networks and equipment
`,` planning the development of customer access telecommunications network infrastructure
`,` liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery
`,` providing ongoing operational support in designing, optimising, troubleshooting, diagnosing, repairing and resolving of telecommunications network performance malfunctions, defects and faults







`]






}
,


telNetPlanner:{
title:`Telecommunications Technical Specialists ANZSCO Unit Group-3132.
`,
description:`Your draft of CDR may contain errors in various aspects. Our CDR 
reviewing service suggests the best ways to present your skills, 
knowledge, qualification and experience in writing for the approval 
of Engineers Australia. `,
image: `/images/specificanzsco/electricalDraft.png`,

unitGroupTitle1:`ANZSCO Unit Group-3132  `,
unitGroupTitle2:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists.

`,
unitGroupTitle2Description:`Telecommunication field engineers perform complex telecommunication networking. Telecommunication field engineers solve complex problems and provide users with proper instruction and features of the network system. It is possible that registration or licensing will be required.`,
skillLevelTitle:`Skill level for Telecommunications Network Planner:`,
skillLevelDescription:`Level 2 or Equivalent`,

specializationsTitle:"",
specializationsList:[`    
`],

skillAssessmentTitle:`Skill Assessment Authority of Telecommunications Network Planner.`,
skillAssessmentDescription:`EA (Engineers Australia) / AIM`,




occupationListTitle:`On the Occupation List 0f Telecommunications Technical Specialists ANZSCO Unit Group-3132:`,
occupationList:[`489 (S/T) Occupations List
`,`482 TSS Visa Medium Term List
`,`407 Training visa occupations List
`,`482 TSS Visa Regional Occupation List
`,`189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream
`,`190 State/Territory Sponsored 
`,`186 ENS Visa Occupations List
`,`187 RSMS Visa Occupations List
`,`491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List
`,`494 – Skilled Employer-Sponsored Regional (provisional) (subclass 494) – Employer-sponsored stream
`],


visaProvisionTitle2:`Visa Provision for Telecommunications Technical Specialists ANZSCO Unit Group-3132. 

`,
visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.

`,



skillLevelTitle2:`Skill Level required for Telecommunications Technical Specialists ANZSCO Unit Group-3132.

`,
skillLevelDescription2:`Most occupations in this unit group have a skill level commensurate with a bachelor’s degree or higher qualification. At least five years of relevant experience and/or relevant vendor certification may substitute for the formal qualification. In some instances, relevant experience and/or on-the-job training may be required in addition to the formal qualification (ANZSCO Skill Level 1).
`,

exceptionsTitle:`Exceptions for Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
exceptionsList:[`Australian Graduate exceptions apply in some states/territories
`,`Priority Skilled Lists may apply a specific requirement in some states
`,`Countries free from submitting IELTS or OET include the UK, Canada, New Zealand, US, and Ireland. Where mandatory licensing or 
registration is required, you must demonstrate a level of English sufficient to meet licensing / registration or a minimum IELTS, or 
equivalent, whichever is higher.
  `],



languageTitle:`ANZSCO Unit Group-3132 Telecommunications Technical Specialists require a level of language proficiency.
`,
languageList:[`IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overall;
`,`OET result with a minimum grade B in all sections;
`,`TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overall L93);
`,`PTE Academic with a min score of 50 (L, R, W), 65 in speaking and 65 overall.
`],

occupationsTitle:`Occupations in Telecommunications Technical Specialists ANZSCO Unit Group-3132.`,
occupationsList:[`      
313211 Radiocommunications Technician
`,` 313212 Telecommunications Field Engineer
`,` 313213 Telecommunications Network Planner
`,`313214 Telecommunications Technical Officer or Technologist

`],

anzscoTitle:`Telecommunications Network Planner ANZSCO-313213.

`,
anzscoDescription:`Telecommunications Network Planner work in configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems. Telecommunications Network Planner maintains the documentation of communication policies, procedures, guidelines and regulations, and quality standards. Registration or licensing of the related fields will probably be required. 
`,
tasksTitle:`Telecommunications Network Planners are responsible for the following tasks:`,
tasks:[`   Telecommunications Network Planner installs, maintains, repairs and diagnose malfunctions of microwave, telemetry, multiplexing, satellite and other radio and electromagnetic wave communication systems.
`,` Telecommunications Network Planner work in configuring and integrating network and telecommunications technology with computer software, hardware, desktops, peripherals, databases and operating systems.
`,` Telecommunications Network Planner develop and record logs of the details, locations and status of inventories, parts, equipment and instruments. 
`,` Telecommunications Network Planner maintains the documentation of communication policies, procedures, guidelines and regulations, and quality standards.
`,` Telecommunications Network Planner provides technical advice and information. 
`,` Telecommunications Network Planner monitors the performance of complex telecommunications networks and equipment.
`,` Telecommunications Network Planner plans the development of customer access telecommunications network infrastructure.
`,` Telecommunications Network Planners are responsible for liaising with vendors, suppliers, service providers and external resources and monitoring contractual obligations and performance delivery.








`]






}








}
  return (
    <div>
     <div>
        {anzsco === "anzsco-133211-engineering-manager" && (
          
          <Head>
      <title>Engineering Manager | Unit Group 1332 | ANZSCO 133211</title>
        <meta name="description" content="Engineering Manager | Unit Group 1332 | ANZSCO 133211" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
        )}
        {anzsco === "anzsco-233111-chemical-engineer" && (
           <Head>
           <title>Chemical Engineer | Unit Group 2331 | ANZSCO 233111</title>
             <meta name="description" content="Occupational Unit Group 2331 Chemical and Materials Engineer. ANZSCO 233111 PR Visa for Chemical Engineer." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
         
        )}
        {anzsco === "anzsco-233211-civil-engineer" && (
          <Head>
          <title>Civil Engineer ANZSCO 233211</title>
            <meta name="description" content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233211 PR Visa for Civil Engineer." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
        )}
        {anzsco === "anzsco-233212-geo-technical-engineer" && (
           <Head>
           <title>Geo technical Engineer ANZSCO 233212</title>
             <meta name="description" content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233212 PR Visa for Geo-Technical Engineer." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
          
        )}
        {anzsco === "anzsco-233214-structural-engineer" && (
          <Head>
          <title>Structural Engineer ANZSCO 233214</title>
            <meta name="description" content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233214 PR Visa for Structural Engineer." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>

        )}
        {anzsco === "anzsco-233215-transport-engineer" && (
           <Head>
           <title>Transport Engineer ANZSCO 233215</title>
             <meta name="description" content="Occupational Unit Group 2332 Civil Engineering Professionals. ANZSCO 233215 PR Visa for Transport Engineer." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>

        )}
        {anzsco === "anzsco-233311-electrical-engineer" && (
          <Head>
          <title>Electrical Engineer ANZSCO 233311</title>
            <meta name="description" content="Occupational Unit Group 2333 Electrical Engineers. 

ANZSCO 233311 PR Visa for Electrical Engineer." />
                  <link rel="canonical" href={canonicalUrl} />

          </Head>
          
        )}
        {anzsco === "anzsco-233411-electronics-engineer" && (
           <Head>
           <title>Electronics Engineer ANZSCO 233411</title>
             <meta name="description" content="Occupational Unit Group 2334 Electronics Engineer. 

ANZSCO 233411 PR Visa for Electronics Engineer." />
                  <link rel="canonical" href={canonicalUrl} />

           </Head>
         
        )}
        {anzsco === "anzsco-233511-industrial-engineer" && (

<Head>
<title>Industrial Engineer ANZSCO 233511</title>
  <meta name="description" content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233511 PR Visa for Industrial Engineer" />
  <link rel="canonical" href={canonicalUrl} />

</Head>
          
        )}
        {anzsco === "anzsco-233512-mechanical-engineer" && (
          <Head>
          <title>Mechanical Engineer ANZSCO 233512</title>
            <meta name="description" content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233512 PR Visa for Mechanical Engineers." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
         
        )}
        {anzsco === "anzsco-233513-production-or-plant-engineer" && (
           <Head>
           <title>Production or plant Engineer ANZSCO 233513</title>
             <meta name="description" content="Occupational Unit Group 2335 Industrial,  Mechanical and  Production  Engineers  ANZSCO 233513 PR Visa for Production or Plant engineers" />
             <link rel="canonical" href={canonicalUrl} />

           </Head>

        )}
        {anzsco === "anzsco-233611-mining-engineer" && (
            <Head>
            <title>Mining Engineer ANZSCO 233611</title>
              <meta name="description" content="Occupational Unit Group 2336 Mining Engineers ANZSCO 233611 PR Visa for Mining Engineers." />
              <link rel="canonical" href={canonicalUrl} />

            </Head>
          
        )}
        {anzsco === "anzsco-233612-petroleum-engineer" && (
           <Head>
           <title>Petroleum Engineer ANZSCO 233612</title>
             <meta name="description" content="Occupational Unit Group 2336 Mining Engineers ANZSCO 233612 PR Visa for Petroleum Engineers." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
          
        )}
        {anzsco === "anzsco-233911-aeronautical-engineer" && (
          <Head>
          <title>Aeronautical Engineer ANZSCO 233911</title>
            <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233911 PR Visa for Aeronautical Engineer" />
            <link rel="canonical" href={canonicalUrl} />

          </Head>

        )}
        {anzsco === "anzsco-233912-agricultural-engineer" && (
           <Head>
           <title>Agricultural Engineer ANZSCO 233912</title>
             <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233912 PR Visa for Agriculture Engineer" />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
         
        )}
        {anzsco === "anzsco-233913-biomedical-engineer" && (
          
          <Head>
           <title>Biomedical Engineer ANZSCO 233913</title>
             <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233913 PR Visa for Biomedical Engineer" />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
        )}
        {anzsco === "anzsco-233914-engineering-technologist" && (
           <Head>
           <title>Engineering technologist ANZSCO 233914</title>
             <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233914 PR Visa for Engineering Technologists" />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
        
        )}
        {anzsco === "anzsco-233915-environmental-engineer" && (
          <Head>
          <title>Environmental Engineer ANZSCO 233915</title>
            <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233915 PR Visa for Environmental Engineer." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
         
        )}
        {anzsco === "anzsco-233999-engineering-professionals-nec" && (
          <Head>
          <title>Engineering professionals nec ANZSCO 233999</title>
            <meta name="description" content="Occupational Unit Group 2339 Other Engineering Professionals ANZSCO 233999 PR Visa for Engineering Professionals." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
         
        )}
        {anzsco === "computer-networks-and-system-engineers-anzsco-263111" && (
           <Head>
           <title>Computer Network and Systems Engineers ANZSCO 263111</title>
             <meta name="description" content="Occupational Unit Group 2631 Other Computer Network Professionals ANZSCO 263111 PR Visa for Computer Network and Systems Engineer." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
          
        )}{" "}
        {anzsco === "telecommunication-engineers-anzsco-263311" && (
            <Head>
            <title>Telecommunications Engineer ANZSCO 263311</title>
              <meta name="description" content="Occupational Unit Group 2633 Telecommunications Engineering Professionals ANZSCO 263311 PR Visa for Telecommunications Engineer." />
              <link rel="canonical" href={canonicalUrl} />

            </Head>
          
        )}{" "}
        {anzsco === "telecommunication-network-engineers-anzsco-263312" && (
         
          <Head>
            <title>Telecommunications Network Engineers ANZSCO 263312</title>
              <meta name="description" content="Telecommunications Network Engineers ANZSCO 263312" />
              <link rel="canonical" href={canonicalUrl} />

            </Head>
        )}{" "}
        {anzsco === "civil-engineering-draftsperson-anzsco-312211" && (
          <Head>
          <title>Civil Engineering Draftsperson ANZSCO 312211</title>
            <meta name="description" content="Occupational Unit Group 3122 Civil Engineering Draftsperson and Technician ANZSCO 312211PR Visa for Civil Engineering Draftsperson." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
         
        )}{" "}
        {anzsco === "civil-engineering-technician-anzsco-312212" && (
          <Head>
          <title>Civil Engineering Technician ANZSCO 312212</title>
            <meta name="description" content="Occupational Unit Group 3122 Civil Engineering Draftsperson and Technician ANZSCO 312212PR Visa for Civil Engineering Technician ." />
            <link rel="canonical" href={canonicalUrl} />

</Head>
         
        )}{" "}
        {anzsco === "electrical-engineering-draftsperson-anzsco-312311" && (
          <Head>
          <title>Electrical Engineering Draftsperson ANZSCO 312311</title>
            <meta name="description" content="Occupational Unit Group 3123 Electrical Engineering Draftsperson and Technician ANZSCO 312311PR Visa for Electrical Engineering Draftsperson." />
            <link rel="canonical" href={canonicalUrl} />

          </Head>
         
        )}{" "}
        {anzsco === "electrical-engineering-technician-anzsco-312312" && (
           <Head>
           <title>Electrical Engineering Technician ANZSCO 312312</title>
             <meta name="description" content="Occupational Unit Group 3123 Electrical Engineering Draftsperson and Technician ANZSCO 312312PR Visa for Electrical Engineering Technician." />
             <link rel="canonical" href={canonicalUrl} />

           </Head>
         
        )}
        {anzsco === "telecommunication-field-engineer-anzsco-313212" && (
           <Head>
           <title>Telecommunications Field Engineer ANZSCO 313212</title>
             <meta name="description" content="Occupational Unit Group 3132 Telecommunications Technical 

Specialists. ANZSCO 313212PR Visa for Telecommunications Field Engineer." />
                   <link rel="canonical" href={canonicalUrl} />

           </Head>
         
        )}
      </div>
     

        <Container>
          {anzsco==="anzsco-233111-chemical-engineer" && <>
          <Anz1 title={allData.chemicalEngineer.title} description={allData.chemicalEngineer.description} image={allData.chemicalEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.chemicalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.chemicalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.chemicalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.chemicalEngineer.skillLevelTitle} skillLevelDescription={allData.chemicalEngineer.skillLevelDescription}
            skillAssessmentTitle={allData.chemicalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.chemicalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.chemicalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.chemicalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.chemicalEngineer.occupationListTitle} occupationList={allData.chemicalEngineer.occupationList} 
            visaProvisionTitle2={allData.chemicalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.chemicalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.chemicalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.chemicalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.chemicalEngineer.exceptionsTitle}
            exceptionsList={allData.chemicalEngineer.exceptionsList}
            languageTitle={allData.chemicalEngineer.languageTitle}
            languageList={allData.chemicalEngineer.languageList}
            occupationsTitle={allData.chemicalEngineer.occupationsTitle}
            occupationsList={allData.chemicalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.chemicalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.chemicalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.chemicalEngineer.tasksTitle}
tasks={allData.chemicalEngineer.tasks}/>

          </> }
           


  {anzsco==="anzsco-233112-materials-engineer" && <>
          <Anz1 title={allData.materialsEngineer.title} description={allData.materialsEngineer.description} image={allData.materialsEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.materialsEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.materialsEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.materialsEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.materialsEngineer.skillLevelTitle} skillLevelDescription={allData.materialsEngineer.skillLevelDescription}
            skillAssessmentTitle={allData.materialsEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.materialsEngineer.skillAssessmentDescription} visaProvisionTitle={allData.materialsEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.materialsEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.materialsEngineer.occupationListTitle} occupationList={allData.materialsEngineer.occupationList} 
            visaProvisionTitle2={allData.materialsEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.materialsEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.materialsEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.materialsEngineer.exceptionsTitle}
            exceptionsList={allData.materialsEngineer.exceptionsList}
            languageTitle={allData.materialsEngineer.languageTitle}
            languageList={allData.materialsEngineer.languageList}
            occupationsTitle={allData.materialsEngineer.occupationsTitle}
            occupationsList={allData.materialsEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.materialsEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.materialsEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.materialsEngineer.tasksTitle}
tasks={allData.materialsEngineer.tasks}/>

          </> }
           

          {anzsco==="anzsco-133211-engineering-manager" && <>
          <Anz1 title={allData.engineeringManager.title} description={allData.engineeringManager.description} image={allData.engineeringManager.image}/>
            <Anz2 unitGroupTitle1={allData.engineeringManager.unitGroupTitle1} 
            unitGroupTitle2={allData.engineeringManager.unitGroupTitle2} 
            unitGroupTitle2Description={allData.engineeringManager.unitGroupTitle2Description}
            skillLevelTitle={allData.engineeringManager.skillLevelTitle} skillLevelDescription={allData.engineeringManager.skillLevelDescription}
            skillAssessmentTitle={allData.engineeringManager.skillAssessmentTitle}
            skillAssessmentDescription={allData.engineeringManager.skillAssessmentDescription} visaProvisionTitle={allData.engineeringManager.visaProvisionTitle}
            visaProvisionDescription={allData.engineeringManager.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.engineeringManager.occupationListTitle} occupationList={allData.engineeringManager.occupationList} 
            visaProvisionTitle2={allData.engineeringManager.visaProvisionTitle2}
            visaProvisionDescription2={allData.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.engineeringManager.skillLevelTitle2}
            skillLevelDescription2={allData.engineeringManager.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.engineeringManager.exceptionsTitle}
            exceptionsList={allData.engineeringManager.exceptionsList}
            languageTitle={allData.engineeringManager.languageTitle}
            languageList={allData.engineeringManager.languageList}
            occupationsTitle={allData.engineeringManager.occupationsTitle}
            occupationsList={allData.engineeringManager.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.engineeringManager.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.engineeringManager.anzscoDescription}</p>


<Anz6  tasksTitle={allData.engineeringManager.tasksTitle}
tasks={allData.engineeringManager.tasks}/>

          </> }


          {anzsco==="anzsco-233311-electrical-engineer" && <>
          <Anz1 title={allData.electricalEngineer.title} description={allData.electricalEngineer.description} image={allData.electricalEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.electricalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.electricalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.electricalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.electricalEngineer.skillLevelTitle} skillLevelDescription={allData.electricalEngineer.skillLevelDescription}
            specializationsTitle={allData.electricalEngineer.specializationsTitle} specializationsList={allData.electricalEngineer.specializationsList}
            skillAssessmentTitle={allData.electricalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.electricalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.electricalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.electricalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.electricalEngineer.occupationListTitle} occupationList={allData.electricalEngineer.occupationList} 
            visaProvisionTitle2={allData.electricalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.electricalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.electricalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.electricalEngineer.exceptionsTitle}
            exceptionsList={allData.electricalEngineer.exceptionsList}
            languageTitle={allData.electricalEngineer.languageTitle}
            languageList={allData.electricalEngineer.languageList}
            occupationsTitle={allData.electricalEngineer.occupationsTitle}
            occupationsList={allData.electricalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.electricalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.electricalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.electricalEngineer.tasksTitle}
tasks={allData.electricalEngineer.tasks}/>

          </> }
           
           

          {anzsco==="anzsco-233411-electronics-engineer" && <>
          <Anz1 title={allData.electronicsEngineer.title} description={allData.electronicsEngineer.description} image={allData.electronicsEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.electronicsEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.electronicsEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.electronicsEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.electronicsEngineer.skillLevelTitle} skillLevelDescription={allData.electronicsEngineer.skillLevelDescription}
             specializationsTitle={allData.electronicsEngineer.specializationsTitle} specializationsList={allData.electronicsEngineer.specializationsList}
            skillAssessmentTitle={allData.electronicsEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.electronicsEngineer.skillAssessmentDescription} visaProvisionTitle={allData.electronicsEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.electronicsEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.electronicsEngineer.occupationListTitle} occupationList={allData.electronicsEngineer.occupationList} 
            visaProvisionTitle2={allData.electronicsEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.electronicsEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.electronicsEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.electronicsEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.electronicsEngineer.exceptionsTitle}
            exceptionsList={allData.electronicsEngineer.exceptionsList}
            languageTitle={allData.electronicsEngineer.languageTitle}
            languageList={allData.electronicsEngineer.languageList}
            occupationsTitle={allData.electronicsEngineer.occupationsTitle}
            occupationsList={allData.electronicsEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.electronicsEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.electronicsEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.electronicsEngineer.tasksTitle}
tasks={allData.electronicsEngineer.tasks}/>

          </> }
           


          {anzsco==="anzsco-233611-mining-engineer" && <>
          <Anz1 title={allData.miningEngineer.title} description={allData.miningEngineer.description} image={allData.miningEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.miningEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.miningEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.miningEngineer.unitGroupTitle2Description}
            
            skillLevelTitle={allData.miningEngineer.skillLevelTitle} skillLevelDescription={allData.miningEngineer.skillLevelDescription}
            specializationsTitle={allData.miningEngineer.specializationsTitle} specializationsList={allData.miningEngineer.specializationsList}
            skillAssessmentTitle={allData.miningEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.miningEngineer.skillAssessmentDescription} visaProvisionTitle={allData.miningEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.miningEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.miningEngineer.occupationListTitle} occupationList={allData.miningEngineer.occupationList} 
            visaProvisionTitle2={allData.miningEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.miningEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.miningEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.miningEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.miningEngineer.exceptionsTitle}
            exceptionsList={allData.miningEngineer.exceptionsList}
            languageTitle={allData.miningEngineer.languageTitle}
            languageList={allData.miningEngineer.languageList}
            occupationsTitle={allData.miningEngineer.occupationsTitle}
            occupationsList={allData.miningEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.miningEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.miningEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.miningEngineer.tasksTitle}
tasks={allData.miningEngineer.tasks}/>

          </> }
           

          {anzsco==="anzsco-233911-aeronautical-engineer" && <>
          <Anz1 title={allData.aeronauticalEngineer.title} description={allData.aeronauticalEngineer.description} image={allData.aeronauticalEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.aeronauticalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.aeronauticalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.aeronauticalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.aeronauticalEngineer.skillLevelTitle} skillLevelDescription={allData.aeronauticalEngineer.skillLevelDescription}
            specializationsTitle={allData.aeronauticalEngineer.specializationsTitle} specializationsList={allData.aeronauticalEngineer.specializationsList}
            skillAssessmentTitle={allData.aeronauticalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.aeronauticalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.aeronauticalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.aeronauticalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.aeronauticalEngineer.occupationListTitle} occupationList={allData.aeronauticalEngineer.occupationList} 
            visaProvisionTitle2={allData.aeronauticalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.aeronauticalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.aeronauticalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.aeronauticalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.aeronauticalEngineer.exceptionsTitle}
            exceptionsList={allData.aeronauticalEngineer.exceptionsList}
            languageTitle={allData.aeronauticalEngineer.languageTitle}
            languageList={allData.aeronauticalEngineer.languageList}
            occupationsTitle={allData.aeronauticalEngineer.occupationsTitle}
            occupationsList={allData.aeronauticalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.aeronauticalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.aeronauticalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.aeronauticalEngineer.tasksTitle}
tasks={allData.aeronauticalEngineer.tasks}/>

          </> }

       

          {anzsco==="anzsco-233912-agricultural-engineer" && <>
          <Anz1 title={allData.agricultureEngineer.title} description={allData.agricultureEngineer.description} image={allData.agricultureEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.agricultureEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.agricultureEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.agricultureEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.agricultureEngineer.skillLevelTitle} skillLevelDescription={allData.agricultureEngineer.skillLevelDescription}
            specializationsTitle={allData.agricultureEngineer.specializationsTitle} specializationsList={allData.agricultureEngineer.specializationsList}
            skillAssessmentTitle={allData.agricultureEngineer.skillAssessmentTitle}

            skillAssessmentDescription={allData.agricultureEngineer.skillAssessmentDescription} visaProvisionTitle={allData.agricultureEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.agricultureEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.agricultureEngineer.occupationListTitle} occupationList={allData.agricultureEngineer.occupationList} 
            visaProvisionTitle2={allData.agricultureEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.agricultureEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.agricultureEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.agricultureEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.agricultureEngineer.exceptionsTitle}
            exceptionsList={allData.agricultureEngineer.exceptionsList}
            languageTitle={allData.agricultureEngineer.languageTitle}
            languageList={allData.agricultureEngineer.languageList}
            occupationsTitle={allData.agricultureEngineer.occupationsTitle}
            occupationsList={allData.agricultureEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.agricultureEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.agricultureEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.agricultureEngineer.tasksTitle}
tasks={allData.agricultureEngineer.tasks}/>

          </> }

          {anzsco==="anzsco-233916-naval-architect" && <>
          <Anz1 title={allData.navalArchitect.title} description={allData.navalArchitect.description}/>
            <Anz2 unitGroupTitle1={allData.navalArchitect.unitGroupTitle1} 
            unitGroupTitle2={allData.navalArchitect.unitGroupTitle2} 
            unitGroupTitle2Description={allData.navalArchitect.unitGroupTitle2Description}
            skillLevelTitle={allData.navalArchitect.skillLevelTitle} skillLevelDescription={allData.navalArchitect.skillLevelDescription}
            
            specializationsTitle={allData.navalArchitect.specializationsTitle} specializationsList={allData.navalArchitect.specializationsList}
            skillAssessmentTitle={allData.navalArchitect.skillAssessmentTitle}
            skillAssessmentDescription={allData.navalArchitect.skillAssessmentDescription} visaProvisionTitle={allData.navalArchitect.visaProvisionTitle}
            visaProvisionDescription={allData.navalArchitect.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.navalArchitect.occupationListTitle} occupationList={allData.navalArchitect.occupationList} 
            visaProvisionTitle2={allData.navalArchitect.visaProvisionTitle2}
            visaProvisionDescription2={allData.navalArchitect.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.navalArchitect.skillLevelTitle2}
            skillLevelDescription2={allData.navalArchitect.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.navalArchitect.exceptionsTitle}
            exceptionsList={allData.navalArchitect.exceptionsList}
            languageTitle={allData.navalArchitect.languageTitle}
            languageList={allData.navalArchitect.languageList}
            occupationsTitle={allData.navalArchitect.occupationsTitle}
            occupationsList={allData.navalArchitect.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.navalArchitect.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.navalArchitect.anzscoDescription}</p>


<Anz6  tasksTitle={allData.navalArchitect.tasksTitle}
tasks={allData.navalArchitect.tasks}/>

          </> }

          
          {anzsco==="anzsco-233913-biomedical-engineer" && <>
          <Anz1 title={allData.biomedicalEngineer.title} description={allData.biomedicalEngineer.description}/>
            <Anz2 unitGroupTitle1={allData.biomedicalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.biomedicalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.biomedicalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.biomedicalEngineer.skillLevelTitle} skillLevelDescription={allData.biomedicalEngineer.skillLevelDescription}
            
            specializationsTitle={allData.biomedicalEngineer.specializationsTitle} specializationsList={allData.biomedicalEngineer.specializationsList}
            skillAssessmentTitle={allData.biomedicalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.biomedicalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.biomedicalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.biomedicalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.biomedicalEngineer.occupationListTitle} occupationList={allData.biomedicalEngineer.occupationList} 
            visaProvisionTitle2={allData.biomedicalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.biomedicalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.biomedicalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.biomedicalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.biomedicalEngineer.exceptionsTitle}
            exceptionsList={allData.biomedicalEngineer.exceptionsList}
            languageTitle={allData.biomedicalEngineer.languageTitle}
            languageList={allData.biomedicalEngineer.languageList}
            occupationsTitle={allData.biomedicalEngineer.occupationsTitle}
            occupationsList={allData.biomedicalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.biomedicalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.biomedicalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.biomedicalEngineer.tasksTitle}
tasks={allData.biomedicalEngineer.tasks}/>

          </> }
           

          {anzsco==="anzsco-233914-engineering-technologist" && <>
          <Anz1 title={allData.engineeringTechnologist.title} description={allData.engineeringTechnologist.description}/>
            <Anz2 unitGroupTitle1={allData.engineeringTechnologist.unitGroupTitle1} 
            unitGroupTitle2={allData.engineeringTechnologist.unitGroupTitle2} 
            unitGroupTitle2Description={allData.engineeringTechnologist.unitGroupTitle2Description}
            skillLevelTitle={allData.engineeringTechnologist.skillLevelTitle} skillLevelDescription={allData.engineeringTechnologist.skillLevelDescription}
            
            specializationsTitle={allData.engineeringTechnologist.specializationsTitle} specializationsList={allData.engineeringTechnologist.specializationsList}
            skillAssessmentTitle={allData.engineeringTechnologist.skillAssessmentTitle}
            skillAssessmentDescription={allData.engineeringTechnologist.skillAssessmentDescription} visaProvisionTitle={allData.engineeringTechnologist.visaProvisionTitle}
            visaProvisionDescription={allData.engineeringTechnologist.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.engineeringTechnologist.occupationListTitle} occupationList={allData.engineeringTechnologist.occupationList} 
            visaProvisionTitle2={allData.engineeringTechnologist.visaProvisionTitle2}
            visaProvisionDescription2={allData.engineeringTechnologist.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.engineeringTechnologist.skillLevelTitle2}
            skillLevelDescription2={allData.engineeringTechnologist.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.engineeringTechnologist.exceptionsTitle}
            exceptionsList={allData.engineeringTechnologist.exceptionsList}
            languageTitle={allData.engineeringTechnologist.languageTitle}
            languageList={allData.engineeringTechnologist.languageList}
            occupationsTitle={allData.engineeringTechnologist.occupationsTitle}
            occupationsList={allData.engineeringTechnologist.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.engineeringTechnologist.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.engineeringTechnologist.anzscoDescription}</p>


<Anz6  tasksTitle={allData.engineeringTechnologist.tasksTitle}
tasks={allData.engineeringTechnologist.tasks}/>

          </> }

          {anzsco==="anzsco-233915-environmental-engineer" && <>
          <Anz1 title={allData.environmentalEngineer.title} description={allData.environmentalEngineer.description}/>
            <Anz2 unitGroupTitle1={allData.environmentalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.environmentalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.environmentalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.environmentalEngineer.skillLevelTitle} skillLevelDescription={allData.environmentalEngineer.skillLevelDescription}
            
            specializationsTitle={allData.environmentalEngineer.specializationsTitle} specializationsList={allData.environmentalEngineer.specializationsList}
            skillAssessmentTitle={allData.environmentalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.environmentalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.environmentalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.environmentalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.environmentalEngineer.occupationListTitle} occupationList={allData.environmentalEngineer.occupationList} 
            visaProvisionTitle2={allData.environmentalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.environmentalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.environmentalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.environmentalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.environmentalEngineer.exceptionsTitle}
            exceptionsList={allData.environmentalEngineer.exceptionsList}
            languageTitle={allData.environmentalEngineer.languageTitle}
            languageList={allData.environmentalEngineer.languageList}
            occupationsTitle={allData.environmentalEngineer.occupationsTitle}
            occupationsList={allData.environmentalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.environmentalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.environmentalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.environmentalEngineer.tasksTitle}
tasks={allData.environmentalEngineer.tasks}/>

          </> }
          {anzsco==="civilengineering-professionals" && <>
          <Anz1 title={allData.civilEngineeringProfessionals.title} description={allData.civilEngineeringProfessionals.description} image={allData.civilEngineeringProfessionals.image}/>
            <Anz2 unitGroupTitle1={allData.civilEngineeringProfessionals.unitGroupTitle1} 
            unitGroupTitle2={allData.civilEngineeringProfessionals.unitGroupTitle2} 
            unitGroupTitle2Description={allData.civilEngineeringProfessionals.unitGroupTitle2Description}
            skillLevelTitle={allData.civilEngineeringProfessionals.skillLevelTitle} skillLevelDescription={allData.civilEngineeringProfessionals.skillLevelDescription}
            
            specializationsTitle={allData.civilEngineeringProfessionals.specializationsTitle} specializationsList={allData.civilEngineeringProfessionals.specializationsList}
            skillAssessmentTitle={allData.civilEngineeringProfessionals.skillAssessmentTitle}
            skillAssessmentDescription={allData.civilEngineeringProfessionals.skillAssessmentDescription} visaProvisionTitle={allData.civilEngineeringProfessionals.visaProvisionTitle}
            visaProvisionDescription={allData.civilEngineeringProfessionals.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.civilEngineeringProfessionals.occupationListTitle} occupationList={allData.civilEngineeringProfessionals.occupationList} 
            visaProvisionTitle2={allData.civilEngineeringProfessionals.visaProvisionTitle2}
            visaProvisionDescription2={allData.civilEngineeringProfessionals.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.civilEngineeringProfessionals.skillLevelTitle2}
            skillLevelDescription2={allData.civilEngineeringProfessionals.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.civilEngineeringProfessionals.exceptionsTitle}
            exceptionsList={allData.civilEngineeringProfessionals.exceptionsList}
            languageTitle={allData.civilEngineeringProfessionals.languageTitle}
            languageList={allData.civilEngineeringProfessionals.languageList}
            occupationsTitle={allData.civilEngineeringProfessionals.occupationsTitle}
            occupationsList={allData.civilEngineeringProfessionals.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.civilEngineeringProfessionals.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.civilEngineeringProfessionals.anzscoDescription}</p>


<Anz6  tasksTitle={allData.civilEngineeringProfessionals.tasksTitle}
tasks={allData.civilEngineeringProfessionals.tasks}/>

          </> }



          {anzsco==="anzsco-233212-geo-technical-engineer" && <>
          <Anz1 title={allData.geotechnicalEngineer.title} description={allData.geotechnicalEngineer.description} image={allData.geotechnicalEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.geotechnicalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.geotechnicalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.geotechnicalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.geotechnicalEngineer.skillLevelTitle} skillLevelDescription={allData.geotechnicalEngineer.skillLevelDescription}
            
            specializationsTitle={allData.geotechnicalEngineer.specializationsTitle} specializationsList={allData.geotechnicalEngineer.specializationsList}
            skillAssessmentTitle={allData.geotechnicalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.geotechnicalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.geotechnicalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.geotechnicalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.geotechnicalEngineer.occupationListTitle} occupationList={allData.geotechnicalEngineer.occupationList} 
            visaProvisionTitle2={allData.geotechnicalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.geotechnicalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.geotechnicalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.geotechnicalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.geotechnicalEngineer.exceptionsTitle}
            exceptionsList={allData.geotechnicalEngineer.exceptionsList}
            languageTitle={allData.geotechnicalEngineer.languageTitle}
            languageList={allData.geotechnicalEngineer.languageList}
            occupationsTitle={allData.geotechnicalEngineer.occupationsTitle}
            occupationsList={allData.geotechnicalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.geotechnicalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.geotechnicalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.geotechnicalEngineer.tasksTitle}
tasks={allData.geotechnicalEngineer.tasks}/>

          </> }



          {anzsco==="anzsco-233214-structural-engineer" && <>
          <Anz1 title={allData.structuralEngineer.title} description={allData.structuralEngineer.description} image={allData.structuralEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.structuralEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.structuralEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.structuralEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.structuralEngineer.skillLevelTitle} skillLevelDescription={allData.structuralEngineer.skillLevelDescription}
            
            specializationsTitle={allData.structuralEngineer.specializationsTitle} specializationsList={allData.structuralEngineer.specializationsList}
            skillAssessmentTitle={allData.structuralEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.structuralEngineer.skillAssessmentDescription} visaProvisionTitle={allData.structuralEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.structuralEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.structuralEngineer.occupationListTitle} occupationList={allData.structuralEngineer.occupationList} 
            visaProvisionTitle2={allData.structuralEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.structuralEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.structuralEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.structuralEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.structuralEngineer.exceptionsTitle}
            exceptionsList={allData.structuralEngineer.exceptionsList}
            languageTitle={allData.structuralEngineer.languageTitle}
            languageList={allData.structuralEngineer.languageList}
            occupationsTitle={allData.structuralEngineer.occupationsTitle}
            occupationsList={allData.structuralEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.structuralEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.structuralEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.structuralEngineer.tasksTitle}
tasks={allData.structuralEngineer.tasks}/>

          </> }

          {anzsco==="anzsco-233215-transport-engineer" && <>
          <Anz1 title={allData.transportEngineer.title} description={allData.transportEngineer.description} image={allData.transportEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.transportEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.transportEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.transportEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.transportEngineer.skillLevelTitle} skillLevelDescription={allData.transportEngineer.skillLevelDescription}
            
            specializationsTitle={allData.transportEngineer.specializationsTitle} specializationsList={allData.transportEngineer.specializationsList}
            skillAssessmentTitle={allData.transportEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.transportEngineer.skillAssessmentDescription} visaProvisionTitle={allData.transportEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.transportEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.transportEngineer.occupationListTitle} occupationList={allData.transportEngineer.occupationList} 
            visaProvisionTitle2={allData.transportEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.transportEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.transportEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.transportEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.transportEngineer.exceptionsTitle}
            exceptionsList={allData.transportEngineer.exceptionsList}
            languageTitle={allData.transportEngineer.languageTitle}
            languageList={allData.transportEngineer.languageList}
            occupationsTitle={allData.transportEngineer.occupationsTitle}
            occupationsList={allData.transportEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.transportEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.transportEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.transportEngineer.tasksTitle}
tasks={allData.transportEngineer.tasks}/>

          </> }
          

          {anzsco==="anzsco-233511-industrial-engineer" && <>
          <Anz1 title={allData.industrialEngineer.title} description={allData.industrialEngineer.description} image={allData.industrialEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.industrialEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.industrialEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.industrialEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.industrialEngineer.skillLevelTitle} skillLevelDescription={allData.industrialEngineer.skillLevelDescription}
            
            specializationsTitle={allData.industrialEngineer.specializationsTitle} specializationsList={allData.industrialEngineer.specializationsList}
            skillAssessmentTitle={allData.industrialEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.industrialEngineer.skillAssessmentDescription} visaProvisionTitle={allData.industrialEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.industrialEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.industrialEngineer.occupationListTitle} occupationList={allData.industrialEngineer.occupationList} 
            visaProvisionTitle2={allData.industrialEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.industrialEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.industrialEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.industrialEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.industrialEngineer.exceptionsTitle}
            exceptionsList={allData.industrialEngineer.exceptionsList}
            languageTitle={allData.industrialEngineer.languageTitle}
            languageList={allData.industrialEngineer.languageList}
            occupationsTitle={allData.industrialEngineer.occupationsTitle}
            occupationsList={allData.industrialEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.industrialEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.industrialEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.industrialEngineer.tasksTitle}
tasks={allData.industrialEngineer.tasks}/>

          </> }



          {anzsco==="anzsco-233512-mechanical-engineer" && <>
          <Anz1 title={allData.mechanicalEngineer.title} description={allData.mechanicalEngineer.description} image={allData.mechanicalEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.mechanicalEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.mechanicalEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.mechanicalEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.mechanicalEngineer.skillLevelTitle} skillLevelDescription={allData.mechanicalEngineer.skillLevelDescription}
            
            specializationsTitle={allData.mechanicalEngineer.specializationsTitle} specializationsList={allData.mechanicalEngineer.specializationsList}
            skillAssessmentTitle={allData.mechanicalEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.mechanicalEngineer.skillAssessmentDescription} visaProvisionTitle={allData.mechanicalEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.mechanicalEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.mechanicalEngineer.occupationListTitle} occupationList={allData.mechanicalEngineer.occupationList} 
            visaProvisionTitle2={allData.mechanicalEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.mechanicalEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.mechanicalEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.mechanicalEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.mechanicalEngineer.exceptionsTitle}
            exceptionsList={allData.mechanicalEngineer.exceptionsList}
            languageTitle={allData.mechanicalEngineer.languageTitle}
            languageList={allData.mechanicalEngineer.languageList}
            occupationsTitle={allData.mechanicalEngineer.occupationsTitle}
            occupationsList={allData.mechanicalEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.mechanicalEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.mechanicalEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.mechanicalEngineer.tasksTitle}
tasks={allData.mechanicalEngineer.tasks}/>

          </> }
           

          {anzsco==="anzsco-233513-production-or-plant-engineer" && <>
          <Anz1 title={allData.plantEngineer.title} description={allData.plantEngineer.description} image={allData.plantEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.plantEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.plantEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.plantEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.plantEngineer.skillLevelTitle} skillLevelDescription={allData.plantEngineer.skillLevelDescription}
            
            specializationsTitle={allData.plantEngineer.specializationsTitle} specializationsList={allData.plantEngineer.specializationsList}
            skillAssessmentTitle={allData.plantEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.plantEngineer.skillAssessmentDescription} visaProvisionTitle={allData.plantEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.plantEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.plantEngineer.occupationListTitle} occupationList={allData.plantEngineer.occupationList} 
            visaProvisionTitle2={allData.plantEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.plantEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.plantEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.plantEngineer.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.plantEngineer.exceptionsTitle}
            exceptionsList={allData.plantEngineer.exceptionsList}
            languageTitle={allData.plantEngineer.languageTitle}
            languageList={allData.plantEngineer.languageList}
            occupationsTitle={allData.plantEngineer.occupationsTitle}
            occupationsList={allData.plantEngineer.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.plantEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.plantEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.plantEngineer.tasksTitle}
tasks={allData.plantEngineer.tasks}/>

          </> }

          {anzsco==="anzsco-233999-engineering-professionals-nec" && <>
          <Anz1 title={allData.engineeringProfessionals.title} description={allData.engineeringProfessionals.description}/>
            <Anz2 unitGroupTitle1={allData.engineeringProfessionals.unitGroupTitle1} 
            unitGroupTitle2={allData.engineeringProfessionals.unitGroupTitle2} 
            unitGroupTitle2Description={allData.engineeringProfessionals.unitGroupTitle2Description}
            skillLevelTitle={allData.engineeringProfessionals.skillLevelTitle} skillLevelDescription={allData.engineeringProfessionals.skillLevelDescription}
            
            specializationsTitle={allData.engineeringProfessionals.specializationsTitle} specializationsList={allData.engineeringProfessionals.specializationsList}
            skillAssessmentTitle={allData.engineeringProfessionals.skillAssessmentTitle}
            skillAssessmentDescription={allData.engineeringProfessionals.skillAssessmentDescription} visaProvisionTitle={allData.engineeringProfessionals.visaProvisionTitle}
            visaProvisionDescription={allData.engineeringProfessionals.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.engineeringProfessionals.occupationListTitle} occupationList={allData.engineeringProfessionals.occupationList} 
            visaProvisionTitle2={allData.engineeringProfessionals.visaProvisionTitle2}
            visaProvisionDescription2={allData.engineeringProfessionals.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.engineeringProfessionals.skillLevelTitle2}
            skillLevelDescription2={allData.engineeringProfessionals.skillLevelDescription2}/>
           
            <Anz5 exceptionsTitle={allData.engineeringProfessionals.exceptionsTitle}
            exceptionsList={allData.engineeringProfessionals.exceptionsList}
            languageTitle={allData.engineeringProfessionals.languageTitle}
            languageList={allData.engineeringProfessionals.languageList}
            occupationsTitle={allData.engineeringProfessionals.occupationsTitle}
            occupationsList={allData.engineeringProfessionals.occupationsList}/>


       


<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.engineeringProfessionals.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.engineeringProfessionals.anzscoDescription}</p>


<Anz6  tasksTitle={allData.engineeringProfessionals.tasksTitle}
tasks={allData.engineeringProfessionals.tasks}/>

          </> }

          {anzsco==="anzsco-263111-computer-networks-and-system-engineers" && <>
          <Anz1 title={allData.computerEngineer.title} description={allData.computerEngineer.description} image={allData.computerEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.computerEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.computerEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.computerEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.computerEngineer.skillLevelTitle} skillLevelDescription={allData.computerEngineer.skillLevelDescription}

            specializationsTitle={allData.computerEngineer.specializationsTitle} specializationsList={allData.computerEngineer.specializationsList}
            skillAssessmentTitle={allData.computerEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.computerEngineer.skillAssessmentDescription} visaProvisionTitle={allData.computerEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.computerEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.computerEngineer.occupationListTitle} occupationList={allData.computerEngineer.occupationList} 
            visaProvisionTitle2={allData.computerEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.computerEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.computerEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.computerEngineer.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.computerEngineer.exceptionsTitle}
            exceptionsList={allData.computerEngineer.exceptionsList}
            languageTitle={allData.computerEngineer.languageTitle}
            languageList={allData.computerEngineer.languageList}
            occupationsTitle={allData.computerEngineer.occupationsTitle}
            occupationsList={allData.computerEngineer.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.computerEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.computerEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.computerEngineer.tasksTitle}
tasks={allData.computerEngineer.tasks}/>

          </> }

          {anzsco==="anzsco-263311-telecommunication-engineers" && <>
          <Anz1 title={allData.telecommunicationsEngineer.title} description={allData.telecommunicationsEngineer.description} image={allData.telecommunicationsEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.telecommunicationsEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.telecommunicationsEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.telecommunicationsEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.telecommunicationsEngineer.skillLevelTitle} skillLevelDescription={allData.telecommunicationsEngineer.skillLevelDescription}

            specializationsTitle={allData.telecommunicationsEngineer.specializationsTitle} specializationsList={allData.telecommunicationsEngineer.specializationsList}
            skillAssessmentTitle={allData.telecommunicationsEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.telecommunicationsEngineer.skillAssessmentDescription} visaProvisionTitle={allData.telecommunicationsEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.telecommunicationsEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.telecommunicationsEngineer.occupationListTitle} occupationList={allData.telecommunicationsEngineer.occupationList} 
            visaProvisionTitle2={allData.telecommunicationsEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.telecommunicationsEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.telecommunicationsEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.telecommunicationsEngineer.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.telecommunicationsEngineer.exceptionsTitle}
            exceptionsList={allData.telecommunicationsEngineer.exceptionsList}
            languageTitle={allData.telecommunicationsEngineer.languageTitle}
            languageList={allData.telecommunicationsEngineer.languageList}
            occupationsTitle={allData.telecommunicationsEngineer.occupationsTitle}
            occupationsList={allData.telecommunicationsEngineer.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.telecommunicationsEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.telecommunicationsEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.telecommunicationsEngineer.tasksTitle}
tasks={allData.telecommunicationsEngineer.tasks}/>

          </> }


          {anzsco==="anzsco-313212-telecommunication-technologist" && <>
          <Anz1 title={allData.telnetEngineer.title} description={allData.telnetEngineer.description} image={allData.telnetEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.telnetEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.telnetEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.telnetEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.telnetEngineer.skillLevelTitle} skillLevelDescription={allData.telnetEngineer.skillLevelDescription}

            specializationsTitle={allData.telnetEngineer.specializationsTitle} specializationsList={allData.telnetEngineer.specializationsList}
            skillAssessmentTitle={allData.telnetEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.telnetEngineer.skillAssessmentDescription} visaProvisionTitle={allData.telnetEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.telnetEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.telnetEngineer.occupationListTitle} occupationList={allData.telnetEngineer.occupationList} 
            visaProvisionTitle2={allData.telnetEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.telnetEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.telnetEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.telnetEngineer.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.telnetEngineer.exceptionsTitle}
            exceptionsList={allData.telnetEngineer.exceptionsList}
            languageTitle={allData.telnetEngineer.languageTitle}
            languageList={allData.telnetEngineer.languageList}
            occupationsTitle={allData.telnetEngineer.occupationsTitle}
            occupationsList={allData.telnetEngineer.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.telnetEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.telnetEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.telnetEngineer.tasksTitle}
tasks={allData.telnetEngineer.tasks}/>

          </> }


          {anzsco==="anzsco-312211-civil-engineering-draftsperson" && <>
          <Anz1 title={allData.civilDraftsperson.title} description={allData.civilDraftsperson.description} image={allData.civilDraftsperson.image}/>
            <Anz2 unitGroupTitle1={allData.civilDraftsperson.unitGroupTitle1} 
            unitGroupTitle2={allData.civilDraftsperson.unitGroupTitle2} 
            unitGroupTitle2Description={allData.civilDraftsperson.unitGroupTitle2Description}
            skillLevelTitle={allData.civilDraftsperson.skillLevelTitle} skillLevelDescription={allData.civilDraftsperson.skillLevelDescription}

            specializationsTitle={allData.civilDraftsperson.specializationsTitle} specializationsList={allData.civilDraftsperson.specializationsList}
            skillAssessmentTitle={allData.civilDraftsperson.skillAssessmentTitle}
            skillAssessmentDescription={allData.civilDraftsperson.skillAssessmentDescription} visaProvisionTitle={allData.civilDraftsperson.visaProvisionTitle}
            visaProvisionDescription={allData.civilDraftsperson.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.civilDraftsperson.occupationListTitle} occupationList={allData.civilDraftsperson.occupationList} 
            visaProvisionTitle2={allData.civilDraftsperson.visaProvisionTitle2}
            visaProvisionDescription2={allData.civilDraftsperson.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.civilDraftsperson.skillLevelTitle2}
            skillLevelDescription2={allData.civilDraftsperson.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.civilDraftsperson.exceptionsTitle}
            exceptionsList={allData.civilDraftsperson.exceptionsList}
            languageTitle={allData.civilDraftsperson.languageTitle}
            languageList={allData.civilDraftsperson.languageList}
            occupationsTitle={allData.civilDraftsperson.occupationsTitle}
            occupationsList={allData.civilDraftsperson.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.civilDraftsperson.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.civilDraftsperson.anzscoDescription}</p>


<Anz6  tasksTitle={allData.civilDraftsperson.tasksTitle}
tasks={allData.civilDraftsperson.tasks}/>

          </> }




          {anzsco==="anzsco-312212-civil-engineering-technician" && <>
          <Anz1 title={allData.civilTechnicians.title} description={allData.civilTechnicians.description} image={allData.civilTechnicians.image}/>
            <Anz2 unitGroupTitle1={allData.civilTechnicians.unitGroupTitle1} 
            unitGroupTitle2={allData.civilTechnicians.unitGroupTitle2} 
            unitGroupTitle2Description={allData.civilTechnicians.unitGroupTitle2Description}
            skillLevelTitle={allData.civilTechnicians.skillLevelTitle} skillLevelDescription={allData.civilTechnicians.skillLevelDescription}

            specializationsTitle={allData.civilTechnicians.specializationsTitle} specializationsList={allData.civilTechnicians.specializationsList}
            skillAssessmentTitle={allData.civilTechnicians.skillAssessmentTitle}
            skillAssessmentDescription={allData.civilTechnicians.skillAssessmentDescription} visaProvisionTitle={allData.civilTechnicians.visaProvisionTitle}
            visaProvisionDescription={allData.civilTechnicians.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.civilTechnicians.occupationListTitle} occupationList={allData.civilTechnicians.occupationList} 
            visaProvisionTitle2={allData.civilTechnicians.visaProvisionTitle2}
            visaProvisionDescription2={allData.civilTechnicians.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.civilTechnicians.skillLevelTitle2}
            skillLevelDescription2={allData.civilTechnicians.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.civilTechnicians.exceptionsTitle}
            exceptionsList={allData.civilTechnicians.exceptionsList}
            languageTitle={allData.civilTechnicians.languageTitle}
            languageList={allData.civilTechnicians.languageList}
            occupationsTitle={allData.civilTechnicians.occupationsTitle}
            occupationsList={allData.civilTechnicians.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.civilTechnicians.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.civilTechnicians.anzscoDescription}</p>


<Anz6  tasksTitle={allData.civilTechnicians.tasksTitle}
tasks={allData.civilTechnicians.tasks}/>

          </> }



          {anzsco==="anzsco-312311-electrical-engineering-draftsperson" && <>
          <Anz1 title={allData.electricalDraftsperson.title} description={allData.electricalDraftsperson.description} image={allData.electricalDraftsperson.image}/>
            <Anz2 unitGroupTitle1={allData.electricalDraftsperson.unitGroupTitle1} 
            unitGroupTitle2={allData.electricalDraftsperson.unitGroupTitle2} 
            unitGroupTitle2Description={allData.electricalDraftsperson.unitGroupTitle2Description}
            skillLevelTitle={allData.electricalDraftsperson.skillLevelTitle} skillLevelDescription={allData.electricalDraftsperson.skillLevelDescription}

            specializationsTitle={allData.electricalDraftsperson.specializationsTitle} specializationsList={allData.electricalDraftsperson.specializationsList}
            skillAssessmentTitle={allData.electricalDraftsperson.skillAssessmentTitle}
            skillAssessmentDescription={allData.electricalDraftsperson.skillAssessmentDescription} visaProvisionTitle={allData.electricalDraftsperson.visaProvisionTitle}
            visaProvisionDescription={allData.electricalDraftsperson.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.electricalDraftsperson.occupationListTitle} occupationList={allData.electricalDraftsperson.occupationList} 
            visaProvisionTitle2={allData.electricalDraftsperson.visaProvisionTitle2}
            visaProvisionDescription2={allData.electricalDraftsperson.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.electricalDraftsperson.skillLevelTitle2}
            skillLevelDescription2={allData.electricalDraftsperson.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.electricalDraftsperson.exceptionsTitle}
            exceptionsList={allData.electricalDraftsperson.exceptionsList}
            languageTitle={allData.electricalDraftsperson.languageTitle}
            languageList={allData.electricalDraftsperson.languageList}
            occupationsTitle={allData.electricalDraftsperson.occupationsTitle}
            occupationsList={allData.electricalDraftsperson.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.electricalDraftsperson.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.electricalDraftsperson.anzscoDescription}</p>


<Anz6  tasksTitle={allData.electricalDraftsperson.tasksTitle}
tasks={allData.electricalDraftsperson.tasks}/>

          </> }



          {anzsco==="anzsco-312312-electrical-engineering-technician" && <>
          <Anz1 title={allData.electricalTechnician.title} description={allData.electricalTechnician.description} image={allData.electricalTechnician.image}/>
            <Anz2 unitGroupTitle1={allData.electricalTechnician.unitGroupTitle1} 
            unitGroupTitle2={allData.electricalTechnician.unitGroupTitle2} 
            unitGroupTitle2Description={allData.electricalTechnician.unitGroupTitle2Description}
            skillLevelTitle={allData.electricalTechnician.skillLevelTitle} skillLevelDescription={allData.electricalTechnician.skillLevelDescription}

            specializationsTitle={allData.electricalTechnician.specializationsTitle} specializationsList={allData.electricalTechnician.specializationsList}
            skillAssessmentTitle={allData.electricalTechnician.skillAssessmentTitle}
            skillAssessmentDescription={allData.electricalTechnician.skillAssessmentDescription} visaProvisionTitle={allData.electricalTechnician.visaProvisionTitle}
            visaProvisionDescription={allData.electricalTechnician.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.electricalTechnician.occupationListTitle} occupationList={allData.electricalTechnician.occupationList} 
            visaProvisionTitle2={allData.electricalTechnician.visaProvisionTitle2}
            visaProvisionDescription2={allData.electricalTechnician.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.electricalTechnician.skillLevelTitle2}
            skillLevelDescription2={allData.electricalTechnician.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.electricalTechnician.exceptionsTitle}
            exceptionsList={allData.electricalTechnician.exceptionsList}
            languageTitle={allData.electricalTechnician.languageTitle}
            languageList={allData.electricalTechnician.languageList}
            occupationsTitle={allData.electricalTechnician.occupationsTitle}
            occupationsList={allData.electricalTechnician.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.electricalTechnician.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.electricalTechnician.anzscoDescription}</p>


<Anz6  tasksTitle={allData.electricalTechnician.tasksTitle}
tasks={allData.electricalTechnician.tasks}/>

          </> }


          {anzsco==="anzsco-313212-telecommunication-field-engineer" && <>
          <Anz1 title={allData.telfieldEngineer.title} description={allData.telfieldEngineer.description} image={allData.telfieldEngineer.image}/>
            <Anz2 unitGroupTitle1={allData.telfieldEngineer.unitGroupTitle1} 
            unitGroupTitle2={allData.telfieldEngineer.unitGroupTitle2} 
            unitGroupTitle2Description={allData.telfieldEngineer.unitGroupTitle2Description}
            skillLevelTitle={allData.telfieldEngineer.skillLevelTitle} skillLevelDescription={allData.telfieldEngineer.skillLevelDescription}

            specializationsTitle={allData.telfieldEngineer.specializationsTitle} specializationsList={allData.telfieldEngineer.specializationsList}
            skillAssessmentTitle={allData.telfieldEngineer.skillAssessmentTitle}
            skillAssessmentDescription={allData.telfieldEngineer.skillAssessmentDescription} visaProvisionTitle={allData.telfieldEngineer.visaProvisionTitle}
            visaProvisionDescription={allData.telfieldEngineer.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.telfieldEngineer.occupationListTitle} occupationList={allData.telfieldEngineer.occupationList} 
            visaProvisionTitle2={allData.telfieldEngineer.visaProvisionTitle2}
            visaProvisionDescription2={allData.telfieldEngineer.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.telfieldEngineer.skillLevelTitle2}
            skillLevelDescription2={allData.telfieldEngineer.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.telfieldEngineer.exceptionsTitle}
            exceptionsList={allData.telfieldEngineer.exceptionsList}
            languageTitle={allData.telfieldEngineer.languageTitle}
            languageList={allData.telfieldEngineer.languageList}
            occupationsTitle={allData.telfieldEngineer.occupationsTitle}
            occupationsList={allData.telfieldEngineer.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.telfieldEngineer.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.telfieldEngineer.anzscoDescription}</p>


<Anz6  tasksTitle={allData.telfieldEngineer.tasksTitle}
tasks={allData.telfieldEngineer.tasks}/>

          </> }


          {anzsco==="anzsco-313213-telecommunications-technician" && <>
          <Anz1 title={allData.telTechnician.title} description={allData.telTechnician.description} image={allData.telTechnician.image}/>
            <Anz2 unitGroupTitle1={allData.telTechnician.unitGroupTitle1} 
            unitGroupTitle2={allData.telTechnician.unitGroupTitle2} 
            unitGroupTitle2Description={allData.telTechnician.unitGroupTitle2Description}
            skillLevelTitle={allData.telTechnician.skillLevelTitle} skillLevelDescription={allData.telTechnician.skillLevelDescription}

            specializationsTitle={allData.telTechnician.specializationsTitle} specializationsList={allData.telTechnician.specializationsList}
            skillAssessmentTitle={allData.telTechnician.skillAssessmentTitle}
            skillAssessmentDescription={allData.telTechnician.skillAssessmentDescription} visaProvisionTitle={allData.telTechnician.visaProvisionTitle}
            visaProvisionDescription={allData.telTechnician.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.telTechnician.occupationListTitle} occupationList={allData.telTechnician.occupationList} 
            visaProvisionTitle2={allData.telTechnician.visaProvisionTitle2}
            visaProvisionDescription2={allData.telTechnician.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.telTechnician.skillLevelTitle2}
            skillLevelDescription2={allData.telTechnician.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.telTechnician.exceptionsTitle}
            exceptionsList={allData.telTechnician.exceptionsList}
            languageTitle={allData.telTechnician.languageTitle}
            languageList={allData.telTechnician.languageList}
            occupationsTitle={allData.telTechnician.occupationsTitle}
            occupationsList={allData.telTechnician.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.telTechnician.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.telTechnician.anzscoDescription}</p>


<Anz6  tasksTitle={allData.telTechnician.tasksTitle}
tasks={allData.telTechnician.tasks}/>

          </> }


          {anzsco==="anzsco-313213-telecommunications-network-planner" && <>
          <Anz1 title={allData.telNetPlanner.title} description={allData.telNetPlanner.description} image={allData.telNetPlanner.image}/>
            <Anz2 unitGroupTitle1={allData.telNetPlanner.unitGroupTitle1} 
            unitGroupTitle2={allData.telNetPlanner.unitGroupTitle2} 
            unitGroupTitle2Description={allData.telNetPlanner.unitGroupTitle2Description}
            skillLevelTitle={allData.telNetPlanner.skillLevelTitle} skillLevelDescription={allData.telNetPlanner.skillLevelDescription}

            specializationsTitle={allData.telNetPlanner.specializationsTitle} specializationsList={allData.telNetPlanner.specializationsList}
            skillAssessmentTitle={allData.telNetPlanner.skillAssessmentTitle}
            skillAssessmentDescription={allData.telNetPlanner.skillAssessmentDescription} visaProvisionTitle={allData.telNetPlanner.visaProvisionTitle}
            visaProvisionDescription={allData.telNetPlanner.visaProvisionDescription}/>
            <Anz3 occupationListTitle={allData.telNetPlanner.occupationListTitle} occupationList={allData.telNetPlanner.occupationList} 
            visaProvisionTitle2={allData.telNetPlanner.visaProvisionTitle2}
            visaProvisionDescription2={allData.telNetPlanner.visaProvisionDescription2}/>
            <Anz4  skillLevelTitle2={allData.telNetPlanner.skillLevelTitle2}
            skillLevelDescription2={allData.telNetPlanner.skillLevelDescription2}/>

            <Anz5 exceptionsTitle={allData.telNetPlanner.exceptionsTitle}
            exceptionsList={allData.telNetPlanner.exceptionsList}
            languageTitle={allData.telNetPlanner.languageTitle}
            languageList={allData.telNetPlanner.languageList}
            occupationsTitle={allData.telNetPlanner.occupationsTitle}
            occupationsList={allData.telNetPlanner.occupationsList}/>





<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4 pb-3'>{allData.telNetPlanner.anzscoTitle}</h3>
<p style={{color:"#666"}}> {allData.telNetPlanner.anzscoDescription}</p>


<Anz6  tasksTitle={allData.telNetPlanner.tasksTitle}
tasks={allData.telNetPlanner.tasks}/>

          </> }
        </Container>
    </div>
  )
}

export default Specificanzsco