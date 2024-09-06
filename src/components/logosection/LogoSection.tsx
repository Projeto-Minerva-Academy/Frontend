import React from 'react';

const LogoSection: React.FC = () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Who's using Float UI?
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum efficitur tortor in laoreet.
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
                        {/* LOGO 1 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="" fill="black" />
                                <path d="" fill="#0061FF" />
                            </svg>
                        </li>
                        {/* LOGO 2 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 129 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="" fill="black" />
                            </svg>
                        </li>
                        {/* LOGO 3 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 135 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="" fill="#24292E" />
                                <path d="" fill="#24292E" />
                            </svg>
                        </li>
                        {/* LOGO 4 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 164 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="" fill="#706D6E" />
                                <path d="" fill="#F1511B" />
                                <path d="" fill="#80CC28" />
                                <path d="" fill="#00ADEF" />
                                <path d="" fill="#FBBC09" />
                            </svg>
                        </li>
                        {/* LOGO 5 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 148 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.239289 26.2057L15.7943 41.7607C7.85086 40.418 1.582 34.1491 0.239289 26.2057Z" fill="#5E6AD2" />
                                <path d="" />
                            </svg>
                        </li>
                        {/* LOGO 6 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="" />
                            </svg>
                        </li>
                        {/* LOGO 7 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 98 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="" />
                            </svg>
                        </li>
                        {/* LOGO 8 */}
                        <li>
                            <svg className="w-28 my-auto" viewBox="0 0 121 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="" />
                                <path d="" />
                                <path d="" />
                                <path d="" />
                                <path d="" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
