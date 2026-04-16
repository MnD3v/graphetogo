import React from 'react';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-500">
            <div className="relative flex flex-col items-center">
                {/* Animated Rings */}
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-[#5DA603] rounded-full border-t-transparent animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-[#01391C] rounded-full border-b-transparent animate-[spin_1.5s_linear_infinite_reverse]"></div>
                </div>

                {/* Branding */}
                <div className="mt-8 flex flex-col items-center animate-pulse">
                    <span className="text-[10px] font-body text-gray-400 uppercase tracking-[0.3em] font-medium">
                        Chargement en cours
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
