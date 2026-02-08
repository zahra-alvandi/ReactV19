import './Course.css'

function Course() {
    return(
        <div>
            <div className='container'>
                <div className='img-wrapper'>
                    <img className='img' src="/images/profile.jpg" alt="" />
                </div>
                <div className='text-wrapper'>
                    <h3 className='title'>Zahra Alvandi</h3>
                    <p className='description'>Front end developer amd mcsa</p>
                </div>
            </div>
        </div>
    )
}

export default Course