import Nav from "../../components/Navbar/Nav";

function About() {
    const backgroundStyle = {
        backgroundColor: '#A3C9E3', // Lighter background color
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '60px' // Add space at the top to avoid content being hidden under the navbar
    };

    const navStyle = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '1000', // Ensure the navbar stays above other content
        backgroundColor: '#fff', // You can customize the background color here
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)' // Optional: add some shadow for better visibility
    };

    const imageContainerStyle = {
        position: 'relative', // Make this container relative to position the GIF
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '100%',
        maxHeight: '80%'
    };

    const gifStyle = {
        position: 'absolute',
        top: '30%', // Adjust this percentage to move the GIF closer or further from the top
        left: '60%',
        transform: 'translateX(-50%)', // Centers the GIF horizontally
        zIndex: '1', // Puts the GIF behind the image
        width: '20%', // Adjust the size of the GIF here
        height: 'auto' // Maintain aspect ratio of the GIF
    };

    return (
        <div style={backgroundStyle}>
            <div style={navStyle}>
                <Nav />
            </div>
            <h1>About Us</h1>
            <div style={imageContainerStyle}>
                {/* Add your GIF here */}
                <img 
                    src="/assets/bubbles.gif" 
                    alt="About Us GIF" 
                    style={gifStyle}
                />
                {/* Add your image here */}
                <img 
                    src="/assets/construction.png" 
                    alt="About Us" 
                    style={{ maxWidth: '100%', maxHeight: '80%' }} 
                />
            </div>
            <p><b>We are currently working hard to provide more details about our company. Stay tuned!</b></p>
        </div>
    );
}

export default About;
