import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-white min-h-[70vh] flex items-center">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            A seamless scrollable one-page experience
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Instead of separate routes, all of the content is rendered on the Home page.
                            By clicking the links in the header, the page uses native smooth scrolling to
                            navigate to this `#about` section.
                        </p>
                        <p className="mt-4 text-gray-600">
                            The application still uses Tailwind CSS for beautiful, responsive styling and 
                            clean component architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
