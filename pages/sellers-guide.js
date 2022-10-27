import { Accordion } from 'react-bootstrap';
import  postData  from '../postData.json';
function sellersGuide () {
    console.log(postData);
    return (
        <div>
         <Accordion>
            {postData.Section?.map((Sections, index) => (
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{Sections.Title}</Accordion.Header>
                    <Accordion.Body>
                    {Sections?.Subsection?.map((subSection, index) => (
                        <Accordion key={index}>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{subSection.Title}</Accordion.Header>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
            </Accordion>
        </div>
    )
}

export default sellersGuide;