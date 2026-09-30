import './ApplicationSubmitted.css'

function ApplicationForm() {

  return (
    <main className="submitted-page">
      <section className="submitted-card">
        <div className="submitted-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="m5 12.5 4.25 4.25L19.5 6.5" />
          </svg>
        </div>
        <p className="submitted-eyebrow">Application received</p>
        <h1>Your application has been submitted</h1>
        <p className="submitted-copy">Thank you for your interest in the Web Developer role. We’ll review your application and contact you if there are next steps.</p>
        <button className="submitted-link" onClick={() => { window.location.href = '/' }}>Back to job details</button>
      </section>
    </main>
  )

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    coverLetter: '',
    resume: null,
    consent: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    setFormData({
      ...formData,
      [name]:
        type === 'checkbox'
          ? checked
          : type === 'file'
            ? files[0]
            : value
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Location is required'
    }

    if (!formData.resume) {
      newErrors.resume = 'Resume is required'
    }

    if (!formData.consent) {
      newErrors.consent = 'Please confirm the information'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Temporary storage until backend is added
    sessionStorage.setItem(
      'application',
      JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        linkedin: formData.linkedin,
        github: formData.github,
        coverLetter: formData.coverLetter
      })
    )

    window.location.href = '/application-submitted'
  }

  return (
    <div className="application-page">

      <div className="application-container">

        <div className="application-header">
          <h1>Apply for Web Developer</h1>

          <p>
            Bengaluru, India · Full-time
          </p>

          <span>
            Fields marked with * are required.
          </span>
        </div>

        <form onSubmit={handleSubmit}>

          <section className="form-section">

            <h2>Personal Information</h2>

            <div className="form-grid">

              <div className="form-group">
                <label>
                  First Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                />

                {errors.firstName && (
                  <small>{errors.firstName}</small>
                )}
              </div>

              <div className="form-group">
                <label>
                  Last Name <span>*</span>
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                />

                {errors.lastName && (
                  <small>{errors.lastName}</small>
                )}
              </div>

            </div>

            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />

              {errors.email && (
                <small>{errors.email}</small>
              )}
            </div>

            <div className="form-group">
              <label>
                Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
              />

              {errors.phone && (
                <small>{errors.phone}</small>
              )}
            </div>

            <div className="form-group">
              <label>
                Current Location <span>*</span>
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Bengaluru, Karnataka"
              />

              {errors.location && (
                <small>{errors.location}</small>
              )}
            </div>

          </section>

          <section className="form-section">

            <h2>Professional Information</h2>

            <div className="form-group">
              <label>LinkedIn Profile</label>

              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            <div className="form-group">
              <label>GitHub Profile</label>

              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/yourusername"
              />
            </div>

          </section>

          <section className="form-section">

            <h2>Resume</h2>

            <div className="form-group">

              <label>
                Resume <span>*</span>
              </label>

              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />

              <p className="help-text">
                Accepted formats: PDF, DOC, DOCX
              </p>

              {errors.resume && (
                <small>{errors.resume}</small>
              )}

            </div>

          </section>

          <section className="form-section">

            <h2>Cover Letter</h2>

            <div className="form-group">

              <label>Cover Letter</label>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us briefly why you're interested in this role..."
                rows="7"
              />

            </div>

          </section>

          <section className="confirmation-section">

            <label className="checkbox-label">

              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
              />

              <span>
                I confirm that the information provided in this
                application is accurate and complete.
              </span>

            </label>

            {errors.consent && (
              <small>{errors.consent}</small>
            )}

          </section>

          <div className="form-footer">

            <button
              type="submit"
              className="submit-button"
            >
              Submit Application
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default ApplicationForm
