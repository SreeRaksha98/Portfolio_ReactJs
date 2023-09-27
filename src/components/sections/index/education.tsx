// Core packages
// Section structure
import Section from '../../structure/section';
// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Career scss
import Container from '../../structure/container';
import about from '../../../../assets/styles/scss/sections/index/about.module.scss';


export default function Education() {
    return (
        <Section classProp={about.section}>
            <Container spacing={['verticalXLrg']}>
            <SectionTitle
					title="Education"
					preTitle="timeline"
					subTitle=""
				/>
                <div className="bg-white min-h-screen flex items-center justify-center rounded-md">
                    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-8">
                        {/* Start */}
                        <div className="flex flex-row-reverse md:contents">
                            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2013</h3>
                                <p className="text-gray-600">{"Schooling at Marimallappa's High School"}
                                    <div>{"Marks: 78.08%"}</div>
                                </p>
                            </div>

                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>
                            {/* End	 */}
                            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2013-2015</h3>
                                <p className="text-gray-600">{"St.Philomena's PU College"}
                                    <div>{"Mark: 76.16%"}</div>
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse md:contents">
                            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2015-2019</h3>
                                <p className="text-gray-600">GSSS Institute of Engineering and Technology for Women’s
                                    <div>{"Marks: 7.5CGPA"}</div>
                                </p>
                            </div>

                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>
                        </div>

                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>

                            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2020-2021</h3>
                                <p className="text-gray-600">Graduate Intern at Dell EMC.</p>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse md:contents">
                            <div className="w-full col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto border border-gray-300">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2019-2021</h3>
                                <p className="text-gray-600">JSS Science and Technology University.</p>
                            </div>

                            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>
                        </div>
                        <div className="flex md:contents">
                            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-0.5 bg-gray-200 pointer-events-none"></div>
                                </div>

                                <div className="w-6 h-6 absolute top-1/2 -mt-3 border-2 border-blue-500 rounded-full bg-gray-100 shadow"></div>
                            </div>

                            <div className="w-full col-start-6 col-end-10 my-4 mr-auto p-4 border border-gray-300 rounded-xl">
                                <h3 className="font-semibold text-xl mb-1 text-gray-900">2021-current</h3>
                                <p className="text-gray-600">
                                    <strong>System Engineer</strong><br />
                                    Oracle Cerner - Full-time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ Container>
        </Section>
    )
}

