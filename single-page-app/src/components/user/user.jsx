import React from 'react';

export default function User() {
    return (
        <section id="user" className="bg-gray-100 text-center py-20 min-h-[50vh] flex flex-col justify-center items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    User Showcase
                </h2>
                <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                    This section demonstrates our user base and acts as an anchor target when scrolling.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">👤</div>
                        <h3 className="text-xl font-bold">User 1</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">👤</div>
                        <h3 className="text-xl font-bold">User 2</h3>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">👤</div>
                        <h3 className="text-xl font-bold">User 3</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
