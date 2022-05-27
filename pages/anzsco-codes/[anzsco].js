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
            unitGroupTitle2Description:`Chemical and Materials Engineers play an essential 
            role in designing and preparing specifications for 
            chemical process systems. Engineers are also 
            responsible for constructing and operating 
            commercial-scale chemical plants and supervising 
            industrial processing and fabrication of products 
            undergoing physical and chemical change.
            Another 
            function of Chemical and Materials Engineers is to 
            explore the characteristics of metals, ceramics, 
            polymers, and other materials and evaluate and 
            develop their technical and commercial applications.
            `,

            skillLevelTitle:`Skill level for Chemical and Materials Engineer:`,
            skillLevelDescription:`Level 1 or Equivalent`,

            skillAssessmentTitle:`Skill Assessment Authority of Chemical and Materials Engineer`,
            skillAssessmentDescription:`EA (Engineers Australia) / AIM`,

            visaProvisionTitle:`Visa Provision `,
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

             
            visaProvisionTitle2:`Visa Provision for Chemical and Materials Engineer ANZSCO Unit Group-2331`,
            visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) 
            Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled 
            Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.`,




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

          visaProvisionTitle:`Visa Provision `,
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

           
          visaProvisionTitle2:`Visa Provision for Chemical and Materials Engineer ANZSCO Unit Group-2331`,
          visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) 
          Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled 
          Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.`,




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
        tasks:[`    • Materials engineers monitor equipment operation and maintenance to ensure optimal efficiency under safe operating conditions.
        `,`• Materials engineers design chemical process systems for processes such as removing and separating components, effecting chemical changes, transferring heat, transferring heat, testing and evaluating fuels. 
        `,`• Materials engineers develop control systems for controlling the storage and handling of solids, liquids, and gases.
        `,`• Materials engineers communicate with material manufacturers during the discovery and assessment of materials appropriate for specific product applications.
        `,`• Materials engineers identify and correct flaws in chemical plants researching product utilization and pollution control issues.
        `,`• Material engineers plan and carry out laboratory activities to create new materials and fabrication techniques for new materials in order to meet manufacturing cost and performance specifications
        `,`• Material engineers assess new product concepts and propose material choices.
        `,`• Material engineers make suggestions based on design standards and characteristics such as weight, strength and cost. 
    
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

        visaProvisionTitle:`Visa Provision `,
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

         
        visaProvisionTitle2:`Visa Provision for Engineering Manager ANZSCO Unit Group-1332.`,
        visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.


`,



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
      tasks:[`        • Engineering managers are responsible for the determination of strategies, policies and plans and monitoring them after they are implemented.
     `,` • To achieve construction and production requirements engineering managers provide advice on engineering methods and procedures based on drawings, specifications and interpreting plans.  
     `,` • Engineering managers establish project schedules and budgets.
     `,` • It’s the responsibility of the engineering manager to ensure the conformity with regulations, laws, specifications, plans and safety standards.
     `,` • Engineering managers observe performance, quality, cost, safety and timelines to ensure engineering standards.
     `,` • Engineering managers supervise maintenance requirements to optimize efficiency 
     `,` • overseeing maintenance requirements to optimise efficiency
     `,` • liaising with marketing, research and manufacturing managers regarding engineering aspects of new construction and product design
      `,`• may contribute to research and development projects
  
  
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

       
      visaProvisionTitle2:`Visa Provision for Engineering Manager ANZSCO Unit Group-1332.`,
      visaProvisionDescription2:`Since the occupation is listed on the MLTSSL as a high-demand occupation in Australia, any visas in the General Skilled Migration (GSM) Program can be applied. Tickets in this category include Skilled Independent Subclass 189, Skilled Work Regional Subclass 491 and Skilled Nominated Subclass 190. Furthermore, if you have a definite job offer, you may be able to apply for several employer-sponsored visas.


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
  description:`Agricultural engineers work for the development of agricultural production and processing. Agricultural engineers perform and supervise engineering work related to the use and development of agricultural land and equipment. It is possible that registration or licensing will be required.`,

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
  description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
  `,

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
  description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
  `,

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
  description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
  `,

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
  description:`Engineering professions not elsewhere classified by ANZSCO are covered in this Unit Group 2339. Unit Group 2993 includes Aeronautical Engineers Agricultural Engineers, Biomedical Engineers, Engineering Technologists, Environmental Engineers and Naval Architects / Marine Designers. It is possible that registration or licensing will be required.
  `,

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






    }
  return (
    <div>
        {anzsco === "engineering-manager-anzsco-133211" && (
       
       <Head>
     <title>Engineering Manager | Unit Group 1332 | ANZSCO 133211</title>
     <meta name='description' content='Engineering Manager | Unit Group 1332 | ANZSCO 133211'/>
     <link rel="canonical" href={canonicalUrl} />

   </Head>
     )}

     {anzsco === "chemical-engineer-anzsco-233111" && (
        <Head>
        <title>Chemical Engineer | Unit Group 2331 | ANZSCO 233111</title>
        <meta name='description' content='Chemical Engineer | Unit Group 2331 | ANZSCO 233111'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
       
     )}

     {anzsco === "materials-engineer-anzsco-233112" && (
      
       <Head>
       <title>Material Engineer | Unit Group 2331 | ANZSCO 233112 | CDRXperets</title>
       <meta name='descripion' content='Material Engineer | Unit Group 2331 | ANZSCO 233112 | CDRXperets'/>
       <link rel="canonical" href={canonicalUrl} />

     </Head>
     )}

     {anzsco === "civil-engineer-anzsco-233211" && (
       <Head>
       <title>Civil Engineer | Unit Group 2332 | ANZSCO 233211 | CDR For Engineer</title>
       <meta name='description' content='Civil Engineer | Unit Group 2332 | ANZSCO 233211 | CDR For Engineer'/>
       <link rel="canonical" href={canonicalUrl} />

     </Head>
     
     )}

     {anzsco === "geo-technical-engineer-anzsco-233212" && (
      
       <Head>
       <title>Geotechnical Engineer | Unit Group 2332 | ANZSCO 233212</title>
       <meta name='description' content='Geotechnical Engineer | Unit Group 2332 | ANZSCO 233212'/>
       <link rel="canonical" href={canonicalUrl} />

     </Head>
     )}

     {anzsco === "structural-engineer-anzsco-233214" && (

<Head>
<title>Structural Engineer | Unit Group 2332 | Anzsco 233214 | CDR For Engineer</title>
<meta name='description' content='Structural Engineer | Unit Group 2332 | Anzsco 233214 | CDR For Engineer'/>
<link rel="canonical" href={canonicalUrl} />

</Head>

     )}

     {anzsco === "transport-engineer-anzsco-233215" && (
       <Head>
       <title>Transport Engineer | Unit Group 2332 | Anzsco 233215</title>
       <meta name='description' content='Transport Engineer | Unit Group 2332 | Anzsco 233215'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
       
     )}

     {anzsco === "electrical-engineer-anzsco-233311" && (
        <Head>
        <title>Electrical Engineer | Unit Group 2333 | Anzsco 233311</title>
        <meta name='description' content='Electrical Engineer | Unit Group 2333 | Anzsco 233311'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>

     )}

     {anzsco === "electronics-engineer-anzsco-233411" && (
       <Head>
       <title>Electronics Engineer | Unit Group 2334 | Anzsco 233411</title>
       <meta name='description' content='Electronics Engineer | Unit Group 2334 | Anzsco 233411'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}

     {anzsco === "industrial-engineer-anzsco-233511" && (
        <Head>
        <title>Industrial Engineer | Unit Group 2335 | ANZSCO 233511</title>
        <meta name='description' content='Industrial Engineer | Unit Group 2335 | ANZSCO 233511'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
      
     )}

     {anzsco === "mechanical-engineer-anzsco-233512" && (
        <Head>
        <title>Mechanical Engineer | Unit Group 2335 | ANZSCO 233512</title>
        <meta name='description' content='Mechanical Engineer | Unit Group 2335 | ANZSCO 233512'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
     
     )}

     {anzsco === "production-or-plant-engineer-anzsco-233513" && (
       <Head>
       <title>Production or Plant Engineer | Unit Group 2325 | ANZSCO 233513</title>
       <meta name='description' content='Production or Plant Engineer | Unit Group 2325 | ANZSCO 233513'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}

     {anzsco === "mining-engineer-anzsco-233611" && (
       <Head>
       <title>Mining Engineer | Unit Group 2336 | ANZSCO 233611</title>
       <meta name='description' content='Mining Engineer | Unit Group 2336 | ANZSCO 233611'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
     
     )}

     {anzsco === "petroleum-engineer-anzsco-233612" && (
        <Head>
        <title>Petroleum Engineer | Unit Group 2336 | ANZSCO 233612</title>
        <meta name='description' content='Petroleum Engineer | Unit Group 2336 | ANZSCO 233612'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
      
     )}

     {anzsco === "aeronautical-engineer-anzsco-233911" && (
          <Head>
          <title>Aernautical Engineer | Unit Group 2339 | ANZSCO 233911</title>
          <meta name='description' content='Aernautical Engineer | Unit Group 2339 | ANZSCO 233911'/>
          <link rel="canonical" href={canonicalUrl} />

          </Head>

     )}

     {anzsco === "agricultural-engineer-anzsco-233912" && (
        <Head>
        <title>Agricultural Engineer | Unit Group 2339 | ANZSCO 233912</title>
        <meta name='description' content='Agricultural Engineer | Unit Group 2339 | ANZSCO 233912'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
     )}

     {anzsco === "biomedical-engineer-anzsco-233913" && (
       <Head>
       <title>Biomedical Engineer | Unit Group 2339 | ANZSCO 233913</title>
       <meta name='description' content='Biomedical Engineer | Unit Group 2339 | ANZSCO 233913'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}

     {anzsco === "engineering-technologist-anzsco-233914" && (
       <Head>
       <title>Engineering Technologist | Unit Group 2339 | ANZSCO 233914</title>
       <meta name='description' content='Engineering Technologist | Unit Group 2339 | ANZSCO 233914'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}

     {anzsco === "environmental-engineer-anzsco-233915" && (
       <Head>
       <title>Environmental Engineer | Unit Group 2339 | ANZSCO 233915</title>
       <meta name='description' content='Environmental Engineer | Unit Group 2339 | ANZSCO 233915'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}

     {anzsco === "engineering-professionals-nec-anzsco-233999" && (
      
       <Head>
       <title>Engineering Professionals | Unit Group 2339 | ANZSCO 233999</title>
       <meta name='description' content='Engineering Professionals | Unit Group 2339 | ANZSCO 233999'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
     )}
     {anzsco === "computer-networks-and-system-engineers-anzsco-263111" && (
        <Head>
        <title>Computer Ntwork and System Engineer | Unit Group 2631 | ANZSCO 263111</title>
        <meta name='description' content='Computer Ntwork and System Engineer | Unit Group 2631 | ANZSCO 263111'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
     
     )}

     {anzsco === "telecommunication-engineers-anzsco-263311" && (
        <Head>
        <title>Telecommunications Engineer | Unit Group 2633 | ANZSCO 263311</title>
        <meta name='description' content='Telecommunications Engineer | Unit Group 2633 | ANZSCO 263311'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
     )}

     {anzsco === " telecommunication-network-engineers-anzsco-263312" && (
       <Head>
       <title>Telecommunications Network Engineer | Unit Group 2633 | ANZSCO 263312</title>
       <meta name='description' content='Telecommunications Network Engineer | Unit Group 2633 | ANZSCO 263312'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
       
     )}

     {anzsco === "civil-engineering-technician-anzsco-312212" && (
       <Head>
       <title>Civil Engineering Technician | Unit Group 3122 | ANZSCO 312212</title>
       <meta name='description' content='Civil Engineering Technician | Unit Group 3122 | ANZSCO 312212'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
       
     )}

     {anzsco === "electrical-engineering-draftsperson-anzsco-312311" && (
        <Head>
        <title>Electrical Engineer Draftsperson | Unit Group 3123 | ANZSCO 312311</title>
        <meta name='description' content='Electrical Engineer Draftsperson | Unit Group 3123 | ANZSCO 312311'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
      
     )}

     {anzsco === "electrical-engineering-technician-anzsco-312312" && (
     
       <Head>
        <title>Electrical Engineering Technician | Unit Group 3123 | ANZSCO 312312</title>
        <meta name='description' content='Electrical Engineering Technician | Unit Group 3123 | ANZSCO 312312'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
     )}

     {anzsco === "civil-engineering-draftsperson-anzsco-312211" && (
       <Head>
       <title>Civil Engineering Draftsperson | Unit Group 3122 | ANZSCO 312211</title>
       <meta name='description' content='Civil Engineering Draftsperson | Unit Group 3122 | ANZSCO 312211'/>
       <link rel="canonical" href={canonicalUrl} />

       </Head>
      
     )}
     

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
           


  {anzsco==="materials-engineer" && <>
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
           

          {anzsco==="engineering-manager" && <>
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


          {anzsco==="electrical-engineer" && <>
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
           
           

          {anzsco==="electronics-engineer" && <>
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
           


          {anzsco==="mining-engineer" && <>
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
           

          {anzsco==="aeronautical-engineer" && <>
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

       

          {anzsco==="agriculture-engineer" && <>
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

          {anzsco==="naval-architect" && <>
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

          
          {anzsco==="biomedical-engineer" && <>
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
           

          {anzsco==="engineering-technologist" && <>
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

          {anzsco==="environmental-engineer" && <>
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


          {anzsco==="engineering-professionals" && <>
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

         
        </Container>
    </div>
  )
}

export default Specificanzsco