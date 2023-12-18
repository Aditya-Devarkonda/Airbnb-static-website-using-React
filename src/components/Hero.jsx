import heroImg from "/Images/Hero-img.png"

export function Hero(){
    return(
        <section>
            <div className="Hero-flex-img">
                <img src={heroImg}
                alt="Activity Images"
                className="Hero-img"
                />
            </div>
            <h3 className="Hero-title">Online Experiences</h3>
            <p className="Hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}