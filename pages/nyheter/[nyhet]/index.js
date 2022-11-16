/* eslint-disable */
import { Divider, Image, Segment } from 'semantic-ui-react';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router'
import list from '../list';

function Nyhet() {
    const router = useRouter()
    const { nyhet } = router.query;
    const item = list.find(x => x.link === nyhet);

    const newsHtml = item ? item.content.map((subItem, subIndex) => {
        if (subItem.type === 'title') {
            return (    
                <div key={'subsection' + subIndex}>
                    <br />
                    <h2>{subItem.data}</h2>
                </div>
            )
        }
        if (subItem.type === 'image') {
            return (
                <Image key={'subsection' + subIndex} src={subItem.data} className="mt-4 mb-4"></Image>
            )
        }
        if (subItem.type === 'text') {
            return (
                <p key={'subsection' + subIndex}>{subItem.data}</p>
            )
        }
        if (subItem.type === 'link') {
            return (
                <Link key={'subsection' + subIndex} href={subItem.data}>{subItem.text}</Link>
            )
        }
    }) : <div>
        error;
    </div>;

    return (
        <>
            {item &&
                <>
                    <Head>
                        <title>{item.title}</title>
                    </Head>
                    <center>
                        <h2>
                            {item.title}
                        </h2>
                        <Divider />
                    </center>
                    {newsHtml}
                </>
            }
        </>
    );
}

export default Nyhet;
