import React from "react";
import about from '../assets/about.png'
export default function About() {
    return (
        <div className="py-16 bg-white h-screen">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src={about}
                            alt="image"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About <span className="text-green-600">WordBox</span> Text Analysis Tool
                        </h2>
                        <p className="my-6 text-gray-600">
                            Welcome to our Text Analysis Tool! This page is designed to help you easily manipulate
                            and analyze text with just a few simple actions. Here's what you can do:
                        </p>
                        <ul className="list-disc ml-5">
                            <li>
                                <strong>Convert to Uppercase/Lowercase: </strong>
                                Change the case of your text with one click.
                            </li>
                            <li>
                                <strong>Clear Text: </strong>
                                Quickly clear the text area to start fresh.
                            </li>
                            <li>
                                <strong>Copy Text: </strong>
                                Copy your text to the clipboard with a single click.
                            </li>
                            <li>
                                <strong>Remove Extra Spaces: </strong>
                                Clean up any extra spaces between words for a neater presentation.
                            </li>
                            <li>
                                <strong>Text Summary: </strong>
                                Instantly see the number of words and characters in your text.
                            </li>
                            <li>
                                <strong>Preview: </strong>
                                View your text as you edit it in real-time.
                            </li>
                        </ul>
                        <p className="my-6 text-gray-600">
                            This project is made for practice. Enjoy exploring its features and streamline your text handling tasks!

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}