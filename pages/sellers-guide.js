import { useState, useEffect } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import { Accordion } from 'react-bootstrap';
import postData  from '../postData.json';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer'

function sellersGuide ({menuItems}) {
    const [selected, setSelected] = useState();
    const [isLogged, setIsLogged] = useState();

    const router = useRouter();

    const fetchData = () => {
        let token = localStorage.getItem('jwt');

        if(token) {
            setIsLogged(token);
        } else {
            router.push('/')
        }
    }

    useEffect(() => {
        
        fetchData();

    }, [isLogged]);
    
    const handleSelect = (e) => {
        setSelected(e.target.value);
    }
    
    const handleReset = (e) => {
        setSelected('');
    }

    return (
        <div className='relative w-full'>
            <NavBar />
            <div className='md:flex relative'>
                <SideBar props={menuItems} />
                <div className='md:w-1/3 md:mt-[4rem] p-7 pl-4 pr-4'>
                    <select value={selected} onChange={handleSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Filter by Category</option>
                    {postData.Section.map((category, i) => (
                        <option key={i} value={category.Title}>{category.Title}</option>
                    ))}
                    </select>
                    <button onClick={handleReset} type="button" className="mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Reset
                    </button>

                </div>
                <div className='md:w-2/3 md:mt-[3.9rem] pl-4 pr-4 pb-12 pt-3'>
                <Accordion>
                    {postData.Section?.map((Sections, index) => (
                            <Accordion.Item 
                                eventKey={index} 
                                key={index} 
                                className={selected && selected === Sections.Title || selected === 'Filter by Category' ? '' : !selected ? '' : 'hidden'}
                            >
                            <Accordion.Header>
                                {Sections.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                            <div>
                                {Sections?.content?.map((content, i) => (
                                        <div index={i} dangerouslySetInnerHTML={{__html: content.content}}/>
                            ))}
                            </div>
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
            <Footer />
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