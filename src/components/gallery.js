import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Gallery = () => {
    return (
        <div>
            <section class='overflow-hidden text-gray-700 '>
                <div class='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
                    <div class='flex flex-wrap -m-1 md:-m-2'>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock1.jpg'
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock2.jpg'
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock3.jpg'
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock4.jpg'
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock5.jpg'
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <StaticImage
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='../images/stock6.jpg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
