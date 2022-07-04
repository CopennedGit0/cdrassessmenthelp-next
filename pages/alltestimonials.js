import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Headings from '../Components/Headings'
import Paragraphs from '../Components/Paragraphs'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'

const Alltestimonials = () => {
    const router=useRouter();
    const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  
const schemaData = {
  "@context": "https://schema.org/", 
  "@type": "Product", 
  "name": "CDR report",
  "image": "",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "bestRating": "5",
    "worstRating": "0",
    "ratingCount": "20"
  }
}
  const dataList=[{image:`/images/alltestimonials/lucas.png`, data:`Finally got my CDR accepted. Thank you 
  CDRassessmenthellp and team for quality 
  work.`,name:`Lucas Taylor`, short:`LT`}

  ,{image:`/images/alltestimonials/sanaya.png`, data:`Got assessed as Civil Engineer by EA. 
  Thank you guys for your help and support.`,name:`Sanaya Lakmal`, short:`SL`},{image:`/images/alltestimonials/nayanika.png`, data:`Best price for service they offer. Took 
  assistance to write my CDR, and the result 
  is just perfect.`,name:`Nayanika Khatun`, short:`NK`}
  ,

  {image:`/images/alltestimonials/jannatul.png`, data:`Thank you CDRassessmenthelp for guiding 
  and mentoring me through the CDR writing 
  process.`,name:`Jannatul Akter`, short:`JA`},{image:`/images/alltestimonials/sheryanvi.png`, data:`Received quality and helpful service. Would 
  highly recommend to anyone who wants 
  their CDR report done professionally.`,name:`Sheryanvi Karunaratne`, short:`SK`}
  ,{image:`/images/alltestimonials/annanya.png`, data:`Highly recommended. They will be answering 
  all your queries and they will be in contact 
  with you until a positive outcome.`,name:`Annanya Shahi Thakuri `, short:`AT`},{image:`/images/alltestimonials/aharon.png`, data:`Received quality and helpful service. Would 
  highly recommend to anyone who wants 
  their CDR report done professionally.`,name:`Aahron Habib`, short:`AH`}
  ,{image:`/images/alltestimonials/rajnesh.png`, data:`With help of CDRassessmenthelp it seems 
  easy to write a CDR. Couldn’t get approved 
  by EA without the support and guidance of 
  Sansha Pandey.`,name:`Rajnesh Rumtel` , short:`RR`},{image:`/images/alltestimonials/rudra.png`, data:`My project was flagged due to plagiarism, it 
  was hard for me to make my project 
  plagiarism-free. At CDRassessmenthelp 
  made my project plagiarism-free and 
  ensured approval from Engineers Australia. `,name:`Rudra Singh`, short:`RS`}
  ,{image:`/images/alltestimonials/naina.png`, data:`I got banned by Engineers Australia due to 
  plagiarism content on my CDR. I didn’t want 
  to take any risk this time. Sameer Thapa 
  helped me to get my report plagiarism free 
  and supported me till my CDR got accepted.`,name:`Naina Pandey`, short:`NP`},{image:`/images/alltestimonials/mariam.png`, data:`Satisfied with the CDR. They Completed my 
  CDR on time and saved me from rejection by 
  EA as my project paper was full of plagiarism. `,name:`Mariam Osman`, short:`MO`}
  ,{image:`/images/alltestimonials/aharon.png`, data:`Gladly my migration skill assessment got 
  approved by Engineers Australia. I must 
  appreciate your professional services. It 
  helped me a lot.`,name:`Aharon Habib `, short:`AH`},{image:`/images/alltestimonials/fatima.png`, data:`Happy with the service they provide. I was 
  on deadline for my CDR, they prepared my 
  CDR before the deadline. They are good at 
  preparing CDR.`,name:`Fatima Alvi`, short:`FA`}
  ,{image:`/images/alltestimonials/lahiru.png`, data:`Finally, with help of Anya Pathak EA 
  accepted my CDR. Definitely recommend 
  CDRassessmenthelp for all CDR related 
  services.`,name:`Lahiru Rajitha `, short:`LR`},{image:`/images/alltestimonials/isla.png`, data:`Gladly my migration skill assessment got 
  approved by Engineers Australia. I must 
  appreciate your professional services. It Must appreciate the effort Janvi put in 
  helping me to write and present my CDR. I 
  got accepted by Engineers Australia.`,name:`Isla Jones`, short:`IJ`}
  ,{image:`/images/alltestimonials/aarati.png`, data:`People are friendly and helpful. They took 
  all of the responsibility for the complete 
  CDR report and the report came out so 
  much better.`,name:`Aarati Pokhrel`, short:`AP`},{image:`/images/alltestimonials/amelia.png`, data:`I got a positive response from Engineers 
  Australia and now I am working as a civil 
  engineer in Australia in a reputed company. 
  All thanks to CDRassessmenthelp. `,name:`Amelia Brown`, short:`AB`}
  ,{image:`/images/alltestimonials/bilal.png`, data:`As a working engineer, I don’t have time to 
  prepare CDR on my own. Janvi Rai is very 
  supportive and helpful. She helped me with 
  each and every aspect of CDR and made me 
  a professional CDR for approval.`,name:`Bilal Farooqi`, short:`MB`},{image:`/images/alltestimonials/madhav.png`, data:`Received quality and helpful service. People 
  are polite and helpful here. No complaints 
  about the service they provide. Thank you 
  CDRassessment help, I got my CDR 
  approved.`,name:`Madhav Bhusal `, short:`MB`}
  ,{image:`/images/alltestimonials/yusuf.png`, data:`I had been trying to get accepted by the EA 
  for such a long time, I almost lost hope. I am 
  so glad I came across CDR assessment help. 
  Lovely experience, they made my dream 
  come true.`,name:`Yusuf Baqri`, short:`YB`}]
  return (
    <div>
         <Head>
      <title>Testimonials | CDR Assessment Help</title>
        <meta name="description" content="Testimonials | CDR Assessment Help"/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <Script type="application/ld+json">
      {JSON.stringify(schemaData)}
</Script>
        <Container>

        <Headings title="Testimonials"/>
        <Paragraphs data="Hundreds of our clients got positive skill assessments with the professional help of our experts. Now, it’s your turn to get a skilled migration visa.
"/>

<Row className='pt-5'>
  {dataList.map((d,index)=>

<Col md={4}>
<div>
  <div style={{height:"322px",width:"380px", background:"#A40B10",}} className="d-flex justify-content-center align-items-center">
     <img src={d.image} alt="testimonials" className='img-fluid'/>
  </div>
  <div style={{height:"144px",width:"380px",borderRadius:"10px", boxShadow:"3px 3px 20px rgba(0,0,0,0.1)",fontWeight:400,color:"#373737",fontSize:"18px"}} className="p-4">
    {d.data}
  </div>

    <Row className='p-5 d-flex flex-col justify-content-center'>
      <Col>
    <div style={{ height:"80px",width:"80px",borderRadius:"100px",background:"#970012" }}>
       <p style={{color:"#fff",fontWeight:700,fontSize:"28px",alignContent:"center"}} className="d-flex justify-content-center pt-3" >{d.short}</p>
    </div>
    </Col>
    <Col>
    <div>
    <p style={{color:"#970012",fontWeight:500,fontSize:"24px",alignContent:"",float:"left",marginLeft:"-70px"}} className="pt-4" >{d.name}</p>
  </div>
  </Col>
   </Row>
</div>
</Col>

  )}

</Row>



        </Container>

    </div>
  )
}

export default Alltestimonials 