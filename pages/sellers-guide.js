import { Accordion } from 'react-bootstrap';
import React from 'react';
import  postData  from '../postData.json';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

function sellersGuide ({menuItems}) {
    return (
        <div className='relative w-full'>
            <NavBar />
            <div className='md:flex relative'>
                <SideBar props={menuItems} />
                <div className='w-full md:mt-[4rem]'>
                <Accordion>
                    {postData.Section?.map((Sections, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>{Sections.Title}</Accordion.Header>
                            <Accordion.Body>
                                <Accordion>
                            {Sections?.Subsection?.map((subSection, i) => (
                                <Accordion.Item eventKey={i} key={i}>
                                        <Accordion.Header>{subSection.Title}</Accordion.Header>
                                        <Accordion.Body><div dangerouslySetInnerHTML={{__html: subSection.content}}/></Accordion.Body>
                                    </Accordion.Item>
                            ))}
                            </Accordion>
                            <Accordion>
                            {Sections?.Article?.map((article, key) => (
                                <Accordion.Item eventKey={key} key={key}>
                                        <Accordion.Header>{article.Title}</Accordion.Header>
                                        <Accordion.Body>
                                            {article?.content?.map((articleContent, artKey) => (
                                                <React.Fragment key={artKey}>
                                                    <div>{articleContent.Title}</div>
                                                    <div><div dangerouslySetInnerHTML={{__html: articleContent.content}}/></div>
                                                </React.Fragment>
                                            ))}
                                            <Accordion>
                                                {article?.Subsection?.map((artSubSection, artSubKey) => (
                                                    <Accordion.Item eventKey={artSubKey} key={artSubKey}>
                                                        <Accordion.Header>{artSubSection.Title}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <div><div dangerouslySetInnerHTML={{__html: artSubSection.content}}/></div>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                ))}
                                            </Accordion>
                                        </Accordion.Body>
                                    </Accordion.Item>
                            ))}
                            </Accordion>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    const response = await fetch(`${process.env.BASE_URL}/broker-portal-menu-items`)
    const data = await response.json()
    return {
        props: { menuItems: data },
    };
  }

export default sellersGuide;