import React from 'react'
import { Container } from 'react-bootstrap'
import {useRouter} from 'next/router'
import  Head  from 'next/head';

const RefundPolicy = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
<Head>
        <title>Refund Policy | CDR Assessment Help</title>
        <meta name="description" content="Refund Policy | CDR Assessment Help" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container>
      <h4 style={{fontWeight:"600",textAlign:""}} className="pt-5">Privacy policy @ CDRassessmenthelp</h4>
      <p style={{color:"#666"}}>At cdrassessmenthelp.com, we do not accept a refund or return policy after both parties, i.e. (client and Cdrassessmenthelp) confirm the work and you promise to pay for 
our services. However, if your service is not delivered within an appropriate timeframe, your payment will be refunded.</p>

<h4 style={{fontWeight:"600",textAlign:""}} className="pt-5">Cancellation Policy</h4>
      <p style={{color:"#666"}} className="pb-5">Clients can request the cancellation Only while the order is in process. It is impossible to cancel an order once you have signed in to the system and 
registered an order.
Cdrassessmenthelp reserves the right to decide on refund and cancellation policies.
</p>
      </Container>
    </div>
  )
}

export default RefundPolicy