import React from 'react'
import { Col, Container, Row ,Button, Form } from 'react-bootstrap'
import Headings from '../../Components/Headings'
import Paragraphs from '../../Components/Paragraphs'
import {useRouter} from 'next/router'
import Head from 'next/head'
const ANZSCOcode = () => {
  const router = useRouter();
  const canonicalUrl = (`https://cdrassesmenthelp.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const [search, setSearch] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
      searchAnzo(search);
    
  };
  const searchAnzo = (keyword) => {
    let tempAnzo = anzos.filter((s) => s.title.includes(keyword));
    setAnzoList(tempAnzo);
  };
  return (
    <div>
       <Head>
        <title>Anzsco Code | CDR Assessment Help</title>
        <meta name='description' content="Articles on and about cdr with cdrforengineer | CDR For Engineer"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Container>
      <Row>
<Col md={6} className='px-4  mt-5'>
       <Headings title="Get CDR writing help for 
ensured positive skill
assessment from EA" align="left"  />   
<Paragraphs  data='We provide CDR writing help for engineers pursuing 
a career in Australia through skill assessment. We 
guarantee positive skills assessment from EA with 
a variety of services we provide regarding CDR 
writing.' align="left"/>
<Button style={{backgroundColor:"#970012",fontWeight:"600",marginRight:"10px",border:"none"}}>
CONTACT US
</Button>
<Button style={{backgroundColor:"#fff",color:"#970012",fontWeight:"600",border:"1px solid #970012"}}>
GET INSTANT HELP
</Button>
<p className='text-center text-md-start' style={{color:"#434343",fontWeight:"400"}}>Trusted by thousand of Engineers from around the world</p>
</Col>

<Col md={6} className='mt-5'>
    <img src="/images/anzsco/anzsco.png" alt="CPD writing" className='img-fluid'/>
</Col>

</Row>


<h3 style={{color:"#203546",fontWeight:"700"}} className='pt-4 text-start text-md-center'>For Skilled Migration in Australia, 
choose the ANZSCO code that 
best matches your engineering
qualification</h3>

<div className='py-2 px-0'>
<p style={{color:"#666"}}  className='pe-md-5'>According to Engineers Australia, the ANZSCO 
code has five hierarchical divisions: major group,
sub-major group, minor group, unit group, and 
occupation. The categories are referred to as '
occupations' at the most exact level ofclassification. 
These are merged to form 'unit groupings,' which 
are classified further into 'minor groups.' At the 
highest level, minor groups are aggregated to 
form 'sub-major groups,' which are subsequently 
aggregated to form 'major groups.'
ANZSCO is a 
skill-based categorization system that is used to 
categorize all vocations and employment in 
Australia and New Zealand. For statistical and 
other sorts of analysis in Australia, the ANZSCO 
code classifies engineer's jobs based on their 
characteristics and organizes them into gradually 
bigger categories based on their similarities.

 
</p>
</div>

<h3 style={{color:"#203546",fontWeight:"700",textAlign:"center"}} className='pt-4'>ANZSCO Occupation List</h3>
<p style={{color:"#666",textAlign:"center"}}>Search form the list of ANZSCO skilled occupation 
names for popular Engineering professions in Australia..</p>
<Row>
<div>
      <Form onSubmit={submitHandler} className="my-4">
        <div className="d-flex justify-content-center">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="searchInputField"
              style={{ width: "300px", borderRadius: "6px" }}
              type="text"
              placeholder= "Search ANZSCO you want !"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              padding: "0px 7px",
              height: "fit-content",
              marginTop: "5px",
              marginLeft: "-75px",
              borderRadius: "6px",
              background: "#6B34A1",
            }}
          >
            {" "}
            search
          </Button>
        </div>
      </Form>
    </div>
</Row>

<Row  style={{display:'flex',justifyContent:'space-around',flexWrap:"wrap"}}>
   
   
     <img src="images/anzsco/1.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/2.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/3.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/4.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/4.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/6.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/7.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/8.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/9.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/10.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/11.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/12.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/13.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/14.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/15.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/16.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/17.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/18.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/19.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/20.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/21.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/22.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/23.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/24.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/25.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/26.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
     <img src="images/anzsco/27.png" alt="anzsco codes" className='img-fluid mb-4' style={{height:"250px",width:"350px"}}/> 
   

</Row>
<h3 style={{color:"#203546",fontWeight:"700",textAlign:""}} className='pt-4'>Select the ANZSCO code that best fits your engineering qualification for 
Skilled Migration in Australia.</h3>
<p style={{color:"#666",textAlign:""}}>ANZSCO code&apos;s structure consists of five hierarchical divisions: major group, sub-major group, minor group, unit group and occupation 
as per Engineers Australia. At the most precise level of classification, the categories are referred to as &apos;occupations.&apos; These are combined 
to create &apos;unit groups,&apos; which are further subdivided into &apos;minor groups&apos;. Minor groups are aggregated to form &apos;sub-major groups,&apos; which 
are then aggregated to form &apos;major groups&apos; at the highest level.
ANZSCO is a skill-based classification used to classify all occupations and jobs in the Australian and New Zealand labour markets. ANZSCO 
code defines engineer&apos;s occupations according to their attributes and groups them on the basis of their similarity into successively broader 
categories for statistical and other types of analysis in Australia.
</p>

  


      </Container>
    </div>
  )
}

export default ANZSCOcode