import React from 'react';
import Image from 'next/image';

import { ContentWrapper } from '../components/ContentWrapper';

function Navbar(): JSX.Element {

    return (
        <div className="flex justify-between xl:justify-center my-8 z-10">
            <Image 
                priority={true}
                src='/sushi_pets_logo.png'
                width={250}
                height={50}
            />

            <div className='flex rounded-full shadow-lg mx-4 justify-items-center items-center lg:hidden bg-white'>
                    <div className="h-8 w-8 mx-4">
                        <a href='https://discord.gg/BtknTNfm' target="_blank" rel="noopener noreferrer">
                            <Image                         
                                src='/Discord-Logo-Black.svg'
                                width={200}
                                height={200}
                            />
                        </a>                              
                    </div>

                    <div className="h-8 w-8 mx-4">
                        <a href='https://twitter.com/sushipetsNFT' target="_blank" rel="noopener noreferrer">
                            <Image                         
                                src='/Twitter-Logo-Black.svg'
                                width={200}
                                height={200}
                            />
                        </a>                               
                    </div>
            </div>

            <div className="lg:flex justify-center ml-8 bg-white rounded-full shadow-lg px-8 hidden">
                
                <button className="mx-4">
                    <p className="text-lg text-blue-300 pixel-font">
                        PLAY
                    </p>
                </button>
                
                <button className="mx-4">
                    <p className="text-lg text-blue-300 pixel-font">
                        RULES
                    </p>
                </button>

                <button className="mx-4">
                    <p className="text-lg text-blue-300 pixel-font">
                        MARKET
                    </p>
                </button>

                <button className="mx-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-8">
                    <p className="text-lg text-white pixel-font">
                        SUSHIDEX
                    </p>
                </button>
                
                <div className='flex justify-items-center items-center'>
                    <div className="h-8 w-8 mx-4">
                        <a href='https://discord.gg/BtknTNfm' target="_blank" rel="noopener noreferrer">
                            <Image                         
                                src='/Discord-Logo-Black.svg'
                                width={200}
                                height={200}
                            />
                        </a>                              
                    </div>

                    <div className="h-8 w-8 mx-4">
                        <a href='https://twitter.com/sushipetsNFT' target="_blank" rel="noopener noreferrer">
                            <Image                         
                                src='/Twitter-Logo-Black.svg'
                                width={200}
                                height={200}
                            />
                        </a>                               
                    </div>
                </div>
            </div>
        </div>
    )
}

Navbar.displayName = 'Navbar';

export default function LandingPage(): JSX.Element {
    return (
        <div>
            <div className="flex flex-col max-w-full">
                <Image
                    src="/landing-page/BG.png"
                    layout="fill"
                    priority={true}
                />
                <Image
                    src="/landing-page/BOTTOM.png"
                    layout="fill"
                    priority={true}
                />
            </div>
            <ContentWrapper>
                <Navbar />
                <div className='mt-4'>
                    <Image 
                        src='/sushi-loop.gif'
                        width={800}
                        height={200}
                        priority={true}
                    />
                </div>  

                <button className='bg-blue-500 rounded-full border-8 border-white w-64 lg:w-1/2 py-4 z-10 mt-40 sm:mt-32 md:mt-24'>
                    <a href='https://discord.gg/BtknTNfm' target="_blank" rel="noopener noreferrer">            
                        <p className="text-center text-md md:text-lg xl:text-xl font-bold text-white pixel-font">
                            JOIN US ON DISCORD 🍣 
                        </p>
                    </a>
                </button>                             
            </ContentWrapper>
        </div>
    )
}

LandingPage.displayName = 'LandingPage';