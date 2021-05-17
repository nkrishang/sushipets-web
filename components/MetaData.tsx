import React from 'react';
import Head from 'next/head';

const TITLE = 'Sushi Pets';
const DESCRIPTION = 'Sushi pets are deliciously cute NFTs, available on Ethereum and BSC.';
const URL = '';
const IMAGE = ``;

interface MetaDataProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
}

export const MetaData: React.FC<MetaDataProps> = ({
    title = TITLE,
    description = DESCRIPTION,
    url = URL,
    image = IMAGE,
}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content="Sushi Pets" />
            <meta name="description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />
            <meta property="twitter:image" content={image} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:site" content="@sushipetsNFT" />
            <meta property="twitter:card" content="summary" />

            <link
                rel="preload"
                href="/fonts/Direct_Message_Blockey.ttf"
                as="font"
                crossOrigin=""
            />
        </Head>
    );
};