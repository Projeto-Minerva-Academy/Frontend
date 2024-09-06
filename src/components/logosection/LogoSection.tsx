import React from 'react';

const LogoSection: React.FC = () => {
    return (
        <div className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-semibold text-sm text-gray-600 text-center">
                RECONHECIMENTO POR EQUIPES DE TODO O MUNDO!
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                        {/* LOGO 1 */}
                        <li className="flex-none">
                            <img src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="Logo 1" className="w-28" />
                        </li>

                        {/* LOGO 2 */}
                        <li className="flex-none">
                            <img src="https://marcas-logos.net/wp-content/uploads/2019/11/Microsoft-Logo-1.png" alt="Logo 2" className="w-28" />
                        </li>

                        {/* LOGO 3 */}
                        <li className="flex-none">
                            <img src="https://logodownload.org/wp-content/uploads/2022/05/linux-logo-1.png" alt="Logo 3" className="w-28" />
                        </li>

                        {/* LOGO 4 */}
                        <li className="flex-none">
                            <img src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" alt="Logo 4" className="w-28" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
