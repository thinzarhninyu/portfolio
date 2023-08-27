import Interest from "./interest"

export default function AboutMeInterests() {

    const interests = [
        {
            image: 'https://storage.googleapis.com/website-zkhiphani/uploads/2021/09/1a8a119b-1cda750c780ab11003b9196fa32d0fd740e99ff3-scaled.jpeg',
            text: 'Photography',
            page: '/about-me/photography'
        },
        {
            image: 'https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w240-h480-rw',
            text: 'Music',
            page: 'https://open.spotify.com/user/f4tuhx8tibv4mqsixm4jkfiyv?si=28a72349ea4a46ed'
        },
        {
            image: 'https://yt3.googleusercontent.com/ytc/AOPolaSbaST1JBNd9phht_n7tFN-VHx0FlvKPHeSDnmu4Q=s900-c-k-c0x00ffffff-no-rj',
            text: 'Movies',
            page: ''
        },
        {
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&w=1000&q=80',
            text: 'Coding',
            page: '/projects'
        }
    ]

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Interests</h1>

            <div className='w-full mt-7 mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-5'>
                {interests.map(({ image, text, page }) => (
                    <Interest key={text} image={image} text={text} page={page} />
                ))}
            </div>
        </div>
    )
}