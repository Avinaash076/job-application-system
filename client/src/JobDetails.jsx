import './JobDetails.css'

function JobDetails() {
    return (
        <div className="job-page">
            <div className="job-container">

                <header className="job-header">
                    <h1>Web Developer</h1>
                    <p className="job-location">Bengaluru, India</p>
                    <p className="job-type">Full-time · Engineering</p>
                </header>

                <div className="job-content">

                    <section>
                        <h2>About the role</h2>

                        <p>
                            We are looking for a Web Developer to join our engineering team
                            in Bengaluru. You will work on building and improving web
                            applications used by our customers and internal teams.
                        </p>

                        <p>
                            This role is a good fit for someone who enjoys solving problems,
                            writing clean code, and working closely with other developers
                            and product teams.
                        </p>
                    </section>

                    <section>
                        <h2>What you'll do</h2>

                        <ul>
                            <li>Build and maintain responsive web applications.</li>
                            <li>Write clean, reusable, and maintainable code.</li>
                            <li>Work with frontend and backend technologies.</li>
                            <li>Debug issues and improve application performance.</li>
                            <li>Collaborate with developers, designers, and product teams.</li>
                            <li>Participate in code reviews and technical discussions.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>What we're looking for</h2>

                        <ul>
                            <li>Good understanding of HTML, CSS, and JavaScript.</li>
                            <li>Experience with React or another modern frontend framework.</li>
                            <li>Basic understanding of REST APIs.</li>
                            <li>Familiarity with Git and version control.</li>
                            <li>Good problem-solving and communication skills.</li>
                            <li>Willingness to learn and work with new technologies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Nice to have</h2>

                        <ul>
                            <li>Experience with Node.js, PHP, or similar backend technologies.</li>
                            <li>Knowledge of SQL databases.</li>
                            <li>Experience deploying applications to the cloud.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>What we offer</h2>

                        <ul>
                            <li>Opportunity to work on real-world products.</li>
                            <li>Learning and development opportunities.</li>
                            <li>Collaborative engineering environment.</li>
                            <li>Flexible and supportive work culture.</li>
                        </ul>
                    </section>

                </div>

                <div className="job-footer">
                    <button
                        className="apply-button"
                        onClick={() => {
                            window.location.href = '/application-form'
                        }}
                    >
                        Continue to Application
                    </button>
                </div>

            </div>
        </div>
    )
}

export default JobDetails
