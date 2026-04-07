
export default function Contact() {
    return (
        <section id="contactus" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 z-10">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl mt-4">
                    Let us know if you need anything.
                </p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-orange-500 focus:border-orange-500" placeholder="Let us know how we can help you" required />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-orange-500 focus:border-orange-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-orange-700 sm:w-fit hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300">Send message</button>
                </form>
            </div>
        </section>
    );
}
