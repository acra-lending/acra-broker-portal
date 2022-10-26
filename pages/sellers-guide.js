// import { Fragment, useState } from "react";
// import {
// Accordion,
// AccordionHeader,
// AccordionBody,
// } from "@material-tailwind/react";
import { Accordion } from 'react-bootstrap';
import postData from '../postData.json'
function sellersGuide () {
    // const [open, setOpen] = useState(1);
    // const handleOpen = (value) => {
    //     setOpen(open === value ? 0 : value);
    // };            
    postData.Section.map(item => console.log(item))
    return (
      <>
         <Accordion>
            {postData.Section.map(item => (
                <Accordion.Item eventKey={item.id} key={item.id}>
                    <Accordion.Header>{item?.Title}</Accordion.Header>
                    <Accordion.Body>
                            <Accordion>
                                {item?.Subsection?.map((subSection, i) => (
                                <Accordion.Item eventKey={i}>
                                    <Accordion.Header>{subSection.Title}</Accordion.Header>
                                    <Accordion.Body>{subSection.content}</Accordion.Body>
                                </Accordion.Item>
                        ))}
                        </Accordion>
                        <Accordion>
                        {item?.Article?.map((article, i) => (
                            
                            <Accordion.Item eventKey={i}>
                            <Accordion.Header>{article.Title}</Accordion.Header>
                            <Accordion.Body>{article?.content?.map((articleSubSection, index) => (
                                <Accordion>
                                    <Accordion.Item eventKey={index}>
                                        <Accordion.Header>{articleSubSection.Title}</Accordion.Header>
                                        <Accordion.Body>
                                            {articleSubSection.content}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            ))}</Accordion.Body>
                            </Accordion.Item>
                       
                        ))}
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
    </Accordion>
      </>
    )
}

export default sellersGuide;